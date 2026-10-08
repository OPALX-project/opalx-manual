-- Load generated history during rendering, not Quarto's early book discovery.
-- The pre-render hook creates this file before Pandoc filters are executed.
local marker = "latest-changes-list"
local link_prefix = "opalx-manual-history:"

local function project_directory()
  if quarto and quarto.project and quarto.project.directory then
    return quarto.project.directory
  end
  -- Also support running the filter directly with Pandoc in the tests.
  return pandoc.path.directory(pandoc.path.directory(PANDOC_SCRIPT_FILE))
end

function Pandoc(doc)
  return doc:walk({
    Div = function(el)
      if el.identifier ~= marker then return nil end

      local path = pandoc.path.join({
        project_directory(), "includes", "_latest-changes.md"
      })
      local file = io.open(path, "r")
      if not file then
        error("Latest Changes: missing " .. path ..
          "; run ruby scripts/generate_latest_changes.rb before rendering.")
      end
      local text = file:read("*a")
      file:close()

      local metadata = doc.meta["manual-repository-url"]
      local repository = metadata and pandoc.utils.stringify(metadata) or ""
      repository = repository:gsub("/+$", "")
      if not repository:match("^https?://[^%s]+$") then
        error("Latest Changes: manual-repository-url must be an HTTP(S) URL.")
      end

      -- Resolve only generator-created links, without interpreting commit
      -- subjects as Quarto shortcodes or inserting a URL into Markdown syntax.
      text = text:gsub("%{%{< meta manual%-repository%-url >%}%}", link_prefix)
      local history = pandoc.read(text, "markdown-smart"):walk({
        Link = function(link)
          if link.target:sub(1, #link_prefix) == link_prefix then
            link.target = repository .. link.target:sub(#link_prefix + 1)
            return link
          end
        end
      })
      el.content = history.blocks
      return el
    end
  })
end
