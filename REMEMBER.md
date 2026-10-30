# OPALX Documentation Maintenance

`REMEMBER.md` is the durable register for recurring documentation work. Read it
at the start of every maintenance pass. Use `HANDOFF.md` for work that is
currently in progress; use this file for work that must be repeated.

## Operating rules

1. Start in `/Users/adelmann/git/opalx-manual` and read `AGENTS.md`, this file,
   and any current `HANDOFF.md`.
   Make changes in this checkout and render into its `_site/` directory;
   use a different checkout or render location only at the user's request.
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
| `DOC-USER` | Synchronize the User Guide and reference | Monthly, before a release, and after parser or runtime interface changes | User Guide audit refreshed after origin pull on 2026-10-29; all 19 chapter review boxes removed | Review 20 original User Guide decisions and two consistency follow-ups; Getting Started change markings cleared on 2026-10-30; source issues #648–#654 are separate; audit cleanup and records published on 2026-10-30 |
| `DOC-PHYS` | Update the Physics Manual | Monthly and after physics, algorithm, or numerical changes | Spin tracking, decay processes, bend and multipole sections on 2026-10-29; focused external magnetic-field superposition and cyclotron terminal RF endpoint semantics on 2026-10-25; focused field-solver P3M, cathode-image and binning sections on 2026-10-22; focused Beam-Beam section removal/download update on 2026-10-06; full chapter review 2026-10-04 | Continue chapters 28–35 audit: PH-28-01/03–37 applied (06 deleted), 02 rejected; PH-28-37 marks probes as work in progress. All presented decisions resolved. Chapters 29–35 remain. Preserve prior CAIN/source-frame follow-ups. |
| `DOC-SANDBOX` | Review validated sandbox results for promotion | Monthly and when a sandbox study reaches a conclusion | Experiments 1–4 source-only download bundle verified on 2026-10-06 | Merge documents bundle before manual publication; retain production birth-timing follow-up |
| `DOC-ARCH` | Synchronize architecture text and diagrams | After structural changes and during each monthly review | Incremental COF/initial-orbit review on 2026-09-10 | Recheck the remaining diagrams against current class ownership and call sequences |
| `DOC-LANGUAGE` | Enforce the manual language rules | Every documentation edit and during each monthly review | English-only reviews of Chapters 41–45 and 46–56 completed on 2026-10-30; six accepted revisions applied and rendered, including the author’s custom REF-48-01 wording | Continue other chapters only when requested; preserve separate pending User Guide and physics decisions |
| `DOC-HEALTH` | Check links, metadata, HTML, and interactive controls; PDF when enabled | Every manual change and at least weekly | Audit refresh on 2026-10-29: full manual and six reports; source, 64-page links, marker/status and source-preservation checks pass | Keep audit action tables and the release overview synchronized with user decisions; verify published changes after an authorized push; PDF remains paused |

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

### 2026-10-05 - DOC-USER: FIELDMAP element and G4beamline field maps

- OPALX source: branch `general-fieldmap-element` at `efa3966db`, with
  uncommitted changes that add the out-of-memory message in
  `Fieldmap::readMap()`. Manual base: `dc80f89`.
- Reviewed: OpalFieldmapElement, FieldmapElement, Fieldmap factory and header
  detection, G4BL2DMagnetoStatic, G4BL3DGrid, G4BLMapSyntax, the localized
  `TURNS` and `COF` element lists.
- Changed: added the `FIELDMAP` section, overview row and sidebar entry to the
  elements page; added the G4beamline `cylinder` and `grid` formats and their
  memory use to the field-map appendix; added `FIELDMAP` to the input-language
  and reference catalogs; noted that localized `TURNS` rejects `FIELDMAP`.
  Validators now require the new section, its parameters, catalog links and
  appendix anchors; rendered section numbers after `SOLENOID` moved up by one.
- Verification: source validator (58 chapters), full HTML render, report-page
  render, rendered-HTML validator (64 pages), eight browser tests, and
  whitespace check passed.
- Open items: `FIELDMAP` is not on OPALX master yet; merge this after the OPALX
  pull request. Gaps found but not fixed here: the `SOLENOID` table lacks
  `ZREVERSE` (G4beamline `cylinder` maps on master); its `KS` row says the
  value is converted using the reference rigidity, which should be checked
  against `Solenoid`; the common-attribute table still says "eight element
  implementations". Page review dates are unchanged.
- Next trigger: merge of the OPALX pull request, or a change to the field-map
  readers.

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

### 2026-10-23 - DOC-USER: GAUSS cutoffs and phase-space adjustment

- OPALX range: `f39d59ee2..` OPALX PR #630 (branch
  `165-gauss-elliptical-cutoff-and-energy-adjust`, issue #165).
- Manual base: `182ea22`.
- Reviewed: `user-guide/beam-distributions.qmd`, attribute table and the
  `GAUSS` and `MULTIVARIATEGAUSS` sections, against
  `src/Distribution/Gaussian.cpp` and `Distribution::setDistParametersGauss`.
- Changed: `CUTOFFX`, `CUTOFFY`, `CUTOFFLONG`, `CUTOFFPX`, `CUTOFFPY`, and
  `CUTOFFPZ` now apply to `GAUSS` (elliptical transverse cuts, per-axis
  longitudinal cuts, `0` disables all but `CUTOFFLONG`); documented the
  OPAL-style mean and energy adjustment and the truncated RMS widths; marked
  the cutoffs as ignored by `MULTIVARIATEGAUSS`; updated the limitations list.
- Verification: source validator and whitespace check.
- Open items: `last-reviewed` left unchanged because only the Gaussian
  sections were checked. Manual issue #11.
- Next trigger: `MULTIVARIATEGAUSS` gaining the same cuts, or correlations in
  `GAUSS`.

### 2026-10-07 - DOC-USER: merge main into document-fieldmap-element

- Manual base: branch `771d624` merged with main `0bebf46`.
- Changed: kept `FIELDMAP` next to the new `COLLIMATOR` and `BOX` entries in
  the reference catalog and both validators. Recomputed the rendered section
  numbers: everything after `SOLENOID` moves up by one from main
  (`FIELDMAP` 12, `RFCAVITY` 13, bends 20, limitations 23). Kept all log
  entries from both sides.
- Verification: source validator (58 chapters), full HTML render, report-page
  render, rendered-HTML validator (64 pages), nine browser tests, and
  whitespace check passed.
