# OPALX Documentation Maintenance

`REMEMBER.md` is the durable register for recurring documentation work. Read it
at the start of every maintenance pass. Use `HANDOFF.md` for work that is
currently in progress; use this file for work that must be repeated.

## Operating rules

1. Start in `/Users/adelmann/git/opalx-manual` and read `AGENTS.md`, this file,
   and any current `HANDOFF.md`.
2. Inspect the working trees before changing them. Preserve unrelated local
   edits. Pull or switch revisions only when that is compatible with the local
   work.
3. Establish the source range from the last completed entry below. Record the
   OPALX and manual revisions used for every maintenance pass.
4. Use this authority order:
   - Current `/Users/adelmann/git/opalx/src` behavior and public interfaces.
   - Current OPALX tests and reproducible validated examples.
   - `/Users/adelmann/git/opalx/sandbox` for investigations, proposals, and
     validation evidence.
   - Historical OPAL documentation only for an explicitly marked comparison.
5. Do not put commit IDs, pull-request history, Python invocations, or internal
   validation narration in the User Guide. Document the supported interface,
   behavior, units, defaults, restrictions, and outputs.
6. Update a page's `last-reviewed` date only after checking the complete page
   against the current source. Keep incomplete material marked `planned` or
   `experimental`.
7. Keep generated output and binary documents out of this repository. Store
   binary documents in `opalx-documents` and link them through project
   metadata.
8. Finish by running the checks appropriate to the changed scope, reviewing
   the diff, updating the task register and maintenance log, and recording any
   remaining uncertainty. Never push without explicit permission.

## Language

Apply these rules to new text and during the recurring `DOC-LANGUAGE` sweep:

- Do not use "path" as a vague synonym for an implementation, algorithm, mode,
  execution flow, call sequence, branch, or workflow. Replace phrases such as
  "code path", "tracking path", and "update path" with the precise term.
  "Path" remains correct for a filesystem path and for a formally defined
  geometric or physics concept such as reference path or path length. If the
  intended meaning is uncertain, ask before changing it.
- Remove incidental statements that a calculation or test used one MPI rank.
  Mention the rank count only when MPI decomposition changes the result, more
  than one rank is unsupported or fails, or the rank count is essential to a
  documented reproducer. State that reason whenever the restriction is kept.
- Write "`RING` sequence" rather than "closed-topology `RING` sequence" or
  "closed-topology sequence". The name `RING` already conveys the topology.

## Task register

| ID | Recurring task | Trigger or cadence | Last recorded review | Next action |
|---|---|---|---|---|
| `DOC-API` | Audit and update the generated API documentation | Monthly, before a release, and after public C++ interface changes | Baseline not yet recorded | Establish the first complete API baseline |
| `DOC-USER` | Synchronize the User Guide and reference | Monthly, before a release, and after parser or runtime interface changes | Focused BOX and COLLIMATOR interface review on 2026-10-07 | Recheck BEAMBEAM restrictions and BOX at merge; complete remaining interface audit |
| `DOC-PHYS` | Update the Physics Manual | Monthly and after physics, algorithm, or numerical changes | Focused Beam-Beam section removal/download update on 2026-10-06; full chapter review 2026-10-04 | Align original CAIN deck/source emittance before attributing residuals; retain COF/source-frame convergence work |
| `DOC-SANDBOX` | Review validated sandbox results for promotion | Monthly and when a sandbox study reaches a conclusion | Experiments 1–4 source-only download bundle verified on 2026-10-06 | Merge documents bundle before manual publication; retain production birth-timing follow-up |
| `DOC-ARCH` | Synchronize architecture text and diagrams | After structural changes and during each monthly review | Incremental COF/initial-orbit review on 2026-09-10 | Recheck the remaining diagrams against current class ownership and call sequences |
| `DOC-LANGUAGE` | Enforce the manual language rules | Every documentation edit and during each monthly review | Focused cleanup on 2026-09-10 | Complete the first contextual review of vague "path" wording |
| `DOC-HEALTH` | Check links, metadata, HTML, and interactive controls; PDF when enabled | Every manual change and at least weekly | Native Git LFS archive round-trip and focused HTML/download recheck on 2026-10-07 | Use native Homebrew Git LFS for publication; re-enable PDF only when requested |

