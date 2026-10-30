# Getting Started audit, 2026-10-27

Goal: audit chapters 2–5 for the 1.0.0 release and a simple regression example.
Manual baseline: 21f1678. Source: OPALX-1.0.0 (1a7bcf5a0).

Changes: explicit release tag/verification, Fortran prerequisite, complete unit-test
configure/build sequence, drift smoke test with supporting data, cluster checkout
and GPU-aware MPI requirements. Worked inputs inspected; unchanged.
Regression source inspected at a8bd50c40d66ecb2ce4a75d5c15b6ecb86ae5615.
No release-matched regression tag was established; default-branch caveat is explicit.
No public APIs or numerics changed. Existing review dates retained.
Source/link validation, focused HTML renders and diff review are complete; the results are recorded below.

Validation complete: source validator (56 chapters), focused HTML rendering of
all four Getting Started pages, rendered-link validator (63 pages), and diff
whitespace/review passed. Quarto required access to its normal Sass cache.
No visual browser inspection, fresh release build, simulation or PDF build ran.
Remaining limitation: regression default-branch compatibility with the release
was inspected at source level, not established by running this build.

Review presentation: added page-local red styling to the three changed pages,
including command blocks and the new dependency row. Unchanged worked inputs
retain normal formatting. All four pages rendered successfully; source,
63-page rendered-link and whitespace checks pass. Browser inspection was
blocked by the browser policy against file URLs; no workaround attempted.

Current status, 2026-10-30: the user requested removal of the red change
indications from Chapters 2–4. Their page-local red CSS, review-copy notices, content wrappers and inline
table-cell styling were removed, retaining all revised instructions, commands,
examples and links. The three chapters now use
normal formatting; no red presentation-review item remains. Worked inputs
(Chapter 5) and the recorded User Guide decisions are unchanged. Current manual
base: cbefafd.

Remaining validation limitation: the original audit did not run a fresh release
build or simulation, and did not establish a release-matched regression tag.
The documented default-branch caveat remains. See [the release audit
overview](opalx-v1.0-audit.md) for separate User Guide decisions,
cross-chapter consistency follow-ups and source issues.
