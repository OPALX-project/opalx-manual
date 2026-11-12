# BeamBeam experiment downloads, 2026-10-06

## Publication status — 2026-10-07

- User authorized commit and push. Documents commit eece0a5 and its LFS archive
  are pushed on codex/beambeam-experiment-downloads. Protected documents main
  rejects direct pushes and requires a pull request. The GitHub connector cannot
  create that PR (403, Resource not accessible by integration).
- Create the documents PR at:
  https://github.com/OPALX-project/opalx-documents/compare/main...codex/beambeam-experiment-downloads
- Manual work is based on current main 0063fde, preserving the upstream BOX
  documentation. The maintenance-log conflict retains both reviews. Full HTML
  and report renders, nine browser tests and 64-page link validation pass.
- The four manual files are prepared for commit/push on
  codex/beambeam-experiment-downloads. Merge the documents PR before the manual
  PR: the public main download is not live yet. No automatic merge is claimed.
- Use exported PATH=/opt/homebrew/bin:$PATH for all Git commands, including
  checkout hooks; the GitHub Desktop Intel LFS executable still hangs.

The entries below record earlier preparation; this publication status supersedes
their pending-authorization statements.

## Post-reboot retry — 2026-10-07

- Default /usr/local/bin/git-lfs points to the x86_64 GitHub Desktop bundled
  executable; version checks still crash/hang after reboot, including outside
  the sandbox. Stopped only the hung version-check processes from this task.
- /opt/homebrew/bin/git-lfs is native arm64 3.7.1 and works. Use
  PATH=/opt/homebrew/bin:$PATH for Git operations in this checkout and the
  documents checkout. No global PATH, Git configuration or installation changed.
- With native LFS, documents status shows only the intended manifest change,
  new examples directory and packaging script. All six existing binary assets
  are clean. Archive clean/smudge round-trip retains SHA-256
  34317cc36b2635dfacb325c6ce6fdb7da5231525da510ed07741b174b58bf9b3;
  LFS fsck and 7-asset/58-chapter validators pass. No staging/commit/upload.
- Re-render, all nine browser tests and link validation of 64 rendered pages
  pass. Publication still awaits authorization; public archive link is not
  claimed live. Local validation complete, no source-content changes needed.

- Request: remove chapter 38.9 Historical spherical electrostatic test; make
  experiments 1–4 downloadable. User explicitly chose inputs/scripts only.
- Manual base dc80f894; OPALX source 492bd6c08 plus untracked study files;
  documents base 0f35ab43. Both documentation checkouts initially clean.
- Removed the historical section; left underlying historical files untouched.
  Added one combined source archive link and extraction/run instructions in 38.8.
  Combined packaging preserves shared launchers and cross-experiment helpers.
- Restored missing opalx-documents checkout. Git LFS crashed during checkout;
  completed checkout without smudging and fetched its six existing binary assets
  from their public media URLs. Existing six-asset manifest validation passes.
- New archive: examples/2026/beam-beam/2026-10-06-beam-beam-experiments.tar.gz,
  79 files, 1,282,845 bytes; includes source hashes, license, and download README.
  Added reproducible packaging script and manifest entry; existing LFS attributes
  cover .gz. No changes to OPALX experiments or runtime source.
- Validation complete: all four extracted --prepare-only launchers pass; archive
  regenerates byte-identically, source hashes and result exclusions verified.
  Manual/document validators pass (58 chapters/7 assets); chapter HTML render,
  nine browser tests and link validation of 64 rendered pages pass. Diff checked;
  task register and maintenance log updated in REMEMBER.md. No simulations run.
- Publication pending, not authorized: public download requires publishing the
  documents asset and manual changes. Git LFS filter/version commands hang even
  outside the sandbox; task-owned hung checks stopped. Do not claim that the
  new public archive URL is live or that LFS upload has been validated.

## Earlier completed work: Manual CI repair, 2026-10-04

- Goal: temporarily disable PDF generation as requested, restoring HTML-only publication after failed job 111513849489 in run 37228778262.
- Manual base: d142b91, initially clean main. User authorized commit and push to main after verification.
- Evidence: source/document validation, HTML, eight browser checks and report renders passed in CI. PDF failed in Quarto's SVG-to-PDF filter because rsvg-convert was unavailable. Duplicate closed-orbit-finder identifier also reported.
- Changes: BUILD_PDF=false gates all five PDF setup/render/validation steps; hide the book PDF download; retain librsvg2-bin before the gated render for future re-enabling; document the pause and prerequisites. Distinct cyclotron COF heading ID fixes the warning without changing the architecture anchor.
- Verification complete: source validator, full 58-chapter HTML, six report pages, eight browser tests, strict links across 64 HTML pages and workflow gate/order checks pass. No book-PDF download links remain. No PDF build run after the pause request.
- Status: changes verified and ready for the authorized commit and push; maintenance record in REMEMBER.md. Restore PDF only on request by enabling BUILD_PDF and book.downloads together; keep librsvg2-bin before rendering.