The dates above record incremental work, not a claim that the corresponding
area has received a complete audit. Replace that wording only after completing
the full procedure for the task.

## `DOC-API`: generated API documentation

Sources of truth:

- `/Users/adelmann/git/opalx/src`
- `/Users/adelmann/git/opalx/Doxyfile.in`
- Public headers, implementation files, and tests in the reviewed OPALX range
- The published Doxygen URL configured as `doxygen-url`

Known starting issue: `Doxyfile.in` currently contains machine-local absolute
paths and the stale project number `MINIorX`. Audit and correct that configuration
before treating it as a portable publication setup.

Procedure:

1. Determine the OPALX commits since the last completed API baseline and list
   changed public classes, functions, enums, configuration types, and ownership
   relationships.
2. Check that changed public declarations have accurate Doxygen comments,
   parameter descriptions, return values, units, lifetime rules, and failure
   conditions.
3. Generate the API with the current OPALX Doxygen configuration. Treat new
   missing-reference, malformed-comment, and undocumented-public-interface
   warnings as work items; do not hide them by weakening warning settings.
4. Check representative changed pages in the generated output, including class
   relationships and source links. Confirm that the published API entry point
   is reachable.
5. Update `reference/api.qmd` only when the API entry point or its role changes.
   Update `developer-guide/architecture.qmd` when public ownership or call paths
   change. Do not copy generated Doxygen HTML into this manual.

Complete when API generation succeeds, relevant warnings are resolved or
explicitly recorded, affected manual pages agree with the source, and the OPALX
revision is entered in the maintenance log.

## `DOC-USER`: User Guide and reference

Review these interfaces against their constructors, parser registration,
validation code, runtime behavior, and output writers:

- Commands and control statements
- Elements, beam lines, and placement rules
- Options, beam and distribution attributes, and field solvers
- Tracking modes and diagnostics
- Configuration and file formats, including newly produced files and columns

For every changed interface, document exact syntax, defaults, units, allowed
values, required combinations, errors, and generated outputs. Keep
`user-guide/`, `reference/`, `_quarto.yml`, and any custom sidebar manifest in
sync. Add tests to the manual validators when a catalog entry, required
attribute, anchor, or output schema must not regress.

Complete when all changed user-visible interfaces in the source range are
either documented or recorded as intentional gaps and the User Guide contains
no implementation-history narration.

## `DOC-PHYS`: Physics Manual

Review physics and numerical changes in OPALX source, unit tests, regression
tests, and validated sandbox studies. For each affected topic, check:

- Equations, coordinate and sign conventions, and units
- Model assumptions and validity range
- Numerical method, order, tolerances, and stopping criteria
- Initial and boundary conditions
- MPI decomposition behavior when it affects correctness, support, or results
- Verification against analytic results, independent codes, or convergence
  studies
- Known limitations and experimental status

Promote conclusions, not development history. A benchmark result must identify
enough inputs, settings, observables, and tolerances to be reproducible. Keep
unsettled proposals in `physics/sandbox/` and label them clearly rather than
presenting them as implemented physics.

Complete when every physics-affecting change in the reviewed source range maps
to an updated page, a verified no-documentation-impact decision, or a recorded
follow-up item.

## `DOC-SANDBOX`: sandbox review

Inspect `/Users/adelmann/git/opalx/sandbox` for new or changed plans, handoff
notes, benchmarks, and regression summaries. Classify each relevant item as:

- `proposal`: design work that is not implemented or validated;
- `validated`: supported by current source and reproducible checks;
- `obsolete`: superseded by current implementation or a newer study.

Move validated conclusions into the appropriate User Guide, Physics, Reference,
or Developer Guide page. Leave raw scripts, logs, generated data, and transient
debugging instructions in the sandbox. Record why an apparently relevant study
was not promoted.

## `DOC-ARCH`: architecture documentation

Compare `developer-guide/architecture.qmd` and its Mermaid diagrams with the
current source. Recheck class ownership, inheritance, data flow, coordinate
transforms, visitor paths, and tracker call order. Pay particular attention to
beam-line structure, element placement, `OrbitThreader`, `RING`, closed-orbit
finding, tune computation, linear maps, cyclotron elements, RF cavities, and
trim coils.

