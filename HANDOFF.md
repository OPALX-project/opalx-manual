# OPALX Manual Handoff

## Current goal
Update the OPALX manual from the current OPALX source tree and sandbox notes for cyclotron modelling, RING completeness, file formats, and architecture diagrams.

## Changed files expected
- `user-guide/cyclotron.qmd`
- `user-guide/elements.qmd`
- `user-guide/input-language.qmd`
- `user-guide/beam-lines/index.qmd`
- `physics/cyclotron.qmd`
- `physics/linear-transfer-maps.qmd`
- `physics/map-3-fringe-dba.qmd`
- `reference/file-formats.qmd`
- `developer-guide/architecture.qmd`
- `assets/scripts/sidebar-page-toc.html`
- `scripts/validate_manual.rb`
- `scripts/validate_rendered_html.rb`

## Source basis
Checked `/Users/adelmann/git/opalx/src` and `/Users/adelmann/git/opalx/sandbox` for `CYCLOTRONSECTOR`, `TRIMCOIL`, `RING`, `COF`, spectral tunes, linear maps, and OrbitThreader behavior.

## Verification plan
Run the text validator, HTML render, browser smoke test, rendered HTML validator, selected PDF renders, and whitespace diff check after editing.

## Latest CI fix (2026-09-07)
- GitHub Actions job 101560375307 failed during LuaLaTeX with KOMA-Script rejecting the obsolete `\rm` font command.
- Replaced `M_{\rm cell}` and `M_{\rm slope}` with `M_{\mathrm{cell}}` and `M_{\mathrm{slope}}` in `physics/linear-transfer-maps.qmd`.
- Verified: manual source validator, old-font-command sweep, diff check, full 57-chapter HTML render, and isolated LuaLaTeX `scrreprt` compilation all pass.
- The full local PDF render still stalls before LaTeX in Quarto after chapter 19; this is separate from the CI failure, where all 57 chapters completed and LuaLaTeX reported the precise `\rm` error.
- Next step: commit and push the one-file manual fix, then rerun the workflow.