## Front-page latest changes — 2026-10-08

- Goal: show recent commit subjects below the front-page contents overview.
- Existing attempt uses a pre-render Ruby generator and Lua insertion filter; retained.
- Cause of missing local content: stale `_site/index.html`; focused HTML render now contains ten entries.
- Added desktop/mobile browser regression comparing the displayed subjects with Git history.
- Generator tests initially encountered sandbox Quarto cache access failure; rerunning with cache access.
- No commit or push authorized. Next: finish checks and open the rebuilt page.
- Completed: 26 generator/filter/integration tests (339 assertions), ten browser checks including desktop/mobile history visibility, full 58-chapter and six-report HTML renders, and rendered-link validation. Diff reviewed and whitespace check clean. Integration fixture now includes Quarto’s required `**/*.quarto_ipynb` rule. Local result ready; publication still requires authorized commit/push.

## Merge conflict resolution — 2026-10-25

- Goal: resolve ongoing merge of edc7a93 into local main e251310.
- Three conflicts: physics field solver, user field solver, beam distributions.
- Retain October 23 review dates, incoming expanded derivation and GAUSS cutoff model, local CM correction and zero-width caveat.
- Clarify representative bin means exclude the corrected one-bin OPEN path. Local Distribution.cpp confirms incoming cutoff semantics.
- Next: validators, HTML render, diff review, and stage the three resolved paths. No push authorized.
- Completed: all three conflict paths resolved and staged; no unmerged paths or conflict markers. Source validator, full HTML and report renders, 64-page rendered validator, 26 generator tests (339 assertions), ten browser tests, and staged whitespace check pass. Resolution diff reviewed against both parents. Merge remains ready for commit; nothing committed or pushed.

## Featured news strip — 2026-11-01

- Goal: add movie news below front-page contents, above automatic changes.
- Found supplied 121 MB MP4 in manual root; preserve original, ignore it, copy canonical media to documents tutorials/2026/features with manifest SHA-256.
- Add real movie thumbnail, accessible click-to-open dialog, native video controls and download. No autoplay or ticker movement with one item.
- Post-render copies media from documents checkout to _site/media, including CI’s _external path.
- Next: verify thumbnail, render, browser playback checks, source/docs validators. No commit/push authorized; documents and manual must be published together.
- Completed: thumbnail extracted at 5 s (960×540, 126 KiB); movie duration 49.57 s. Original preserved at `_external/supplied-media/2026-10-30-mue4_analytical-trails.mp4`. Manual source and documents validators pass (56 chapters, nine assets); focused front-page HTML render and 63-page rendered validator pass. All 15 browser tests pass, including desktop/mobile movie playback, thumbnail loading, ordering, modal dismissal/pause, and overflow. Screenshots visually reviewed at 1440 and 390 px. Diff whitespace check passes. No commit/push.

## News ticker relocation — 2026-11-01

- Move News immediately after institution logos and before hero. Rotate every seven seconds: movie, exact supplied V 1.0.0 release text, repeat.
- Stable slide height; previous/next/pause controls; pause on hover, focus, movie dialog, hidden tab; reduced-motion starts paused.
- Update browser placement and add deterministic clock-based cycling/pause/navigation test. Next: render and browser checks.
- Complete: focused HTML render, 63-page rendered validator, all 16 browser tests (including timed movie → release → movie cycle and manual controls), and whitespace checks pass. Local output `_site/index.html` refreshed. No commit/push.

## News automatic rotation fix — 2026-11-01

- User reports no automatic rotation. Hover/focus and reduced-motion startup could suppress it indefinitely.
- Start rotation by default without motion effects; only explicit pause, open movie dialog or hidden browser tab stops it. Add regression exercising hover, retained navigation focus, reduced motion, pause/resume.
- Next: rebuild and run browser checks.
- Verified: front-page HTML rebuilt; all four news browser tests pass, including automatic rotation despite hover/navigation focus/reduced-motion preference, explicit pause/resume, and desktop/mobile playback. Source validator and whitespace check pass.

## Front-page refinements — 2026-11-01