Diagrams must describe implemented structure. Put alternative designs and open
questions in the sandbox redesign notes, with a link from the architecture page
only when that context is useful.

## `DOC-HEALTH`: build and publication health

Run the same sequence used by `.github/workflows/build.yml` when the required
local dependencies are available:

```sh
ruby scripts/validate_manual.rb
DOCUMENTS_CHECKOUT=../opalx-documents ruby scripts/validate_manual.rb
quarto render --profile opalx --to html
npm ci
npm run test:browser
quarto render resources/reports --profile opalx --to html
ruby scripts/validate_rendered_html.rb
git diff --check
```

PDF publication is temporarily disabled at the user's request. Keep
`BUILD_PDF: "false"` in `.github/workflows/build.yml` and `book.downloads: []`
in `_quarto.yml` until it is requested again. The PDF setup, render and
validation steps are gated together. When re-enabling, restore `[pdf]` downloads
and keep `librsvg2-bin` installed before rendering; it supplies the missing
`rsvg-convert` executable that caused the October 4 CI failure. Then also run:

```sh
quarto render --profile opalx --to pdf --no-clean
ruby scripts/validate_rendered_pdf.rb
```

Check the resulting site for broken internal links, missing document downloads,
incorrect profile URLs, stale navigation entries, diagram failures, PDF
hierarchy errors, and browser-control regressions. If a local environment
cannot complete a CI-equivalent check, record the exact limitation and verify
the missing step in CI after an authorized push.

## Completing a maintenance task

1. Update the corresponding row in the task register with the completion date
   and a concrete next action.
2. Append a log entry using the template below.
3. Update page review dates only for pages actually reviewed.
4. Review the final diff for generated files, unrelated edits, unsupported
   claims, and accidental source or pull-request narration.
5. Commit only the intended files. Push only after explicit approval.

## Maintenance log

### 2026-09-07 - register initialized

- OPALX revision observed: `b8de53d11418fb436eb3c755eb79546a18641885`
- Manual revision observed: `891424b1840e2ea16d2163feca1fe59527d04218`
- Scope: created the recurring maintenance process; no complete API, User
  Guide, or Physics Manual baseline is claimed.
- Active task state, when present, is maintained separately in `HANDOFF.md`.

### 2026-09-07 - DOC-LANGUAGE: initial rules and focused cleanup

- OPALX range: not applicable; this pass changes documentation language only.
- Manual base: `891424b1840e2ea16d2163feca1fe59527d04218`
- Reviewed: every use of "closed-topology" and explicit one-rank or single-rank
  wording; selected vague uses of "path" in the affected sections.
- Changed: standardized `RING` sequence terminology, removed incidental MPI
  rank counts, and retained rank wording only for real restrictions, GPU
  mapping, or MPI comparison coverage.
- Verification: source validator, full 57-chapter HTML render, language search,
  and whitespace diff check passed.
- Open items: complete a contextual manual-wide review of vague "path" wording;
  ask before changing a use whose technical meaning is uncertain.
- Next trigger: every documentation edit and the next monthly review.

### 2026-09-09 - DOC-USER/DOC-PHYS/DOC-SANDBOX: cyclotron space charge

- OPALX range: `0718796dc..fd675e885`
- Manual base: `cbbd14c`
- Reviewed: `RUN.SCFIELDUPDATE`, open field-solver naming, binned
  beam-frame transformations, the cyclotron space-charge input, and the
  one-turn 72 MeV cross-code benchmark.
- Changed: documented `MIDPOINT` and `PRESTEP`, the common rotation of
  positions and momenta, a coarse one-bin cyclotron setup, and the validated
  OPAL 2022.1 versus OPALX endpoint comparison.
- Verification: source validator, full 57-chapter HTML render, and whitespace
  diff check passed. Rendered-link validation remains blocked by 62 pre-existing
  missing PDF and report targets, including `The-OPALX-Universe.pdf`.
- Open items: produce a clean timestep-convergence comparison of `MIDPOINT`
  and `PRESTEP` using the production field reconstruction.
- Next trigger: completion of that comparison or the next field-solver change.

### 2026-09-10 - DOC-USER/DOC-PHYS/DOC-ARCH: named COF and TRACK launch

