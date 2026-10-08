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
