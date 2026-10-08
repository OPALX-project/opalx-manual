# frozen_string_literal: true

require "fileutils"
require "json"
require "minitest/autorun"
require "open3"
require "pathname"
require "stringio"
require "tmpdir"
require "yaml"
require_relative "../scripts/generate_latest_changes"

class LatestChangesTest < Minitest::Test
  ROOT = Pathname.new(__dir__).parent

  def setup
    @temporary = Dir.mktmpdir("manual-latest-changes-")
    @repo = Pathname.new(@temporary) / "manual"
    @repo.mkpath
    @warnings = StringIO.new
    @counter = 0
    git("init", "-q", "-b", "main")
    git("config", "user.name", "Manual test")
    git("config", "user.email", "manual-test@example.invalid")
    git("config", "commit.gpgsign", "false")
  end

  def teardown
    FileUtils.remove_entry(@temporary)
  end

  def git(*args, env: {})
    output, error, status = Open3.capture3(env, "git", "-C", @repo.to_s, *args)
    assert status.success?, "git #{args.join(' ')}: #{error}"
    output.strip
  end

  def commit(subject, body: nil)
    @counter += 1
    date = "2026-10-08T08:00:#{format('%02d', @counter)}+02:00"
    args = ["commit", "--allow-empty", "-q", "-m", subject]
    args.concat(["-m", body]) if body
    git(*args, env: { "GIT_AUTHOR_DATE" => date, "GIT_COMMITTER_DATE" => date })
    git("rev-parse", "HEAD")
  end

  def entries(**options)
    LatestChanges.commits(@repo, warnings: @warnings, **options)
  end

  def test_default_limit_newest_first_and_subject_only
    12.times { |number| commit("Update #{number}", body: "Private commit body #{number}") }
    result = entries
    assert_equal 10, result.length
    assert_equal (2...12).to_a.reverse.map { |i| "Update #{i}" }, result.map { |entry| entry[:subject] }
    assert result.all? { |entry| entry[:date] == "2026-10-08" }
    refute_includes LatestChanges.markdown(result), "Private commit body"
  end

  def test_small_repository_does_not_pad_results
    sha = commit("First manual update")
    assert_equal [{ sha: sha, date: "2026-10-08", subject: "First manual update" }], entries
  end

  def test_merge_commits_are_omitted_but_merged_work_is_visible
    commit("Initial manual")
    git("checkout", "-q", "-b", "feature")
    commit("Document new feature")
    git("checkout", "-q", "main")
    commit("Fix main documentation")
    git("merge", "--no-ff", "-m", "Merge feature", "feature")
    subjects = entries.map { |entry| entry[:subject] }
    assert_includes subjects, "Document new feature"
    assert_includes subjects, "Fix main documentation"
    refute_includes subjects, "Merge feature"
  end

  def test_log_is_scoped_to_checked_out_revision
    initial = commit("Published change")
    commit("Not in this revision")
    git("checkout", "-q", "--detach", initial)
    assert_equal ["Published change"], entries.map { |entry| entry[:subject] }
  end

  def test_message_punctuation_and_unicode_are_not_markup
    subject = 'Fix | `code` *bold* [link](x) <script> & $x$ @ref #3 {{< include secret >}} für Zürich'
    commit(subject)
    assert_equal subject, entries.first[:subject]
    rendered = LatestChanges.markdown(entries)
    output = LatestChanges.generate(@repo, warnings: @warnings)
    assert_equal rendered, output.read(encoding: "UTF-8")
    assert_includes rendered, 'Fix \| \`code\` \*bold\* \[link\]\(x\)'
    assert_includes rendered, '\<script\>'
    assert_includes rendered, '\{\{\< include secret \>\}\}'
    assert_includes rendered, 'für Zürich'
    refute_includes rendered, '{{< include secret >}}'
  end

  def test_commit_links_use_repository_metadata_and_full_hash
    sha = commit("A manual improvement")
    rendered = LatestChanges.markdown(entries)
    assert_includes rendered, "[`#{sha[0, 7]}`]({{< meta manual-repository-url >}}/commit/#{sha})"
    assert_includes rendered, "[View full commit history]({{< meta manual-repository-url >}}/commits)"
  end

  def test_empty_subject_is_a_valid_record
    git("commit", "--allow-empty", "--allow-empty-message", "-q", "-m", "")
    assert_equal "", entries.first[:subject]
    assert_includes LatestChanges.markdown(entries), "|  |"
  end

  def test_git_display_configuration_does_not_pollute_output
    sha = commit("Clean subject")
    git("notes", "add", "-m", "Not part of the subject", sha)
    git("config", "color.ui", "always")
    git("config", "log.decorate", "full")
    git("config", "log.showSignature", "true")
    assert_equal "Clean subject", entries.first[:subject]
    refute_includes LatestChanges.markdown(entries), "Not part of the subject"
  end

  def test_source_archive_replaces_stale_generated_history
    commit("Old checkout change")
    output = LatestChanges.generate(@repo, warnings: @warnings)
    FileUtils.rm_rf(@repo / ".git")
    LatestChanges.generate(@repo, warnings: @warnings)
    assert_includes output.read, LatestChanges::EMPTY_MESSAGE
    refute_includes output.read, "Old checkout change"
    assert_includes @warnings.string, "no Git checkout"
  end

  def test_empty_git_repository
    assert_empty entries
    assert_includes LatestChanges.markdown(entries), LatestChanges::EMPTY_MESSAGE
  end

  def test_source_archive_cannot_read_enclosing_repository
    commit("Parent project secret")
    nested = @repo / "archive"
    nested.mkpath
    output = LatestChanges.generate(nested, warnings: @warnings)
    assert_includes output.read, LatestChanges::EMPTY_MESSAGE
    refute_includes output.read, "Parent project secret"
  end

  def test_generator_does_not_touch_unchanged_output
    commit("Stable content")
    output = LatestChanges.generate(@repo, warnings: @warnings)
    old_time = Time.at(1_000_000)
    File.utime(old_time, old_time, output)
    LatestChanges.generate(@repo, warnings: @warnings)
    assert_equal old_time, output.mtime
    commit("New content")
    LatestChanges.generate(@repo, warnings: @warnings)
    assert_includes output.read, "New content"
    refute_equal old_time, output.mtime
  end

  def test_missing_git_executable
    LatestChanges.stub(:git, ->(*) { raise Errno::ENOENT, "git" }) do
      assert_empty entries
    end
    assert_includes @warnings.string, "Git is unavailable"
  end

  def test_shallow_checkout_warns_and_uses_available_history
    3.times { |i| commit("Change #{i}") }
    target = Pathname.new(@temporary) / "shallow"
    git("clone", "-q", "--depth=1", "file://#{@repo}", target.to_s)
    assert_equal 1, LatestChanges.commits(target, warnings: @warnings).length
    assert_includes @warnings.string, "shallow checkout"
  end

  def test_worktree_is_supported
    commit("Worktree update")
    target = Pathname.new(@temporary) / "worktree"
    git("worktree", "add", "-q", "--detach", target.to_s)
    assert_equal "Worktree update", LatestChanges.commits(target, warnings: @warnings).first[:subject]
  end

  def test_invalid_limits_are_rejected
    [0, -1, "10", nil].each do |limit|
      assert_raises(ArgumentError) { entries(limit: limit) }
    end
  end

  def available_command(name)
    ENV.fetch("PATH", "").split(File::PATH_SEPARATOR).any? do |directory|
      path = File.join(directory, name)
      File.file?(path) && File.executable?(path)
    end
  end

  def pandoc_command
    return ["quarto", "pandoc"] if available_command("quarto")
    return ["pandoc"] if available_command("pandoc")

    skip "Pandoc/Quarto is required for rendering tests"
  end

  def install_render_filter
    FileUtils.mkdir_p(@repo / "filters")
    FileUtils.cp(ROOT / "filters/latest-changes.lua", @repo / "filters/latest-changes.lua")
  end

  def filter_page(repository: "https://example.invalid/manual", marker: true,
                  cwd: @repo, to: "html", expect_success: true)
    install_render_filter
    input = "---\nmanual-repository-url: #{repository.to_json}\n---\n\n## Latest Changes\n\n"
    input += marker ? "::: {#latest-changes-list}\n:::\n" : "Ordinary chapter.\n"
    output, error, status = Open3.capture3(
      *pandoc_command, "--from=markdown", "--to=#{to}",
      "--lua-filter=#{@repo / 'filters/latest-changes.lua'}",
      stdin_data: input, chdir: cwd.to_s
    )
    assert_equal expect_success, status.success?, error
    [output.force_encoding("UTF-8"), error.force_encoding("UTF-8")]
  end

  def test_filter_renders_table_and_metadata_links
    sha = commit("Document a new element")
    LatestChanges.generate(@repo, warnings: @warnings)
    html, = filter_page(repository: "https://example.invalid/fork/manual/")
    assert_includes html, '<div id="latest-changes-list">'
    assert_includes html, "<table>"
    assert_includes html, "Document a new element"
    assert_includes html, "https://example.invalid/fork/manual/commit/#{sha}"
    assert_includes html, 'href="https://example.invalid/fork/manual/commits"'
    refute_includes html, "opalx-manual-history:"
    refute_includes html, "{{< meta"
  end

  def test_filter_preserves_subject_as_literal_text
    subject = 'Fix | `code` *bold* [link](x) <script> & $x$ @ref #3 {{< include secret >}} für Zürich'
    commit(subject)
    LatestChanges.generate(@repo, warnings: @warnings)
    json, = filter_page(to: "json")
    ast = JSON.parse(json)
    nodes = []
    visit = lambda do |value|
      case value
      when Hash
        nodes << value if value.key?("t")
        value.each_value { |child| visit.call(child) }
      when Array
        value.each { |child| visit.call(child) }
      end
    end
    visit.call(ast)
    assert_equal 1, nodes.count { |node| node["t"] == "Table" }
    # Only the two generator-created links and the commit hash are markup.
    assert_equal 2, nodes.count { |node| node["t"] == "Link" }
    assert_equal 1, nodes.count { |node| node["t"] == "Code" }
    %w[Emph Strong Math Cite].each do |type|
      assert_equal 0, nodes.count { |node| node["t"] == type }
    end
    cells = nodes.select { |node| node["t"] == "Plain" }.map do |node|
      node["c"].map { |inline| inline["t"] == "Str" ? inline["c"] : " " }.join
    end
    assert_includes cells, subject
  end

  def test_filter_reads_current_generation_not_stale_content
    commit("Original update")
    LatestChanges.generate(@repo, warnings: @warnings)
    first, = filter_page
    refute_includes first, "Subsequent update"
    commit("Subsequent update")
    LatestChanges.generate(@repo, warnings: @warnings)
    second, = filter_page
    assert_includes second, "Subsequent update"
    assert second.index("Subsequent update") < second.index("Original update")
  end

  def test_filter_does_not_require_history_for_other_chapters
    refute (@repo / LatestChanges::OUTPUT).exist?
    html, = filter_page(marker: false, repository: "")
    assert_includes html, "Ordinary chapter."
  end

  def test_filter_missing_generation_has_an_actionable_error
    _html, error = filter_page(expect_success: false)
    assert_includes error, "Latest Changes: missing"
    assert_includes error, "ruby scripts/generate_latest_changes.rb"
  end

  def test_filter_works_from_a_nested_directory
    commit("Nested render update")
    LatestChanges.generate(@repo, warnings: @warnings)
    nested = @repo / "chapter"
    nested.mkpath
    html, = filter_page(cwd: nested)
    assert_includes html, "Nested render update"
  end

  def test_filter_renders_source_archive_fallback
    FileUtils.rm_rf(@repo / ".git")
    LatestChanges.generate(@repo, warnings: @warnings)
    html, = filter_page
    assert_includes html, LatestChanges::EMPTY_MESSAGE
    assert_includes html, 'href="https://example.invalid/manual/commits"'
    refute_includes html, "<table>"
  end

  def test_filter_repository_url_is_not_reparsed_as_markdown
    sha = commit("Repository override")
    LatestChanges.generate(@repo, warnings: @warnings)
    html, = filter_page(repository: "https://example.invalid/team%25/manual(test)")
    assert_includes html, "https://example.invalid/team%25/manual(test)/commit/#{sha}"
    refute_includes html, "opalx-manual-history:"
  end

  def test_clean_quarto_book_render_and_regeneration
    skip "Quarto is required for the clean-book integration test" unless available_command("quarto")

    install_render_filter
    FileUtils.mkdir_p(@repo / "scripts")
    FileUtils.cp(ROOT / "scripts/generate_latest_changes.rb", @repo / "scripts/generate_latest_changes.rb")
    (@repo / "_quarto.yml").write(<<~YAML)
      project:
        type: book
        output-dir: _site
        pre-render:
          - ruby scripts/generate_latest_changes.rb
      filters:
        - filters/latest-changes.lua
      book:
        title: "Latest Changes regression test"
        chapters:
          - index.qmd
          - chapter.qmd
      format: html
      manual-repository-url: "https://example.invalid/base"
    YAML
    (@repo / "_quarto-opalx.yml").write(<<~YAML)
      manual-repository-url: "https://example.invalid/profile"
    YAML
    (@repo / "index.qmd").write(<<~MARKDOWN)
      ---
      title: "Manual"
      ---

      ## Find your path

      [Chapter](chapter.qmd)

      ## Latest Changes {#latest-changes .unnumbered}

      ::: {#latest-changes-list}
      :::
    MARKDOWN
    (@repo / "chapter.qmd").write("# Chapter\n\nOrdinary chapter.\n")
    (@repo / ".gitignore").write("/.quarto/\n**/*.quarto_ipynb\n/_site/\n/includes/_latest-changes.md\n")
    git("add", ".")
    sha = commit("First clean-book change")
    refute (@repo / LatestChanges::OUTPUT).exist?
    render = lambda do
      output, error, status = Open3.capture3(
        "quarto", "render", "--profile", "opalx", "--to", "html",
        chdir: @repo.to_s
      )
      assert status.success?, "#{output}\n#{error}"
      (@repo / "_site/index.html").read
    end
    first = render.call
    assert_includes first, "First clean-book change"
    assert_includes first, "https://example.invalid/profile/commit/#{sha}"
    assert_includes first, 'id="latest-changes-list"'
    refute_includes first, "{{< meta"
    commit("Second clean-book change")
    second = render.call
    assert_includes second, "Second clean-book change"
    assert second.index("Second clean-book change") < second.index("First clean-book change")
    assert_empty git("status", "--porcelain")
  end

  def test_build_configuration_and_homepage_placement
    config = YAML.safe_load((ROOT / "_quarto.yml").read, aliases: false)
    assert_equal "ruby scripts/generate_latest_changes.rb", config.dig("project", "pre-render").first
    page = (ROOT / "index.qmd").read(encoding: "UTF-8")
    overview_end = page.index("[Troubleshoot OPALX]")
    heading = page.index("## Latest Changes {#latest-changes .unnumbered}")
    inclusion = page.index("::: {#latest-changes-list}")
    refute_includes page, "{{< include includes/_latest-changes.md >}}"
    assert_includes config.fetch("filters"), "filters/latest-changes.lua"
    resources = page.index("::: {.resource-strip}")
    assert overview_end < heading && heading < inclusion && inclusion < resources
    assert_equal 1, page.scan("## Latest Changes").length
    assert_includes (ROOT / ".gitignore").read, "/#{LatestChanges::OUTPUT}"
    workflow = YAML.safe_load((ROOT / ".github/workflows/build.yml").read, aliases: false)
    steps = workflow.dig("jobs", "build", "steps")
    assert_equal 0, steps.find { |step| step["name"] == "Check out manual" }.dig("with", "fetch-depth")
    assert steps.any? { |step| step["run"] == "ruby tests/test_latest_changes.rb" }
  end
end