- OPALX revision: `288d4327c`, including named COF handover and final-turn
  localization from `2db119cda`. This was a focused audit of the current source,
  not a complete audit of all changes since the previous maintenance entry.
- Manual base: `4548fd0`. Preserved and completed the four existing edits in
  tracking, user cyclotron, physics cyclotron, and linear transfer maps.
- Reviewed: `CofCmd`, `ClosedOrbitInitialState`, `TrackCmd`, `TrackRun`,
  `ParallelTracker`, directed return timing, the JSON writer, parser registration,
  and relevant tests and sandbox evidence.
- Changed: named single-statement COF, optional exact JSON output and its schema,
  `INITIALORBIT` compatibility and frame conventions, COF-versus-TRACK numerical
  distinctions, final-return restrictions, architecture and inventories. Removed
  obsolete `TRACK.MAP_ORDER`, added current spectral controls and `EKINSTOP`, and
  corrected the space-charge example to omit unsupported `TURNS` stopping.
  Registered `COLLIMATOR` and `CONSTANTFOCUSING` in the input catalog with detailed
  parameter guides explicitly pending. Corrected obsolete LaTeX font commands
  and made the affected parameter tables scroll within narrow viewports.
- Verification: source validator, full 57-chapter HTML render, five report-page
  renders, six existing browser tests, and focused desktop/mobile checks passed.
  All seven architecture diagrams render. Five COF/reference-return CTest suites
  and nine executable interface checks passed. Handover reference coordinates,
  momentum and time were identical on one and two MPI ranks; failure propagation
  and existing-output protection were also checked on two ranks. Diff reviewed.
- Test environment: the executable checker referenced a missing historical
  baseline. A temporary copy used `output/named-cof-verified/export/first.json`
  instead; source and sandbox files were not modified. Reproduction results are
  in `/tmp/opalx-manual-cof-validation-restored-20260910/summary.json`.
- Publication checks: the optional document-manifest audit could not run because
  `/Users/adelmann/git/opalx-documents` is absent. After rendering report pages,
  HTML link validation reported only the missing full-book PDF (57 links).
  The full PDF build again stalled at chapter 19 before LaTeX. A retry with an
  isolated Chrome profile reached the same point; its browser debugging endpoint
  did not respond. Both task-owned attempts were stopped. PDF validation remains
  incomplete; no PDF success or download availability is claimed.
- Open items: complete the remaining manual/API baseline; audit the two newly
  catalogued elements in detail; restore moved sandbox baseline references;
  retain the experimental COF stability and independent TRACK-convergence caveats.
  No GPU validation or new numerical convergence study was performed here.
- Next trigger: a COF/TRACK interface or numerical change, completion of the
  convergence studies, or the next monthly review. No commit or push performed.

### 2026-09-10 - DOC-USER/DOC-PHYS: RF ring and field output units

- OPALX: working tree at `288d4327cedc742e8bf4c32878070d32a2f5e15e`.
- Manual base: `174a60ccd9b797f6cff51c75daefaacd45344b07`.
- Reviewed: VariableRFCavity field support, physical-time midpoint sampling,
  runtime registration, analytic RING/TURNS eligibility and HDF5 field writer.
- Changed: existing user element/tracking guides, physics element chapter and
  EBDUMP option units. The ideal RF field has no fringe or transverse focusing;
  constant polynomial models use seconds and explicit phase. Static COF
  restrictions remain. HDF5 particle electric fields use V/m, magnetic fields T.
- Verification: RF unit suite and actual executable relink passed; live six-gap
  ring reference closes within 3.03 pm and device/reference disagreement is
  at most 20.9 pm in the one-particle calibration. Manual validator and three
  focused HTML renders/anchor checks passed; diff checked. Existing broader
  publication limitations recorded above remain unchanged.
- Open items: large-bunch periodic tracking and tune convergence remain under
  investigation. Uniform spatial density is not preserved by the current
  finite-emittance moment-matched launch. Sinusoidal frequency-model integral
  normalization has a separate defect; constant polynomial models are unaffected.
  Proposed BOUNDARYDT is not implemented and is not documented as available.
- Next trigger: validated large-bunch results or a change to ring numerics.
  No commit or push performed.