- Open items: none from the merge. `FIELDMAP` (OPALX PR #572) and `BOX`
  (PR #580) are both on OPALX master, so the manual branch can be merged. The
  common-attribute table still says "eight element implementations".
- Next trigger: a change to the field-map readers.

### 2026-10-21 - DOC-USER / DOC-PHYS: MZ moments and emittances

- Manual base: `4d8fab80dc0fff7eead00c0166dd5634a7cd1371` on
  `docs/mz-v1-audit`; OPALX source: `12d0954c71e1202be79fa13ea32a30d86b89c541`.
- Reviewed DistributionMoments, ParticleContainer reference transforms,
  DataSink, StatWriter, and the existing deterministic distribution-moments
  unit test. Source inspection only; no simulation or C++ test run.
- Added main bunch-statistics definitions to Conventions: equal macroparticle
  population averages, covariance/frame transformations, normalized momentum,
  RMS spreads, correlations, projected normalized and internal geometric
  emittance, units, longitudinal interpretation, file naming, and column map.
  Emittance uses `\varepsilon` at the user's request.
  Linked the scoped definitions from File Formats. The full statistics schema
  remains unaudited. Existing page review dates were retained because neither
  page received a complete review.
- Updated source and rendered validators' shared-page classification because
  Conventions now contains an explicitly OPALX-only section.
- Verification: 58-chapter source validation, full HTML render, six report-page
  render, rendered section/equation presence checks, 64-page rendered HTML/link
  validation, and git diff --check passed. Browser controls were unchanged;
  browser tests were not run (dependencies are absent). Documents-checkout
  validation was unavailable because ../opalx-documents is absent; no external
  document links were changed.
- Follow-up: discuss existing canonical/mechanical terminology separately;
  audit MONITOR and PROBE sampling; separately review covariance-valued
  dispersion columns and zero-spread guards. No source changes, commit or push.

### 2026-10-23 - DOC-USER / DOC-PHYS: MONITOR sampling and current output

- Manual base: `e2f4974b0ebb7ae898cd86301334c227160c54f9` on
  `docs/mz-v1-audit`; current OPALX checkout:
  `fc7c070d7bc4c5daae5beece167f880142d7caa7` on 631-support-ideal-rfcavity.
  Relevant Monitor, OpalMonitor, LossDataSink and reference-callback code was
  unchanged from the executable-tested master revision `41d65389d`.
- User advised preserving current MONITOR behavior for now. Documented the
  existing timestep-end particle timestamps, not the separate #619 correction.
  No OPALX source edits were made during this documentation pass.
- Expanded the MONITOR User Guide section with plane placement, mode selection,
  filename handling, spatial versus temporal sampling, frames, HDF5/ASCII
  output, timestamp meanings, and the retained mass/energy distinction.
- Added the crossing and temporal snapshot model under Physics / Elements,
  including interpolation, common-time drift, sampling assumptions and the
  ordinary-full-step timestamp offset. Linked the input and physics sections,
  and linked the existing moments/emittance definitions. The MONITOR parent
  anchors and custom sidebar manifest remain valid.
- Evidence: source inspection plus the earlier 41d65389d executable drift/bend
  runs preserved under OPALX sandbox/monitor-audit. Those runs reproduce the
  timestamp and mass/energy distinctions. No new simulations were needed.
  The conditional momentum-frame concern is not presented as a confirmed bug.
- Verification: 58-chapter source validation, full HTML render, six report-page
  render, rendered section/equation checks, 64-page HTML/link validation and
  git diff --check passed. Browser tests were not run (dependencies absent),
  and document-checkout validation was unavailable (../opalx-documents absent).
  No external document links or browser controls were changed.
- Existing page review dates were retained: this is a focused MONITOR review,
  not a full review of either Elements chapter. No commit or push performed.
- Next: review PROBE's registered interface versus active tracking support;
  retain MONITOR's current conventions pending an agreed code change.

### 2026-10-23 - DOC-USER / DOC-PHYS: normalized momentum terminology

- Manual base: `5281139` (MONITOR documentation committed by user) on
  `docs/mz-v1-audit`; OPALX source reviewed:
  `fc7c070d7bc4c5daae5beece167f880142d7caa7`.
- User approved correcting the stored-momentum terminology following supervisor
  agreement. Reviewed the Boris pusher and DistributionMoments definitions.
- Conventions now defines normalized momentum as p/(mc)=gamma*beta, identifies
  mechanical (kinetic) momentum, and distinguishes canonical momentum through
  p_can=p+q*A in SI units with physical charge in coulombs. Explicitly states
  that RMS emittances use normalized mechanical momentum components. Added a
  stable anchor to that definition and clarified the units-table entry.
  At the user's request, normalized momentum is written as tilde(p), while
  plain p denotes physical momentum. Updated covariance, emittance, MONITOR
  sampling and overview notation to match, and explicitly mapped PX/PY/PZ
  to the normalized components. The passive-probe full state is named w.
- Physics overview now calls the stored variables position and normalized
  momentum components. Replaced all three incorrect canonical-momentum labels
  and linked the Conventions definition. Legitimate canonical-coordinate and
  symplecticity discussions elsewhere were reviewed by search and retained.
- Verification: 58-chapter source validation, full HTML render, six-report
  render, rendered momentum definitions/labels/link-target checks, 64-page
  rendered HTML/link validation and git diff --check passed. Browser tests
  were not run (dependencies absent); external document checkout is absent.
  No document links or interactive controls changed.
- This is a focused terminology review; existing full-page review dates remain.
  No tracking, diagnostic calculation, momentum units or emittance formula
  changes. The earlier canonical/mechanical terminology follow-up is resolved
  for the identified false labels. No commit or push performed by the agent.


### 2026-10-23 - DOC-USER / DOC-PHYS: RFCAVITY TYPE=IDEAL

- Manual base: `a44fea7` on `docs/mz-v1-audit`; OPALX source:
  `fc7c070d7bc4c5daae5beece167f880142d7caa7` on
  `631-support-ideal-rfcavity`, pending the user's source merge.
- Reviewed OpalCavity parsing/update, RFCavity particle/host/reference fields,
  initialization, validation and phase estimation, CavityAutophaser voltage
  adjustment, and the eight existing IdealRFCavityTest cases.
- Added IDEAL input example, integrated VOLT/DVOLT units, finite positive L,
  map/time-model rejection, finite RF parameters and nonnegative frequency,
  aperture support, cosine convention, reference-error exclusion and autophase
  controls. Updated the RFCAVITY table, element summary and OPALX sidebar
  entry. Corrected mapped
  amplitude units and map support in that table and linked the already
  documented SINGLEGAP interface instead of calling its parameters unused.
- Added a focused ideal RF physics section with field support, midpoint
  sampling, finite-transit-time approximation and the phase/amplitude mapping
  to VARIABLE_RF_CAVITY. Extended the current OPALX autophasing appendix for
  the ideal cavity's phase scan and integrated-voltage adjustment.
- Verification: all eight existing IdealRFCavityTest cases passed using the
  existing local binary (sandbox emitted an MPI socket warning). The 58-chapter
  source validator, full HTML and six-report renders, rendered IDEAL example,
  physics, autophase and navigation checks, 64-page HTML/link validation, and
  git diff --check passed. Browser interaction tests were not run (dependencies
  absent). No rebuild or source edits.
- This is a focused subsection review; full-page review dates are unchanged.
  Publish this documentation with the matching source feature. No commit or
  push performed.


### 2026-10-23 - DOC-USER / DOC-PHYS: IDEAL amplitude changed to MV/m

- Manual base remains `a44fea7` on `docs/mz-v1-audit`, with the preceding
  RFCAVITY documentation still uncommitted. OPALX source reviewed:
  `7ec5346fb635fa474f7582fe7a60834976999904` on
  `631-support-ideal-rfcavity`.
- Verified removal of the length divisor from all three IDEAL field methods,
  the parser/header unit descriptions, and the autophaser's length-dependent
  amplitude estimate and MV/m output. The preceding entry describes the
  superseded integrated-voltage implementation.
- Updated the User Guide VOLT/DVOLT table, example (5 MV/m over 0.2 m gives
  1 MV peak integrated voltage), field equation, length interpretation and
  VARIABLE_RF_CAVITY amplitude conversion. Updated the physics definition to
  E_0 in MV/m, restored L in the transit-time energy-gain formula, and revised
  the integrated-voltage and DC limits. Autophasing now adjusts peak field
  amplitude in MV/m. SINGLEGAP retains its separate voltage-in-MV convention.
- All nine existing IdealRFCavityTest cases passed using the updated local
  binary, including field amplitude independent of length and gradient-based
  DC gain and design-energy adjustment. The sandbox emitted an MPI socket
  warning; the test suite completed successfully. No build or source edits.
- Verification: 58-chapter source validation, full HTML and six-report renders,
  64-page HTML/link validation, focused rendered MV/m units/formula/example
  checks, obsolete IDEAL scaling checks, and git diff --check passed. Browser
  interaction tests were not run (dependencies absent); no navigation changes
  were made in this follow-up. Full-page review dates remain unchanged.
  No commit or push performed.


### 2026-10-25 - DOC-USER / DOC-PHYS: terminal cyclotron RF endpoint

- Manual base: `a49a273159527c5ed0f9d57d659dcf7dd6e037b7` on `main`.
  Source authority for this focused update is the uncommitted PR #637 review
  fix in `/Users/adelmann/git/opalx-master`, based on
  `61c90499b3f5638f2e26612561e149839774666d`, specifically
  `TrackReferenceStep.h` and `ParallelTracker.cpp`. Publish with that source fix.
- Clarified that EKINSTOP belongs to the reference and all physical particles
  finish the common accepted duration. Documented the terminal-only full-kick
  allowance, laboratory-metre scale, signed-distance conditions and
  64-N-epsilon accumulated arithmetic budget, where N counts accepted global
  frame updates including the terminal step. State its first-order assumptions,
  rejection of nonfinite or order-one factors, and the convention's possible
  inclusion of physically later arrivals within the allowance. Distinguished it
  from ODE, nonlinear trajectory and plane-root localization error; retained
  strict ordinary crossings and no position/time projection. The reference has
  no remainder drift after its terminal kick; physical particles crossing earlier
  continue transport through the remaining common duration.
  The initial single-step budget was insufficient in the actual integration
  fixture and has been superseded. The revised implementation passes that
  accelerating integration fixture for one/two particles on one/two MPI ranks:
  physical-particle energy is 73.27309842485165--73.27309842485249 MeV,
  reference energy is 73.27309842467186 MeV, and the common final time is
  6.037904845375861e-8 s, without position projection. The unphysical reference
  trial case flushes the previously accepted probe hit on both ranks. All ten
  focused native OpenMP CTest targets pass. A100 Slurm job 354769 completed
  successfully in 19 min 25 s: the shared Release build with CUDA 13.2.78,
  GCC 14.3 and OpenMPI 5.0.10 passed all ten focused CTest targets in 40.63 s,
  including RFEventStepMPI and ProbeMPI with two ranks. The tested patch was
  unchanged before and after the run. GH200 validation remains unverified;
  these checks do not establish PIC convergence or full-cycle physics accuracy.
- Made the existing physics anchor explicit and linked the User Guide explanation.
  Existing full-page review dates are retained because this is a focused change.
- Documentation validation: 58-chapter source validator, both changed-page HTML
  renders (physics rerendered after the budget revision), focused rendered
  accumulated-budget equation/limitations/common-duration/anchor checks,
  64-page rendered-link validator, seven-document catalog validator and whitespace
  review passed. Documentation checks alone do not establish physics accuracy.
  Full-page review dates remain unchanged. No full-book/PDF or browser-interaction
  tests were run.
  Browser preview of local file URLs was blocked by browser URL policy, so visual
  inspection was unavailable; no bypass was attempted. No commit or push.


### 2026-10-25 - DOC-PHYS: external magnetic-field superposition

- Manual base remains `a49a273159527c5ed0f9d57d659dcf7dd6e037b7`; prior
  uncommitted cyclotron documentation is preserved. Source review used
  `/Users/adelmann/git/opalx-master` at23f04f6 plus the pending focused
  ScalingFFA additive-field correction. Publish the clarification with that fix.
- Expanded the existing external-field overlap paragraph in Physics / Overview
  with B_total=B_self+sum(B_j), common-frame rotation and tesla units. The same
  external superposition contract applies to physical particles and reference
  transport, including ScalingFFA. A zero contribution outside one support
  cannot erase other external fields or an existing self magnetic field.
  Kept the reference free of self-field kicks and linked the existing
  OrbitThreader explanation to the authoritative summation paragraph.
- This documents the intended field-summation contract; it does not establish
  complete FFA tracking accuracy or convergence. Native additive-field and
  transport validation remain with the implementation task. Existing full-page
  review date is retained for this focused clarification.
- Validation: 58-chapter source validator, focused Overview HTML render,
  64-page rendered-link validator, rendered field-sum formula/common-frame/tesla/
  support/reference-self-field checks, unique anchor/internal link checks and
  whitespace review passed. No full-book/PDF or browser-interaction test was run.
  The earlier browser policy block on local-file previews remains; no bypass or
  visual inspection is claimed. No publication or source edits.


### 2026-10-26 — restore the HTML publication checks

- Manual baseline: `8e5dac7`; OPALX reference: tag `OPALX-1.0.0` at
  `1a7bcf5a0`. No physics prose, spin chapter, release checkmarks or
  assignments were changed.
- Reproduced publication-gate failures after the FFA chapter edits: the
  rendered validator still required the removed `verticalffamagnet` anchor
  and the old ordinal numbers of the variable RF and limitations sections.
  The input-language catalog still linked to the removed anchor.
- Require the maintained `scalingffamagnet` section in source and HTML,
  preserve numbered second-level headings without fixing their ordinal
  positions, and update the custom sidebar. Add the documented `FFT2D5`
  solver to its sidebar and rendered-anchor checks. Retarget the vertical
  FFA catalog link to the element guide without changing its scope text.
- Validation: 58-chapter source validation including external document
  links, full HTML render, six report-page renders, 64-page rendered-link
  validation, 26 latest-change tests (339 assertions), all ten browser tests,
  final catalog-page render and whitespace/diff review passed. Local
  rendering needed access to Quarto's normal Sass cache. No PDF build,
  publication, commit or push was performed; live Actions logs were not
  accessed because GitHub CLI authentication was unavailable.


### 2026-10-26 — place Binning within Field Solvers

- Manual baseline: `1b5652f`. Remove the standalone Structures chapter and
  move its BINNING section, examples, defaults, formulas and runtime notes
  unchanged into the eighth subsection of Field Solvers. The user selected
  continuous numbering: Field Solvers is now chapter 18 and Binning is 18.8.
- Update the chapter list, command catalogue, input-language and runtime-option
  links, migration inventory, sidebar and validation rules. Quarto generates
  a redirect for the old Structures URL and preserves the `#binning` fragment.
- Normalize directory and `index.html` URLs in the custom sidebar so its new
  Binning entry initializes and highlights correctly with either URL form.
- Validation: source and document links (57 chapters), full HTML book and six
  report renders, 64-page rendered-link check, 26 latest-change tests (339
  assertions), and 13 browser tests passed. Browser checks cover both Binning
  URL forms, its active navigation, version selection and the old redirect.
  Both local previews were visually inspected; the diff and verbatim content
  move were independently reviewed. No PDF build or OPALX simulations ran.
- Applied and rendered in `/Users/adelmann/git/opalx-manual`, as requested.
  The user authorized commit and push to `main` after local validation;
  publication verification follows the push. Spin source and audit review
  marks/assignments were not changed.


### 2026-10-26 — Appendix B definite parser corrections (local review)

- Manual baseline: `92b7945`; parser reference: OPALX tag `OPALX-1.0.0`
  at `1a7bcf5a0`. The user requested definite corrections first, with changes
  in red and a local render before any push.
- Correct identifier syntax/case, statement punctuation, typed assignment
  behavior, exponent grouping, the `MUMASS` spelling, unsupported constraint
  claims and token-list grammar. Clarify Boolean precedence/evaluation and
  string parsing; include missing registered constants.
- Real arrays use `VECTOR` or `REAL VECTOR`; `ARRAY` is not a declaration
  keyword. Add two small examples and distinguish declarations from braced
  values used by array-valued attributes.
- Mark changed text and examples with a page-local red review class. Preserve
  heading anchors and the full-page review date; the broader grammar/function
  completeness pass remains pending. Remove the review banner and temporary
  red styling after the user approves this copy for publication.
- Validation: 57-chapter source validator, focused Appendix B HTML render in
  `/Users/adelmann/git/opalx-manual/_site`, 64-page rendered-link validator,
  generated chapter/anchor/red-region/example checks and whitespace review
  passed. The Statements and array/constraint corrections were visually
  inspected in the local browser; an independent source review found no
  actionable semantic errors. No full-book/PDF build or OPALX tests ran.
- No commit or push. Spin content and audit checkmarks/assignments were not
  changed. The preceding Binning restructure is already published and verified.


### 2026-10-26 — clarify Appendix B scope and remove Constraints

- Continue the uncommitted red review copy on manual baseline `92b7945`.
  Replace historical references to the original/legacy appendix with direct
  OPALX descriptions of scalar functions, identifier names, array arithmetic
  and variable references. Qualify identifier names as unquoted, since quoted
  names are also accepted. Scope the page description to OPALX.
- Remove the unsupported Constraints section at the user's request. No source
  links target that section and no authored references depend on its number;
  Quarto renumbers Variable References to 26.7 and Token Lists and Regular
  Expressions to 26.8. Keep the other heading anchors and all red review marks.
- Validation: 57-chapter source validation, focused Appendix B HTML render
  in the primary `_site`, 64-page rendered-link validation, red wording and
  section-number checks, local browser inspection and whitespace review pass.
  The browser shows the revised identifier wording in red and the updated
  eight-section table of contents without Constraints. No full-book/PDF or
  OPALX tests ran; no commit or push.


### 2026-10-26 — finalize approved Appendix B presentation

- User approved the corrected Appendix B. Remove the temporary red styling,
  review spans/divs and review notice; preserve the approved syntax text,
  examples, heading anchors and eight-section numbering.
- Validation: source checks (57 chapters), focused HTML render in the primary
  `_site`, rendered-link checks (64 pages), comparison with the approved text
  after removing review markup, and independent Markdown review pass.
  Final local browser inspection passed; no full-book/PDF or OPALX tests.
- Prepare a commit message for the complete Appendix B correction. No commit
  or push was requested or performed. Keep the complete-page review date
  unchanged; the broader grammar completeness audit remains pending.


### 2026-10-26 — retain Appendix C outside navigation

- Manual baseline `f8447aa`. Remove Appendix C — OPAL-MADX Conversion Guide
  from the book chapter list and its Command Format referral. Preserve the
  conversion source byte-for-byte and retain the historical migration entry.
  Remove its mandatory HTML/PDF presence checks.
- Full local HTML book (56 chapters) and six report renders completed in the
  primary `_site`; rendered-link checks passed across 63 pages. Confirm no
  Appendix C navigation/search entries or stale generated page remain, and
  Appendix B now links directly to Auto-phasing. No PDF build or code tests.
- User steered directly into the next appendix audit before the final report;
  the navigation removal is complete locally, with no commit or push.

### 2026-10-26 — Field Maps and Auto-phasing discussion audit

- Manual baseline `f8447aa`; fetch current OPALX master `eb8435a7a`. Map, RF,
  tracker, option and H5 sources are unchanged from local `1a7bcf5a0`, so no
  checkout change was needed. Preserve all untracked files.
- Mark current OPALX corrections and missing guidance red using page-local
  styles and review notices. The retained OPAL blocks remain byte-identical;
  keep the full-page review dates because the historical material was not
  re-audited against legacy OPAL.
- Field Maps: add supported `3DDynamic` (seven reader families), layout/units/
  normalization/interpolation and validation rules. Clarify element-specific
  compatibility, separate cyclotron loaders, ASTRA reconstruction, `FAST` and
  `ZREVERSE` restrictions. Correct current 2D column ordering and normalization
  scope; flag the explicit-normalization-token defect and radial-origin limit.
- Auto-phasing: correct crest versus input `LAG`, defaults, scope and reference
  objective; document `AUTOPHASE=0` at `SSTART`, DC units, local search limits,
  design-energy convergence/cached traveling-wave core scale, diagnostic phase
  time reference, and unconnected automatic phase-saving. These are source
  observations for discussion, not implementation fixes.
- Validation: source/document checks (56 chapters), focused Field Maps and
  Auto-phasing HTML renders, 63-page rendered-link checks, red-region/anchor/
  legacy-block checks, and whitespace review passed. Independent reviews
  refined the off-axis normalization caveat, positive-length requirement and
  logged-phase time reference. Local browser inspection confirmed readable
  red tables, layouts, equations and caveats alongside unchanged text.
- No OPALX tests or numerical studies ran; the requested regression/unit-test
  sufficiency assumption is retained. No code changed, commit, push or
  publication. Spin and audit assignments/marks remain unchanged. A separate
  existing SOLENOID scaling-contract discrepancy was recorded in the audit
  evidence for physics review, without changing its manual contract here.


### 2026-10-27 — refocus appendices on availability

- User clarified that the appendix audit concerns the manual: describe what
  is available, partially available, unavailable and confirmed for future use.
  Reframe the Field Maps and Auto-phasing red drafts on unchanged master
  `eb8435a7a`; no OPALX code changes or fix prioritization.
- Add compact availability overviews using available/partial/unavailable
  markers. Describe the supported subset for 2D and G4beamline formats, RF
  model scope, phase controls, energy targeting and automatic phase saving.
  No confirmed roadmap was established, so future support is explicitly
  unconfirmed; historical OPAL plans do not become current commitments.
- Retain useful formats, units, physics, phase/time conventions and input
  restrictions. Remove internal parser/cache/writer explanations, method
  names and code-repair directions. General restart functionality is not
  labeled unavailable: the limitation is automatic saving of newly optimized
  cavity phases for H5 restart.
- Keep discussion changes red, heading anchors stable and historical OPAL
  blocks byte-identical. Appendix C remains retained outside navigation.
  Validation passed: source/document checks (56 chapters), both focused HTML
  renders in the primary `_site`, rendered links across 63 pages, availability
  markers/tables, stable anchors, unchanged historical blocks and whitespace.
  Independent availability reviews and local visual inspection confirmed the
  red overviews, format guidance and future-unconfirmed wording. No OPALX tests,
  commit, push or publication.


### 2026-10-27 — use the public tracking start parameter

- Correct the Auto-phasing red draft's internal `SSTART` label to the public
  `TRACK, ZSTART=...` input attribute. State metres/default zero and link to
  the TRACK reference. `TrackCmd.cpp` registers `ZSTART`; `TrackRun.cpp` passes
  its value to the internal tracker start position.
- This corrects manual terminology, with no OPALX code or behavior change.
  Focused local HTML render, 63-page rendered-link checks, red wording/link
  checks and whitespace review pass. A registration scan found no further
  internal names presented as inputs. No commit or push.


### 2026-10-27 — render the complete local manual

- At the user's request, render all 56 book chapters and the six unnumbered
  report pages as HTML in `/Users/adelmann/git/opalx-manual/_site`. Source and
  document checks and rendered-link checks across 63 HTML pages pass.
- Preserve the red availability drafts, public `ZSTART` terminology and
  retained Appendix C source outside navigation. Render logs contain no
  Quarto warnings or errors. PDF publication remains paused; no PDF build,
  OPALX tests, commit or push.


### 2026-10-27 — Field Maps row review: AstraDynamic

- Manual base `21f1678` on `docs/field-map-appendix-review`; OPALX master
  `eb8435a7a`. The user approved the AstraDynamic availability-row clarification.
- State explicitly that AstraDynamic supplies the on-axis RF profile for both
  standing-wave RFCAVITY and TRAVELINGWAVE. For TRAVELINGWAVE the source map
  must start at z=0 m; this is the map coordinate, not lattice placement.
- Verified RFCavity and TravelingWave particle-reader dispatch and the explicit
  nonzero-map-start rejection in TravelingWave::initialise.
- Remove red styling from this accepted row only. Move the table outside the
  enclosing red block and mark its header and six unreviewed rows individually
  so those entries retain their red review styling. All other draft sections
  remain marked for review; next row is AstraMagnetoStatic.
- Validation: 56-chapter source checks, focused appendix render, full book
  and six-report renders, 63-page HTML/link validation, rendered table styling
  checks and git diff --check passed. The initial focused-render link check
  found stale unrelated preview pages; a full rebuild resolved those failures.
  Full-page review date unchanged; no source changes, commit or push.


### 2026-10-27 — Field Maps row review: label AstraDynamic as 1D

- Same manual base `21f1678` and OPALX master `eb8435a7a`. User approved
  explicitly describing AstraDynamic as a 1D on-axis RF field map. Update the
  accepted availability row, retaining normal text color.
- Review the next row, AstraMagnetoStatic: its reader takes z/Bz samples and
  generates Fourier coefficients; host/device field evaluation reconstructs
  off-axis magnetic components from the profile. The existing availability
  claim is supported. Keep this row red pending the user's wording review.
- Validation: source checks, focused appendix HTML render, rendered wording
  and review-style checks, 63-page HTML/link validation and git diff --check
  passed. No commit or push.


### 2026-10-27 — Field Maps row review: accept AstraMagnetoStatic

- Same manual base `21f1678` and OPALX master `eb8435a7a`. The user approved
  the wording: 1D on-axis static magnetic field map with Fourier reconstruction.
  The reader consumes z/Bz pairs, forms Fourier coefficients and reconstructs
  magnetic fields off axis, as verified in the preceding review.
- Update that availability row and remove its three red span markers. The
  AstraDynamic row remains accepted; five remaining availability rows stay red.
  Next row: 3DDynamic. Full-page review date remains unchanged.
- Validation: source checks, focused appendix HTML render, 63-page HTML/link
  checks, rendered accepted/unreviewed row markers and git diff --check passed.
  No source changes, commit or push.


### 2026-10-27 — Field Maps review: note table overlap in the PR

- User explicitly requested leaving both accepted ASTRA overview rows as they
  are. Do not add element names to AstraMagnetoStatic or remove cavity names
  and the source-map-origin restriction from AstraDynamic at this stage.
- Include this note in the eventual manual PR: the availability overview
  retains cavity references in the AstraDynamic row, although supported
  elements are also listed in the dedicated Element compatibility table below.
  This review leaves that overlap in place.
- No appendix wording, review colors, commit or push changed by this note.


### 2026-10-27 — Field Maps row review: accept 3DDynamic and table headings

- Same manual base `21f1678` and OPALX master `eb8435a7a`. User accepted the
  explicit 3D Cartesian RF field-map wording and local x=y=0 condition for
  automatic phase estimation. Verified FM3DDynamic on-axis sampling and
  RFCavity phase estimation and particle application during the preceding review.
- Remove red span markers from the 3DDynamic row and all three availability
  table headings at the user's request. The first three rows are now accepted;
  four unreviewed rows remain red. Next row: 2DMagnetoStatic.
- Validation: source checks, focused appendix render, 63-page HTML/link
  checks, rendered heading/row review markers and git diff --check passed.
  Full-page review date unchanged; no source changes, commit or push.


### 2026-10-27 — Field Maps row review: accept both 2D formats

- Same manual base `21f1678` and OPALX master `eb8435a7a`. User requested
  minimal changes and explicitly deferred fixing the normalization-flag parser.
- In the 2DMagnetoStatic and 2DDynamic overview rows, replace only the claim
  that flags are unavailable with: explicit TRUE/FALSE normalization flags
  currently do not work; omit the flag to use automatic normalization.
- Remove red markers from both accepted rows. Retain their existing radial
  origin, column-order wording and partial-availability labels. The two
  G4beamline rows remain red. Next row: cylinder.
- Validation: source checks, focused appendix render, 63-page HTML/link
  checks, rendered wording/review markers and git diff --check passed.
  No source changes, commit or push.


### 2026-10-27 — Field Maps row review: accept G4beamline rows and introduction

- Same manual base `21f1678` and OPALX master `eb8435a7a`. User approved both
  G4beamline availability rows and the paragraph defining availability labels.
- Remove red styling only, retaining the accepted wording. All seven table
  rows and the headings now use normal text. The future-support paragraph and
  remaining review regions stay red. Next: the future-support paragraph.
- Source review confirmed the cylinder reader's Bz/Br-only block support and
  explicit rejection of electric/Bphi/data/symmetry sections; the grid reader's
  six/nine-column data support and rejection of points/symmetry sections; and
  the factory's cylinder-only ZREVERSE check. Existing tests cover these limits.
- Validation: source checks, focused appendix render, 63-page HTML/link
  checks, rendered introduction/table review markers and git diff --check
  passed. Full-page review date unchanged; no source changes, commit or push.


### 2026-10-27 — Field Maps compatibility: accept FIELDMAP and add SOLENOID

- Manual base `a2bfd75` on `docs/field-map-appendix-review`; OPALX master
  `eb8435a7a`. User approved the existing FIELDMAP row and requested a
  source-checked SOLENOID row before reviewing the cavities.
- FIELDMAP's static-type check and the factory's implemented readers confirm
  the four listed static formats and explicit rejection of dynamic RF maps.
- SOLENOID loads through the same factory and delegates bulk particle fields
  to the map reader. It can use 2DMagnetoStatic, AstraMagnetoStatic, G4beamline
  cylinder and magnetic-only grid maps. Its point/reference methods discard
  map electric fields, while the grid bulk kernel can apply them; therefore
  direct maps containing electric fields to FIELDMAP and avoid claiming they
  are supported consistently by SOLENOID. No claim of parser rejection for
  SOLENOID dynamic/electric maps is added. Strength scaling is outside this
  focused compatibility check.
- Move this table outside its red wrapper and mark its header and cavity rows
  individually. FIELDMAP and the added SOLENOID row now use normal text; other
  compatibility text remains red. Preserve all existing accepted map rows.
- Validation: source checks, focused appendix render, 63-page HTML/link
  checks, SOLENOID link/scope and accepted/unreviewed row markers, and
  git diff --check passed. Full-page review date unchanged; no source changes,
  commit or push.


### 2026-10-27 — Field Maps compatibility: cross-check cavity rows

- Same manual base `a2bfd75` and OPALX master `eb8435a7a`. User requested
  placing RFCAVITY TYPE=IDEAL directly below TYPE=STANDING, then checking
  all three cavity rows. Move the IDEAL row without changing any wording.
- RFCavity's particle dispatch explicitly supports Astra1DDynamic,
  FM2DDynamic and FM3DDynamic, matching the STANDING row. IDEAL initialization
  bypasses maps and validateIdeal rejects a nonempty FMAPFN. TravelingWave's
  particle dispatch requires Astra1DDynamic and initialization rejects a
  nonzero source-map start coordinate. All three existing rows are correct.
- Retain their red review markers pending the user's acceptance. No changes
  to the already accepted FIELDMAP and SOLENOID rows or other draft regions.
- Validation: source checks, focused appendix render, 63-page HTML/link
  checks, rendered cavity-row order/review markers and git diff --check
  passed. No source changes, commit or push.


### 2026-10-27 — Field Maps compatibility: accept table and check following prose

- Same manual base `a2bfd75` and OPALX master `eb8435a7a`. User accepted the
  three cavity rows and requested normal text for the compatibility heading,
  explanatory sentence and both table headings. Remove only their red markers;
  keep the row order and wording. The complete compatibility table is accepted.
- Cross-check the following statements. OpalCyclotronSector uses the separate
  CyclotronSectorFieldMap loader, and SINGLEGAP configuration constructs a
  CyclotronRFProfile, bypassing the ordinary Fieldmap factory. This claim is
  correct. The linked cyclotron guide describes configuration and identifies
  these inputs but lacks complete file layouts; propose replacing 'Their
  formats are described' with 'See the cyclotron guide for their configuration'.
- The ordinary Fieldmap factory explicitly ignores its fast argument, so FAST
  does not select a different evaluation mode. FIELDMAP forwards independent
  magnetic and electric scales in bulk, point and reference evaluation. Source
  behavior establishes no future-support commitment.
- Leave the red cyclotron and FAST paragraphs unchanged pending discussion.
  Validation: source checks, focused appendix render, 63-page HTML/link checks,
  rendered compatibility/remaining-review markers and git diff --check passed.
  No source changes, commit or push.


### 2026-10-27 — Field Maps compatibility: accept cyclotron/FAST prose

- Same manual base `a2bfd75` and OPALX master `eb8435a7a`. User approved the
  minimal cyclotron link correction and clearing red from the reviewed prose.
- Replace only 'Their formats are described in the cyclotron guide' with
  'See the cyclotron guide for their configuration'. Remove the shared red
  wrapper around the cyclotron-loader and verified FAST paragraphs.
- The compatibility section is now normal text. Other pending review regions,
  including the earlier future-support paragraph and detailed format sections,
  remain red. No source behavior changes; no commit or push performed.
- Validation: source checks, focused appendix render, 63-page HTML/link
  checks, corrected link wording and section review-marker checks, and
  git diff --check passed.


### 2026-10-27 — Field Maps detailed formats: accept ASTRA section

- Manual base `592c683` on `docs/field-map-appendix-review`; OPALX master
  `eb8435a7a`. User approved the two proposed precision corrections and removal
  of red from the AstraDynamic/AstraMagnetoStatic subsection (25.1.2).
- Replace coefficient count with number of retained Fourier modes and specify
  that normalization uses the input profile's absolute on-axis peak. Resampling
  and truncation do not guarantee the reconstructed peak is exactly the target.
- Source review confirmed the header syntax, units/frequency placement,
  resampling/mirroring/Fourier construction, working optional normalization
  flags, zero-peak rejection before optional normalization, and no FAST variants.
- Remove only this subsection's red wrapper; preserve all other wording and
  pending review regions. Full-page review date remains unchanged.
- Validation: source checks, focused appendix render, 63-page HTML/link
  checks, ASTRA wording/review-marker checks and git diff --check passed.
  No source changes, commit or push.


### 2026-10-27 — Field Maps detailed formats: clarify 2DMagnetoStatic ordering

- Manual base `7e8744f` on `docs/field-map-appendix-review`; OPALX master
  `eb8435a7a`. User approved clarifying the fastest-varying coordinate in
  section 25.1.3 and requested checking the spelling of the field unit.
- Replace the ambiguous first-axis sentence with explicit z-fastest for XZ
  and r-fastest for ZX ordering, matching the reader loops and test writers.
- Retain lowercase 'tesla', the SI unit name; its symbol is uppercase T.
  Other wording and the section's red review wrapper are unchanged.
- Source review confirmed cm bounds, interval counts, field-column order,
  tesla inputs, bilinear interpolation, on-axis normalization and zero-origin
  radial indexing. Full-page review date unchanged; no source changes,
  commit or push. Source checks, focused appendix render, 63-page HTML/link
  checks, rendered ordering/unit-name checks and git diff --check passed.


### 2026-10-27 — Field Maps detailed formats: accept 2DMagnetoStatic

- Same manual base `7e8744f` and OPALX master `eb8435a7a`. User accepted the
  reviewed section 25.1.3 and requested removal of its red styling.
- Remove only its review wrapper, preserving the accepted ordering clarification,
  lowercase tesla, header example, normalization and radial-origin guidance.
  Next detailed format is 2DDynamic; its red review regions remain.
- Validation: source checks, focused appendix render, 63-page HTML/link
  checks, accepted/remaining section review markers and git diff --check passed.
  Full-page review date unchanged; no source changes, commit or push.


### 2026-10-27 — Field Maps detailed formats: accept 2DDynamic

- Manual base `0a888f8` on `docs/field-map-appendix-review`; OPALX master
  `eb8435a7a`. User approved three small wording changes and removal of red
  from section 25.1.4, including the shared normalization-options note.
- State z-fastest for XZ and r-fastest for ZX; identify the normalized peak
  as absolute Ez; describe explicit TRUE/FALSE flags as currently not working
  and direct users to omit them for automatic normalization.
- Source review confirmed cm/MHz units, interval counts, radial-origin
  assumption, frequency placement, XZ/ZX field columns, MV/m and A/m field
  units, whole-grid Ez normalization and mu0 conversion of Hphi.
- Remove the two review wrappers only; retain the rest of the accepted text
  and leave following 3DDynamic content red. No source changes or parser fix.
- Validation: source checks, focused appendix render, 63-page HTML/link
  checks, wording/section review-marker checks and git diff --check passed.
  Full-page review date unchanged; no commit or push.


### 2026-10-27 — Field Maps detailed formats: accept 3DDynamic

- Manual base `2eb88b6` on `docs/field-map-appendix-review`; OPALX master
  `eb8435a7a`. User accepted section 25.1.5 as written and requested removal
  of its red styling. Remove only its heading marker and content wrapper.
- Source review confirmed header/layout, cm/MHz/MV-per-m/A-per-m units,
  z-fastest grid storage, interval counts, trilinear interpolation, working
  normalization flags and on-axis normalization, off-axis restrictions for
  automatic phase estimation, finite-value/bounds/data-count validation and
  RFCAVITY cosine/negative-sine field factors. No wording changes needed.
- Remaining red regions are preserved. Full-page review date unchanged;
  no source changes, commit or push. Source checks, focused appendix render,
  63-page HTML/link checks, section review-marker checks and git diff --check
  passed.


### 2026-10-27 — Field Maps detailed formats: accept G4beamline section

- Manual base `14fc15e` on `docs/field-map-appendix-review`; OPALX master
  `eb8435a7a`. User accepted section 25.1.6 with two small corrections.
- Clarify no peak normalization: BSCALE=1 and ESCALE=1 preserve the field scale
  after file param factors. Narrow the same-filename ZREVERSE restriction to
  simultaneous loading, matching the filename-keyed live map dictionary.
- Remove the accepted ZREVERSE paragraph's red wrapper. The remaining section
  already used normal text; retain its layout, interpolation, units, scaling,
  rejected-option and memory guidance. Unsupported-header review remains red.
- Source review covered cylinder/grid parsing, field and unit scaling,
  ZREVERSE mirroring/sign/cache behavior, point matching and duplicate/missing
  data checks, electric-array allocation and field-map allocation errors.
  G4beamline's official user guide also confirms the file units and param keys.
- Validation: source checks, focused appendix render, 63-page HTML/link
  checks, G4beamline wording/section review-marker checks and git diff --check
  passed. Full-page review date unchanged; no source changes, commit or push.


### 2026-10-27 — Field Maps detailed formats: accept unsupported-header section

- Manual base `a39ceb7` on `docs/field-map-appendix-review`; OPALX master
  `eb8435a7a`. User accepted section 25.1.7 as written and requested removal
  of its red styling. Remove only the section's review-color wrapper.
- Verified factory/header dispatch and the ASTRA test map writers. The supported
  AstraDynamic/AstraMagnetoStatic formats use explicit z/field pairs; legacy
  OPAL 1DDynamic/1DMagnetoStatic readers use grid headers and field-only records.
  Both existing ASTRA ParseAndDimensions tests passed. The dynamic test helper
  has a stale 1DDynamic comment; its actual writer uses AstraDynamic. No source
  changes made.
- Leave the future-support paragraph and review-copy notice red for remaining
  review. Keep the full-page review date unchanged; no commit or push.
- Validation: 56-chapter source checks, focused appendix render, 63-page
  HTML/link checks, rendered review-marker checks and git diff --check passed.
### 2026-10-27 — Getting Started release audit (chapters 2–5)

- Manual baseline 21f1678; OPALX release OPALX-1.0.0 at 1a7bcf5a0.
  Make the exact release tag and checkout verification explicit; add the
  required Fortran compiler and full unit-test configure/build/run commands.
- Add a drift smoke-test command sequence with its required distribution
  file; distinguish it from numerical reference comparisons and state the
  independently evolving regression-repository limitation. Clarify the cluster
  source directory and GPU-aware MPI requirement. Worked examples inspected
  without edits; full-page review dates retained.
- Source validation (56 chapters), focused four-page HTML render, rendered
  links (63 pages), and diff review pass. No browser visual inspection, fresh
  OPALX build, simulation or PDF build. Release/default-branch regression
  compatibility remains untested at runtime. No commit or push.
- Detailed focused audit record: GETTING_STARTED_AUDIT.md.

### 2026-10-27 — red Getting Started review copy

- Mark the release-audit changes red, including command blocks and the Fortran
  row; preserve normal formatting for unchanged text and worked inputs.
- Render all four Getting Started HTML pages locally in `_site`. Source checks,
  rendered links (63 pages), generated red markup and whitespace checks pass.
  Browser visual inspection blocked by the file-URL policy. No commit or push.

### 2026-10-27 — rerender local review manual

- Rendered the full 56-chapter HTML manual and six report pages into `_site`
  at the user's request, retaining red Getting Started and appendix changes.
- Rendered-link validation passed across 63 pages. No PDF, commit or push.


### 2026-10-28 — move partial Auto-phasing capabilities to issues

- User requested two OPALX issues for global disabling with `AUTOPHASE=0`
  during `TRACK.ZSTART` advancement and `DESIGNENERGY` amplitude tuning,
  and removal of these partial-feature entries from section 27.3. Manual
  baseline `c083099`; issue evidence freshly checked on master `9a14973b`.
- Remove both availability rows, their related explanations/workarounds and
  partial-status legend from Appendix D. Retain the four available/unavailable
  rows, other red review text and historical OPAL content unchanged. No source
  code changed, commit or push; preserve untracked GETTING_STARTED_AUDIT.md.
- Prepared two issue titles/bodies with commit-pinned evidence and proposed
  acceptance criteria. Reproductions are explicitly unrun; independent review
  confirmed scope and source links. Actual issue creation and duplicate search
  await GitHub CLI authentication, which has been requested from the user.
- Validation: source/document checks (56 chapters), focused local Appendix D
  HTML render, rendered links (63 pages), four-row/removal/red-marker/legacy
  checks and whitespace review passed. No OPALX tests or PDF build.


### 2026-10-28 — file the separated Auto-phasing issues

- After the user completed GitHub CLI sign-in, check related open and closed
  issues and create OPALX #648 (honor `AUTOPHASE=0` during `TRACK.ZSTART`
  advancement) and #649 (consistent traveling-wave `DESIGNENERGY` tuning).
  Verify both are open with the intended titles and nonempty bodies.
- Both issue bodies contain commit-pinned evidence, proposed acceptance
  criteria and an explicit statement that reproductions have not been run.
  The two partial features remain removed from the locally rendered manual.
- No code changes, tests, commit or push.


### 2026-10-28 — remove appendix review markings and render locally

- Remove the remaining red review CSS, notices, div wrappers and inline
  heading wrapper from the User Guide appendices. Appendix A had a remaining
  future-status wrapper; Appendix D retained the current-section wrappers.
  Appendix B and the retained Appendix C source were already clean.
- Preserve all appendix text except review notices, explicit anchors,
  availability icons, historical OPAL blocks and the Auto-phasing removals
  tracked by OPALX #648/#649. Pre-cleanup snapshots and rendered-text comparison
  confirm preservation; independent diff review passed. Getting Started review
  markings and untracked GETTING_STARTED_AUDIT.md remain unchanged.
- Render the full 56-chapter HTML book and six report pages in the primary
  `_site`. Source/document checks, links across 63 rendered pages, retained
  content/anchor/icon checks and whitespace review pass; no Quarto warnings or
  errors. Visually inspect clean Field Maps and Auto-phasing pages locally.
- Start a local preview server on 127.0.0.1:8766 because the previous server
  was no longer running. No PDF, OPALX tests, commit or push.

### 2026-10-28 — numbered User Guide 6–24 local audit

- Audit all 19 chapters against freshly confirmed remote master `9a14973b`, using a separate source snapshot. Manual baseline `be613707`. Preserve the active OPALX feature checkout, unrelated untracked files, Getting Started and finalized appendices.
- Produce 154 numbered findings: 110 proposed corrections, 42 correctly worded existing availability notices highlighted unchanged, and two discussion questions. Colors: 16 red English items, 77 orange feature/availability items, 61 blue technical/units/link items. IDs use `UG-<chapter>-<number>`; original wording and evidence are preserved in USER_GUIDE_6_24_AUDIT.md and `_site/user-guide-audit.html`.
- Verify public parser names and runtime consumers separately. Cover missing catalog entries, normalized-strength conventions, inactive options, daughter-beam rules, FFT2D5 setup/restrictions and unavailable legacy interfaces. Retained OPAL material is checked for presentation/provenance, not newly validated physics; future plans remain unconfirmed. No source repairs or new issues.
- Flag the current-master absence of BEAMBEAM registration while retaining its earlier description. Keep SOLENOID scaling and incomplete vertical FFA restrictions user-facing. Blue questions retain uncertainty about RF field-sampling ns/seconds and coasting TURNS/space-charge restrictions versus validated configurations.
- Add shared review colors/legends and an Elements sidebar entry; update three stale literal validator expectations. Full HTML and report renders pass without warnings; rerender BEAM after repairing a nested-marker insertion. Source/document checks pass 56 chapters/7 assets; links pass 64 pages; all154 targets/colors/index links, original explicit anchors, body ID uniqueness, variant containment, scope hashes and whitespace checks pass.
- Browser checks confirm the index, red table text, blue prose and orange availability section. Existing Getting Started and Appendix sources remain hash-identical. No numerical tests, PDF, commit or push. Findings await discussion. Scripts, source snapshots and verification records are in `/Users/adelmann/git/opalx/output/user-guide-audit-6-24/`.

### 2026-10-29 — accept all red User Guide language edits

- User accepted all red language changes. Accept the 16 English findings in chapters 6–24; remove their red styling and visible review labels while retaining plain anchors and approved wording. Chapter 7 has only blue findings, so its three proposals remain pending. Earlier Getting Started red release-audit markup is outside this language approval.
- Record decisions in the audit state and index/register without renumbering findings. All 138 orange/blue markers and their wording remain unchanged. Independent source comparison confirms exactly the approved span changes plus review legends; Getting Started and Appendix hashes remain unchanged.
- Render the full 56-chapter HTML manual and six report pages in `_site`, then regenerate the status-aware audit index. Source checks pass; renders have no warnings; links pass 64 HTML pages; all154 anchors, 16 accepted wording comparisons and 138 pending-marker HTML comparisons pass. Whitespace check passes. No OPALX code change, PDF, commit or push.

### 2026-10-29 — Chapter 8 revisions and expression-function issue

- Apply the user's V1.1.0 availability statement to UG-08-03 and exact RFCAVITY description to UG-08-05. Keep their orange annotations and all stable audit IDs. User-confirmed version information is recorded separately from the original source audit.
- Remove the entire UG-09-07 paragraph from Command Format. Create and verify open OPALX #650, https://github.com/OPALX-project/OPALX/issues/650, to investigate USER0/USER1/USER2, GETEKIN(), and SI()/SC()/SO(). Check related issues first and reference #533's overlapping GETEKIN ownership question. Issue evidence is pinned to master 9a14973b; no runtime tests or code fixes. UG-09-06's function catalog is unchanged.
- Retain UG-09-07 only in the audit record/index, linked directly to #650. Counts: 154 historical findings, 16 accepted language edits, 137 pending findings and one moved to issue. The manual has 153 finding anchors; no removed paragraph/anchor remains.
- Independent comparison confirms only the three requested content changes plus review legends; all16accepted spans, all135otherpending markers and Getting Started/Appendix hashes are preserved. Full book and six reports rendered in `_site` without warnings; source checks pass56chapters; links pass64HTMLpages; target/wording/status/variant checks and whitespace review pass. No commit or push.

### 2026-10-29 — accept Chapter 9/11 findings and revise the element catalog

- Accept UG-09-11, UG-09-13, UG-11-03, UG-11-04, UG-11-05, UG-11-06, UG-11-08 and UG-12-05. Remove review colors and visible labels while keeping exact approved wording and stable plain anchors. Two multi-block entries retain neutral divs for their code/table.
- Set UG-12-02 BEAMBEAM availability to V1.1.0, consistent with the user's UG-08-03 decision; retain its orange availability marker. Remove exactly the current OPALX DRIFT GEOMETRY and NSLICES rows (UG-12-06), keeping L and other elements' GEOMETRY entries. Remove the stale mandatory NSLICES documentation check.
- Record 24 accepted, 128 pending, one moved to OPALX #650, and one removed finding. IDs do not change; the removed entry remains in the audit record without a broken manual link.
- Independent exact source comparison confirms the eight approvals, version revision and two-row deletion only, apart from review legends. All earlier 16 language approvals, other 127 pending markers and Getting Started/Appendix hashes remain unchanged. Full book and six report renders have no warnings; source validation passes56chapters; links pass64HTMLpages; accepted-wording, pending-marker, target/status/variant/heading and whitespace checks pass. No code changes, new issues, commit or push.

### 2026-10-29 — remove VERTICALFFAMAGNET from the manual

- User approved the remaining UG-12-03 change: retain SCALINGFFAMAGNET as a normal overview row with a plain anchor. Remove VERTICALFFAMAGNET from the overview, its subsection, the input-language catalog, element reference and sidebar. Retire UG-08-06 and UG-12-32 in the audit record without renumbering. Source code is unchanged.
- Narrow the catalog completeness claims after this intentional omission. Keep the horizontal scaling FFA reference linked. Remove the stale mandatory vertical-magnet catalog check and update the scope-text validation to retain the registration/coverage distinction.
- Fix a table-separating blank line left by deleting the input-language row, then rerender that page. Automatic permission review timed out before the first repair invocation; the narrower one-line retry succeeded.
- Source checks pass56chapters, full book and six reports render without warnings, strict links pass64HTMLpages, and final checks confirm no live vertical-magnet references outside audit history. All25accepted targets,125pending markers, original headings/variants, complete catalog-table rows and Getting Started/Appendix hashes pass. Audit totals:25accepted,125pending,1movedtoissue,3removed. Whitespace check passes. No code changes, new issue, commit or push.

### 2026-10-29 — Chapter 12–15 review decisions

- Accept UG-12-17, UG-12-14, UG-12-18, UG-12-19, UG-12-20, UG-12-21, UG-12-22, UG-12-33, UG-13-02, UG-13-04, UG-15-01, UG-15-02 and UG-15-06. Keep exact wording and stable plain anchors; remove review styling/labels. Three table-row findings retain all cells, including the second ENTRYOFFSET row.
- Replace UG-12-07's obsolete registration discussion with BEAMBEAM availability in V1.1.0. Remove UG-12-10, UG-12-23 and UG-14-01 only; preserve the PROBE fresh-TRACK guidance and original DUMPEMFIELDS summary bullet.
- Record totals:38accepted,109pending,6removed,1movedtoissue650. IDs and prior decisions are unchanged. Independent exact source review preserves all25earlier approvals,108otherpending markers, definition-list indentation and Getting Started/Appendix hashes.
- Full 56-chapter book and six reports render without warnings. Source checks pass56chapters; strict links pass64HTMLpages; approved-wording, pending-marker, targets/status/variant/heading, complete-table and whitespace checks pass. No OPALX code changes, new issue, commit or push.

### 2026-10-29 — Chapter 7–18 decisions and interface cleanup

- Apply the user's remaining approvals in Chapters 7, 8, 16, 17 and 18, retaining accepted wording and stable plain anchors. UG-07-01 omits the exceptions sentence. Retain the user-supplied wording for UG-08-08, UG-16-08, UG-17-02/06/12 and UG-18-18 with their pending blue/orange review markers. Preserve the Time-dependence definitions link.
- Delete UG-17-07, UG-18-22 and the entire P3M cathode-correction paragraph containing UG-18-03, as requested. Preserve all previous decisions, Getting Started sources, finalized Appendix sources and unrelated local/untracked files. Totals after those removals: 154 historical IDs, 53 accepted, 89 pending, 11 removed and one moved to OPALX #650.
- Remove obsolete solver descriptions, overview/parameter entries, navigation and compatibility rows at the user's request. Preserve unrelated option defaults. Retire UG-18-01/04 and retain the remaining solver choices. Original evidence is preserved outside this checkout.
- Update the physics ownership diagram's TikZ source and regenerate its existing PNG natively with pdflatex and pdftoppm. The 1985-by-1404 image is 263,334 bytes; matched before/after native renders differ only in the edited backend-label area. Visual inspection confirms no clipping. Update stale source/render validators to require FFT2D5 at subsection 18.1.5; Binning remains 18.8.
- Persist all decisions and context deletions in the audit tooling. Independent review found and fixed a regeneration-only table-joining bug when deleting an entire row around an inline finding. The actual and regenerated solver tables retain NONE, FFT, OPEN, P3M and FFT2D5 together.
- Full 56-chapter HTML book and six reports rendered into the primary _site without warnings/errors; refresh the audit index. Source checks, seven-asset documents checks, strict links across 64 HTML pages, all finding statuses/anchors, requested wording, accepted-text preservation, unchanged pending-marker HTML, scope hashes and whitespace checks pass. Live source/rendered book/search checks confirm the requested removals. Local browser preview confirms the five-row solver catalog and FFT2D5 numbering. No OPALX code changes, numerical tests, PDF, new issue, commit or push.

### 2026-10-29 — accept eleven revised entries and refresh the remaining-work summary

- User explicitly accepted UG-08-03/05/08, UG-12-02/07, UG-16-08, UG-17-02/06/12 and UG-18-08/18. Preserve the already requested wording, remove review colors/labels, and retain plain anchors. Update the five chapter legends without changing other findings.
- Put a remaining-only chapter table first in the Markdown audit register and local HTML index, with links to every pending finding. Collapse the full status accounting, original wording and evidence under audit history in the HTML index. Stable historical IDs remain available.
- Totals: 64 accepted, 78 pending, 11 removed and one moved to issue #650. Remaining review: 58 proposed corrections, 18 existing availability notices and two technical questions; colors are 23 orange and 55 blue. All English edits and Chapters 6–7 are complete. Next discussion is UG-08-04/07. No additional approval category remains for the eleven accepted revisions.
- Source checks and full 56-chapter HTML plus six report renders pass without warnings. Strict links pass across 64 pages; verification confirms all 64 accepted texts, all 78 unchanged pending markers, every summary link/count, collapsed complete history, scope hashes and table structure. Whitespace checks pass. No OPALX code changes, numerical tests, PDF, commit or push.

### 2026-10-29 — Chapter 8/9 approvals, rejection and SELECT removal

- Accept UG-08-07, UG-09-03, UG-09-05, UG-09-06 and UG-09-09. Apply the catalog finding as four linked rows for SCALINGFFAMAGNET, TANH, ENGE and ASYMMETRIC_ENGE; remove the audit-only instruction that the catalog needs those entries. Keep all other accepted wording and plain anchors.
- Reject UG-09-10 and restore its original general-language sentence without review styling. Preserve the generic place/range grammar. Store the rejected proposal and user decision in the audit history rather than presenting it as pending.
- Remove the SELECT command section/attribute table, catalog/reference rows, SELECT examples and legacy/template statements. Retire UG-09-12 and remove its orphan Examples caption. Preserve ordinary select verbs, general regular-expression forms and UI selectors. Narrow the intentionally non-exhaustive catalog metadata/reference wording and remove the stale mandatory SELECT validator token.
- Record 154 stable historical IDs: 69 accepted, 71 pending, 12 removed, one rejected and one moved to issue #650. Remaining items are 51 proposed corrections, 18 existing availability notices and two technical questions; colors are 22 orange and 49 blue. Chapter 8 now has only UG-08-04 left.
- Source checks and full 56-chapter HTML plus six reports pass without warnings; strict links across 64 rendered pages, finding statuses/anchors, accepted-text and unchanged-pending-marker comparisons, new catalog-table rows, rejected original wording, no-SELECT source/book/example/search scans and whitespace checks pass. All unrelated local/untracked files and scope hashes are preserved. No OPALX code changes, numerical tests, PDF, new issue, commit or push.

### 2026-10-29 — Chapter 10/11 approvals and SELECT verification issue

- Accept UG-10-01, UG-10-02, UG-10-03, UG-10-04, UG-11-01 and UG-11-02. Preserve their exact corrected HELP/constant/EVAL syntax, P0 units/default and dump-frequency behavior; remove review colors and visible labels while retaining stable plain anchors. Remove the entire UG-11-07 paragraph including its trailing Binning link; keep the separate accepted option-table entries unchanged.
- Create and verify open OPALX #651, https://github.com/OPALX-project/OPALX/issues/651, for the removed UG-09-12 SELECT examples. Check existing open/closed issues first; no matching verification issue found. Current remote master remains 9a14973b. The issue has pinned source evidence, corrected command fragments, default-line/regex/flag/consumer checks and an explicit statement that no runtime reproducer was run or failure confirmed. No OPALX implementation changes.
- Transfer UG-09-12 from removed to moved-to-issue status while keeping its examples absent from the manual. Extend audit regeneration to remove replacement-context findings that moved to an issue, so later rebuilds do not restore the examples. Preserve all 154 IDs and update the pending-only summary dynamically; Chapters 6, 7, 10 and 11 have no remaining findings.
- Totals: 75 accepted, 64 pending, 12 removed, one rejected and two moved to issues #650/#651. Remaining items: 44 proposed corrections, 18 existing availability notices and two technical questions; 22 orange and 42 blue across 15 chapters.
- Source checks, full 56-chapter local HTML and six report renders pass without warnings; strict links across 64 pages, accepted-wording/unchanged-pending-marker comparisons, status/history/summary links, scope hashes, complete removal/variant/table checks, requested-removal scans and whitespace checks pass. Independent source/regeneration review preserves unrelated content and user files. No numerical tests, PDF, commit or push.

### 2026-10-29 — remove excluded material from the published audit history

- Omit the user-excluded historical material from the Markdown register and rendered audit index, including comparison fields and decision notes. Keep neutral removed-entry records for UG-18-01/04 so all 154 finding IDs and status counts remain stable. Private baseline evidence and backups stay outside the manual checkout.
- Generate both published audit views from a filtered presentation so later rendering does not reintroduce the excluded content. Keep the current guide, unrelated accepted wording, remaining review items, issue links and user files unchanged. Update older maintenance descriptions to avoid retaining the excluded information here.
- Refresh the local audit page in the primary _site. Source validation, strict links across 64 pages, existing finding/status/wording/scope checks and full public-content removal scans pass. Unrelated third-party script identifiers are preserved. No source-code changes, new issue, numerical tests, PDF, commit or push.

### 2026-10-29 — Chapter 17–19 approvals and missing binning-selector implementation

- Accept UG-17-01, UG-17-05, UG-17-11, UG-18-09, UG-18-12, UG-18-13, UG-18-16, UG-18-21 and UG-19-02. Preserve the exact corrected input example, availability warning, cutoff description, mesh/reference-path/PIC/numeric rules and timing statement. Remove their review styling/labels while retaining plain anchors and list/table structure.
- Keep UG-18-20 explicitly pending: the user did not accept the missing implementation as resolved. Preserve its accurate warning and add a normal link to the implementation issue. Create and verify open OPALX #652, https://github.com/OPALX-project/OPALX/issues/652, requesting POSITIONZ and PZ binning support end to end. Related closed #238 proposed the interface; no duplicate current implementation issue was found. Remote master remains 9a14973b.
- The issue contains pinned parser/conversion/validator/runtime evidence and proposed definitions, membership, adaptive/fixed, edge-case and single-/multi-rank criteria. Validation changes alone cannot supply the missing runtime selectors. No source fix or runtime reproduction is claimed; the issue explicitly records source inspection only. Keep the finding in the remaining-review summary, with a separate issue link in the public history and manual.
- Totals: 84 accepted, 55 pending, 12 removed, one rejected and two moved to issues #650/#651. The additional implementation issue #652 belongs to pending UG-18-20. Remaining review: 37 proposed corrections, 16 existing availability notices and two technical questions; 20 orange and 35 blue. Stable IDs and earlier decisions are preserved.
- Source validation, full 56-chapter HTML and six report renders pass without warnings; strict links across 64 pages, all accepted wording, unchanged pending marker HTML including UG-18-20, issue-link/status/summary checks, source scope hashes, table/list/variant integrity, removed-content scans and whitespace checks pass. Independent diff/regeneration review confirms no unrelated semantic changes. No numerical tests, PDF, commit or push.

### 2026-10-29 — canonical TRACK integrator names and Boris input issue

- Resolve UG-19-03/04 by removing their unused tracking-control rows. Resolve UG-19-05 with the canonical documented choices RK4 and LF2; preserve the fact that ordinary production tracking currently uses Boris independently of this setting and link the implementation issue. Remove the associated obsolete compatibility option and stale mandatory documentation checks. Keep COF, spectral-ray and transfer-map integrator choices unchanged.
- Create and verify open OPALX #653, https://github.com/OPALX-project/OPALX/issues/653, for explicit Boris input and consistent requested/effective integrator behavior in TRACK. Search open/closed issues first; no matching issue found. Evidence is pinned to current master 9a14973b and shows parser/setup choices, omitted forwarding and the actual production pusher. The issue proposes help/logging, dispatch-or-clear-rejection, defaults/aliases and regression criteria; no runtime reproduction or source fix is claimed.
- Retain all 154 historical IDs. Publish neutral removal records for UG-19-03/04 and omit deleted interface details from public comparisons, with original evidence preserved outside this checkout. Regeneration and verification now guard the removed interface text as well as earlier exclusions, so it does not return through audit history.
- Totals: 85 accepted, 52 pending, 14 removed, one rejected and two moved to issues #650/#651. The additional implementation issues #652/#653 remain linked to their relevant findings. Remaining review: 37 proposed corrections, 13 existing availability notices and two technical questions; 17 orange and 35 blue. Chapter 19 has seven pending findings.
- Source validation, full 56-chapter HTML and six report renders pass without warnings. Strict links across 64 pages, all approved/current wording, remaining marker preservation, table/list/variant structure, issue/status/summary checks, unchanged COF/ray/map choices, public removed-content scans and whitespace checks pass. Independent source/regeneration review confirms no unrelated semantic change. No numerical tests, PDF, commit or push.

### 2026-10-29 — Chapter 19–24 availability wording and approvals

- Remove the complete current RUN row for UG-19-06 and the specific COF paragraph UG-19-10, preserving retained legacy rows, preceding field/aperture discussion and following results. Remove the obsolete mandatory current-interface token from source validation.
- Accept UG-19-08/09/11 without changing their boundary-refinement, turn-count or handover physics and restrictions. Apply the user's final availability wording to UG-19-07 and UG-20-01/21-01/22-01/23-02, plus the later UG-24-01 steering. These are final accepted replacements, with spelling normalized to 'Not yet available.' for reverse tracking. Preserve all legacy OPAL content and current/legacy variant fences.
- Initial source validation and rendering stopped because five availability checks required the previous wording. Update those checks to the full approved availability statements and rerun successfully. Original failure logs are retained outside the manual checkout with the guarded patch snapshot.
- Totals: 94 accepted, 41 pending, 16 removed, one rejected and two moved to issues #650/#651. Linked implementation issues #652/#653 remain unchanged. Remaining review: 34 proposed corrections, five existing availability notices and two technical questions; six orange and 35 blue in 14 chapters. Chapters 6, 7, 10, 11 and 21 have no remaining findings; Chapter 19 retains only UG-19-01.
- Source checks, full 56-chapter local HTML and six reports pass without warnings after the validator repair. Strict links across 64 pages, all exact requested replacements, existing accepted text and remaining pending-marker preservation, bullet/table/variant structure, scope hashes, linked issues, removed-content scans and whitespace checks pass. Independent source/regeneration review confirms no unrelated semantic changes. No implementation changes, numerical tests, new issue, PDF, commit or push.

### 2026-10-29 — rebuild the remaining User Guide audit

- Rebuild the audit register and local index from every recorded user decision without changing guide content, accepted/rejected status or stable IDs. The original source audit remains against master 9a14973b; this pass reconciles remaining work rather than claiming a new source audit.
- Separate the 41 unresolved entries into 40 manual review decisions and one implementation hold, UG-18-20 linked to #652. The 40 comprise 33 proposed wording corrections, five already accurate availability notices to confirm and two technical questions. Add concrete chapter topics and preserve every numbered pending link.
- Verify issues #650, #651, #652 and #653 are OPEN through GitHub CLI on 2026-10-29. Show a separate issue table with scope, audit relationship and verification date. Issue #652 is already the one held entry; the other three concern resolved manual edits and are not extra manual decisions.
- Highlight the two technical decisions: reconcile UG-13-01 with accepted UG-19-09 on space charge and turn counting, and resolve UG-14-03 RF field-sampling time units. Mark commit/push and publication as still outstanding; local edits remain uncommitted.
- Regenerate only the audit page because no chapter source changed. All 93 QMD source hashes and the complete canonical audit remain unchanged. Local strict links pass across 64 pages; all 154 IDs/statuses, accepted wording, pending marker preservation, issue-table/classification counts and excluded-content checks pass. Totals remain 94 accepted, 41 pending, 16 removed, one rejected and two transferred to issues. No new issue, numerical tests, PDF, code change, commit or push.

### 2026-10-29 — selector wording, allocation approval and source-list attributes

- Apply the user's exact UG-18-20 statement: 'The parser accepts VELOCITYZ, GAMMAZ.' Accept that documentation finding and UG-16-05's allocation/charge-weighting explanation. Keep issue #652 OPEN for the separate selector implementation; its audit relationship now records resolved documentation rather than a held manual finding.
- Check SOURCES on freshly confirmed master 9a14973b. It is an attribute name, not a standalone registered command. BEAM.SOURCES actively names an EMISSIONSOURCELIST; TRACK.SOURCES is explicitly ignored, and RUN obtains each selected beam's source list. List labels are user-defined. The user then requested removal of UG-19-01 and acceptance of UG-16-01: remove only the current TRACK table row and retain the active BEAM row and daughter-beam rule.
- Update validation to require the two documented selector names and remove its obsolete parser/runtime restriction wording. Remove only the tracking-specific mandatory source-list token while retaining the beam-interface check. No parser or runtime implementation changed.
- Totals: 97 accepted, 37 pending, 17 removed, one rejected and two transferred to issues. All 37 unresolved entries are manual decisions; no implementation hold remains in that count. The four source issues stay separate. Remaining review: 31 proposed corrections, four existing availability notices and two questions; five orange and 32 blue across 13 chapters. Chapters 6, 7, 10, 11, 19 and 21 have no remaining findings.
- Source checks, full 56-chapter local HTML and six reports pass without warnings. Strict links across 64 pages, exact selector wording, accepted allocation/source-list text, unchanged remaining markers, correct BEAM/TRACK ownership, issue/status/summary counts, scope hashes, variant/table integrity, removed-content scans and whitespace checks pass. Independent diff and temporary regeneration review preserves unrelated content. No code change, numerical tests, new issue, PDF, commit or push.

### 2026-10-29 — Elements cleanup, field-output decisions and RF sampling issue

- Accept UG-14-05/04/02, UG-13-01/03/05, UG-12-09/12/13 and the later UG-12-25/26, UG-09-04 and UG-08-04 instructions. Preserve every approved proposal's wording, equations, table cells and restrictions while removing review styling/labels. UG-13-01 is a user documentation approval of the existing restriction, not a new runtime-validation result.
- Remove the complete Elements introductory coverage paragraph (UG-12-01), common-attribute row (UG-12-04) and named-command example (UG-09-01). Close the surviving named-command prose with a period. Preserve variant fences and neighboring content.
- User explicitly limited the attachment-attribute cleanup to Elements, including retained legacy tables/examples. Remove the matching current/legacy rows, definition-list and bullet entries, and entire coupled Degrader/Vacuum examples. Preserve the two other UG-12-24 rows and its pending anchor, unrelated OUTFN documentation, generic legacy physics, Chapter 22, its downloadable example and navigation. Private original evidence remains outside this checkout; public chapter-12 history omits the deleted attachment row details.
- Create and verify open OPALX #654, https://github.com/OPALX-project/OPALX/issues/654, for RF sampling time units. Remove UG-14-03's inserted review note and link its audit record to the issue. Master remains 9a14973b. The issue traces declared ns units through unchanged numeric forwarding to the RF element convention, records no reproduced numerical failure and asks for an explicit compatibility decision plus independent RF-phase tests.
- Adapt only the stale Elements attribute/introduction validation requirements. Initial source checking caught the deleted-introduction literal; remove that requirement and rerun successfully. Persist all removals and context changes in audit regeneration. Pending-only question sections disappear because the two original questions are now approved or transferred; private baseline evidence remains.
- Totals: 110 accepted, 20 pending, 20 removed, one rejected, three transferred to issues. Remaining review: 19 proposed corrections and one existing availability notice; one orange and 19 blue across 10 chapters. Source issues #650–#654 remain separate. Chapters 6, 7, 8, 9, 10, 11, 13, 19 and 21 have no pending findings.
- Source checks, full 56-chapter local HTML and six reports pass without warnings. Strict links across 64 pages, all 13 approved texts, remaining marker preservation, scoped Elements cleanup/partial-row integrity, Chapter 22 and navigation hashes, issue/status/summary checks, variant/table/list structure, excluded-content scans and whitespace checks pass. Independent diff/regeneration review preserves unrelated content. No implementation changes, numerical tests, PDF, commit or push.

### 2026-10-29 - DOC-USER/DOC-PHYS: spin, decay and elements

- OPALX revision: `9a14973b0` (master). Manual base: `be61370`, branch
  `update-spin-decay-elements`.
- Reviewed: Spin Tracking and Decay Processes pages in full; BEAM spin and
  decay rules; MONITOR spin output; restart spin rule; User Guide elements
  common syntax, QUADRUPOLE, MULTIPOLE, SOLENOID, RFCAVITY/TRAVELINGWAVE
  `FAST`, LASER, MARKER, RBEND/SBEND, VARIABLE_RF_CAVITY, time dependences;
  bend and multipole physics sections; RBEND `1DProfile1` reader.
- Changed: spin is turned twice per step by half the step, around the Boris
  kick, with no sub-steps; `.stat` spin columns; TEMPORAL monitor spin axes.
  Decay: corrected V-A sign (mu+ positron along the spin), pion-daughter spin
  boost, Michel acceptance, seed formula, step order, daughter placement,
  DAUGHTERBEAM rules. Elements: MULTIPOLE rules (no dipole, five entries,
  errors applied, all orders for particles and reference), global `P0`
  rigidity, bend attributes (dipole and quadrupole only, Enge fringe, RBEND
  `E1`/`E2`, `GAP`, `DESIGNENERGY`, `FMAPFN`), SOLENOID `KS` and `ZREVERSE`,
  `FAST` unused, LASER not trackable, MARKER not placed. Bend page: removed the
  unimplemented sliced model, the linear fringe ramp, the Bmad comparison and
  the C-type chicane example (with their figures and input files), which
  described earlier bend code; class diagrams use the current classes.
  Validator strings for MULTIPOLE updated.
- Field maps: User Guide `FIELDMAP` section checked against the source, no
  change needed. OPALX part of Appendix A checked line by line: corrected the
  `SOLENOID` row (it does not check the map type), the 2D flag effect (the map
  fails to load), `FREQ` replaced by the map frequency, ASTRA resampling and
  sample rules, 2D zero-field and radial-origin limits, 3D off-axis phasing,
  G4beamline key, block and `ZREVERSE` range rules, unsupported-header error
  text, and the `RBEND` `1DProfile1` Type 2 layout.
- Not changed (user decision): BEAMBEAM and PROBE sections, which describe
  unmerged OPALX branches; SCALINGFFAMAGNET, VERTICALFFAMAGNET, MULTIPOLET and
  the end-field models.
- Verification: source validator, full HTML and report renders (no warnings),
  rendered-HTML validator on 63 pages, whitespace check. Browser tests not run.
- Open items: new bend benchmarks against the current code are needed; ENGE and
  ASYMMETRIC_ENGE formula text in the elements page is wrong; OPALX
  `Beam.cpp` help text says POLARIZATION is along lab axes.
- Next trigger: merge of BEAMBEAM or PROBE, or the next element interface change.

### 2026-10-29 — pull origin and reconcile local audit

- Pull main from origin with fast-forward only: be61370 to 71b982d, including the spin, decay and element update in PR #22. Preserve the original local tracked/untracked work in a hash-verified full-tree archive and named temporary stash; retain the user's pre-existing stash.
- Reapplying local work caused six conflicts: this maintenance record, the element reference, source validator, BEAM, Elements and the input catalog. Resolve them by combining incoming corrections with existing user decisions and scoped removals. Tracking merged cleanly. Remove three older maintenance-log conflict delimiters while preserving both historical bodies.
- The incoming corrections supersede earlier wording for UG-12-09/11/12/13/24 and UG-16-02. Retain their IDs and review states, use corrected technical wording in the manual, and record separate upstream notes in the audit history. All 154 IDs remain: 110 accepted, 20 pending, 20 removed, one rejected and three transferred to issues. The five implementation issues remain separately recorded; this pull does not change them.
- Keep the historical audit baseline immutable. Add a hash-checked three-way overlay to regeneration, applied to the complete source plan before writes, so future review decisions preserve incoming changes or stop on conflicts. Exact regeneration of all 21 merged sources passed. Three earlier source copies had excess blank lines normalized; their text is unchanged.
- Validation: 56-chapter source validator and seven-document asset catalog pass; full manual and six reports render locally without warnings; strict links pass across 64 pages. Audit checks preserve statuses, remaining markers, user exclusions, scope and anchors; Field Maps matches the pulled revision. Thirteen incoming paths outside local overlap match the commit, and 471 other existing files remain byte-identical. No unresolved or staged paths remain. Local edits are uncommitted; no push or OPALX code changes.

### 2026-10-29 — refresh audit documents and remove chapter review boxes

- Update the User Guide register and local audit index with current chapter topics and a linked action table for all 20 pending findings. Preserve all 154 IDs and user decisions: 110 accepted, 20 pending, 20 removed, one rejected and three moved to issues. Describe the current imported bend behavior rather than its superseded historical warning.
- Create opalx-v1.0-audit.md as the release overview; update the Getting Started audit's stale next step and current review status. Keep three Getting Started red review pages unchanged. Record the existing release/regression execution limitation separately.
- Identify two additional documentation consistency follow-ups outside the original pending count: Cyclotron versus TRACK descriptions of TURNS with space charge, and the BEAM catalog/current-frequency wording plus the obsolete attribute-assignment example. Existing accepted source text is unchanged pending a wording decision. Enge corrections already belong to UG-12-28–31.
- Recheck source issues #648–#654 through GitHub CLI; all seven are OPEN on 2026-10-29. Keep the two Auto-phasing issues separate from the five User Guide-linked issues and from manual review decisions. No new issues or implementation changes.
- Remove exactly 19 Local review boxes, keeping audit CSS includes, all colored numbered proposals, stable anchors and approved wording. Remove the unused box CSS rule. Persist the removal after upstream reconciliation so regeneration cannot restore the boxes; exact regeneration of all 21 chapter/include files passes.
- Source checks, the seven-document catalog, full manual and six-report local renders, 64-page HTML/link checks, audit-status/action/marker checks, source-preservation and whitespace checks pass. The previous Chapter 22 content guard was adapted only to permit this requested box removal; its remaining body and example stay unchanged. No commit or push.

### 2026-10-30 — clear red change indications in Chapters 2–4

- At the user's request, remove the three Getting Started red CSS blocks and review-copy notices, four content-wrapper pairs and three inline Fortran-table spans. Keep all revised wording, command blocks, examples, links, front matter and review dates. Chapter 5 and all other chapter sources remain unchanged.
- Update the audit records and local index to clear the obsolete three-page red-review item. Record current manual base cbefafd and presentation date 2026-10-30 separately from original audit/source revisions and issue verification on 2026-10-29. All 154 User Guide finding records remain unchanged. The original release/regression execution limitation remains recorded.
- Render the full manual and six reports in the primary _site. Source checks across 56 chapters, the seven-document catalog, strict links across 64 pages, audit checks and whitespace pass. All three rendered chapter bodies compare equal to their previous versions after removing the review-copy notice; no review class remains. Independent source review confirms no content changes. No commit or push.

### 2026-10-30 — repair the failed GitHub browser checks

- Inspect run 41016848412 at cbefafd. Source validation and the full HTML build succeeded; three interactive checks failed and deployment was skipped. Both Binning URL cases expected a removed runtime-only sentence, while the selector switching test clicked the one-pixel transparent radio input and timed out behind its visible Both label.
- Update Binning to the approved parser wording. Exercise visible OPAL/Both labels for mouse selection, assert the corresponding accessible radios are checked, and retain keyboard ArrowRight, visibility, persistence, navigation and responsive-layout checks. No manual physics claim, selector markup, CSS or workflow is changed by this repair.
- Reproduce the two stale Binning failures locally; the selector passed locally, with its platform-sensitive hit-test failure documented in CI. After the repair all 13 browser tests pass. The latest-changes suite passes 26 tests and 339 assertions; source validation passes 56 chapters, strict rendered links pass 64 pages, and whitespace checks pass. Its first sandboxed fixture render could not access Quarto's Sass cache; rerunning with normal access passed.
- User explicitly authorizes commit and push of the pending cleanup, audit records and CI repair to opalx-manual/main. Preserve the original audit statuses and the generated PDF outside this repository. Verify the resulting Actions build and publication after pushing.

### 2026-10-30 — Physics audit PH-28-01 accepted

- Apply the explicitly accepted chapter 28 opening correction: time-based three-dimensional tracking, self-consistent electrostatic space charge, and current unavailability of short-range wake-field models. Preserve all seven pending first-batch passages exactly.
- Detailed chapters 28–35 audit remains in progress; the chapter review date is unchanged. Decision data and active task state are in `/Users/adelmann/git/opalx/output/physics-audit-28-35/`.
- Manual validator passes 56 chapters; chapter 28 HTML renders successfully; whitespace and the focused diff were checked. No code change, simulation, commit or push.

### 2026-10-30 — Physics audit PH-28-02 rejected

- Record explicit rejection of PH-28-02; verify the original comparative/parallelism paragraph remains unchanged. PH-28-01 remains applied; PH-28-03–08 remain pending. No chapter text changed for this decision.

### 2026-10-30 — interactive English review: REF-42-01

- Review Reference Chapters 41–45 for English only. The user requested one proposal at a time, with acceptance, rejection or custom wording before editing. Chapters 41 and 45 need no material English correction. Three conservative candidates were recorded privately; only REF-42-01 has been presented and accepted.
- In the Chapter 42 closing cross-reference, replace "for detailed bends and multipoles" with "for detailed descriptions of bends and multipoles" and separate the parallel API reference with a comma. Preserve both link destinations and all technical claims. No other Reference chapter is changed; REF-43-01 and REF-44-01 remain for later decisions.
- Leave the unrelated physics-overview work untouched; concurrent user edits to that page were observed during verification. The changed Reference page renders in the primary _site; source checks across 56 chapters, strict links across 64 pages, exact-replacement/link preservation and whitespace checks pass. No commit or push is authorized for this English review.

### 2026-10-30 — Physics audit PH-28-04 accepted

- Apply the accepted OPEN standard/integrated and shifted-Green cathode-image wording; remove the exclusivity claim and retain the cited references. Preserve all other pending/rejected passages. Full chapter audit remains incomplete.

- PH-28-04 validation: 56-chapter manual validator and whitespace checks pass; diff reviewed. Chapter 28 HTML render succeeds with normal filesystem access after sandboxed Quarto Sass-cache database access failed. No commit or push.

### 2026-10-30 — Physics audit PH-28-05 accepted

- Apply the accepted particle-source wording: energy binning is optional and scoped to three-dimensional electrostatic space-charge calculations. Preserve the scientific citation and all rejected/pending passages. Full chapter audit remains incomplete.

- PH-28-05 checks: 56-chapter validator, whitespace check and chapter HTML render pass; focused diff reviewed. No code change, simulation, commit or push.

### 2026-10-30 — interactive English review: REF-43-01

- Apply the user's accepted Chapter 43 comparison: the last bits can differ from those of an uninterrupted run or a run with a different MPI rank count. Preserve the valid-continuation qualification, possible causes, technical terms and all other text.
- Keep REF-42-01 accepted/applied. REF-44-01 remains for the next one-at-a-time decision. Leave the independent physics-overview review and its maintenance entries untouched. No commit or push.

- REF-43-01 validation: exact accepted replacement, unchanged links and other Reference source hashes, focused Chapter 43 render, 56-chapter source checks, 64-page rendered links and whitespace checks pass. No commit or push.

### 2026-10-30 — Reference English review complete: REF-44-01

- Apply the final accepted article correction in Chapter 44: "a NVIDIA ARCH" becomes "an NVIDIA ARCH". All three Reference English proposals are accepted and implemented; Chapters 41 and 45 remain unchanged. Preserve all technical claims, notation, identifiers, code, numbers and links.
- Chapters 42–44 render locally in the primary _site. Source validation across 56 chapters, strict links across 64 rendered pages, whitespace and independent exact-replacement/English checks pass. The unrelated physics-overview review and its maintenance entries remain untouched. No commit or push.
- The user next requests an English-only pass of Chapters 46–56, with a list first and one selectable decision prompt at a time. No source revisions in that new scope are applied before a decision.

### 2026-10-30 — link recovered sandbox Python archive

- Documents PR #3 is merged; verify the archive exists on main. Add six download links across Physics chapters 31–33, using documents-base-url metadata and preserving physics text and review dates. Identify the bundle as Python source only, excluding inputs and result data. No recovered scripts executed.

- Download-link verification: all three chapter HTML renders succeed; six rendered archive URLs match merged documents main. Manual validator and diff whitespace checks pass; focused diff reviewed. Changes remain local and uncommitted.

### 2026-10-30 — custom English wording: REF-48-01

- Apply the user's full replacement sentence in Chapter 48: "Fast regression cases are executed, and their results are compared to maintained / trusted results." Preserve the supplied slash wording. The user explicitly replaces the earlier serial-artifact and maintained-metrics phrasing.
- No other Chapter 46–56 proposal is applied yet. Preserve the completed Reference 41–45 edits and all concurrent physics/source-download work; do not replace existing maintenance entries. No commit or push.

- REF-48-01 validation: exact custom sentence and rendered text verified; other ten reviewed chapters, links and code blocks unchanged. Chapter 48 render, 56-chapter source checks, 64-page rendered links and whitespace checks pass. No commit or push.

### 2026-10-30 — Physics audit PH-28-06 deletion

- User clarifies blank custom wording means deletion. Remove the original undated multigrid promise without replacement; retain other review decisions.

### 2026-10-30 — accepted English revision: REF-51-01

- Apply the agreed Chapter 51 comparison between an active element's length and the distance covered in one integration step. Preserve the rest of the paragraph, kick-count condition and convergence advice. REF-48-01 keeps the user's custom maintained / trusted results wording. Only REF-53-01 remains for a decision in this English pass.
- Exact-replacement, other ten reviewed chapter hashes, links/code, rendered wording, 56-chapter source validation, 64-page rendered-link validation and whitespace checks pass. Chapter 51 renders in the primary _site. Preserve concurrent physics/source-download work and earlier Reference changes. No commit or push.

### 2026-10-30 — Chapters 46–56 English review complete: REF-53-01

- Apply the final accepted Chapter 53 paragraph describing documentation status and unexpected behavior in implemented features. All three proposals in this batch are accepted/applied, including the user's exact custom REF-48-01 sentence. The other eight chapters remain unchanged.
- Changed Chapters 48, 51 and 53 render in the primary _site. All eleven reviewed sources equal their baseline plus exactly the agreed replacements; links and code blocks are preserved. Source validation across 56 chapters, strict links across 64 pages, whitespace and independent English/source QA pass.
- The English reviews of Chapters 41–45 and 46–56 are complete locally, with six accepted revisions in total. Leave concurrent physics/source-download work and its maintenance entries untouched. No commit or push.

### 2026-10-30 — apply accepted Physics chapter 28 corrections and continue

- At the user’s explicit request, apply eleven cached acceptances (PH-28-03/07–16), retaining rejected PH-28-02 and prior accepted changes. Preserve complete symmetry prose after the T(x) correction and typeset normalized momentum in LaTeX. No code or numerical tolerance changes.
- Source reconstruction confirms only accepted replacements and their necessary presentation repair; 56-chapter validation, whitespace checks and chapter HTML render pass. PH-28-17–24 are the next interactive batch and remain unapplied. No commit or push.

### 2026-10-30 — publish accepted English revisions in Chapters 46–56

- Publish only REF-48-01, REF-51-01 and REF-53-01: the author's maintained / trusted regression-results sentence, the active-element length comparison and the documentation-status/implemented-behavior wording. The other eight reviewed chapter sources are unchanged.
- Source reconstruction confirms exactly the agreed replacements, with links and code preserved. Changed Chapters 48, 51 and 53 render locally; 56-chapter source checks, 64-page rendered-link checks, whitespace and independent source/English QA pass.
- User explicitly authorizes this scoped commit and push to opalx-manual/main. Earlier Reference 41–45 edits, concurrent physics work and their uncommitted maintenance history are excluded. Check the resulting GitHub Actions run after pushing.

### 2026-10-30 — apply Physics findings PH-28-17–32

- Apply all sixteen cached decisions at the user’s explicit request. Preserve custom PH-28-28 words exactly, with source whitespace reflow only. Retain all earlier decisions. Chapter-wide review date remains unchanged while the audit is incomplete.
- Source reconstruction verifies the exact accepted replacements against the saved pre-application chapter; rejected PH-28-02 remains unchanged. Manual validator (56 chapters), diff whitespace and chapter HTML render pass; focused diff reviewed. No code, simulations, commit or push.

### 2026-10-30 — publish remaining accepted Reference and physics revisions

- At the user’s explicit request, pull origin/main before committing and pushing the remaining manual work. The fast-forward-only pull reports already up to date; every pre-pull source hash is preserved and no conflicts occur.
- Include accepted Reference 41–45 English changes, the accepted Chapter 28 corrections (preserving rejected PH-28-02), six source-only Python archive links, and their maintenance history. The Chapter 28 completeness check and Chapters 29–35 audit remain unfinished; no pending proposal is published. Preserve existing stashes and all unrelated/generated artifacts.
- Review the complete source diff, validate the manual and documents links, and render the full manual plus reports in the primary _site before publication. Record validation and publication results in /Users/adelmann/git/opalx/output/manual-pull-commit-2026-10-30/.
- Pre-publication checks pass: 56-chapter source validation, eight cataloged documents, full manual and six report HTML renders, strict links across 63 rendered pages, all 13 browser tests, exact accepted Reference replacements, six rendered archive links, source-preservation hashes and whitespace. No code or simulation changes. Verify the new Actions build and published content after pushing.

### 2026-10-30 — apply Physics findings PH-28-33–36

- Apply the four accepted diagram, element-selection and autophasing corrections at the user’s request. Retain PH-28-37 unchanged as an open wording decision; the user confirms probes are work in progress.
- Exact source reconstruction and focused diff review verify only the four accepted replacements. Manual validator (56 chapters), whitespace check and chapter 28 HTML render pass. No commit or push.

### 2026-10-30 — apply revised PH-28-37

- User accepts the concise Work in progress notice and intended-model opening for cyclotron PROBE. Apply only those changes; preserve every equation and all remaining diagnostic text.
- Exact replacement and focused diff reviewed; manual validator (56 chapters), whitespace and chapter HTML render pass. No pending presented review decisions; changes remain local and uncommitted.
