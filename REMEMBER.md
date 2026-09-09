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
| `DOC-USER` | Synchronize the User Guide and reference | Monthly, before a release, and after parser or runtime interface changes | Incremental work on 2026-09-09 | Perform a complete command, element, option, and file-format audit |
| `DOC-PHYS` | Update the Physics Manual | Monthly and after physics, algorithm, or numerical changes | Incremental work on 2026-09-09 | Add a clean `MIDPOINT` versus `PRESTEP` timestep-convergence benchmark |
| `DOC-SANDBOX` | Review validated sandbox results for promotion | Monthly and when a sandbox study reaches a conclusion | Incremental work on 2026-09-09 | Classify the remaining current studies as proposal, validated result, or obsolete |
| `DOC-ARCH` | Synchronize architecture text and diagrams | After structural changes and during each monthly review | Incremental work on 2026-09-05 | Recheck diagrams against current class ownership and call paths |
| `DOC-LANGUAGE` | Enforce the manual language rules | Every documentation edit and during each monthly review | Initial rules and focused cleanup on 2026-09-07 | Complete the first contextual review of vague "path" wording |
| `DOC-HEALTH` | Check links, metadata, HTML, PDF, and interactive controls | Every manual change and at least weekly | CI investigated on 2026-09-07 | Confirm the workflow for the latest manual revision, then repeat weekly |

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
quarto render --profile opalx --to pdf --no-clean
ruby scripts/validate_rendered_html.rb
ruby scripts/validate_rendered_pdf.rb
git diff --check
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