### 2026-09-11 - DOC-PHYS: source-moment time centring

- OPALX: working tree at `288d4327cedc742e8bf4c32878070d32a2f5e15e`.
- Manual base: `174a60ccd9b797f6cff51c75daefaacd45344b07`.
- Reviewed: the first Boris drift, mean-momentum solve alignment, binned mean
  momentum/gamma, density normalization, longitudinal mesh stretch and direct
  relativistic field composition. This was a focused accuracy qualification,
  not a complete page or subsystem audit; page review date is unchanged.
- Changed: physics overview now distinguishes midpoint positions from the
  unchanged source momenta. It states the source-moment condition on the
  second-order claim and gives the implemented E/B conversion formulas.
- Verification: seven continuum ellipsoid sensitivity tests and five independent
  composition tests pass without OPALX execution. Manual validator passes all
  57 chapters; focused physics-overview HTML render and generated text/equation
  checks pass; diff reviewed. Prior full-PDF/documents limitations remain.
- Open items: source-direction lag has a small first-order coefficient in the
  low-beta ring, but changing gamma, PIC discretization, source evolution and
  accumulated tune error need tracking convergence. The proposed independent
  particle-boundary mode remains unimplemented and awaits explicit API approval;
  no new option is documented as available. No production numerics changed.
- Next trigger: implementation approval and numerical validation, or the next
  source-frame/space-charge change. No commit or push performed.

Use this template for subsequent entries:

```markdown
### YYYY-MM-DD - TASK-ID: short result

- OPALX range: `<previous-revision>..<reviewed-revision>`
- Manual base: `<revision>`
- Reviewed: pages, interfaces, or subsystems
- Changed: files and user-visible conclusions
- Verification: checks and results
- Open items: unresolved questions or `none`
- Next trigger: date, release, or source event
```


### 2026-09-16 - DOC-USER/DOC-PHYS: bare rings and passive observations

- OPALX base: `288d4327cedc742e8bf4c32878070d32a2f5e15e`, including current
  uncommitted tracking and diagnostic changes. Manual base:
  `174a60ccd9b797f6cff51c75daefaacd45344b07`.
- Scope: focused sections in `user-guide/tracking.qmd` and
  `physics/overview/index.qmd`, reviewed against TrackRun, ParallelTracker,
  BorisStepControl, PassiveProbe, PassiveRingProbe and their unit tests.
- Changed: boundary retries require NONE; ordinary collective PIC stepping is
  independent of diagnostic selection. Documented passive directed-plane
  interpolation, units, frame conventions, missing IDs, crossing-count meaning,
  equal rounded timestamps and accuracy limits. Bare analytic-ring callbacks
  now use prepared occurrence order to avoid allocation-dependent frame roundoff;
  charged and cyclotron callback ordering is preserved. Removed the overly broad spin
  restriction from TURNS documentation; the boundary controller still excludes
  spin. Preserved unrelated local edits and complete-page review dates.
- Verification: source validator passes all 57 chapters; focused tracking and
  physics overview HTML renders pass; generated anchors and mathematics checked.
  Source tests cover the internal diagnostic; no new public input syntax added.
- Numerical study evidence remains in OPALX sandbox/Regression-Tests/tune-shift-ring
  (BARE_RING_MILESTONE.md and CYCLOTRON_GUARD.md); this documentation does not
  promote an uncompleted space-charge tune study or claim GPU hardware validation.
- Open items: broader page audits and existing full-PDF/publication checks remain
  outside this focused pass. Extend diagnostic eligibility only with appropriate
  emission/restart/collective-field validation.
- Next trigger: completion of production space-charge convergence or changes to
  ring diagnostic/integration eligibility.

### 2026-10-04 - DOC-USER/DOC-PHYS/DOC-SANDBOX: Beam-Beam element and chapter 38

- Requested source checkout: `/Users/adelmann/git/opalx-beambeam`, base
  `98e3426d9251c8c9ba6cb6172f3381978c651963`, with existing uncommitted CUDA
  field-clear, regression, and sandbox reorganization changes preserved.
  Manual base: `f4ccaf4157205289249c6e865761a57dd37b61a5` (initially clean).