- Halve institution image width/height limits and card height/padding. Release first, three-second ticker; move Latest Changes to the Manual directly below News; limit history to three commits. Update tests and README. Next: render and validate.
- Complete: local HTML refreshed; source validator, 63-page rendered validator, 17 browser tests, 26 generator tests (339 assertions), and whitespace check pass. Release is first; ticker repeats every three seconds; three manual changes sit immediately after News. No commit/push.

## Side-by-side news — 2026-11-01

- User requests both news items together; remove ticker JS/controls, use two equal desktop columns stacking on mobile. Keep movie dialog/player.
- Compact three-entry history to Date/Change only, remove introductory sentence and commit column; retain full-history link. Update README and browser/generator checks. Next: render and test.
- Complete: local HTML rebuilt; 16 browser tests, 26 generator tests (343 assertions), 63-page rendered link validation, source validator and whitespace checks pass. Desktop/mobile screenshots reviewed. No commit/push.

## Corrected two-column intent — 2026-11-01

- Restore News as a release-first three-second ticker in the LEFT column; put compact three-entry Latest Changes to the Manual in the RIGHT column. Stack sections below 700 px.
- Restore controls and automatic rotation, keep movie modal and pause while open. Update browser placement/playback/cycling checks. Next: render and verify.
- Complete: source validation and local front-page render pass; all 17 browser tests pass, including desktop/mobile section layout, movie playback, three-second automatic rotation, pause/resume and three-row Date/Change table. Rendered validator checks 63 pages; whitespace clean. Screenshot reviewed. No commit/push.

## Stable news/player size — 2026-11-01

- Preserve hidden slide grid layout despite framework hidden display overrides, reserving the taller movie dimensions for both ticker items. Fix video aspect ratio before metadata loads to prevent player resizing. Add desktop/mobile rotation geometry regression. Next: render and browser validation.

## Published movie links — 2026-11-01

- User confirms movie published in opalx-documents/movies. Verified direct GitHub LFS media URL: HTTP 200, 127350971 bytes, byte-range support and matching ETag SHA-256.
- Switch player/download to documents-media-base-url metadata + /movies/filename. Remove obsolete local-copy post-render hook/script. Update README; next render and verify playback from web.
- Complete: generated HTML uses the public /movies URL for player and download. Focused HTML render, all five News browser tests including real remote playback at desktop/mobile widths, 63-page rendered validator and whitespace checks pass. Removed obsolete untracked copy script. No manual commit/push.

## Approved design refinements — 2026-11-01

- User accepts design recommendations. Preserve branding, section order, ticker timing/release first, history columns/count, movie web URLs, hidden contributor comments and 1.5× hero heading relationship.
- Compact mobile authors via native details (desktop expanded), two-column mobile logos, horizontal compact stable ticker, reduced hero padding/shadow, consistent cards/radius, full-card native links, 44px controls/focus treatment, reduced-motion hover handling. Keep real commit subjects unchanged.
- Next: render, source/browser/link checks; inspect desktop/mobile/dark screenshots, fix observed issues. No publication authorized.
- Complete: focused HTML rebuilt; source validator (56 chapters), rendered validator (63 pages), all 22 browser tests and whitespace checks pass. Reviewed 390/768/1440px light/dark screenshots. Fixed generated section-wrapper link selector and dark primary-button contrast; native destination tab behavior respected. Added responsive design tests and README layout notes. No commit/push; no known unresolved design verification failures.

## Docker version-label clarification — 2026-11-02

- User authorizes small manual clarification and direct main push. Verified OPALX PR662 merged as 07a49bb20a3bdf523073911466c99a8c53d1b648.
- Explain new vs old version labels, distinguish development/release identity from software version, add executable version/revision command. Only getting-started/index.qmd intended for commit.
- Next: source validation, focused render/diff review, commit/push main and verify remote.
- Complete: source validator, affected chapter HTML render, 63-page rendered link validator and whitespace checks pass; diff reviewed. Committed only getting-started/index.qmd as 1d4ec3d and pushed directly to main per explicit authorization. Remote main SHA verified. Local task-state update intentionally uncommitted. Pages publication runs separately in CI.

## arXiv paper news — 2026-11-03

- User requests paper announcement in News. Verified https://arxiv.org/abs/2611.00124 title and preprint availability. Add third ticker item after release/movie, keeping three-second rotation and stable panel. Add source link; do not imply journal publication.
- Preserve pre-existing field-solver, REMEMBER and HANDOFF changes. Next: focused render and news browser checks. No new commit/push authorization.
- Complete: local front-page HTML rebuilt; source validation, 63-page rendered validator, all five News browser tests (including full three-item cycle and paper URL), and whitespace checks pass. README now lists all three items. No commit/push; unrelated field-solver work preserved.