- Reviewed: OpalBeamBeam, BeamBeamInteraction/definitions, interaction manager,
  ParallelTracker scope guard, CartesianPIC3D/RelativisticFieldComposer,
  current benchmark inputs, sandbox note, and retained comparison JSON files.
- Changed: added BEAMBEAM parameter/reference entries and navigation; replaced
  chapter 38 with the current mirrored-primary/quasi-static model, passive timed
  witnesses, units/equations, fixed longitudinal window and dynamic transverse
  mesh policy, manufactured verification, CAIN results and CPU/A100 comparison.
  Preserved the spherical electrostatic reproducer as explicitly historical.
- Evidence: separated fine historical 4096x256x128 results, October standard
  256x256x128 reproduction, and matched 64x64x128 CPU/A100 results. Sub-percent
  analytic-model agreement is not claimed as sub-percent CAIN agreement;
  weak-component discrepancies and unknown original-deck alignment are explicit.
- Verification: source/asset validator passes all 58 chapters; full HTML render
  and six report-page renders pass. Eight browser tests pass, including new
  BEAMBEAM navigation and desktop/mobile figure/equation checks. Chapter 38
  numbering and rendered equations inspected; chapter-local scrolling fixes
  narrow-screen overflow. Diff and whitespace checks pass. The rendered-link
  checker reports only 58 pre-existing download links to the unbuilt book PDF,
  with zero other errors. No PDF build or new physics simulations in this pass.
- Open items: original CAIN input/emittance alignment, production exact-birth
  migration, full fine-grid rerun after merge, and existing PDF/publication
  checks. Frozen-source approximation intentionally remains. Existing complete-page
  review dates on multi-element User Guide/reference pages are unchanged.
- Next trigger: merge/release source changes or new converged CAIN evidence.
  Documentation only; no commit or push authorized.

### 2026-10-04 - DOC-HEALTH: pause PDF publication

- Manual base: `d142b91`; OPALX source not changed.
- Investigated GitHub Actions run `37228778262`, job `111513849489`.
  Source/document checks, HTML, eight browser tests and report renders passed.
  Quarto failed in SVG-to-PDF conversion because `rsvg-convert` was unavailable;
  this differs from the older local chapter-19 browser-rendering stall.
- User decision: temporarily disable PDF generation. Set `BUILD_PDF="false"`,
  gate all PDF setup/render/validation steps, hide the book PDF download, and
  retain strict HTML link validation and publication. External document links
  remain unchanged. The paused PDF setup now installs `librsvg2-bin` before
  rendering, ready for a future re-enabling.
- Also assigned a distinct cyclotron COF heading ID to remove the duplicate
  identifier warning while preserving the architecture anchor and its links.
- Verification: workflow gate/order checks, source validation, full 58-chapter
  HTML render, six report-page renders, all eight browser tests, strict link
  validation across 64 rendered pages, and whitespace checks passed. No book-PDF
  download links remain. No PDF build was run after the pause instruction.
  Local Quarto is 1.9.37; CI uses 1.9.38. User authorized commit and push to main
  after verification.

### 2026-10-06 - DOC-PHYS/DOC-SANDBOX: downloadable BeamBeam experiments

- Manual base: `dc80f894cc203cf0ee4938baa2df75fa39317545`; documents base:
  `0f35ab43b894fc04d228e63bc383e36a0dbc3d2a`. OPALX snapshot: `492bd6c08`,
  including local study files fingerprinted individually in the archive.
- Removed section 38.9 Historical spherical electrostatic test as requested;
  did not delete the historical reproducer files or alter current model claims.
  Added download/extraction instructions in section 38.8. Page review date is
  unchanged because this was a focused edit, not a new physics audit.
- User chose runnable inputs/scripts only. The combined 1,282,845-byte archive
  contains all four experiments and shared dependencies, license and per-file
  hashes (79 files); excludes results, plots, caches and reference presentation.
  Stored in opalx-documents/examples/2026/beam-beam with manifest SHA-256 and
  a reproducible packaging script; .gz is covered by existing LFS attributes.
- Verification: source validator (58 chapters), documents validator (7 assets),
  chapter HTML render, 64-page rendered-link validation and nine browser tests
  pass. Byte-identical repeat archive
  generation, every bundled source hash, excluded-output check, shell syntax
  and all four extracted --prepare-only workflows pass. Preparation ran in a
  temporary extraction with original Git metadata supplied for provenance;
  no new OPALX simulations or changes to experiment sources were made.
- Publication: no commit or push requested. Publish the archive before/with the
  manual, otherwise its public link will not resolve. Existing document assets
  were restored by public media URLs after Git LFS checkout failed; their hashes
  match the original manifest. Check the local LFS client before committing or
  pushing the archive. PDF publication remains paused.
- Next trigger: authorized publication, or changes to bundled study inputs/helpers.
- Next trigger: an explicit request to restore PDF publication, or the next
  HTML publication failure.

### 2026-10-07 - DOC-USER: BOX and COLLIMATOR elements

- OPALX source: branch `box-element` at `4305ba5b2`. Manual base: `dc80f89`.
- Reviewed: OpalBox, Box, OpalCollimator, Collimator,
  `ElementBase::markOutsideAperture`, `ElementBase::isInsideAperture`,
  `ParallelTracker::applyElementApertures`, the default aperture in
  OpalElement.
- Changed: added the `COLLIMATOR` and `BOX` sections, overview rows and
  sidebar entries to the elements page, and a subsection comparing
  `APERTURE`, `COLLIMATOR`, and `BOX`; corrected the `APERTURE` default (no
  limit, not `ELLIPSE(1,1)`); linked both types from the input-language and
  reference catalogs. Validators now require the new sections and anchors;
  rendered section numbers after `DRIFT` moved up by two.
- Verification: source validator (58 chapters), full HTML render, report-page
  render, rendered-HTML validator (64 pages), eight browser tests, and
  whitespace check passed. The `BOX` jaw-pair and `COLLIMATOR` examples
  were run with OPALX; transmissions agreed with the Gaussian expectation.
- Open items: `BOX` is not on OPALX master yet; merge this after the OPALX
  pull request. The `document-fieldmap-element` branch also renumbers the
  rendered sections; whichever merges second must recompute them. Gap found
  but not fixed: the bends table says positive `HAPERT` installs a
  rectangular aperture, but the source requires `HGAP > 0` and uses `HAPERT`
  as the horizontal limit only. Page review dates are unchanged.
- Next trigger: merge of the OPALX pull request, or a change to element
  aperture handling.

### 2026-10-07 - DOC-HEALTH: post-reboot Git LFS recovery

- Manual base: `dc80f894`; documents base: `0f35ab43`. Preserved yesterday's
  section removal and source-only experiment download update; archive snapshot
  and physics claims unchanged.
- Reboot did not repair the default GitHub Desktop x86_64 Git LFS executable
  selected by `/usr/local/bin/git-lfs`; version checks still crash/hang.
  Native `/opt/homebrew/bin/git-lfs` version 3.7.1 works. Use
  `PATH=/opt/homebrew/bin:$PATH` for the manual/documents Git commands.
  No global configuration, PATH, or installed software was changed.
- Verified archive clean/smudge round-trip with unchanged SHA-256, LFS fsck,
  seven cataloged documents, 58-chapter source validation and focused HTML
  render. Existing document binaries are clean under the working LFS filter.
- All nine browser tests and link validation of 64 rendered pages pass;
  whitespace/diff checks pass. No staging, commit, push or LFS upload.
  The new archive's public link is not yet available. PDF remains paused.
- Next trigger: authorized publication, using the native Git LFS client.

### 2026-10-07 - DOC-SANDBOX: publication through review branches

- User authorized commit and push. Documents commit `eece0a5` contains the
  source-only archive, packaging script and manifest. Native Git LFS uploaded
  the archive successfully through SSH; direct main push was rejected because
  the repository requires a pull request. Use review branches, with the
  documents change merged before the manual change.
- Incorporated manual main `0063fde` (BOX/COLLIMATOR documentation). Resolved
  the maintenance-register conflict by retaining both independent reviews.
- Combined-tree full HTML and report renders, all nine browser tests and
  64-page rendered-link validation pass. Documents branch is pushed; the GitHub
  connector cannot open its PR (403, Resource not accessible by integration).
  Create PRs from codex/beambeam-experiment-downloads in each repository and
  merge documents first. Public main download is not live until that merge;
  PDF remains paused.
