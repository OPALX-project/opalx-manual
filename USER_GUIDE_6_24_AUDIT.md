# User Guide chapters 6–24 — local audit

Review date: 2026-10-28. Every finding is numbered in the local HTML manual. Original wording and evidence are preserved below except material excluded at the user's request. Orange flags also identify existing, correctly documented restrictions without changing their wording. Blue review questions retain uncertainty. No OPALX code changes, simulations, commit, or push form part of this audit.

Manual baseline: `be613707d9768c8f1af606bc2cc068f561871a64`. Audited OPALX master: `9a14973b0030355e1291159281c5ed8e66c3ea56`; inspected from a separate source snapshot, preserving the active feature checkout.

Current manual: `72a3965`. Status refreshed on 2026-10-30. The original baseline and all recorded User Guide decisions are retained.

123 findings, including all 16 English edits, have been accepted and appear as normal text. 0 findings remain pending; 3 moved to an OPALX issue; 20 removed from the manual; 5 rejected with original wording restored; 3 retired from review with their legacy documentation retained. IDs remain stable. UG-08-03, UG-12-02 and UG-12-07 use the user's requested “Available soon” wording without a fixed release commitment; other future plans remain unconfirmed unless supported by evidence.

**Scope:** current OPALX and shared User Guide content in chapters 6–24. Retained OPAL comparisons are checked for provenance, clear availability boundaries and obvious presentation errors; this is not a fresh validation of historical OPAL physics. Getting Started and the appendices are outside this audit. The later origin/main synchronization updates Field Maps separately.

**154 findings:** 16 English, 77 Feature coverage / availability, 61 Technical / units / links.

## Remaining work

Decision summary updated: 2026-10-30. All recorded user decisions are included.

**0 manual review decisions remain.** Within the original audit these comprise 0 proposed corrections and 0 existing availability notices to confirm. Additional cross-chapter follow-ups are listed separately below.

The table below records any remaining manual decisions. Source verification and implementation issues are tracked separately below.

All English edits are accepted. Chapters 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24 have no pending findings in the original numbered User Guide audit. Counts describe documentation review, not a list of implementation tasks.

| Chapter | Manual decisions | Implementation hold | Remaining IDs |
|---|---:|---:|---|
| **Total** | **0** | **0** | **0 unresolved** |

Remaining marker colors: 0 orange and 0 blue.

No manual decisions remain.

## Pending decisions by finding

These proposals are already marked in the manual. Review the current wording; imported corrections take precedence over superseded historical proposals.

| Finding | Topic | Decision remaining |
|---|---|---|

## Cross-chapter consistency

2 documentation follow-ups are separate from the original numbered audit decisions. All 154 historical IDs/statuses are preserved. Resolution decisions are recorded below.

| Follow-up | Discrepancy | Resolution | References |
|---|---|---|---|
| CONS-01 | Cyclotron says explicit TURNS stopping is unsupported with space charge; TRACK says space charge is allowed and can use TURNS. | Resolved 2026-10-30: user accepted space-charge support under the documented TURNS restrictions; corrected both Cyclotron restrictions while retaining the fixed-step example. | [UG-13-01](_site/user-guide/cyclotron.html#ug-13-01), [UG-19-09](_site/user-guide/tracking.html#ug-19-09), [UG-19-11](_site/user-guide/tracking.html#ug-19-11) |
| CONS-02 | The BEAM catalog advertises current/frequency and the core-syntax example assigns BCURRENT, while the detailed BEAM table rejects BCURRENT/BFREQ and directs users to BCHARGE. | Resolved 2026-10-30: user accepted BCHARGE = 1e-9 in the attribute-assignment example and bunch charge in the BEAM catalog. | [BEAM catalog](_site/user-guide/input-language.html#simulation-definitions), [Attribute-assignment example](_site/user-guide/input-language.html#core-syntax), [UG-16-03](_site/user-guide/beam.html#ug-16-03) |

## Other audit scope

The [release audit overview](opalx-v1.0-audit.md) also tracks Getting Started and appendix follow-ups. These do not change the User Guide totals.

- Getting Started: red change indications in Chapters 2–4 were removed at the user’s request on 2026-10-30; the revised content is retained. See [its audit record](GETTING_STARTED_AUDIT.md) for the earlier release/regression execution limitation.
- Field Maps: the pulled corrections are integrated. Enge formula work is already included in UG-12-28–31.
- Auto-phasing implementation follow-ups, verified separately:
  - [#648](https://github.com/OPALX-project/OPALX/issues/648): Honor AUTOPHASE=0 during reference advancement to TRACK.ZSTART — OPEN (2026-10-29).
  - [#649](https://github.com/OPALX-project/OPALX/issues/649): Make DESIGNENERGY tuning consistent across traveling-wave regions — OPEN (2026-10-29).

## Implementation issues — separate work

The manual findings linked below are resolved. Source verification or implementation remains open and is separate from the remaining manual decisions.

| Issue | Work remaining | Audit relation | State | Verified |
|---|---|---|---|---|
| [#650](https://github.com/OPALX-project/OPALX/issues/650) | Review expression functions USER0/1/2, GETEKIN and SI/SC/SO | UG-09-07: manual paragraph removed; verification remains open. | OPEN | 2026-10-29 |
| [#651](https://github.com/OPALX-project/OPALX/issues/651) | Verify SELECT pattern matching and observable selection behavior on master | UG-09-12: examples removed; verification remains open. | OPEN | 2026-10-29 |
| [#652](https://github.com/OPALX-project/OPALX/issues/652) | Implement BINNING PARAMETER=POSITIONZ and PZ in the space-charge solver | UG-18-20: documentation resolved; selector implementation remains open. | OPEN | 2026-10-29 |
| [#653](https://github.com/OPALX-project/OPALX/issues/653) | Expose BORIS for TRACK.TIMEINTEGRATOR and honor the effective integrator choice | UG-19-05: documentation resolved; configuration implementation remains open. | OPEN | 2026-10-29 |
| [#654](https://github.com/OPALX-project/OPALX/issues/654) | Resolve DUMPEMFIELDS time units for RF sampling and output | UG-14-03: manual review note removed; time-unit decision and RF verification remain open. | OPEN | 2026-10-29 |

## Publication and verification

The accepted User Guide decisions are authorized for commit/push on2026-10-30. Verify the review branch and its checks after publication.

## All findings — status accounting

| Chapter | Page | Accepted | Orange pending | Blue pending | Moved to issue | Removed | Rejected | Retired |
|---|---|---:|---:|---:|---:|---:|---:|---:|
| 6 | [user-guide/introduction/index.qmd](user-guide/introduction/index.qmd) | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 7 | [user-guide/conventions/index.qmd](user-guide/conventions/index.qmd) | 3 | 0 | 0 | 0 | 0 | 0 | 0 |
| 8 | [user-guide/input-language.qmd](user-guide/input-language.qmd) | 7 | 0 | 0 | 0 | 1 | 0 | 0 |
| 9 | [user-guide/command-format/index.qmd](user-guide/command-format/index.qmd) | 9 | 0 | 0 | 2 | 1 | 1 | 0 |
| 10 | [user-guide/control-statements/index.qmd](user-guide/control-statements/index.qmd) | 4 | 0 | 0 | 0 | 0 | 0 | 0 |
| 11 | [user-guide/options.qmd](user-guide/options.qmd) | 7 | 0 | 0 | 0 | 1 | 0 | 0 |
| 12 | [user-guide/elements.qmd](user-guide/elements.qmd) | 25 | 0 | 0 | 0 | 6 | 4 | 0 |
| 13 | [user-guide/cyclotron.qmd](user-guide/cyclotron.qmd) | 5 | 0 | 0 | 0 | 0 | 0 | 0 |
| 14 | [user-guide/diagnostics-output.qmd](user-guide/diagnostics-output.qmd) | 4 | 0 | 0 | 1 | 1 | 0 | 0 |
| 15 | [user-guide/beam-lines/index.qmd](user-guide/beam-lines/index.qmd) | 6 | 0 | 0 | 0 | 0 | 0 | 0 |
| 16 | [user-guide/beam.qmd](user-guide/beam.qmd) | 9 | 0 | 0 | 0 | 0 | 0 | 0 |
| 17 | [user-guide/beam-distributions.qmd](user-guide/beam-distributions.qmd) | 12 | 0 | 0 | 0 | 1 | 0 | 0 |
| 18 | [user-guide/field-solver/index.qmd](user-guide/field-solver/index.qmd) | 18 | 0 | 0 | 0 | 4 | 0 | 0 |
| 19 | [user-guide/tracking.qmd](user-guide/tracking.qmd) | 6 | 0 | 0 | 0 | 5 | 0 | 0 |
| 20 | [user-guide/wakefields/index.qmd](user-guide/wakefields/index.qmd) | 2 | 0 | 0 | 0 | 0 | 0 | 0 |
| 21 | [user-guide/geometry/index.qmd](user-guide/geometry/index.qmd) | 1 | 0 | 0 | 0 | 0 | 0 | 0 |
| 22 | [user-guide/particle-matter/index.qmd](user-guide/particle-matter/index.qmd) | 3 | 0 | 0 | 0 | 0 | 0 | 1 |
| 23 | [user-guide/optimization/index.qmd](user-guide/optimization/index.qmd) | 1 | 0 | 0 | 0 | 0 | 0 | 1 |
| 24 | [user-guide/sampler/index.qmd](user-guide/sampler/index.qmd) | 1 | 0 | 0 | 0 | 0 | 0 | 1 |

## Audit history and evidence

### UG-07-01 — Technical / units / links — Accepted 2026-10-29

Location: `user-guide/conventions/index.qmd:9` in the baseline. [Rendered change](_site/user-guide/conventions/index.html#ug-07-01).

The universal SI statement conflicts with normalized stored momentum and GeV/eV energy and mass conventions explained immediately below.

**Original / insertion anchor**
```text
OPALX uses SI units internally. Input attributes that use another convention
state it explicitly in their parameter tables.
```

**Proposed wording / discussion addition**
```text
OPALX uses metres, seconds, and SI electromagnetic-field units, while energy,
mass, and normalized momentum follow the conventions below.
```

Evidence: `src/Structure/Beam.cpp:73`; `src/AbstractObjects/OpalData.cpp:494`; `user-guide/conventions/index.qmd:77`.

**User decision:** User accepted this units statement with the parameter-table exception sentence removed.

### UG-07-02 — Technical / units / links — Accepted 2026-10-29

Location: `user-guide/conventions/index.qmd:14` in the baseline. [Rendered change](_site/user-guide/conventions/index.html#ug-07-02).

Current QUADRUPOLE and MULTIPOLE inputs are normalized strengths, whereas MULTIPOLET uses physical coefficients; the old table conflates these interfaces.

**Original / insertion anchor**
```text
| Quantity | Input convention |
|---|---|
| Length | $\mathrm{m}$ |
| Angle | $\mathrm{rad}$ |
| Time | $\mathrm{s}$ unless an attribute states otherwise |
| Quadrupole coefficient | $\mathrm{T\,m^{-1}}$ |
| Multipole coefficient, $2n$ poles | $\mathrm{T\,m^{-n+1}}$ |
| Electric voltage | $\mathrm{MV}$ |
| Electric field strength | $\mathrm{MV\,m^{-1}}$ |
| Magnetic field strength | $\mathrm{T}$ in current OPALX field output |
| Frequency | $\mathrm{MHz}$ |
| Charged-particle `BEAM.ENERGY` | $\mathrm{GeV}$ |
| Photon `BEAM.ENERGY` | $\mathrm{eV}$, following the CAIN convention |
| Particle mass | $\mathrm{GeV\,c^{-2}}$ in `BEAM.MASS` |
| Normalized momentum | $\widetilde p=p/(mc)=\beta\gamma$, dimensionless |
| Beam current | $\mathrm{A}$ |
| Particle charge | elementary-charge units |
| Normalized and geometric emittance | $\mathrm{m\,rad}$ |
```

**Proposed wording / discussion addition**
```text
| Quantity | Input convention |
|---|---|
| Length | $\mathrm{m}$ |
| Angle | $\mathrm{rad}$ |
| Time | $\mathrm{s}$ unless an attribute states otherwise |
| `QUADRUPOLE.K1`, `K1S`, `DK1`, `DK1S` | $\mathrm{m^{-2}}$ |
| Normalized `MULTIPOLE.KN` and `KS` coefficient, $2n$ poles | $\mathrm{m^{-n}}$ |
| Physical `MULTIPOLET.TP` coefficient, $2n$ poles | $\mathrm{T\,m^{-n+1}}$ |
| Electric voltage | $\mathrm{MV}$ |
| Electric field strength | $\mathrm{MV\,m^{-1}}$ |
| Magnetic field strength | $\mathrm{T}$ in current OPALX field output |
| Frequency | $\mathrm{MHz}$ |
| Charged-particle `BEAM.ENERGY` | $\mathrm{GeV}$ |
| Photon `BEAM.ENERGY` | $\mathrm{GeV}$; photon transport is unavailable |
| Particle mass | $\mathrm{GeV\,c^{-2}}$ in `BEAM.MASS` |
| Normalized momentum | $\widetilde p=p/(mc)=\beta\gamma$, dimensionless |
| Beam current | $\mathrm{A}$ |
| Particle charge | elementary-charge units |
| Normalized and geometric emittance | $\mathrm{m\,rad}$ |
```

Evidence: `src/Elements/OpalQuadrupole.cpp:38`; `src/Elements/OpalQuadrupole.cpp:72`; `src/Elements/OpalMultipole.cpp:126`; `src/Elements/OpalMultipoleT.cpp:66`.

### UG-07-03 — Technical / units / links — Accepted 2026-10-29

Location: `user-guide/conventions/index.qmd:202` in the baseline. [Rendered change](_site/user-guide/conventions/index.html#ug-07-03).

The old import advice double-converts normalized K1 and substitutes energy for momentum without stating an ultrarelativistic approximation.

**Original / insertion anchor**
```text
When importing a normalized quadrupole strength $k_1$ from codes such as
Elegant, convert it to the magnetic gradient required by OPALX using the
reference rigidity. In the historical convention,

$$
\frac{dB_y}{dx} = \frac{E[\mathrm{GeV}]}{0.29979}\,k_1,
$$

with the sign fixed by the coordinate and charge conventions of the source
code. A convenient conversion for energy in MeV is

```python
def k1_to_gradient(k1, energy_mev):
    return 3.33564095e-3 * energy_mev * k1
```

Always verify the imported sign with a single-particle trajectory before using
the result in a lattice study.

```

**Proposed wording / discussion addition**
```text
`QUADRUPOLE.K1` and the quadrupole entry of `MULTIPOLE.KN` already take a
normalized strength $k_1$ in $\mathrm{m^{-2}}$. When importing it from another
code, retain that normalization and set the global reference momentum `P0` in
$\mathrm{GeV}/c$. OPALX converts the normalized coefficient to a physical
field coefficient using `P0`; do not first convert $k_1$ to a gradient for
these attributes. See [`QUADRUPOLE`](../elements.qmd#quadrupole) and
[`MULTIPOLE`](../elements.qmd#multipole).

For a physical field-gradient interface, the conversion is
$G=(B\rho)k_1$, using the reference magnetic rigidity. Use momentum rather
than total or kinetic energy to determine the rigidity; replacing momentum
with energy is an ultrarelativistic approximation. Check the coordinate and
charge conventions and verify the sign with a single-particle trajectory
before using an imported lattice.

```

Evidence: `src/Elements/OpalQuadrupole.cpp:72`; `src/Elements/OpalMultipole.cpp:125`; `src/AbstractObjects/OpalData.cpp:494`.

### UG-08-01 — English — Accepted 2026-10-29

Location: `user-guide/input-language.qmd:19` in the baseline. [Rendered change](_site/user-guide/input-language.html#ug-08-01).

Remove the unexplained comparison to an unrelated manual and state the page organization directly.

**Original / insertion anchor**
```text
Like the NumPy user guide, the manual first groups concepts by what readers are
trying to accomplish and then provides a complete lookup catalog.
```

**Proposed wording / discussion addition**
```text
This overview groups concepts by task, followed by a lookup catalog.
```

Evidence: `user-guide/input-language.qmd:19`.

### UG-08-02 — Technical / units / links — Accepted 2026-10-29

Location: `user-guide/input-language.qmd:85` in the baseline. [Rendered change](_site/user-guide/input-language.html#ug-08-02).

Constraints are not part of the implemented OPALX expression/attribute interface; do not advertise them as current complete syntax.

**Original / insertion anchor**
```text
The complete lexical, expression, array, selection, and constraint rules are in
[Command Format](command-format/index.qmd); the formal grammar is in
```

**Proposed wording / discussion addition**
```text
Lexical, expression, array, and selection rules are in
[Command Format](command-format/index.qmd); the formal grammar is in
```

Evidence: `src/Attributes/Attributes.h`; `src/Expressions/Expressions.cpp`; `user-guide/appendix/language-syntax/index.qmd`.

### UG-08-03 — Feature coverage / availability — Accepted 2026-10-29

Location: `user-guide/input-language.qmd:163` in the baseline. [Rendered change](_site/user-guide/input-language.html#ug-08-03).

BEAMBEAM is absent from the audited master registration table and source inventory. This describes only the current master baseline and does not make a historical claim about branches or earlier merges.

**Original / insertion anchor**
```text
Experimental single-pass mirrored-primary interaction with optional passive witness containers.
```

**Proposed wording / discussion addition**
```text
Available soon.
```

Evidence: `src/OpalConfigure/Configure.cpp:146`; `git grep BEAMBEAM 9a14973b -- src: no implementation/registration matches`.

**User decision:** User requests “Available soon.” without a fixed release version (2026-10-30). Preserve the accepted status and stable anchor.

### UG-08-04 — Technical / units / links — Accepted 2026-10-29

Location: `user-guide/input-language.qmd:171` in the baseline. [Rendered change](_site/user-guide/input-language.html#ug-08-04).

Remove the unsupported implication of an analytic solenoid without a map and align the catalog with mapped scaling.

**Original / insertion anchor**
```text
| `SOLENOID` | Defines a solenoid from normalized strength or a field map. | [SOLENOID](elements.qmd#solenoid) |
```

**Proposed wording / discussion addition**
```text
| `SOLENOID` | Loads a magnetic field map and applies the configured map scale. | [SOLENOID](elements.qmd#solenoid) |
```

Evidence: `src/AbsBeamline/Solenoid.cpp:73,96,120,147-165`.

### UG-08-05 — Feature coverage / availability — Accepted 2026-10-29

Location: `user-guide/input-language.qmd:173` in the baseline. [Rendered change](_site/user-guide/input-language.html#ug-08-05).

Add the supported IDEAL RF model to the catalog.

**Original / insertion anchor**
```text
| `RFCAVITY` | Defines a standing-wave or single-gap RF cavity, normally from a field map. | [RFCAVITY](elements.qmd#rfcavity) |
```

**Proposed wording / discussion addition**
```text
| `RFCAVITY` | Defines a standing-wave cavity defined by a field map, an analytic model, or a cyclotron single-gap model. | [RFCAVITY](elements.qmd#rfcavity) |
```

Evidence: `src/Elements/OpalCavity.cpp:37-40`; `user-guide/elements.qmd#rfcavity-ideal`.

**User decision:** Apply the user-supplied model description verbatim; retain review annotation.

### UG-08-06 — Feature coverage / availability — Removed from manual

Location: `user-guide/input-language.qmd:180` in the baseline. Removed from the manual; original text retained in this record.

Link the newly supplied interface and flag that registration does not establish a functional field.

**Original / insertion anchor**
```text
| `VERTICALFFAMAGNET` | Defines a vertical fixed-field alternating-gradient magnet. | [Element guide](elements.qmd) |
```

**Proposed wording / discussion addition**
```text
| `VERTICALFFAMAGNET` | Registered vertical FFA interface; the intended field calculation is incomplete. | [Availability and attributes](elements.qmd#verticalffamagnet) |
```

Evidence: `src/Elements/OpalVerticalFFAMagnet.cpp:29-57`; `src/AbsBeamline/VerticalFFAMagnet.h:277-319`.

**User decision:** Remove VERTICALFFAMAGNET from the manual at the user's request; retain the original audit evidence only in the review record.

### UG-08-07 — Feature coverage / availability — Accepted 2026-10-29

Location: `user-guide/input-language.qmd:185` in the baseline. [Rendered change](_site/user-guide/input-language.html#ug-08-07).

The page promises every registered element class, but omits the horizontal scaling FFA and three registered end-field definitions.

**Original / insertion anchor**
```text
| `MARKER` | Marks a named lattice location without applying a field. | [MARKER](elements.qmd#marker) |
```

**Proposed wording / discussion addition**
```text
| `SCALINGFFAMAGNET` | Defines a horizontal fixed-field alternating-gradient magnet. | [SCALINGFFAMAGNET](elements.qmd#scalingffamagnet) |
| `TANH` | Defines a named hyperbolic-tangent end-field profile for scaling FFA magnets. | [End Field models](elements.qmd#end-field-models) |
| `ENGE` | Defines a named Enge end-field profile for scaling FFA magnets. | [End Field models](elements.qmd#end-field-models) |
| `ASYMMETRIC_ENGE` | Defines a named Enge profile with independent entrance and exit parameters. | [End Field models](elements.qmd#end-field-models) |
```

Evidence: `src/OpalConfigure/Configure.cpp:165`; `src/OpalConfigure/Configure.cpp:177`; `user-guide/elements.qmd:844`; `user-guide/elements.qmd:904`.

**User decision:** User accepted the missing catalog entries; add the four concrete linked rows in place of the audit instruction.

### UG-08-08 — Technical / units / links — Accepted 2026-10-29

Location: `user-guide/input-language.qmd:189` in the baseline. [Rendered change](_site/user-guide/input-language.html#ug-08-08).

The parameter documentation exists in Elements; the catalog incorrectly says it has not been written.

**Original / insertion anchor**
```text
These registered definitions provide named functions used by time-dependent RF
and scaling attributes. Dedicated parameter pages have not yet been written.
```

**Proposed wording / discussion addition**
```text
These functions used by time-dependent RF and scaling attributes. Their parameters and restrictions are described under [Time-dependence definitions](elements.qmd#element-time-dependence-definitions).
```

Evidence: `user-guide/elements.qmd:1015`.

**User decision:** User supplied replacement wording; retain the existing definitions hyperlink.

### UG-09-01 — Feature coverage / availability — Removed from manual

Location: `user-guide/command-format/index.qmd:46` in the baseline. Removed from the manual; original text retained in this record.

The current syntax example calls an unavailable legacy matching command. Keep the example executable with a registered action.

**Original / insertion anchor**
```text
```text
QF: QUADRUPOLE, L=1, K1=0.01;
QF, L=2;

LMD: LMDIF, CALLS=10;
LMD;
LMD, CALLS=100, TOLERANCE=1E-5;
```
```

**Proposed wording / discussion addition**
```text
`LMDIF` is not registered in current OPALX. Use a registered action when
illustrating named-command execution:

```text
QF: QUADRUPOLE, L=1, K1=0.01;
QF, L=2;

LOGOPT: OPTION, ECHO=FALSE;
LOGOPT;
LOGOPT, ECHO=TRUE;
```
```

Evidence: `src/OpalConfigure/Configure.cpp:109`; `src/OpalParser/OpalParser.cpp:158`; `src/OpalParser/OpalParser.cpp:352`.

**User decision:** User requested this complete named-command example block removed.

### UG-09-02 — English — Accepted 2026-10-29

Location: `user-guide/command-format/index.qmd:59` in the baseline. [Rendered change](_site/user-guide/command-format/index.html#ug-09-02).

Clarify who the recommendation is for and remove the ambiguous reference to a source manual.

**Original / insertion anchor**
```text
Quoted identifiers may contain other special characters, though
the source manual discourages that because it complicates downstream
post-processing.
```

**Proposed wording / discussion addition**
```text
Quoted identifiers may contain other special characters. Avoid them when
downstream post-processing tools require simple names.
```

Evidence: `src/OpalParser/AbsFileStream.cpp:221`; `src/Expressions/Expressions.cpp:356`.

### UG-09-03 — Technical / units / links — Accepted 2026-10-29

Location: `user-guide/command-format/index.qmd:95` in the baseline. [Rendered change](_site/user-guide/command-format/index.html#ug-09-03).

The registered conversion is TO_STRING, not STRING. An arbitrary unquoted LEP name also cannot initialize a string value unless already defined.

**Original / insertion anchor**
```text
String attributes carry titles, file names, class names, or options. Strings
may be quoted with single or double quotes. Concatenation uses `&`, and the
function `STRING(X)` converts a real expression to a string.

| Operator / Function | Meaning |
|---|---|
| `X & Y` | concatenate strings |
| `STRING(X)` | convert real expression `X` to a string |

Examples:

```text
TITLE, "This is a title for the program run ""test""";
CALL, FILE="save";

REAL X=1;
STRING L2=LEP&STRING(X+1);
```

```

**Proposed wording / discussion addition**
```text
String attributes carry titles, file names, class names, or options. Strings
may be quoted with single or double quotes. Concatenation uses `&`, and the
function `TO_STRING(X)` converts a real expression to a string.

| Operator / Function | Meaning |
|---|---|
| `X & Y` | concatenate strings |
| `TO_STRING(X)` | convert real expression `X` to a string |

Examples:

```text
TITLE, "This is a title for the program run ""test""";
CALL, FILE="save";

REAL X=1;
STRING L2="LEP" & TO_STRING(X+1);
```

```

Evidence: `src/Expressions/Expressions.cpp:356`; `src/Expressions/Expressions.cpp:386`; `user-guide/appendix/language-syntax/index.qmd:135`.

### UG-09-04 — Technical / units / links — Accepted 2026-10-29

Location: `user-guide/command-format/index.qmd:155` in the baseline. [Rendered change](_site/user-guide/command-format/index.html#ug-09-04).

The unqualified any-order claim fails for immediate assignments, which evaluate while parsing.

**Original / insertion anchor**
```text
Any real value may be given as an arithmetic expression. Expression definitions
may be entered in any order; OPAL evaluates them when the required operands are
available.
```

**Proposed wording / discussion addition**
```text
Any real value may be given as an arithmetic expression. An immediate `=`
assignment requires its operands to be available when the statement is parsed.
A retained `:=` expression can use values defined before that expression is
evaluated.
```

Evidence: `src/Attributes/Real.cpp:48`; `src/OpalParser/OpalParser.cpp:294`.

### UG-09-05 — Technical / units / links — Accepted 2026-10-29

Location: `user-guide/command-format/index.qmd:161` in the baseline. [Rendered change](_site/user-guide/command-format/index.html#ug-09-05).

The parser consumes at most one exponentiation at this grammar level; chained powers require parentheses.

**Original / insertion anchor**
```text
```text
real-ref  ::= real-variable |
              real-array[index] |
              object->real-attribute |
              object->array-attribute[index]

table-ref ::= table@place->column-name

primary   ::= literal-constant |
              symbolic-constant |
              # |
              real-ref |
              table-ref |
              function-name(arguments) |
              (real-expression)

factor    ::= primary | factor ^ primary
term      ::= factor | term * factor | term / factor
real-expr ::= term | +term | -term | real-expr + term | real-expr - term
```
```

**Proposed wording / discussion addition**
```text
```text
real-ref  ::= real-variable |
              real-array[index] |
              object->real-attribute |
              object->array-attribute[index]

table-ref ::= table@place->column-name

primary   ::= literal-constant |
              symbolic-constant |
              # |
              real-ref |
              table-ref |
              function-name(arguments) |
              (real-expression)

factor    ::= primary | primary ^ primary
term      ::= factor | term * factor | term / factor
real-expr ::= term | +term | -term | real-expr + term | real-expr - term
```
```

Evidence: `src/Expressions/Expressions.cpp:812`.

### UG-09-06 — Technical / units / links — Accepted 2026-10-29

Location: `user-guide/command-format/index.qmd:196` in the baseline. [Rendered change](_site/user-guide/command-format/index.html#ug-09-06).

Synchronize the function catalog with the actual function tables, including missing ERF/POW and contextual position functions.

**Original / insertion anchor**
```text
The source chapter lists the following built-ins:

- no arguments: `RANF()`, `GAUSS()`, `GETEKIN()`, `USER0()`
- one argument: `TRUNC`, `ROUND`, `FLOOR`, `CEIL`, `SIGN`, `SQRT`, `LOG`,
  `EXP`, `SIN`, `COS`, `ABS`, `TAN`, `ASIN`, `ACOS`, `ATAN`, `TGAUSS`,
  `USER1`, `EVAL`
- two arguments: `ATAN2`, `MAX`, `MIN`, `MOD`, `USER2`
```

**Proposed wording / discussion addition**
```text
The OPALX expression parser provides these built-ins:

- no arguments: `RANF()`, `GAUSS()`, `SI()`, `SC()`, `SO()`, `GETEKIN()`
- one argument: `TRUNC`, `ROUND`, `FLOOR`, `CEIL`, `SIGN`, `SQRT`, `LOG`,
  `EXP`, `SIN`, `COS`, `ABS`, `TAN`, `ASIN`, `ACOS`, `ATAN`, `TGAUSS`,
  `ERF`, `EVAL`
- two arguments: `ATAN2`, `MAX`, `MIN`, `MOD`, `POW`
```

Evidence: `src/Expressions/Expressions.cpp:161`; `src/Expressions/Expressions.cpp:173`; `src/Expressions/Expressions.cpp:195`.

### UG-09-07 — Feature coverage / availability — Moved to OPALX issue

Location: `user-guide/command-format/index.qmd:209` in the baseline. [OPALX issue](https://github.com/OPALX-project/OPALX/issues/650).

Separate parser registration from useful runtime availability; GETEKIN is a placeholder and contextual SI/SC/SO are not general global queries.

**Original / insertion anchor**
```text
- `VABSMAX`
```

**Proposed wording / discussion addition**
```text
`USER0`, `USER1`, and `USER2` are not implemented built-ins. `GETEKIN()` is
accepted but does not return the beam kinetic energy; do not use it as an
energy diagnostic. `SI()`, `SC()`, and `SO()` require an active
longitudinal-position context and raise an error outside it.
```

Evidence: `src/Expressions/Expressions.cpp:139`; `src/Expressions/Expressions.cpp:161`; `src/Expressions/SFunction.cpp:42`.

**User decision:** User requested this entire paragraph removed from the manual and transferred to an OPALX source issue.

### UG-09-08 — English — Accepted 2026-10-29

Location: `user-guide/command-format/index.qmd:211` in the baseline. [Rendered change](_site/user-guide/command-format/index.html#ug-09-08).

Replace an ambiguous attribution with the behavior the reader needs to know.

**Original / insertion anchor**
```text
The source manual explicitly warns that random generators inside ordinary
expressions may be re-evaluated at unexpected times.
```

**Proposed wording / discussion addition**
```text
Random generators inside ordinary expressions may be re-evaluated when
their enclosing expressions are evaluated.
```

Evidence: `src/Expressions/Expressions.cpp:161`; `src/Expressions/SNull.h`.

### UG-09-09 — Technical / units / links — Accepted 2026-10-29

Location: `user-guide/command-format/index.qmd:235` in the baseline. [Rendered change](_site/user-guide/command-format/index.html#ug-09-09).

The actual built-in name has no leading or trailing underscores; an unquoted identifier cannot start with an underscore either.

**Original / insertion anchor**
```text
`_OPALVERSION_`
```

**Proposed wording / discussion addition**
```text
`OPALVERSION`
```

Evidence: `src/ValueDefinitions/RealConstant.cpp:63`; `src/OpalParser/AbsFileStream.cpp:249`.

### UG-09-10 — Technical / units / links — Rejected; original wording restored

Location: `user-guide/command-format/index.qmd:284` in the baseline. [Rendered change](_site/user-guide/command-format/index.html#ug-09-10).

Replace a legacy mode statement with the current registered interface and a missing link to its documented command.

**Original / insertion anchor**
```text
Element selection is not available in `OPAL-T` and `OPAL-CYCL`, but it is part
of the general language.
```

**Existing wording (unchanged; highlighted for discussion)**
```text
Element selection is not available in `OPAL-T` and `OPAL-CYCL`, but it is part
of the general language.
```

Evidence: `src/OpalConfigure/Configure.cpp:116`; `src/BasicActions/Select.cpp:85`.

**User decision:** User rejected this proposal. Restore the original general-language statement and retain its plain anchor; remove SELECT command documentation separately at the same request.

**Rejected proposal (record only)**
```text
OPALX registers `SELECT` to mark element occurrences in a line. See
[`SELECT`](../control-statements/index.qmd#select-element-selection) for its
attributes. Selection flags affect only commands that consume them.
```

### UG-09-11 — Feature coverage / availability — Accepted 2026-10-29

Location: `user-guide/command-format/index.qmd:324` in the baseline. [Rendered change](_site/user-guide/command-format/index.html#ug-09-11).

Current registration and Attributes/Expressions code contain no constraint handler. Appendix B already removed the obsolete constraint grammar, but this chapter still presents it as usable.

**Original / insertion anchor**
```text
Constraints are mainly used in matching and optimization:

```text
constraint          ::= array-expr constraint-operator array-expr
constraint-operator ::= == | < | >
```
```

**Proposed wording / discussion addition**
```text
Constraint expressions from the legacy OPAL matching language are not
implemented in the current OPALX attribute and expression parsers. The
following syntax is retained only as a legacy reference:

```text
constraint          ::= array-expr constraint-operator array-expr
constraint-operator ::= == | < | >
```
```

Evidence: `src/Attributes/Attributes.h`; `src/Expressions/Expressions.cpp`; `src/OpalConfigure/Configure.cpp`; `user-guide/appendix/language-syntax/index.qmd`.

### UG-09-12 — Technical / units / links — Moved to OPALX issue

Location: `user-guide/command-format/index.qmd:353` in the baseline. [OPALX issue](https://github.com/OPALX-project/OPALX/issues/651).

Both complete command examples omit the terminating semicolon and the line to inspect; SELECT defaults to UNNAMED_USE, which is not automatically created by a tracking block.

**Original / insertion anchor**
```text
```text
SELECT, PATTERN="D.."
SELECT, PATTERN="K.*QD.*\\.R1"
```
```

**Proposed wording / discussion addition**
```text
```text
SELECT, LINE=L1, PATTERN="D..";
SELECT, LINE=L1, PATTERN="K.*QD.*\\.R1";
```
```

Evidence: `src/BasicActions/Select.cpp:52`; `src/OpalParser/SimpleStatement.cpp`.

**User decision:** User requested investigation of whether SELECT really works; the removed examples are tracked in this verification issue, with source evidence and no claim of a reproduced defect.

### UG-09-13 — Feature coverage / availability — Accepted 2026-10-29

Location: `user-guide/command-format/index.qmd:409` in the baseline. [Rendered change](_site/user-guide/command-format/index.html#ug-09-13).

Distinguish the usable TABLE generator from table-object queries for which the current executable has no registered producer.

**Original / insertion anchor**
```text
In `TABLE(...)`, the special symbol `#` is replaced by the running index.
```

**Proposed wording / discussion addition**
```text
`ROW(...)`, `COLUMN(...)`, and `table@place->column` require a named table
object. Current OPALX does not register table-producing commands, so these
forms are retained language infrastructure rather than a complete table-analysis
interface. `TABLE(...)` is a usable array generator and does not require a table
object.
```

Evidence: `src/OpalConfigure/Configure.cpp:109`; `src/Expressions/Expressions.cpp:980`; `src/Expressions/Expressions.cpp:1002`.

### UG-10-01 — Technical / units / links — Accepted 2026-10-29

Location: `user-guide/control-statements/index.qmd:20` in the baseline. [Rendered change](_site/user-guide/control-statements/index.html#ug-10-01).

At the top level the parser intercepts HELP followed by a comma and directly interprets the next name; HELP, NAME=... therefore requests help for NAME rather than the given object.

**Original / insertion anchor**
```text
```text
HELP;                 // Help on the HELP command itself
HELP, NAME=label;     // Show attribute types of label
HELP, label;          // Shortcut form
```

Examples:

```text
HELP;
HELP, NAME=FIELDSOLVER;
HELP, FIELDSOLVER;
```
```

**Proposed wording / discussion addition**
```text
```text
HELP;                 // Help on the HELP command itself
HELP, label;          // Show help for label
label?;               // Equivalent parser help form
```

Examples:

```text
HELP;
HELP, FIELDSOLVER;
FIELDSOLVER?;
```
```

Evidence: `src/OpalParser/OpalParser.cpp:155`; `src/OpalParser/OpalParser.cpp:77`.

### UG-10-02 — Technical / units / links — Accepted 2026-10-29

Location: `user-guide/control-statements/index.qmd:76` in the baseline. [Rendered change](_site/user-guide/control-statements/index.html#ug-10-02).

Supply the missing units/default for the global normalization that changes field strengths.

**Original / insertion anchor**
```text
`P0` is a reserved global reference momentum used to normalize magnetic-field
coefficients.
```

**Proposed wording / discussion addition**
```text
`P0` is a reserved global reference momentum in $\mathrm{GeV}/c$ used to
normalize magnetic-field coefficients. Its default is `1.0`; set it
consistently with the intended reference rigidity.
```

Evidence: `src/ValueDefinitions/RealVariable.cpp:45`; `src/AbstractObjects/OpalData.cpp:494`; `src/Elements/OpalQuadrupole.cpp:76`.

### UG-10-03 — Technical / units / links — Accepted 2026-10-29

Location: `user-guide/control-statements/index.qmd:112` in the baseline. [Rendered change](_site/user-guide/control-statements/index.html#ug-10-03).

The constant declaration is an assignment form without a colon or extra CONSTANT after the name.

**Original / insertion anchor**
```text
```text
REAL CONST label: CONSTANT = real-expression;
```
```

**Proposed wording / discussion addition**
```text
```text
REAL CONST label = real-expression;
```
```

Evidence: `src/OpalParser/OpalParser.cpp:197`; `src/OpalParser/OpalParser.cpp:233`; `src/ValueDefinitions/RealConstant.cpp:35`.

### UG-10-04 — Technical / units / links — Accepted 2026-10-29

Location: `user-guide/control-statements/index.qmd:142` in the baseline. [Rendered change](_site/user-guide/control-statements/index.html#ug-10-04).

Distinguish immediate assignment from freezing a subexpression and from declaring an immutable constant.

**Original / insertion anchor**
```text
To force immediate evaluation and assign the resulting value as a constant, use
`EVAL(...)`:

```text
variable-name = EVAL(real-expression);
```

This behaves like assignment in C or Fortran.
```

**Proposed wording / discussion addition**
```text
`=` already evaluates the right-hand side immediately. `EVAL(...)` can also
freeze a subexpression when it appears within a deferred (`:=`) expression:

```text
variable-name := EVAL(real-expression);
```

The assigned variable remains assignable; `EVAL` makes its argument's value
constant within the stored expression.
```

Evidence: `src/OpalParser/OpalParser.cpp:294`; `src/Expressions/Expressions.cpp:854`.

### UG-11-01 — Technical / units / links — Accepted 2026-10-29

Location: `user-guide/options.qmd:58` in the baseline. [Rendered change](_site/user-guide/options.html#ug-11-01).

PSDUMPFREQ now keeps zero directly instead of converting to INT_MAX; validation rejects negatives.

**Original / insertion anchor**
```text
Phase-space dump frequency. `0` is converted internally to an effectively disabled frequency.
```

**Proposed wording / discussion addition**
```text
Phase-space dump frequency. `0` disables periodic dumps; negative values are rejected.
```

Evidence: `src/BasicActions/Option.cpp:590`; `src/Algorithms/ParallelTracker.cpp:849`.

### UG-11-02 — Technical / units / links — Accepted 2026-10-29

Location: `user-guide/options.qmd:59` in the baseline. [Rendered change](_site/user-guide/options.html#ug-11-02).

STATDUMPFREQ now keeps zero directly instead of converting to INT_MAX; validation rejects negatives.

**Original / insertion anchor**
```text
Statistics dump frequency. `0` is converted internally to an effectively disabled frequency.
```

**Proposed wording / discussion addition**
```text
Statistics dump frequency. `0` disables periodic dumps; negative values are rejected.
```

Evidence: `src/BasicActions/Option.cpp:597`; `src/Algorithms/ParallelTracker.cpp:853`.

### UG-11-03 — Feature coverage / availability — Accepted 2026-10-29

Location: `user-guide/options.qmd:98` in the baseline. [Rendered change](_site/user-guide/options.html#ug-11-03).

Existing accurate limitation highlighted in orange per the request: adaptive DOP853 error control and dense output are unavailable in this reference/map integrator; the controls also do not choose the production-particle integrator.

**Original / insertion anchor**
```text
DOP853 here has no adaptive error controller or dense output: `DT` is the nominal
step for all three methods, subdivided at field-support transitions. These controls
do not select the production-particle integrator.
```

**Existing wording (unchanged; highlighted for discussion)**
```text
DOP853 here has no adaptive error controller or dense output: `DT` is the nominal
step for all three methods, subdivided at field-support transitions. These controls
do not select the production-particle integrator.
```

Evidence: `src/Algorithms/ExternalFieldRayTracker.h:60`; `src/Algorithms/ExternalFieldRayTracker.cpp:112`.

### UG-11-04 — Feature coverage / availability — Accepted 2026-10-29

Location: `user-guide/options.qmd:119` in the baseline. [Rendered change](_site/user-guide/options.html#ug-11-04).

Existing accurate limitation highlighted in orange per the request: reference and transfer-map rays do not use parallel OpenMP ray tracking.

**Original / insertion anchor**
```text
Reference and perturbed map rays run
serially on the host; OpenMP thread capacity reported at startup applies to the
runtime and does not imply parallel ray tracking.
```

**Existing wording (unchanged; highlighted for discussion)**
```text
Reference and perturbed map rays run
serially on the host; OpenMP thread capacity reported at startup applies to the
runtime and does not imply parallel ray tracking.
```

Evidence: `src/Algorithms/LinearTransferMapBuilder.cpp:399`; `src/Algorithms/LinearTransferMapBuilder.cpp:406`; `src/Algorithms/OrbitThreader.cpp`.

### UG-11-05 — Feature coverage / availability — Accepted 2026-10-29

Location: `user-guide/options.qmd:182` in the baseline. [Rendered change](_site/user-guide/options.html#ug-11-05).

No runtime consumer of minStepForRebin exists in audited master; only registration, option copying and assignment remain.

**Original / insertion anchor**
```text
Earliest step at which the current tracker may collapse emission bins.
```

**Proposed wording / discussion addition**
```text
Accepted and stored for compatibility; the current tracker does not use it to collapse emission bins.
```

Evidence: `src/BasicActions/Option.cpp:228`; `src/BasicActions/Option.cpp:643`; `src/Utilities/Options.h:97`; `src/Utilities/Options.cpp:59`.

### UG-11-06 — Feature coverage / availability — Accepted 2026-10-29

Location: `user-guide/options.qmd:183` in the baseline. [Rendered change](_site/user-guide/options.html#ug-11-06).

The global zero setting is not honored by the separate initialization-to-ZSTART call, while per-cavity veto is honored. This proposes a user-facing qualification, not a code repair narrative.

**Original / insertion anchor**
```text
Number of RF phase-search refinements; `0` disables autophasing.
```

**Proposed wording / discussion addition**
```text
Number of RF phase-search refinements. `0` disables the OrbitThreader phase search, but initialization towards `TRACK.ZSTART` can still phase cavities. Set each cavity's `APVETO=TRUE` when its phase must remain fixed.
```

Evidence: `src/Algorithms/OrbitThreader.cpp:520`; `src/Algorithms/ParallelTracker.cpp:2218`; `src/Algorithms/ParallelTracker.cpp:2535`; `src/Elements/OpalCavity.cpp:45`; `src/Elements/OpalTravelingWave.cpp:36`.

### UG-11-07 — Technical / units / links — Removed from manual

Location: `user-guide/options.qmd:188` in the baseline. Removed from the manual; original text retained in this record.

Remove the second contradictory claim that MINSTEPFORREBIN has a runtime effect.

**Original / insertion anchor**
```text
`MINBINEMITTED` and `MINSTEPFORREBIN` affect runtime bin handling. The
definition of the adaptive histogram itself is documented under
```

**Proposed wording / discussion addition**
```text
`MINBINEMITTED` controls when space-charge calculation begins;
`MINSTEPFORREBIN` currently has no runtime effect. The definition of the
adaptive histogram itself is documented under
```

Evidence: `src/Algorithms/ParallelTracker.cpp:1297`; `src/BasicActions/Option.cpp:643`.

**User decision:** User requested this entire paragraph removed, including its trailing Binning link; preserve the separate accepted option-table documentation.

### UG-11-08 — Feature coverage / availability — Accepted 2026-10-29

Location: `user-guide/options.qmd:194` in the baseline. [Rendered change](_site/user-guide/options.html#ug-11-08).

Existing accurate notice highlighted in orange per the request: these registered compatibility attributes do not currently change OPALX tracking. Group the explanation and table as one review item rather than marking eighteen duplicate notices separately.

**Original / insertion anchor**
```text
The following names are accepted and stored, but have no current consumer in
the OPALX `ParallelTracker` source. Do not rely on them to change a simulation.

| Option | Default | Historical or intended role |
|---|---:|---|
| `PSDUMPEACHTURN` | `FALSE` | OPAL-CYCL phase-space dump after each turn. |
| `PSDUMPFRAME` | `GLOBAL` | OPAL-CYCL dump frame: `GLOBAL`, `BUNCH_MEAN`, or `REFERENCE`. |
| `SPTDUMPFREQ` | `1` | Single-particle trajectory dump frequency. `0` is converted to an effectively disabled frequency. |
| `SCSOLVEFREQ` | `1` | Requested space-charge solve frequency; parsed values below one become one. |
| `REMOTEPARTDEL` | `0` | Historical remote-particle rms deletion threshold. |
| `REBINFREQ` | `100` | Historical frequency for resetting energy-bin identifiers. |
| `CSRDUMP` | `FALSE` | Historical CSR field and line-density output. |
| `NLHS` | `1` | Old solutions retained for a solver starting-vector extrapolation. |
| `CZERO` | `FALSE` | Historical request for a distribution with zero centroid. |
| `RNGTYPE` | `RANDOM` | Accepts `RANDOM`, `HALTON`, `SOBOL`, or `NIEDERREITER`; current distribution samplers do not select their engine through it. |
| `CLOTUNEONLY` | `FALSE` | OPAL-CYCL closed-orbit and tune-only mode. |
| `IDEALIZED` | `FALSE` | Historical hard-edge path-length compatibility mode. |
| `LOGBENDTRAJECTORY` | `FALSE` | Historical request to write each bend trajectory. |
| `MEMORYDUMP` | `FALSE` | Historical SDDS memory output request; the current `OPTION` execution path does not apply it. |
| `DELPARTFREQ` | `1` | Historical particle-deletion frequency. |
```

**Existing wording (unchanged; highlighted for discussion)**
```text
The following names are accepted and stored, but have no current consumer in
the OPALX `ParallelTracker` source. Do not rely on them to change a simulation.

| Option | Default | Historical or intended role |
|---|---:|---|
| `PSDUMPEACHTURN` | `FALSE` | OPAL-CYCL phase-space dump after each turn. |
| `PSDUMPFRAME` | `GLOBAL` | OPAL-CYCL dump frame: `GLOBAL`, `BUNCH_MEAN`, or `REFERENCE`. |
| `SPTDUMPFREQ` | `1` | Single-particle trajectory dump frequency. `0` is converted to an effectively disabled frequency. |
| `SCSOLVEFREQ` | `1` | Requested space-charge solve frequency; parsed values below one become one. |
| `REMOTEPARTDEL` | `0` | Historical remote-particle rms deletion threshold. |
| `REBINFREQ` | `100` | Historical frequency for resetting energy-bin identifiers. |
| `CSRDUMP` | `FALSE` | Historical CSR field and line-density output. |
| `NLHS` | `1` | Old solutions retained for a solver starting-vector extrapolation. |
| `CZERO` | `FALSE` | Historical request for a distribution with zero centroid. |
| `RNGTYPE` | `RANDOM` | Accepts `RANDOM`, `HALTON`, `SOBOL`, or `NIEDERREITER`; current distribution samplers do not select their engine through it. |
| `CLOTUNEONLY` | `FALSE` | OPAL-CYCL closed-orbit and tune-only mode. |
| `IDEALIZED` | `FALSE` | Historical hard-edge path-length compatibility mode. |
| `LOGBENDTRAJECTORY` | `FALSE` | Historical request to write each bend trajectory. |
| `MEMORYDUMP` | `FALSE` | Historical SDDS memory output request; the current `OPTION` execution path does not apply it. |
| `DELPARTFREQ` | `1` | Historical particle-deletion frequency. |
```

Evidence: `src/BasicActions/Option.cpp:172`; `src/BasicActions/Option.cpp:178`; `src/BasicActions/Option.cpp:280`; `src/BasicActions/Option.cpp:359`; `src/BasicActions/Option.cpp:374`; `src/Algorithms/ParallelTracker.cpp`.

**User decision:** Obsolete option rows were removed at the user's request; the remaining wording is accepted.

### UG-12-01 — Removed from manual

Entry removed at the user's request.

### UG-12-02 — Feature coverage / availability — Accepted 2026-10-29

Location: `user-guide/elements.qmd:24` in the baseline. [Rendered change](_site/user-guide/elements.html#ug-12-02).

BEAMBEAM is not registered or implemented in the current master snapshot. Preserve the description while flagging this discrepancy.

**Original / insertion anchor**
```text
| `BEAMBEAM` | Experimental mirrored-primary interaction and passive witnesses | optional particle input files |
```

**Proposed wording / discussion addition**
```text
| `BEAMBEAM` | [Available soon.](#beambeam) | optional particle input files |
```

Evidence: `src/OpalConfigure/Configure.cpp:145-179`; `git grep -i beambeam master -- src: one incidental comment, no element implementation`.

**User decision:** User requests “Available soon.” without a fixed release version (2026-10-30). Preserve the accepted status and stable anchor.

### UG-12-03 — Feature coverage / availability — Accepted 2026-10-29

Location: `user-guide/elements.qmd:40` in the baseline. [Rendered change](_site/user-guide/elements.html#ug-12-03).

Add the omitted registered horizontal FFA magnet and qualify the vertical FFA implementation.

**Original / insertion anchor**
```text
| `VERTICALFFAMAGNET` | Source registered; no maintained regression input | none |
```

**Proposed wording / discussion addition**
```text
| `SCALINGFFAMAGNET` | Source registered; see [scaling FFA interface](#scalingffamagnet) | optional end-field model |
```

Evidence: `src/OpalConfigure/Configure.cpp:165-170`; `src/AbsBeamline/VerticalFFAMagnet.h:277-319`.

**User decision:** User approved the SCALINGFFAMAGNET addition and requested VERTICALFFAMAGNET removed from the manual.

### UG-12-04 — Removed from manual

Entry removed at the user's request.

### UG-12-05 — Feature coverage / availability — Accepted 2026-10-29

Location: `user-guide/elements.qmd:73` in the baseline. [Rendered change](_site/user-guide/elements.html#ug-12-05).

The common element syntax currently overstates rules as universal; provide links and restrictions for supported exceptions.

**Original / insertion anchor**
```text
Exactly one placement strategy is required. Supplying both `ELEMEDGE` and an
absolute pose fails; supplying neither also fails. `PSI` alone does not select
absolute placement.
```

**Proposed wording / discussion addition**
```text
These placement rules have element-specific exceptions: `PROBE` uses its detector endpoints, `FIELDMAP` requires an absolute pose, and `SCALINGFFAMAGNET` uses its dedicated aperture dimensions and rejects `APERTURE`. The following sections give those interfaces.
```

Evidence: `src/Elements/OpalScalingFFAMagnet.cpp:158-162`; `src/Elements/OpalProbe.cpp:49-62`; `src/Elements/OpalFieldmapElement.cpp`.

### UG-12-06 — Feature coverage / availability — Removed from manual

Location: `user-guide/elements.qmd:120` in the baseline. Removed from the manual; original text retained in this record.

Existing availability restriction highlighted in orange as requested. DRIFT compatibility attributes do not activate geometry or map slicing.

**Original / insertion anchor**
```text
| `GEOMETRY` | unset | Parsed boundary-geometry name, but not transferred by the current `DRIFT` implementation. |
| `NSLICES` | `1` | Map-tracking compatibility value; inactive in the current `PARALLEL` tracking path. |
```

**Existing wording (unchanged; highlighted for discussion)**
```text
| `GEOMETRY` | unset | Parsed boundary-geometry name, but not transferred by the current `DRIFT` implementation. |
| `NSLICES` | `1` | Map-tracking compatibility value; inactive in the current `PARALLEL` tracking path. |
```

Evidence: `src/Elements/OpalDrift.cpp:17-62`.

**User decision:** User requested removal of the unsupported GEOMETRY and NSLICES rows from the current OPALX DRIFT interface.

### UG-12-07 — Feature coverage / availability — Accepted 2026-10-29

Location: `user-guide/elements.qmd:181` in the baseline. [Rendered change](_site/user-guide/elements.html#ug-12-07).

Keep the previously documented feature visible without claiming it is currently accepted by master.

**Original / insertion anchor**
```text
## `BEAMBEAM` {#beambeam}
```

**Proposed wording / discussion addition**
```text
**Availability:** Available soon.
```

Evidence: `src/OpalConfigure/Configure.cpp:145-179`; `git ls-remote origin refs/heads/master: 9a14973b0030355e1291159281c5ed8e66c3ea56`.

**User decision:** User requests “Available soon.” without a fixed release version (2026-10-30). Preserve the accepted status and stable anchor.

### UG-12-08 — English — Accepted 2026-10-29

Location: `user-guide/elements.qmd:342` in the baseline. [Rendered change](_site/user-guide/elements.html#ug-12-08).

Remove an ambiguous repeated adjective.

**Original / insertion anchor**
```text
Normal normalized quadrupole strength.
```

**Proposed wording / discussion addition**
```text
Normalized normal quadrupole strength.
```

Evidence: `user-guide/elements.qmd:quadrupole parameter table`.

### UG-12-09 — Feature coverage / availability — Accepted 2026-10-29

Location: `user-guide/elements.qmd:344` in the baseline. [Rendered change](_site/user-guide/elements.html#ug-12-09).

Existing availability restriction highlighted in orange as requested. QUADRUPOLE strength-error attributes have no field effect.

**Original / insertion anchor**
```text
| `DK1` | `0` | $\mathrm m^{-2}$ | Parsed and stored normal error, but not applied by the current field kernel. |
| `DK1S` | `0` | $\mathrm m^{-2}$ | Parsed and stored skew error, but not applied by the current field kernel. |
```

**Existing wording (unchanged; highlighted for discussion)**
```text
| `DK1` | `0` | $\mathrm m^{-2}$ | Parsed and stored normal error, but not applied by the current field kernel. |
| `DK1S` | `0` | $\mathrm m^{-2}$ | Parsed and stored skew error, but not applied by the current field kernel. |
```

Evidence: `src/Elements/OpalQuadrupole.cpp:90-105`; `src/AbsBeamline/Multipole.h`.

**Upstream synchronization (2026-10-29):** The origin/main update pulled on 2026-10-29 supersedes the earlier wording shown below. The existing review status and finding ID are retained.

Current wording after synchronization:
```text
Normal error, added to `K1` for both particles and the reference particle.
```

### UG-12-10 — Feature coverage / availability — Removed from manual

Location: `user-guide/elements.qmd:349` in the baseline. Removed from the manual; original text retained in this record.

Existing availability restriction highlighted in orange as requested. Zero-length integrated quadrupole operation is unavailable.

**Original / insertion anchor**
```text
Use a positive `L`. Although inherited help text mentions integrated zero-length
strengths, the current particle kernel has no nonzero field interval when
`L=0`.
```

**Existing wording (unchanged; highlighted for discussion)**
```text
Use a positive `L`. Although inherited help text mentions integrated zero-length
strengths, the current particle kernel has no nonzero field interval when
`L=0`.
```

Evidence: `src/AbsBeamline/Multipole.h`.

**User decision:** User requested removal of this marked passage; retain adjacent manual text and original audit evidence.

### UG-12-11 — English — Accepted 2026-10-29

Location: `user-guide/elements.qmd:364` in the baseline. [Rendered change](_site/user-guide/elements.html#ug-12-11).

Use the same normal/skew terminology as the quadrupole table.

**Original / insertion anchor**
```text
Normal normalized strengths: index 0 dipole, index 1 quadrupole.
```

**Proposed wording / discussion addition**
```text
Normalized normal strengths: index 0 dipole, index 1 quadrupole.
```

Evidence: `src/Elements/OpalMultipole.cpp:25-35`.

**Upstream synchronization (2026-10-29):** The origin/main update pulled on 2026-10-29 supersedes the earlier wording shown below. The existing review status and finding ID are retained.

Current wording after synchronization:
```text
Normal normalized strengths $K_n$, index $n$ from 0 (dipole) to 4 (decapole).
```

### UG-12-12 — Feature coverage / availability — Accepted 2026-10-29

Location: `user-guide/elements.qmd:366` in the baseline. [Rendered change](_site/user-guide/elements.html#ug-12-12).

Existing availability restriction highlighted in orange as requested. MULTIPOLE error arrays have no field effect.

**Original / insertion anchor**
```text
| `DKN` | empty | Parsed and stored normal-error array, but not applied by the current field kernel. Missing entries are padded with zero. |
| `DKS` | empty | Parsed and stored skew-error array, but not applied by the current field kernel. Missing entries are padded with zero. |
```

**Existing wording (unchanged; highlighted for discussion)**
```text
| `DKN` | empty | Parsed and stored normal-error array, but not applied by the current field kernel. Missing entries are padded with zero. |
| `DKS` | empty | Parsed and stored skew-error array, but not applied by the current field kernel. Missing entries are padded with zero. |
```

Evidence: `src/Elements/OpalMultipole.cpp`; `src/AbsBeamline/Multipole.h`.

**Upstream synchronization (2026-10-29):** The origin/main update pulled on 2026-10-29 supersedes the earlier wording shown below. The existing review status and finding ID are retained.

Current wording after synchronization:
```text
Normal errors, added to `KN` for both particles and the reference particle. Missing entries are padded with zero.
```

### UG-12-13 — Feature coverage / availability — Accepted 2026-10-29

Location: `user-guide/elements.qmd:370` in the baseline. [Rendered change](_site/user-guide/elements.html#ug-12-13).

Existing availability restriction highlighted in orange as requested. Higher-order MULTIPOLE particle tracking is incomplete.

**Original / insertion anchor**
```text
The parser accepts longer arrays, but the current particle and reference
kernels do not agree: the bulk particle kernel applies only indices 0 and 1,
while the host/reference kernel evaluates higher orders. A higher-order entry
can therefore change the threaded reference orbit without applying the same
field to tracked particles. Use `MULTIPOLET` instead.
```

**Existing wording (unchanged; highlighted for discussion)**
```text
The parser accepts longer arrays, but the current particle and reference
kernels do not agree: the bulk particle kernel applies only indices 0 and 1,
while the host/reference kernel evaluates higher orders. A higher-order entry
can therefore change the threaded reference orbit without applying the same
field to tracked particles. Use `MULTIPOLET` instead.
```

Evidence: `src/AbsBeamline/Multipole.h`; `src/AbsBeamline/Multipole.cpp`.

**Upstream synchronization (2026-10-29):** The origin/main update pulled on 2026-10-29 supersedes the earlier wording shown below. The existing review status and finding ID are retained.

Current wording after synchronization:
```text
Particles and the reference particle use the same field for all orders.
```

### UG-12-14 — Feature coverage / availability — Accepted 2026-10-29

Location: `user-guide/elements.qmd:406` in the baseline. [Rendered change](_site/user-guide/elements.html#ug-12-14).

Existing availability restriction highlighted in orange as requested. Variable-radius MULTIPOLET geometry is unavailable.

**Original / insertion anchor**
```text
| `VARRADIUS` | `FALSE` | Boolean | Variable-radius selector. Variable-radius curved magnets are currently rejected. |
| `ENTRYOFFSET` | `0` | m | Accepted only with `VARRADIUS=TRUE`; there is no supported variable-radius curved configuration yet. |
```

**Existing wording (unchanged; highlighted for discussion)**
```text
| `VARRADIUS` | `FALSE` | Boolean | Variable-radius selector. Variable-radius curved magnets are currently rejected. |
| `ENTRYOFFSET` | `0` | m | Accepted only with `VARRADIUS=TRUE`; there is no supported variable-radius curved configuration yet. |
```

Evidence: `src/Elements/OpalMultipoleT.cpp`.

### UG-12-15 — Technical / units / links — Accepted 2026-10-30

Location: `user-guide/elements.qmd:418` in the baseline. [Rendered change](_site/user-guide/elements.html#ug-12-15).

The computed rigidity-converted Bz is stored separately; the map kernel uses the raw KS scale. Document the actual behavior without changing the implementation.

**Original / insertion anchor**
```text
`SOLENOID` loads a magnetic field map and scales it with a normalized solenoid
strength. The map defines the actual longitudinal field-support interval,
which may differ from nominal `L`.
```

**Proposed wording / discussion addition**
```text
`SOLENOID` loads a magnetic field map. The current mapped-field calculation multiplies the loaded field directly by `KS` (and by `KS+DKS` for tracked particles), despite the normalized-strength wording in the input help. The map defines the actual longitudinal field-support interval, which may differ from nominal `L`.
```

Evidence: `src/Elements/OpalSolenoid.cpp:55-64`; `src/AbsBeamline/Solenoid.cpp:73,96,120,131-134`; `src/BeamlineCore/SolenoidRep.cpp:66-68`.

**User decision:** Accepted current SOLENOID wording on2026-10-30; remove review labels/colors only.

### UG-12-16 — Technical / units / links — Accepted 2026-10-30

Location: `user-guide/elements.qmd:430` in the baseline. [Rendered change](_site/user-guide/elements.html#ug-12-16).

Align the parameter table with the actual map-field scale.

**Original / insertion anchor**
```text
Normalized field-map scale in $\mathrm m^{-1}$. It is converted using the reference rigidity.
```

**Proposed wording / discussion addition**
```text
Direct multiplier on the loaded magnetic field in the current mapped-field calculation. Check the map normalization; the input-help label $\mathrm m^{-1}$ does not describe the applied scale.
```

Evidence: `src/AbsBeamline/Solenoid.cpp:73,96,120,131`; `src/Elements/OpalSolenoid.cpp:55-64`.

**User decision:** Accepted current SOLENOID wording on2026-10-30; remove review labels/colors only.

### UG-12-17 — Feature coverage / availability — Accepted 2026-10-29

Location: `user-guide/elements.qmd:433` in the baseline. [Rendered change](_site/user-guide/elements.html#ug-12-17).

The implemented SOLENOID map-reversal attribute is absent from the guide.

**Original / insertion anchor**
```text
| `FAST` | `TRUE` | Passed to the field-map loader as its fast/accuracy selection. |
```

**Proposed wording / discussion addition**
```text
| `ZREVERSE` | `FALSE` | Reverse the map longitudinally and negate its longitudinal magnetic field. Supported only by G4beamline `cylinder` maps; see [field-map restrictions](appendix/field-maps/index.qmd#opalx-g4bl-cylinder). |
```

Evidence: `src/Elements/OpalSolenoid.cpp:30-35,61`; `src/Fields/Fieldmap.cpp`.

### UG-12-18 — Feature coverage / availability — Accepted 2026-10-29

Location: `user-guide/elements.qmd:526` in the baseline. [Rendered change](_site/user-guide/elements.html#ug-12-18).

Existing availability restriction highlighted in orange as requested. RFCAVITY does not connect the compatibility GEOMETRY selector.

**Original / insertion anchor**
```text
Parsed boundary-geometry compatibility attribute; not connected by the current element update.
```

**Existing wording (unchanged; highlighted for discussion)**
```text
Parsed boundary-geometry compatibility attribute; not connected by the current element update.
```

Evidence: `src/Elements/OpalCavity.cpp`.

### UG-12-19 — Feature coverage / availability — Accepted 2026-10-29

Location: `user-guide/elements.qmd:528` in the baseline. [Rendered change](_site/user-guide/elements.html#ug-12-19).

Existing availability restriction highlighted in orange as requested. Named RF time models are not available through RFCAVITY.

**Original / insertion anchor**
```text
Rejected for `IDEAL`. For `STANDING`, names are stored but not resolved into time-dependence objects. Use `VARIABLE_RF_CAVITY` when RF parameters must vary with time.
```

**Existing wording (unchanged; highlighted for discussion)**
```text
Rejected for `IDEAL`. For `STANDING`, names are stored but not resolved into time-dependence objects. Use `VARIABLE_RF_CAVITY` when RF parameters must vary with time.
```

Evidence: `src/Elements/OpalCavity.cpp`; `src/AbsBeamline/RFCavity.cpp`.

### UG-12-20 — Feature coverage / availability — Accepted 2026-10-29

Location: `user-guide/elements.qmd:538` in the baseline. [Rendered change](_site/user-guide/elements.html#ug-12-20).

The existing global-disable claim has a known initial-advancement exception.

**Original / insertion anchor**
```text
`OPTION, AUTOPHASE=0;` to disable automatic phasing globally.
```

**Proposed wording / discussion addition**
```text
`OPTION, AUTOPHASE=0;` to disable the normal phase search. To preserve a cavity phase also during advancement to `TRACK.ZSTART`, set `APVETO=TRUE` on that cavity; the global option is not honored during that initial advancement.
```

Evidence: `src/Track/OrbitThreader.cpp`; `OPALX issue #648, source evidence pinned to master9a14973b`.

### UG-12-21 — Feature coverage / availability — Accepted 2026-10-29

Location: `user-guide/elements.qmd:601` in the baseline. [Rendered change](_site/user-guide/elements.html#ug-12-21).

The current traveling-wave amplitude tuning is partial; do not present target-energy tuning as fully supported.

**Original / insertion anchor**
```text
| `DESIGNENERGY` | `-1` | MeV | Positive autophaser target exit kinetic energy; negative disables the target. |
```

**Proposed wording / discussion addition**
```text
| `DESIGNENERGY` | `-1` | MeV | Positive autophaser target exit kinetic energy; negative disables the target. Traveling-wave target-energy tuning is incomplete; do not rely on it to set a consistent field amplitude throughout the structure. |
```

Evidence: `src/AbsBeamline/TravelingWave.cpp`; `OPALX issue #649, source evidence pinned to master9a14973b`.

### UG-12-22 — Feature coverage / availability — Accepted 2026-10-29

Location: `user-guide/elements.qmd:606` in the baseline. [Rendered change](_site/user-guide/elements.html#ug-12-22).

Qualify the repeated global-disable claim consistently.

**Original / insertion anchor**
```text
with `RFCAVITY`, `AUTOPHASE=0` disables phase searching globally and
`APVETO=TRUE` disables it for this element only.
```

**Proposed wording / discussion addition**
```text
with `RFCAVITY`, use `APVETO=TRUE` to preserve this element's prescribed phase, including advancement to `TRACK.ZSTART`. `AUTOPHASE=0` disables the normal search but is not honored during that initial advancement.
```

Evidence: `src/Track/OrbitThreader.cpp`; `OPALX issue #648`.

### UG-12-23 — Feature coverage / availability — Removed from manual

Location: `user-guide/elements.qmd:807` in the baseline. Removed from the manual; original text retained in this record.

Existing availability restriction highlighted in orange as requested. PROBE recording cannot resume an earlier run.

**Original / insertion anchor**
```text
Checkpoint restart and continuation of an earlier particle tracking run are not
yet supported.
```

**Existing wording (unchanged; highlighted for discussion)**
```text
Checkpoint restart and continuation of an earlier particle tracking run are not
yet supported.
```

Evidence: `src/Elements/OpalProbe.cpp`; `src/AbsBeamline/Probe.cpp`.

**User decision:** User requested removal of this marked passage; retain adjacent manual text and original audit evidence.

### UG-12-24 — Feature coverage / availability — Accepted 2026-10-30

Location: `user-guide/elements.qmd:836` in the baseline. [Rendered change](_site/user-guide/elements.html#ug-12-24).

Existing availability restriction highlighted in orange as requested. Unsupported native bend attributes remain visible as restrictions.

**Original / insertion anchor**
```text
| `E1`, `E2` | rad | Parsed but explicitly rejected by the current native bend port. |
| `GAP`, `GREATERTHANPI` | - | Rejected compatibility attributes. Use `HGAP`; bends beyond the old compatibility path are unsupported. |
```

**Proposed wording / discussion addition**
```text
| `E1`, `E2` | rad | `RBEND` only: entrance and exit pole-face angles, default `ANGLE/2` each. They must satisfy `E1 + E2 = ANGLE`; give one and the other is derived. Each must lie strictly between $-\pi/2$ and $\pi/2$. `SBEND` rejects them. |
| `GAP`, `GREATERTHANPI` | m / — | `GAP` is the full gap for `RBEND`, instead of `HGAP`; giving both is rejected. `SBEND` rejects `GAP`. `GREATERTHANPI` is rejected by `SBEND` and ignored by `RBEND`. |
```

Evidence: `src/Elements/OpalRBend.cpp:163-209`; `src/Elements/OpalSBend.cpp`.

**User decision:** Accepted current marked wording on2026-10-30. Preserve upstream bend restrictions; remove review labels/colors only.

**Upstream synchronization (2026-10-29):** The origin/main update pulled on 2026-10-29 supersedes the earlier wording shown below. The existing review status and finding ID are retained.

Current wording after synchronization:
```text
| `E1`, `E2` | [rad]{.ug-audit-availability} | [**UG-12-24:** `RBEND` only: entrance and exit pole-face angles, default `ANGLE/2` each. They must satisfy `E1 + E2 = ANGLE`; give one and the other is derived. Each must lie strictly between $-\pi/2$ and $\pi/2$. `SBEND` rejects them.]{.ug-audit-availability #ug-12-24} |
| `GAP`, `GREATERTHANPI` | [m / —]{.ug-audit-availability} | [`GAP` is the full gap for `RBEND`, instead of `HGAP`; giving both is rejected. `SBEND` rejects `GAP`. `GREATERTHANPI` is rejected by `SBEND` and ignored by `RBEND`.]{.ug-audit-availability} |
```

### UG-12-25 — Technical / units / links — Accepted 2026-10-29

Location: `user-guide/elements.qmd:854` in the baseline. [Rendered change](_site/user-guide/elements.html#ug-12-25).

State the enforced expansion limit and input conversion.

**Original / insertion anchor**
```text
The maximum power in y that will be considered in the field expansion (default 3).
```

**Proposed wording / discussion addition**
```text
Maximum power of $y$ in the field expansion, limited to 20; real input is rounded down to an integer.
```

Evidence: `src/AbsBeamline/ScalingFFAMagnet.cpp:170-177`; `src/Elements/OpalScalingFFAMagnet.cpp:168-174`.

### UG-12-26 — Technical / units / links — Accepted 2026-10-29

Location: `user-guide/elements.qmd:859` in the baseline. [Rendered change](_site/user-guide/elements.html#ug-12-26).

The magnet attribute is L, not LENGTH, and named end-field models determine the default extent.

**Original / insertion anchor**
```text
The default is given by $(`LENGTH`/2 + 5 \times `FRINGE_LENGTH`)$.
```

**Proposed wording / discussion addition**
```text
Without a named end-field model, the default is `L/2 + 5*FRINGE_LENGTH`; with a named model, it is derived from that model's centre and fringe lengths.
```

Evidence: `src/Elements/OpalScalingFFAMagnet.cpp:191-204`; `src/AbsBeamline/ScalingFFAMagnet.cpp:setupEndField`.

### UG-12-27 — English — Accepted 2026-10-29

Location: `user-guide/elements.qmd:883` in the baseline. [Rendered change](_site/user-guide/elements.html#ug-12-27).

Correct supersedes and clarify that the string selects a separately named definition.

**Original / insertion anchor**
```text
enables the user to define a plug in element like an Enge function. This model
then replaces the default tanh model and supercedes both `L` and `FRINGE_LENGTH`
parameters. See End Field Models below for options.
```

**Proposed wording / discussion addition**
```text
selects a named model such as an Enge function. This model
replaces the default tanh model and supersedes both `L` and `FRINGE_LENGTH`.
See End Field Models below for options.
```

Evidence: `src/Elements/OpalScalingFFAMagnet.cpp:setupNamedEndField`.

### UG-12-28 — Technical / units / links — Rejected; original wording restored

Location: `user-guide/elements.qmd:939` in the baseline. [Rendered change](_site/user-guide/elements.html#ug-12-28).

Correct the sign of the exit half-length shift to match the implemented symmetric profile.

**Original / insertion anchor**
```text
$f(x) = \frac{1}{1+e^{p(-x - L/2)}}+\frac{1}{1+e^{p(x + L/2)}} - 1$
```

**Existing wording (unchanged; highlighted for discussion)**
```text
$f(x) = \frac{1}{1+e^{p(-x - L/2)}}+\frac{1}{1+e^{p(x + L/2)}} - 1$
```

Evidence: `src/AbsBeamline/EndFieldModel/Enge.h:functionDevice`.

**User decision:** User chose the original version; proposed Enge correction rejected.

**Rejected proposal (record only)**
```text
$f(x) = \frac{1}{1+e^{p(-x - L/2)}}+\frac{1}{1+e^{p(x - L/2)}} - 1$
```

### UG-12-29 — Technical / units / links — Rejected; original wording restored

Location: `user-guide/elements.qmd:950` in the baseline. [Rendered change](_site/user-guide/elements.html#ug-12-29).

The start and end descriptions are reversed.

**Original / insertion anchor**
```text
| `START_HALF_LENGTH` | m |   | Half length of the end of the field model $L_s$. |
```

**Existing wording (unchanged; highlighted for discussion)**
```text
| `START_HALF_LENGTH` | m |   | Half length of the end of the field model $L_s$. |
```

Evidence: `src/Elements/OpalAsymmetricEnge.cpp:18-35`.

**User decision:** User chose the original version; proposed Enge correction rejected.

**Rejected proposal (record only)**
```text
| `START_HALF_LENGTH` | m |   | Entrance half-length offset $L_s$. |
```

### UG-12-30 — Technical / units / links — Rejected; original wording restored

Location: `user-guide/elements.qmd:953` in the baseline. [Rendered change](_site/user-guide/elements.html#ug-12-30).

Correct the reversed end description.

**Original / insertion anchor**
```text
| `END_HALF_LENGTH` | m |   | Half length of the start of the field model $L_e$. |
```

**Existing wording (unchanged; highlighted for discussion)**
```text
| `END_HALF_LENGTH` | m |   | Half length of the start of the field model $L_e$. |
```

Evidence: `src/Elements/OpalAsymmetricEnge.cpp:27-35`.

**User decision:** User chose the original version; proposed Enge correction rejected.

**Rejected proposal (record only)**
```text
| `END_HALF_LENGTH` | m |   | Exit half-length offset $L_e$. |
```

### UG-12-31 — Technical / units / links — Rejected; original wording restored

Location: `user-guide/elements.qmd:959` in the baseline. [Rendered change](_site/user-guide/elements.html#ug-12-31).

Use the separately defined exit polynomial and the implemented exit offset sign.

**Original / insertion anchor**
```text
$f(x) = \frac{1}{1+e^{p_s(-x - L_s)}}+\frac{1}{1+e^{p(x + L_e)}} - 1$
```

**Existing wording (unchanged; highlighted for discussion)**
```text
$f(x) = \frac{1}{1+e^{p_s(-x - L_s)}}+\frac{1}{1+e^{p(x + L_e)}} - 1$
```

Evidence: `src/AbsBeamline/EndFieldModel/AsymmetricEnge.h:159-169`.

**User decision:** User chose the original version; proposed Enge correction rejected.

**Rejected proposal (record only)**
```text
$f(x) = \frac{1}{1+e^{p_s(-x - L_s)}}+\frac{1}{1+e^{p_e(x - L_e)}} - 1$
```

### UG-12-32 — Feature coverage / availability — Removed from manual

Location: `user-guide/elements.qmd:968` in the baseline. Removed from the manual; original text retained in this record.

The overview lists a registered type without a section. The current evaluator uses a zero-initialized fringe derivative array without filling it, yielding no intended field for finite nonzero index.

**Original / insertion anchor**
```text
## `VARIABLE_RF_CAVITY` {#variable-rf-cavity}
```

**Proposed wording / discussion addition**
```text
## `VERTICALFFAMAGNET` {#verticalffamagnet}

The vertical FFA interface is registered, but its current field calculation is incomplete and does not provide the intended magnetic field. Treat this feature as unavailable for physical tracking in the current master. Its declared interface is:

| Parameter | Unit | Meaning |
|---|---|---|
| `B0` | T | Nominal vertical field at zero height. |
| `FIELD_INDEX` | $\mathrm m^{-1}$ | Exponential vertical field index. |
| `WIDTH` | m | Full horizontal width. |
| `HEIGHT_NEG_EXTENT`, `HEIGHT_POS_EXTENT` | m | Vertical extents below and above the local midplane. |
| `CENTRE_LENGTH`, `END_LENGTH` | m | Flat-top length and tanh fringe scale. |
| `BB_LENGTH` | m | Full longitudinal bounding length. |
| `MAX_HORIZONTAL_POWER` | integer | Horizontal expansion order, rounded down; maximum 20. |

Future availability has not been confirmed.
```

Evidence: `src/Elements/OpalVerticalFFAMagnet.cpp:29-57,81-100`; `src/AbsBeamline/VerticalFFAMagnet.h:277-319`; `src/AbsBeamline/VerticalFFAMagnet.cpp:99-108`.

**User decision:** Remove VERTICALFFAMAGNET from the manual at the user's request; retain the original audit evidence only in the review record.

### UG-12-33 — Feature coverage / availability — Accepted 2026-10-29

Location: `user-guide/elements.qmd:1028` in the baseline. [Rendered change](_site/user-guide/elements.html#ug-12-33).

Existing availability restriction highlighted in orange as requested. The sinusoidal frequency integral is incomplete.

**Original / insertion anchor**
```text
The current sinusoidal integral has an inconsistent
  oscillating-amplitude normalization; use a polynomial frequency model
  when the RF phase must be the integral of its specified frequency.
```

**Existing wording (unchanged; highlighted for discussion)**
```text
The current sinusoidal integral has an inconsistent
  oscillating-amplitude normalization; use a polynomial frequency model
  when the RF phase must be the integral of its specified frequency.
```

Evidence: `src/Algorithms/SinusoidalTimeDependence.cpp`.

### UG-12-34 — Technical / units / links — Accepted 2026-10-30

Location: `user-guide/_legacy-elements.qmd:666` in the baseline. [Rendered change](_site/user-guide/elements.html#ug-12-34).

The sentence claims four families but the following list contains three. Use a scope statement without asserting how many other historical families existed.

**Original / insertion anchor**
```text
Legacy OPAL supports four bend families:
```

**Proposed wording / discussion addition**
```text
The legacy bend families described here are:
```

Evidence: `user-guide/_legacy-elements.qmd:666`.

**User decision:** Accepted during interactive review on2026-10-30; retain current proposal and remove review styling.

### UG-12-35 — English — Accepted 2026-10-29

Location: `user-guide/_legacy-elements.qmd:1247` in the baseline. [Rendered change](_site/user-guide/elements.html#ug-12-35).

Repair the incomplete sentence and stray comma without inferring additional historical geometry semantics.

**Original / insertion anchor**
```text
`MINR`, and `MAXR` limits. In OPAL-T it is described by the usual `L` and
`ELEMEDGE` placement parameters.
```

**Proposed wording / discussion addition**
```text
`MINR` and `MAXR` specify the limits. In OPAL-T, placement is described by
the usual `L` and `ELEMEDGE` parameters.
```

Evidence: `user-guide/_legacy-elements.qmd:1247`.

### UG-13-01 — Technical / units / links — Accepted 2026-10-29

Location: `user-guide/cyclotron.qmd:81` in the baseline. [Rendered change](_site/user-guide/cyclotron.html#ug-13-01).

Review question: it is uncertain whether the stated space-charge restriction is a validated-use policy or an enforced implementation limit. The audited TURNS validation and terminal-return calculation do not reject a non-NONE solver generally. Keep the existing wording pending confirmation; this finding does not assert new collective-tracking support.

**Original / insertion anchor**
```text
Explicit `TURNS` stopping is not supported with space charge.
```

**Proposed wording / discussion addition**
```text
Explicit `TURNS` stopping is supported with space charge under the [documented restrictions](tracking.qmd#turns). The stopping plane is determined by the external-field reference particle.
```

Evidence: `src/Track/TrackRun.cpp:677–724`; `src/Algorithms/ParallelTracker.cpp:419–445`; `src/Algorithms/ParallelTracker.cpp:669–689`; `src/Track/TrackRun.cpp:640–655`.

**User decision:** CONS-01 accepted: supersedes the earlier no-space-charge restriction; the stop follows the external-field reference particle.

### UG-13-02 — Feature coverage / availability — Accepted 2026-10-29

Location: `user-guide/cyclotron.qmd:113` in the baseline. [Rendered change](_site/user-guide/cyclotron.html#ug-13-02).

Accurate existing availability notice highlighted in orange per the audit request. SINGLEGAP does not support the legacy cavity geometry controls or automatic phase search.

**Original / insertion anchor**
```text
`ANGLE` and `PDIS` must remain zero for this
model, and automatic phasing is not used.
```

**Existing wording (unchanged; highlighted for discussion)**
```text
`ANGLE` and `PDIS` must remain zero for this
model, and automatic phasing is not used.
```

Evidence: `src/Elements/OpalCavity.cpp:103–116`; `src/Elements/OpalCavity.cpp:129`.

### UG-13-03 — Technical / units / links — Accepted 2026-10-29

Location: `user-guide/cyclotron.qmd:149` in the baseline. [Rendered change](_site/user-guide/cyclotron.html#ug-13-03).

Document the no-overwrite behavior and link the complete command reference rather than leaving the example as the only attribute guide.

**Original / insertion anchor**
```text
`OUTPUT` is optional and names one JSON file. Omit it for an in-memory result.
```

**Proposed wording / discussion addition**
```text
`OUTPUT` is optional and names one JSON file; an existing file is rejected. Omit it for an in-memory result. See the [complete `COF` attribute table](tracking.qmd#opalx-cof-command) for solver defaults, tolerances, and iteration controls.
```

Evidence: `src/Track/CofCmd.cpp:193`; `src/Track/CofCmd.cpp:412–447`; `user-guide/tracking.qmd:319–379`.

### UG-13-04 — Feature coverage / availability — Accepted 2026-10-29

Location: `user-guide/cyclotron.qmd:159` in the baseline. [Rendered change](_site/user-guide/cyclotron.html#ug-13-04).

Accurate existing availability notice highlighted in orange per the audit request. Keep the currently unavailable COF combinations visible as one grouped restriction.

**Original / insertion anchor**
```text
The current COF implementation supports static magnetic transport elements and
`CYCLOTRONSECTOR`; it does not support restart mode, RF acceleration, space
charge, or global particle processes.
```

**Existing wording (unchanged; highlighted for discussion)**
```text
The current COF implementation supports static magnetic transport elements and
`CYCLOTRONSECTOR`; it does not support restart mode, RF acceleration, space
charge, or global particle processes.
```

Evidence: `src/Track/CofCmd.cpp:110–119`; `src/Track/CofCmd.cpp:149`; `src/Track/CofCmd.cpp:455–461`.

### UG-13-05 — Technical / units / links — Accepted 2026-10-29

Location: `user-guide/cyclotron.qmd:188` in the baseline. [Rendered change](_site/user-guide/cyclotron.html#ug-13-05).

Add enforced scheduling constraints; otherwise inputs can satisfy the prose restrictions and still be rejected.

**Original / insertion anchor**
```text
The diagnostic currently requires one proton beam, one MPI rank, `FIELDSOLVER`
`TYPE=NONE`, a non-restarted `RING` containing only `CYCLOTRONSECTOR` elements,
and no RF elements or global particle processes.
```

**Proposed wording / discussion addition**
```text
The diagnostic currently requires one proton beam, one MPI rank, `FIELDSOLVER` `TYPE=NONE`, a non-restarted `RING` containing only `CYCLOTRONSECTOR` elements, and no RF elements or global particle processes. Use one positive `DT` segment, positive `STEPSPERTURN`, and integer `TURNS` and `TUNESAMPLE` values from 1 to 100000. Set `MAXSTEPS` to at least `TURNS * STEPSPERTURN` and retain at least 12 tune samples.
```

Evidence: `src/Track/TrackRun.cpp:761–785`; `src/Algorithms/SpectralTunes.cpp:18–20`.

### UG-14-01 — Feature coverage / availability — Removed from manual

Location: `user-guide/diagnostics-output.qmd:22` in the baseline. Removed from the manual; original text retained in this record.

The supported command is listed without explaining when it takes effect, which fields it samples, or where its output is written.

**Original / insertion anchor**
```text
- `DUMPEMFIELDS`: write out the external electromagnetic field on a 4D grid in
  space-time; Cartesian and cylindrical grids are supported
```

**Proposed wording / discussion addition**
```text
Declare `DUMPEMFIELDS` before the `RUN` that should write the samples. The command queues a request; the file is written after the lattice fields are initialized, before ordinary particle tracking. It contains external element fields, not space-charge or wake fields. A relative `FILE_NAME` is written in the auxiliary output directory; an absolute name is used as supplied.
```

Evidence: `src/BasicActions/DumpEMFields.cpp:117–124`; `src/BasicActions/DumpEMFields.cpp:243–255`; `src/BasicActions/DumpEMFields.cpp:287–298`; `src/Algorithms/ParallelTracker.cpp:609–610`.

**User decision:** User requested removal of this marked passage; retain adjacent manual text and original audit evidence.

### UG-14-02 — Technical / units / links — Accepted 2026-10-29

Location: `user-guide/diagnostics-output.qmd:74` in the baseline. [Rendered change](_site/user-guide/diagnostics-output.html#ug-14-02).

The OPALX cylindrical transform uses the horizontal X-Z plane and the Y axis.

**Original / insertion anchor**
```text
cylindrical about the `z` axis: `(r, phi, z, t)` in OPAL, `(r, phi, y, t)` in OPALX
```

**Proposed wording / discussion addition**
```text
cylindrical: about the `z` axis in OPAL, `(r, phi, z, t)`; about the vertical `y` axis in OPALX, `(r, phi, y, t)`
```

Evidence: `src/BasicActions/DumpEMFields.cpp:237–241`; `src/BasicActions/DumpEMFields.cpp:259–267`.

### UG-14-03 — Technical / units / links — Moved to OPALX issue

Location: `user-guide/diagnostics-output.qmd:76` in the baseline. [OPALX issue](https://github.com/OPALX-project/OPALX/issues/654).

Expose the unresolved ns-versus-seconds discrepancy for discussion without silently asserting corrected RF sampling units.

**Original / insertion anchor**
```text
### Cartesian Mode
```

**Proposed wording / discussion addition**
```text
**Review question — OPALX time units:** the input help and output header label `T_START`, `DT`, and `t` in ns, but the field sampler forwards these numeric values directly to RF elements, whose time argument is in seconds. The intended sampling convention needs confirmation before these time units can be documented consistently. Static-field sampling is unaffected by this ambiguity.
```

Evidence: `src/BasicActions/DumpEMFields.cpp:65-69,249`; `src/AbsBeamline/RFCavity.cpp:140`.

**User decision:** User requested the review note removed from the manual and transferred to an OPALX source issue; runtime unit behavior remains to be decided and verified.

### UG-14-04 — Technical / units / links — Accepted 2026-10-29

Location: `user-guide/diagnostics-output.qmd:78` in the baseline. [Rendered change](_site/user-guide/diagnostics-output.html#ug-14-04).

The registered default is missing.

**Original / insertion anchor**
```text
Cartesian mode is selected with `COORDINATE_SYSTEM = CARTESIAN`.
```

**Proposed wording / discussion addition**
```text
Cartesian mode is selected with `COORDINATE_SYSTEM = CARTESIAN`; this is the OPALX default.
```

Evidence: `src/BasicActions/DumpEMFields.cpp:41–43`.

### UG-14-05 — Technical / units / links — Accepted 2026-10-29

Location: `user-guide/diagnostics-output.qmd:122` in the baseline. [Rendered change](_site/user-guide/diagnostics-output.html#ug-14-05).

Clarify sample counts versus intervals; the existing term steps can otherwise imply one extra endpoint.

**Original / insertion anchor**
```text
Attributes in Cartesian mode:
```

**Proposed wording / discussion addition**
```text
Each `*_STEPS` value is the number of grid samples, including the start point. A coordinate with start `a`, spacing `d`, and count `n` is sampled at `a + j*d` for `j=0,...,n-1`; the final point is `a + (n-1)*d`. Use a count of `1` for a fixed coordinate.
```

Evidence: `src/BasicActions/DumpEMFields.cpp:126–175`; `src/BasicActions/DumpEMFields.cpp:305–311`; `src/Fields/Interpolation/NDGrid.cpp`.

### UG-14-06 — Technical / units / links — Accepted 2026-10-30

Location: `user-guide/diagnostics-output.qmd:215` in the baseline. [Rendered change](_site/user-guide/diagnostics-output.html#ug-14-06).

Input angle units are absent, while the output header shows degrees, which can lead users to supply degrees incorrectly.

**Original / insertion anchor**
```text
| `CYL_ORIGIN_X`, `CYL_ORIGIN_Y`, `CYL_ORIGIN_Z` | optional cylindrical-origin coordinates in `m`; defaults are `0` |
```

**Proposed wording / discussion addition**
```text
For OPALX, give `PHI_START` and `DPHI` in radians. The output converts `phi` to degrees. The cylindrical coordinates satisfy `x = CYL_ORIGIN_X + r*cos(phi)`, `z = CYL_ORIGIN_Z + r*sin(phi)`, and `y = CYL_ORIGIN_Y + Y_START + j*DY`.
```

Evidence: `src/BasicActions/DumpEMFields.cpp:78–81`; `src/BasicActions/DumpEMFields.cpp:237–241`; `src/BasicActions/DumpEMFields.cpp:267`.

**User decision:** Accepted during interactive review on2026-10-30; retain current proposal and remove review styling.

### UG-15-01 — Feature coverage / availability — Accepted 2026-10-29

Location: `user-guide/beam-lines/index.qmd:19` in the baseline. [Rendered change](_site/user-guide/beam-lines/index.html#ug-15-01).

Document the parser-supported LINE modifiers; the existing RING section mentions their absence without ever defining the available LINE syntax. Distinguish named reflection from anonymous-group reversal.

**Original / insertion anchor**
```text
Each `member` may be:

- an element label,
- a beamline label,
- a sub-line enclosed in parentheses.
```

**Proposed wording / discussion addition**
```text
For `LINE`, an integer prefix repeats a member or group, for example `3*Q1` or `2*(D1,Q1)`. A minus sign on a named member sets its reflection flag, for example `-Q1`. On an anonymous group, `-(D1,Q1)` reverses the member order; it does not reflect the individual members. These modifiers are rejected by `RING`.
```

Evidence: `src/Lines/Line.cpp:279–317`; `src/Lines/Line.cpp:341–345`.

### UG-15-02 — Feature coverage / availability — Accepted 2026-10-29

Location: `user-guide/beam-lines/index.qmd:45` in the baseline. [Rendered change](_site/user-guide/beam-lines/index.html#ug-15-02).

The source-frame scalar interface, array lengths, units, defaults, and precedence are implemented but missing from this chapter.

**Original / insertion anchor**
```text
`ORIENTATION`
: orientation vector of Tait-Bryan angles at the line origin.
```

**Proposed wording / discussion addition**
```text
OPALX also accepts the scalar source-frame attributes `X`, `Y`, `Z` in metres and `THETA`, `PHI`, `PSI` in radians, all defaulting to zero. Alternatively use three-entry arrays `ORIGIN={x,y,z}` and `ORIENTATION={theta,phi,psi}`. If either array is supplied, the array form takes precedence over the scalar form; an omitted companion array uses the zero origin or identity orientation. The angle components correspond to rotations about the y, x, and z axes, respectively.
```

Evidence: `src/Lines/Line.cpp:76–97`; `src/Lines/Line.cpp:197–251`.

### UG-15-03 — Technical / units / links — Accepted 2026-10-30

Location: `user-guide/beam-lines/index.qmd:52` in the baseline. [Rendered change](_site/user-guide/beam-lines/index.html#ug-15-03).

The parser resolves names immediately and rejects undefined members, so the forward-reference claim is wrong.

**Original / insertion anchor**
```text
Lines and sub-lines can be entered in any order, but when a line is
used, all of its sub-lines must already be known to the parser.
```

**Proposed wording / discussion addition**
```text
Define each element and named sub-line before the `LINE` that uses it; members are resolved when the line definition is parsed.
```

Evidence: `src/Lines/Line.cpp:320–349`.

**User decision:** Accepted during interactive review on2026-10-30; retain current proposal and remove review styling.

### UG-15-04 — Technical / units / links — Accepted 2026-10-30

Location: `user-guide/beam-lines/index.qmd:57` in the baseline. [Rendered change](_site/user-guide/beam-lines/index.html#ug-15-04).

Correct the invalid forward-reference example.

**Original / insertion anchor**
```text
```text
L: LINE = (A, B, S, B, A, S, A, B);
S: LINE = (C, D, E);
```
```

**Proposed wording / discussion addition**
```text
```text
S: LINE = (C, D, E);
L: LINE = (A, B, S, B, A, S, A, B);
```
```

Evidence: `src/Lines/Line.cpp:323–327`.

**User decision:** Accepted during interactive review on2026-10-30; retain current proposal and remove review styling.

### UG-15-05 — English — Accepted 2026-10-29

Location: `user-guide/beam-lines/index.qmd:62` in the baseline. [Rendered change](_site/user-guide/beam-lines/index.html#ug-15-05).

Remove an ambiguous reference to an unspecified source manual; the following expansion belongs to this example.

**Original / insertion anchor**
```text
The source manual expands this in two steps.
```

**Proposed wording / discussion addition**
```text
This expands in two steps.
```

Evidence: `user-guide/beam-lines/index.qmd:57–74`.

### UG-15-06 — Feature coverage / availability — Accepted 2026-10-29

Location: `user-guide/beam-lines/index.qmd:88` in the baseline. [Rendered change](_site/user-guide/beam-lines/index.html#ug-15-06).

Accurate existing availability notice highlighted in orange per the audit request. Nested RING sequences are explicitly rejected; modifier restrictions are already highlighted separately.

**Original / insertion anchor**
```text
a `RING`
cannot be nested inside a `LINE` or another `RING`.
```

**Existing wording (unchanged; highlighted for discussion)**
```text
a `RING`
cannot be nested inside a `LINE` or another `RING`.
```

Evidence: `src/Lines/Line.cpp:338–340`.

### UG-16-01 — Technical / units / links — Accepted 2026-10-29

Location: `user-guide/beam.qmd:34` in the baseline. [Rendered change](_site/user-guide/beam.html#ug-16-01).

The table incorrectly requires sources on decay daughter beams, which master explicitly rejects.

**Original / insertion anchor**
```text
`EMISSIONSOURCELIST` used by this non-photon beam.
```

**Proposed wording / discussion addition**
```text
`EMISSIONSOURCELIST` used by a source beam; forbidden on a beam selected as another beam's `DAUGHTERBEAM`.
```

Evidence: `src/Track/TrackRun.cpp:383–400`; `src/Track/TrackRun.cpp:442–454`.

### UG-16-02 — Feature coverage / availability — Accepted 2026-10-29

Location: `user-guide/beam.qmd:37` in the baseline. [Rendered change](_site/user-guide/beam.html#ug-16-02).

Accurate existing availability notice highlighted in orange per the audit request. Only muon spin is supported by this public interface; POLARIZATION on another species is rejected.

**Original / insertion anchor**
```text
Muon-only vector `{Px, Py, Pz}` with $|\mathbf P|\leq1$. Setting it, including to zero, enables spin storage.
```

**Existing wording (unchanged; highlighted for discussion)**
```text
Muon-only vector `{Px, Py, Pz}` with $|\mathbf P|\leq1$. Setting it, including to zero, enables spin storage.
```

Evidence: `src/Structure/Beam.cpp:239–251`.

**Upstream synchronization (2026-10-29):** The origin/main update pulled on 2026-10-29 supersedes the earlier wording shown below. The existing review status and finding ID are retained.

Current wording after synchronization:
```text
Muon-only vector `{Px, Py, Pz}` with $|\mathbf P|\leq1$; requires `PARTICLE`. Setting it, including to zero, enables spin tracking. Every particle starts with this vector, given along the same axes as the distribution momenta.
```

### UG-16-03 — Feature coverage / availability — Accepted 2026-10-29

Location: `user-guide/beam.qmd:38` in the baseline. [Rendered change](_site/user-guide/beam.html#ug-16-03).

Accurate existing availability notice highlighted in orange per the audit request. BCURRENT and BFREQ are registered compatibility attributes but unavailable at execution.

**Original / insertion anchor**
```text
Legacy attributes explicitly rejected by OPALX; use `BCHARGE`.
```

**Existing wording (unchanged; highlighted for discussion)**
```text
Legacy attributes explicitly rejected by OPALX; use `BCHARGE`.
```

Evidence: `src/Structure/Beam.cpp:181–185`.

### UG-16-04 — Feature coverage / availability — Accepted 2026-10-29

Location: `user-guide/beam.qmd:38` in the baseline. [Rendered change](_site/user-guide/beam.html#ug-16-04).

TUNEINITIAL is a registered public BEAM attribute missing from the otherwise complete table.

**Original / insertion anchor**
```text
| `BCURRENT`, `BFREQ` | unset | - | Legacy attributes explicitly rejected by OPALX; use `BCHARGE`. |
```

**Proposed wording / discussion addition**
```text
The additional `TUNEINITIAL` array supplies repeated triples `{kinetic_energy_GeV, radius_m, radial_momentum_mc, ...}` to the experimental `RUN,SPECTRALTUNES=TRUE` diagnostic. It does not replace the ordinary source distribution. See [Tune Calculation](cyclotron.qmd#tune-calculation).
```

Evidence: `src/Structure/Beam.cpp:71–73`; `src/Track/TrackRun.cpp:761–785`.

### UG-16-05 — Technical / units / links — Accepted 2026-10-29

Location: `user-guide/beam.qmd:56` in the baseline. [Rendered change](_site/user-guide/beam.html#ug-16-05).

The existing inequality avoids insufficient capacity but does not explain that choosing NALLOC larger than the generated count reduces the realized bunch charge.

**Original / insertion anchor**
```text
`NALLOC` is required and must be positive. It remains the denominator used to
derive macroparticle charge even when the sum of `NPARTDIST` over all sources
sets a different runtime allocation. Keep `NALLOC` at least as large as that
sum unless the weighting is intentional.
```

**Proposed wording / discussion addition**
```text
`NALLOC` is required and must be positive. It remains the denominator used to derive macroparticle charge even when the sum of `NPARTDIST` over all sources sets a different runtime allocation. For a source beam with `N` generated particles, the total charge magnitude is `N * BCHARGE / NALLOC`; set `NALLOC=N` when the generated bunch should carry `BCHARGE`. Keep allocation and particle counts consistent unless a different weighting is intentional.
```

Evidence: `src/Structure/Beam.cpp:347–352`; `src/Track/TrackRun.cpp:959–981`.

### UG-16-06 — Technical / units / links — Accepted 2026-10-30

Location: `user-guide/beam.qmd:61` in the baseline. [Rendered change](_site/user-guide/beam.html#ug-16-06).

Correct the same obsolete rule in the allocation prose.

**Original / insertion anchor**
```text
Every tracked non-photon beam requires a non-empty `SOURCES` name. The target
list must contain at least one `EMISSIONSOURCE`; it is resolved during `RUN`.
```

**Proposed wording / discussion addition**
```text
Each tracked source beam requires a non-empty `SOURCES` name. The target list must contain at least one `EMISSIONSOURCE`; it is resolved during `RUN`. A decay daughter beam receives particles only from its parent decay and must omit `SOURCES`.
```

Evidence: `src/Track/TrackRun.cpp:383–400`; `src/Track/TrackRun.cpp:442–454`.

**User decision:** Accepted during interactive review on2026-10-30; retain current proposal and remove review styling.

### UG-16-07 — Feature coverage / availability — Accepted 2026-10-29

Location: `user-guide/beam.qmd:70` in the baseline. [Rendered change](_site/user-guide/beam.html#ug-16-07).

The daughter-only reference and injection restrictions are implemented but missing from this section.

**Original / insertion anchor**
```text
- `DAUGHTERBEAM` must name another beam selected by the same `TRACK` command.
```

**Proposed wording / discussion addition**
```text
- A beam selected as a `DAUGHTERBEAM` must omit `GAMMA`, `ENERGY`, `PC`, and `SOURCES`. It inherits the reference particle and frame of the first source beam in its decay chain. The first entry of `TRACK.BEAMS` must be a source beam, not a decay daughter.
```

Evidence: `src/Track/TrackRun.cpp:360–400`; `src/Track/TrackRun.cpp:947–953`.

### UG-16-08 — Feature coverage / availability — Accepted 2026-10-29

Location: `user-guide/beam.qmd:81` in the baseline. [Rendered change](_site/user-guide/beam.html#ug-16-08).

Accurate existing availability notice highlighted in orange per the audit request. Photon tracking is unavailable even though the species can be defined.

**Original / insertion anchor**
```text
`PARTICLE=PHOTON` is accepted as a definition but is rejected by `TRACK`.
```

**Proposed wording / discussion addition**
```text
Not yet implemented
```

Evidence: `src/Track/TrackRun.cpp:351–357`.

**User decision:** Replace this availability note with the exact wording supplied by the user.

### UG-16-09 — English — Accepted 2026-10-29

Location: `user-guide/beam.qmd:83` in the baseline. [Rendered change](_site/user-guide/beam.html#ug-16-09).

Replace implementation narration and vague path wording with the same clear user-facing unit and availability statement.

**Original / insertion anchor**
```text
The current source declares the shared
`BEAM.ENERGY` input unit as GeV; no photon transport path consumes the value yet.
```

**Proposed wording / discussion addition**
```text
`BEAM.ENERGY` uses GeV. Photon transport is not yet available.
```

Evidence: `src/Structure/Beam.cpp:77–78`; `src/Track/TrackRun.cpp:351–357`.

### UG-17-01 — Technical / units / links — Accepted 2026-10-29

Location: `user-guide/beam-distributions.qmd:13` in the baseline. [Rendered change](_site/user-guide/beam-distributions.html#ug-17-01).

BCHARGE is a positive magnitude; its negative value reverses the intended electron macroparticle charge sign and contradicts Beam Definitions.

**Original / insertion anchor**
```text
```text
Dist: DISTRIBUTION, TYPE=GAUSS, NPARTDIST=10000,
      SIGMAX=1e-3, SIGMAY=1e-3, SIGMAZ=2e-3,
      SIGMAPX=1e-4, SIGMAPY=1e-4, SIGMAPZ=1e-4;
Source: EMISSIONSOURCE, DISTRIBUTION=Dist;
Sources: EMISSIONSOURCELIST=(Source);
Beam: BEAM, PARTICLE=ELECTRON, PC=0.1, NALLOC=10000,
      BCHARGE=-1e-9, SOURCES=Sources;
```
```

**Proposed wording / discussion addition**
```text
```text
Dist: DISTRIBUTION, TYPE=GAUSS, NPARTDIST=10000,
      SIGMAX=1e-3, SIGMAY=1e-3, SIGMAZ=2e-3,
      SIGMAPX=1e-4, SIGMAPY=1e-4, SIGMAPZ=1e-4;
Source: EMISSIONSOURCE, DISTRIBUTION=Dist;
Sources: EMISSIONSOURCELIST=(Source);
Beam: BEAM, PARTICLE=ELECTRON, PC=0.1, NALLOC=10000,
      BCHARGE=1e-9, SOURCES=Sources;
```
```

Evidence: `src/Structure/Beam.cpp:347–352`; `user-guide/beam.qmd:18–20`.

### UG-17-02 — Feature coverage / availability — Accepted 2026-10-29

Location: `user-guide/beam-distributions.qmd:82` in the baseline. [Rendered change](_site/user-guide/beam-distributions.html#ug-17-02).

Provide an explicit current-availability boundary for features still present in the retained legacy half of this chapter, without inventing implementation plans.

**Original / insertion anchor**
```text
OPALX accepts exactly `UNIFORM`, `GAUSS`, `MULTIVARIATEGAUSS`, `FLATTOP`,
`OPALFLATTOP`, `FROMFILE`, and `EMITTEDFROMFILE`.
```

**Proposed wording / discussion addition**
```text
The legacy OPAL types `BINOMIAL`, `GAUSSMATCHED`, `MULTIGAUSS`, `GUNGAUSSFLATTOPTH`, and `ASTRAFLATTOPTH` are unavailable in the current OPALX version. The legacy `NONEQUIL` emission model and laser-image distribution attributes are also unavailable.
```

Evidence: `src/Distribution/Distribution.cpp:112–115`; `src/Distribution/Distribution.cpp:117–192`; `src/Structure/EmissionSource.cpp:55–60`; `src/Track/TrackRun.cpp:1040–1063`.

**User decision:** Exact replacement supplied by user.

### UG-17-03 — Technical / units / links — Accepted 2026-10-30

Location: `user-guide/beam-distributions.qmd:91` in the baseline. [Rendered change](_site/user-guide/beam-distributions.html#ug-17-03).

Document actual lookup precedence, important when identically named files exist in both locations.

**Original / insertion anchor**
```text
Input particle file. Relative paths are resolved from the OPALX input file.
```

**Proposed wording / discussion addition**
```text
Input particle file. A relative name is first checked in the working directory; if absent, it is checked relative to the OPALX input file directory.
```

Evidence: `src/Distribution/FromFile.cpp:26–38`; `src/Distribution/EmittedFromFile.cpp:131–143`.

**User decision:** Accepted during interactive review on2026-10-30; retain current proposal and remove review styling.

### UG-17-04 — Technical / units / links — Accepted 2026-10-30

Location: `user-guide/beam-distributions.qmd:102` in the baseline. [Rendered change](_site/user-guide/beam-distributions.html#ug-17-04).

The non-positive fallback is missing.

**Original / insertion anchor**
```text
Preferred emission resolution; positive values are rounded up.
```

**Proposed wording / discussion addition**
```text
Defines the number of emission steps.
```

Evidence: `src/Distribution/Distribution.cpp:298–303`.

**User decision:** User wording: Defines the number of emission steps.

### UG-17-05 — Feature coverage / availability — Accepted 2026-10-29

Location: `user-guide/beam-distributions.qmd:105` in the baseline. [Rendered change](_site/user-guide/beam-distributions.html#ug-17-05).

Accurate existing availability notice highlighted in orange per the audit request. The accepted named correlation attributes have no sampler effect; highlight the existing warning once in the parameter table.

**Original / insertion anchor**
```text
**Accepted but currently ignored; use `CORR` with `MULTIVARIATEGAUSS`.**
```

**Existing wording (unchanged; highlighted for discussion)**
```text
**Accepted but currently ignored; use `CORR` with `MULTIVARIATEGAUSS`.**
```

Evidence: `src/Distribution/Distribution.cpp:144–151`; `src/Distribution/Distribution.cpp:350–386`; `src/Distribution/Distribution.cpp:415–420`; `src/Distribution/Gaussian.cpp:21–42`.

### UG-17-06 — Feature coverage / availability — Accepted 2026-10-29

Location: `user-guide/beam-distributions.qmd:131` in the baseline. [Rendered change](_site/user-guide/beam-distributions.html#ug-17-06).

Accurate existing availability notice highlighted in orange per the audit request. UNIFORM explicitly rejects another emission model or a positive delayed start.

**Original / insertion anchor**
```text
Use `EMISSIONMODEL=NONE` and `T0=0`; other emission models and delayed
injection are not supported.
```

**Proposed wording / discussion addition**
```text
Use `EMISSIONMODEL=NONE` and `T0=0`. Other emission models are not yet supported.
```

Evidence: `src/Distribution/Uniform.cpp:30–37`.

**User decision:** Exact replacement supplied by user.

### UG-17-07 — Feature coverage / availability — Removed from manual

Location: `user-guide/beam-distributions.qmd:208` in the baseline. Removed from the manual; original text retained in this record.

The manual permits default zero widths but the multivariate factorization divides by Cholesky diagonal entries and widths; document the non-degenerate domain as a user restriction.

**Original / insertion anchor**
```text
$\Sigma=DCD=LL^T$, then applies the Cholesky factor $L$ to independent normal
samples. $C$ must be symmetric positive definite.
```

**Proposed wording / discussion addition**
```text
All six `SIGMA*` widths must be strictly positive so that the covariance matrix is positive definite. Zero-width coordinates and other degenerate covariance matrices are not supported by this sampler; use `GAUSS` for independent coordinates with zero widths.
```

Evidence: `src/Distribution/MultiVariateGaussian.cpp:18–25`; `src/Distribution/MultiVariateGaussian.cpp:119–180`.

**User decision:** User requested this marked note deleted.

### UG-17-08 — Feature coverage / availability — Accepted 2026-10-29

Location: `user-guide/beam-distributions.qmd:233` in the baseline. [Rendered change](_site/user-guide/beam-distributions.html#ug-17-08).

Accurate existing availability notice highlighted in orange per the audit request. MULTIVARIATEGAUSS does not implement configurable cutoff attributes; the sampler uses its fixed bounds.

**Original / insertion anchor**
```text
Sampling truncates each coordinate independently at internally fixed
three-sigma bounds; the `CUTOFF*` attributes are ignored, and no phase-space
adjustment is applied. `T0 > 0` produces one delayed injection, as for `GAUSS`.
```

**Existing wording (unchanged; highlighted for discussion)**
```text
Sampling truncates each coordinate independently at internally fixed
three-sigma bounds; the `CUTOFF*` attributes are ignored, and no phase-space
adjustment is applied. `T0 > 0` produces one delayed injection, as for `GAUSS`.
```

Evidence: `src/Distribution/Distribution.cpp:350–352`; `src/Distribution/MultiVariateGaussian.cpp:28–29`; `src/Distribution/MultiVariateGaussian.cpp:144–180`.

### UG-17-09 — English — Accepted 2026-10-29

Location: `user-guide/beam-distributions.qmd:400` in the baseline. [Rendered change](_site/user-guide/beam-distributions.html#ug-17-09).

Avoid second being read as ordinal rather than the unit of time.

**Original / insertion anchor**
```text
and `birth_time` is a second offset from
the source `T0`:
```

**Proposed wording / discussion addition**
```text
and `birth_time` is a time offset in seconds from the source `T0`:
```

Evidence: `user-guide/beam-distributions.qmd:398–405`.

### UG-17-10 — English — Accepted 2026-10-29

Location: `user-guide/beam-distributions.qmd:423` in the baseline. [Rendered change](_site/user-guide/beam-distributions.html#ug-17-10).

Remove wording that incorrectly suggests the manual imposes the implementation limitations.

**Original / insertion anchor**
```text
Current source limitations are deliberate documentation constraints:
```

**Proposed wording / discussion addition**
```text
Current limitations are:
```

Evidence: `user-guide/beam-distributions.qmd:423–430`.

### UG-17-11 — Technical / units / links — Accepted 2026-10-29

Location: `user-guide/beam-distributions.qmd:426` in the baseline. [Rendered change](_site/user-guide/beam-distributions.html#ug-17-11).

The blanket CUTOFF* claim contradicts the FLATTOP equations and parameter table; CUTOFFLONG is used by those pulse profiles too.

**Original / insertion anchor**
```text
- the `CUTOFF*` attributes apply to `GAUSS` only; `MULTIVARIATEGAUSS` uses
  internally fixed three-sigma bounds;
```

**Proposed wording / discussion addition**
```text
- `CUTOFFX`, `CUTOFFY`, `CUTOFFPX`, `CUTOFFPY`, and `CUTOFFPZ` apply to `GAUSS` only; `CUTOFFLONG` also controls the flat-top pulse edges and the optional legacy emitted-file window. `MULTIVARIATEGAUSS` uses internally fixed three-sigma bounds;
```

Evidence: `src/Distribution/Distribution.cpp:389–453`; `src/Distribution/FlatTop.cpp:53–61`; `src/Distribution/OpalFlatTop.cpp:60–77`.

### UG-17-12 — Feature coverage / availability — Accepted 2026-10-29

Location: `user-guide/beam-distributions.qmd:429` in the baseline. [Rendered change](_site/user-guide/beam-distributions.html#ug-17-12).

Accurate existing availability notice highlighted in orange per the audit request. ASTRA is unavailable for UNIFORM, GAUSS, MULTIVARIATEGAUSS, FROMFILE, and EMITTEDFROMFILE. Highlight one grouped summary instead of every repeated source-table restriction.

**Original / insertion anchor**
```text
`ASTRA` is supported only by the generated flat-top emitters;
```

**Proposed wording / discussion addition**
```text
`ASTRA` is supported only by the generated flat-top distribution
```

Evidence: `src/Distribution/Uniform.cpp:30–33`; `src/Distribution/Gaussian.cpp:68–72`; `src/Distribution/MultiVariateGaussian.cpp:194–198`; `src/Distribution/FromFile.cpp:231–235`; `src/Distribution/EmittedFromFile.cpp:247–251`.

**User decision:** Exact replacement supplied by user.

### UG-17-13 — English — Accepted 2026-10-29

Location: `user-guide/_legacy-distributions.qmd:14` in the baseline. [Rendered change](_site/user-guide/beam-distributions.html#ug-17-13).

Clarify the scope of this historical comparison and remove the vague phrase manual path.

**Original / insertion anchor**
```text
The supported distribution types depend on whether you are looking at the
legacy OPAL manual path or the current OPALX implementation.
```

**Proposed wording / discussion addition**
```text
The following distribution types belong to the retained legacy OPAL interface. The current OPALX types are listed in the OPALX view.
```

Evidence: `user-guide/_legacy-distributions.qmd:14–15`.

### UG-18-01 — Removed from manual

Entry removed at the user's request.

### UG-18-02 — Feature coverage / availability — Accepted 2026-10-29

Location: `user-guide/field-solver/index.qmd:69` in the baseline. [Rendered change](_site/user-guide/field-solver/index.html#ug-18-02).

Explicitly distinguish legacy solvers and attributes from current OPALX availability rather than relying on the version selector alone.

**Original / insertion anchor**
```text
: {tbl-colwidths="[12, 24, 22, 42]"}
```

**Proposed wording / discussion addition**
```text
The retained OPAL `SAAMG` and adaptive-mesh-refinement (`AMR`) solvers are
unavailable in OPALX. Their legacy attributes, including `FSTYPE`, `MX`,
`MY`, `MT`, and `AMR_*`, are not accepted by the current `FIELDSOLVER`
command.
```

Evidence: `src/Structure/FieldSolverCmd.cpp:39-110`; `user-guide/_legacy-field-solver.qmd:105-119`; `user-guide/_legacy-field-solver.qmd:366-537`.

### UG-18-03 — Feature coverage / availability — Removed from manual

Location: `user-guide/field-solver/index.qmd:156` in the baseline. Removed from the manual; original text retained in this record.

Existing accurate availability notice highlighted in orange per user request; wording unchanged.

**Original / insertion anchor**
```text
binned. Explicit image charges are rejected.
```

**Existing wording (unchanged; highlighted for discussion)**
```text
binned. Explicit image charges are rejected.
```

Evidence: `src/SpaceCharge/SpaceChargeConfig.cpp:104-117`.

**User decision:** Remove the full P3M shifted-Green paragraph quoted by user, including unmarked surrounding sentences.

### UG-18-04 — Removed from manual

Entry removed at the user's request.

### UG-18-05 — English — Accepted 2026-10-29

Location: `user-guide/field-solver/index.qmd:172` in the baseline. [Rendered change](_site/user-guide/field-solver/index.html#ug-18-05).

Replace two sentence fragments and state clearly what the following equation calculates.

**Original / insertion anchor**
```text
Uses IPPL's Hockney free-space 2D FFT solver for the transverse fields. The doubled-grid convolution
removes the periodic wraparound of an ordinary FFT solve.  Uses a $\lambda'(z)$ model in the
longitudinal direction using the local charge line density
```

**Proposed wording / discussion addition**
```text
`FFT2D5` uses IPPL's Hockney free-space 2D FFT solver for the transverse fields.
The doubled-grid convolution removes the periodic wraparound of an ordinary FFT
solve. The longitudinal field is calculated from the derivative of the local
line-charge density:
```

Evidence: `user-guide/field-solver/index.qmd:170-173`.

### UG-18-06 — Technical / units / links — Accepted 2026-10-30

Location: `user-guide/field-solver/index.qmd:180` in the baseline. [Rendered change](_site/user-guide/field-solver/index.html#ug-18-06).

The current wording suggests that PIPEMODE changes transverse solver boundary conditions; it only selects the longitudinal geometry factor.

**Original / insertion anchor**
```text
where $g$ is a constant that depends on the transverse boundary conditions.
```

**Proposed wording / discussion addition**
```text
where $g$ is selected by `PIPEMODE`. This geometry model changes only the
longitudinal field; the transverse Poisson solves retain open boundaries.
`PIPEMODE=NONE` disables the longitudinal field.
```

Evidence: `src/Structure/FieldSolverCmd.cpp:94-97`; `src/SpaceCharge/FFT2D5/FFT2D5Algorithm.hpp:433-479`; `src/SpaceCharge/FFT2D5/FFT2D5Algorithm.hpp:560-570`.

**User decision:** Accepted during interactive review on2026-10-30; retain current proposal and remove review styling.

### UG-18-07 — Feature coverage / availability — Accepted 2026-10-29

Location: `user-guide/field-solver/index.qmd:182` in the baseline. [Rendered change](_site/user-guide/field-solver/index.html#ug-18-07).

Document enforced FFT2D5 restrictions omitted from the current one-line limitation.

**Original / insertion anchor**
```text
This solver only supports 'BINS=NONE', 'PARFFTX=FALSE', 'PARFFTY=FALSE', 'PARFFTZ=FALSE'.
```

**Proposed wording / discussion addition**
```text
`FFT2D5` is available only with one MPI rank, `BINS=NONE`, and
`PARFFTX=FALSE`, `PARFFTY=FALSE`, `PARFFTZ=FALSE`. Keep all three `BCFFT*`
values `OPEN`; select longitudinal periodicity with `CLOSEDRING=TRUE`.
Cathode-plane corrections, a fixed Cartesian domain, and distributed execution
are unavailable for this solver.
```

Evidence: `src/SpaceCharge/SpaceChargeConfigBuilder.cpp:301-327`; `src/SpaceCharge/SpaceChargeConfig.cpp:126-142`; `src/SpaceCharge/FFT2D5/FFT2D5Algorithm.cpp:47-60`.

### UG-18-08 — Feature coverage / availability — Accepted 2026-10-29

Location: `user-guide/field-solver/index.qmd:188` in the baseline. [Rendered change](_site/user-guide/field-solver/index.html#ug-18-08).

The implemented FFT2D5 backend is missing from the accepted TYPE list.

**Original / insertion anchor**
```text
`NONE`, `FFT`, `P3M`, `OPEN`
```

**Proposed wording / discussion addition**
```text
`NONE`, `FFT`, `P3M`, `OPEN`, `FFT2D5`
```

Evidence: `src/Structure/FieldSolverCmd.cpp:43-45`; `src/SpaceCharge/SpaceChargeConfigBuilder.cpp:301-339`.

**User decision:** An unsupported solver choice was removed at the user's request; the remaining list is accepted.

### UG-18-09 — Technical / units / links — Accepted 2026-10-29

Location: `user-guide/field-solver/index.qmd:190` in the baseline. [Rendered change](_site/user-guide/field-solver/index.html#ug-18-09).

The runtime now rejects fractional mesh sizes; distinguish cell counts from grid points.

**Original / insertion anchor**
```text
Number of mesh points in $x$, $y$, and $z$. The parser stores real values; use integers.
```

**Proposed wording / discussion addition**
```text
Number of mesh cells in $x$, $y$, and $z$. Each value must be a finite positive integer that fits a 32-bit signed integer.
```

Evidence: `src/SpaceCharge/SpaceChargeConfigBuilder.cpp:123-132`; `src/SpaceCharge/FFT2D5/FFT2D5FieldStorage.cpp:60-65`.

### UG-18-10 — Feature coverage / availability — Accepted 2026-10-29

Location: `user-guide/field-solver/index.qmd:195` in the baseline. [Rendered change](_site/user-guide/field-solver/index.html#ug-18-10).

Existing accurate availability notice highlighted in orange per user request; wording unchanged.

**Original / insertion anchor**
```text
Green-function discretization for `TYPE=OPEN`; otherwise ineffective.
```

**Existing wording (unchanged; highlighted for discussion)**
```text
Green-function discretization for `TYPE=OPEN`; otherwise ineffective.
```

Evidence: `src/Structure/FieldSolverCmd.cpp:74-76`; `src/SpaceCharge/SpaceChargeConfigBuilder.cpp:301-339`.

### UG-18-11 — English — Accepted 2026-10-29

Location: `user-guide/field-solver/index.qmd:204` in the baseline. [Rendered change](_site/user-guide/field-solver/index.html#ug-18-11).

Correct a spelling error in the PIPESIZEY units column.

**Original / insertion anchor**
```text
positive lenght
```

**Proposed wording / discussion addition**
```text
positive length
```

Evidence: `user-guide/field-solver/index.qmd:206`.

### UG-18-12 — Technical / units / links — Accepted 2026-10-29

Location: `user-guide/field-solver/index.qmd:205` in the baseline. [Rendered change](_site/user-guide/field-solver/index.html#ug-18-12).

REFPATHNAME is not a registered attribute; the public keyword is REFPATHFNAME.

**Original / insertion anchor**
```text
`REFPATHNAME`
```

**Proposed wording / discussion addition**
```text
`REFPATHFNAME`
```

Evidence: `src/Structure/FieldSolverCmd.cpp:109-110`; `src/SpaceCharge/SpaceChargeConfigBuilder.cpp:91-99`.

### UG-18-13 — Technical / units / links — Accepted 2026-10-29

Location: `user-guide/field-solver/index.qmd:205` in the baseline. [Rendered change](_site/user-guide/field-solver/index.html#ug-18-13).

State the exact reference-path filename resolved by the default and identify its directory.

**Original / insertion anchor**
```text
Reference path file name.  If blank (the default) uses the output from the orbit threader. 'TYPE=FFT2D5' only.
```

**Proposed wording / discussion addition**
```text
Reference-path filename for `TYPE=FFT2D5`. If empty, uses `<input-basename>_DesignPath.dat` in the auxiliary output directory.
```

Evidence: `src/SpaceCharge/SpaceChargeConfigBuilder.cpp:91-99`.

### UG-18-14 — Feature coverage / availability — Accepted 2026-10-29

Location: `user-guide/field-solver/index.qmd:207` in the baseline. [Rendered change](_site/user-guide/field-solver/index.html#ug-18-14).

The input file format, minimal validity requirement, and fixed reference-path mesh are missing from the FFT2D5 setup instructions.

**Original / insertion anchor**
```text
: {tbl-colwidths="[16, 15, 24, 45]"}
```

**Proposed wording / discussion addition**
```text
`REFPATHFNAME` must name a readable design-path file. The reader skips one
header line and then expects numeric columns
`s rx ry rz px py pz ex ey ez bx by bz ke time`. At least two distinct
position samples are required. The transverse mesh spans `PIPESIZEX` and
`PIPESIZEY`; the longitudinal mesh spans the length of this reference path.
```

Evidence: `src/SpaceCharge/FFT2D5/ReferencePath.cpp:18-58`; `src/SpaceCharge/FFT2D5/FFT2D5FieldStorage.cpp:44-65`.

### UG-18-15 — Feature coverage / availability — Accepted 2026-10-29

Location: `user-guide/field-solver/index.qmd:215` in the baseline. [Rendered change](_site/user-guide/field-solver/index.html#ug-18-15).

Existing accurate availability notice highlighted in orange per user request; wording unchanged.

**Original / insertion anchor**
```text
Mixed boundary conditions, such as periodic $x,y$
with open $z$, are rejected.
```

**Existing wording (unchanged; highlighted for discussion)**
```text
Mixed boundary conditions, such as periodic $x,y$
with open $z$, are rejected.
```

Evidence: `src/SpaceCharge/SpaceChargeConfig.cpp:164-184`.

### UG-18-16 — Technical / units / links — Accepted 2026-10-29

Location: `user-guide/field-solver/index.qmd:220` in the baseline. [Rendered change](_site/user-guide/field-solver/index.html#ug-18-16).

Scope the 3D PIC description correctly; FFT2D5 uses separate slice field storage and a reference-path domain.

**Original / insertion anchor**
```text
The runtime objects share one distributed field layout containing charge
density, electric field, potential, and scratch fields. Each active
space-charge evaluation performs the following cycle:
```

**Proposed wording / discussion addition**
```text
The three-dimensional backends share one distributed field layout containing
charge density, electric field, potential, and scratch fields. Each active
three-dimensional space-charge evaluation performs the following cycle.
`FFT2D5` instead uses transverse slices along its reference path.
```

Evidence: `src/SpaceCharge/SpaceChargeConfig.h:107-118`; `src/SpaceCharge/FFT2D5/FFT2D5FieldStorage.cpp:71-111`.

### UG-18-17 — Technical / units / links — Accepted 2026-10-30

Location: `user-guide/field-solver/index.qmd:284` in the baseline. [Rendered change](_site/user-guide/field-solver/index.html#ug-18-17).

The existing BINS=NONE description incorrectly appears to cover FFT2D5, which does perform beam-frame transformations despite requiring BINS=NONE.

**Original / insertion anchor**
```text
`TYPE` chooses a backend. `BINS` independently chooses whether OPALX performs
one lab-frame electrostatic solve or several rest-frame solves. An emission
source can additionally request one cathode-plane correction.
```

**Proposed wording / discussion addition**
```text
For the three-dimensional backends, `TYPE` chooses a backend and `BINS`
chooses between a lab-frame electrostatic solve and binned rest-frame solves.
An emission source can additionally request one cathode-plane correction.
`FFT2D5` uses its own slice algorithm and does not support these binning or
cathode-plane modes.
```

Evidence: `src/SpaceCharge/SpaceChargeConfigBuilder.cpp:301-339`; `src/SpaceCharge/FFT2D5/FFT2D5Algorithm.hpp:389-392`; `src/SpaceCharge/FFT2D5/FFT2D5Algorithm.hpp:605-618`.

**User decision:** Accepted during interactive review on2026-10-30; retain current proposal and remove review styling.

### UG-18-18 — Feature coverage / availability — Accepted 2026-10-29

Location: `user-guide/field-solver/index.qmd:381` in the baseline. [Rendered change](_site/user-guide/field-solver/index.html#ug-18-18).

The plane-potential diagnostic is rejected with binning, even though the image correction itself supports binning.

**Original / insertion anchor**
```text
non-negative diagnostic frequency, is available only for this explicit-image
mode, and currently writes only in single-rank runs.
```

**Proposed wording / discussion addition**
```text
diagnostic frequency. Its output is available only for the explicit-image mode without binning and currently writes only in single-rank runs.
```

Evidence: `src/SpaceCharge/SpaceChargeConfig.cpp:119-122`.

**User decision:** Exact replacement supplied by user.

### UG-18-19 — Feature coverage / availability — Accepted 2026-10-29

Location: `user-guide/field-solver/index.qmd:409` in the baseline. [Rendered change](_site/user-guide/field-solver/index.html#ug-18-19).

Existing accurate availability notice highlighted in orange per user request; wording unchanged.

**Original / insertion anchor**
```text
It does not support `ZEROFACEPLANEDUMP`.
```

**Existing wording (unchanged; highlighted for discussion)**
```text
It does not support `ZEROFACEPLANEDUMP`.
```

Evidence: `src/SpaceCharge/SpaceChargeConfig.cpp:34-53`; `src/SpaceCharge/SpaceChargeConfigBuilder.cpp:231-239`.

### UG-18-20 — Technical / units / links — Accepted 2026-10-29

Location: `user-guide/field-solver/index.qmd:491` in the baseline. [Rendered change](_site/user-guide/field-solver/index.html#ug-18-20).

Avoid the now-incorrect claim that the failure occurs during bunch-bin construction; current validation rejects unsupported selectors earlier.

**Original / insertion anchor**
```text
The parser accepts `VELOCITYZ`, `POSITIONZ`, `PZ`, and `GAMMAZ`, but the
current runtime implements only `VELOCITYZ` and `GAMMAZ`. Selecting either of
the other two values fails when the bunch creates its bins.
```

**Proposed wording / discussion addition**
```text
The parser accepts `VELOCITYZ`, `GAMMAZ`.
```

Evidence: `src/SpaceCharge/SpaceChargeConfig.cpp:73-76`.

**User decision:** User supplied final supported-selector wording. Resolve this documentation finding while preserving the separate open implementation issue.

**Implementation issue:** [OPALX #652](https://github.com/OPALX-project/OPALX/issues/652).

### UG-18-21 — Technical / units / links — Accepted 2026-10-29

Location: `user-guide/field-solver/index.qmd:515` in the baseline. [Rendered change](_site/user-guide/field-solver/index.html#ug-18-21).

State the current runtime numeric constraints instead of an obsolete parser-only description and implementation-history narration.

**Original / insertion anchor**
```text
The current parser does not enforce numeric ranges for `DESIREDWIDTH`,
`BINNINGALPHA`, or `BINNINGBETA`. In particular, the source descriptions of the
weights mention `[0,1]`, while the compiled default of `BINNINGBETA` is `1.5`
and maintained regression inputs use values above one. The manual therefore
does not claim a range that the implementation contradicts.
```

**Proposed wording / discussion addition**
```text
`DESIREDWIDTH` must be finite and positive. `BINNINGALPHA` and
`BINNINGBETA` must be finite; they are not restricted to `[0,1]`. In
particular, the default `BINNINGBETA` is `1.5`.
```

Evidence: `src/SpaceCharge/SpaceChargeConfig.cpp:57-63`; `src/Structure/BinningCmd.cpp:44-53`.

### UG-18-22 — Feature coverage / availability — Removed from manual

Location: `user-guide/field-solver/index.qmd:526` in the baseline. Removed from the manual; original text retained in this record.

The option is registered, copied and assigned but has no runtime consumer on audited master; keep the field-solver chapter consistent with the corrected Options chapter.

**Original / insertion anchor**
```text
- `OPTION.MINBINEMITTED` controls when space charge begins during emission;
  `OPTION.MINSTEPFORREBIN` controls the earliest bin-collapse step.
```

**Proposed wording / discussion addition**
```text
- `OPTION.MINBINEMITTED` controls when space charge begins during emission.
  `OPTION.MINSTEPFORREBIN` is accepted for compatibility but currently has no
  runtime effect.
```

Evidence: `src/BasicActions/Option.cpp:228-233`; `src/BasicActions/Option.cpp:644`; `src/Utilities/Options.h:97`; `src/Utilities/Options.cpp:59`; `src/Algorithms/ParallelTracker.cpp:1297`.

**User decision:** User requested this marked passage deleted.

### UG-19-01 — Feature coverage / availability — Removed from manual

Location: `user-guide/tracking.qmd:32` in the baseline. Removed from the manual; original text retained in this record.

Existing accurate availability notice highlighted in orange per user request; wording unchanged.

**Original / insertion anchor**
```text
Accepted for compatibility but ignored; sources come from each selected `BEAM`.
```

**Existing wording (unchanged; highlighted for discussion)**
```text
Accepted for compatibility but ignored; sources come from each selected `BEAM`.
```

Evidence: `src/Track/TrackCmd.cpp:189-190`.

**User decision:** User requested removal of the ignored TRACK.SOURCES compatibility row; active BEAM.SOURCES remains documented.

### UG-19-02 — Feature coverage / availability — Accepted 2026-10-29

Location: `user-guide/tracking.qmd:37` in the baseline. [Rendered change](_site/user-guide/tracking.html#ug-19-02).

Existing accurate availability notice highlighted in orange per user request; wording unchanged.

**Original / insertion anchor**
```text
With `INITIALORBIT`, inherited from COF; an explicit value must match. Otherwise stored but not forwarded to `ParallelTracker`; source timing uses `EMISSIONSOURCE.T0`.
```

**Existing wording (unchanged; highlighted for discussion)**
```text
With `INITIALORBIT`, inherited from COF; an explicit value must match. Otherwise stored but not forwarded to `ParallelTracker`; source timing uses `EMISSIONSOURCE.T0`.
```

Evidence: `src/Track/TrackCmd.cpp:219`; `src/Track/TrackRun.cpp:724-747`.

### UG-19-03 — Removed from manual

Entry removed at the user's request.

### UG-19-04 — Removed from manual

Entry removed at the user's request.

### UG-19-05 — Feature coverage / availability — Accepted 2026-10-29

Location: `user-guide/tracking.qmd:40` in the baseline. [Rendered change](_site/user-guide/tracking.html#ug-19-05).

Existing accurate availability notice highlighted in orange per user request; wording unchanged.

**Original / insertion anchor**
```text
Earlier interface details omitted at the user's request.
```

**Proposed wording / discussion addition**
```text
`RK4` or `LF2`. Production particle tracking currently uses Boris independently of this setting; see [OPALX #653](https://github.com/OPALX-project/OPALX/issues/653).
```

Evidence: `src/Track/TrackCmd.cpp:112-114`; `src/Track/TrackRun.cpp:724-747`.

**User decision:** User resolved this finding by documenting the canonical choices and tracking the missing production-integrator configuration in a separate issue.

**Implementation issue:** [OPALX #653](https://github.com/OPALX-project/OPALX/issues/653).

### UG-19-06 — Feature coverage / availability — Removed from manual

Location: `user-guide/tracking.qmd:127` in the baseline. Removed from the manual; original text retained in this record.

The RUN table currently suggests that users can supply a named geometry even though GEOMETRY is not registered.

**Original / insertion anchor**
```text
Optional named boundary geometry.
```

**Proposed wording / discussion addition**
```text
Compatibility setting. Keep `NONE`: a user-defined `GEOMETRY` object is [unavailable in OPALX](geometry/index.qmd).
```

Evidence: `src/OpalConfigure/Configure.cpp:108-144`; `src/Track/TrackRun.cpp:863-874`.

**User decision:** User requested removal of this complete current RUN parameter row; retained legacy OPAL examples and tables are unchanged.

### UG-19-07 — Feature coverage / availability — Accepted 2026-10-29

Location: `user-guide/tracking.qmd:129` in the baseline. [Rendered change](_site/user-guide/tracking.html#ug-19-07).

Existing accurate availability notice highlighted in orange per user request; wording unchanged.

**Original / insertion anchor**
```text
Accepted compatibility value; reverse tracking is not currently applied.
```

**Proposed wording / discussion addition**
```text
Not yet available.
```

Evidence: `src/Track/TrackRun.cpp:240-241`; `src/Track/TrackRun.cpp:724-747`.

**User decision:** Apply the user-supplied availability statement as final wording; spelling and sentence capitalization normalized.

### UG-19-08 — Feature coverage / availability — Accepted 2026-10-29

Location: `user-guide/tracking.qmd:178` in the baseline. [Rendered change](_site/user-guide/tracking.html#ug-19-08).

Existing accurate availability notice highlighted in orange per user request; wording unchanged.

**Original / insertion anchor**
```text
Boundary refinement currently requires:

- Static drifts, markers, monitors, dipoles, quadrupoles, analytic SBEND/RBEND
  models, and [`VARIABLE_RF_CAVITY`](elements.qmd#variable-rf-cavity) elements
  with finite positive dimensions; no misalignments or higher multipole
  components. RF fields use the ordinary device kernel at each substep's
  physical midpoint; their explicit time-model phase is retained.
- One particle container, positive `DT`, completed emission, and no spin.
- `FIELDSOLVER, TYPE=NONE`, with no binning or one fixed bin
  (`MAXBINS=1`, `ADAPTIVEBINNING=FALSE`). Bin file and console-table output must
  be disabled.
- `OPTION, REPARTFREQ=0, CHECKPOINTFREQ=0`: no periodic ORB repartitioning or
  checkpoint output; checkpoint restarts also retain fixed steps.
- No image-charge correction and no fixed Cartesian domain.
```

**Existing wording (unchanged; highlighted for discussion)**
```text
Boundary refinement currently requires:

- Static drifts, markers, monitors, dipoles, quadrupoles, analytic SBEND/RBEND
  models, and [`VARIABLE_RF_CAVITY`](elements.qmd#variable-rf-cavity) elements
  with finite positive dimensions; no misalignments or higher multipole
  components. RF fields use the ordinary device kernel at each substep's
  physical midpoint; their explicit time-model phase is retained.
- One particle container, positive `DT`, completed emission, and no spin.
- `FIELDSOLVER, TYPE=NONE`, with no binning or one fixed bin
  (`MAXBINS=1`, `ADAPTIVEBINNING=FALSE`). Bin file and console-table output must
  be disabled.
- `OPTION, REPARTFREQ=0, CHECKPOINTFREQ=0`: no periodic ORB repartitioning or
  checkpoint output; checkpoint restarts also retain fixed steps.
- No image-charge correction and no fixed Cartesian domain.
```

Evidence: `src/Track/TrackRun.cpp:493-512`; `src/Algorithms/ParallelTracker.cpp:1400-1650`.

### UG-19-09 — Feature coverage / availability — Accepted 2026-10-29

Location: `user-guide/tracking.qmd:246` in the baseline. [Rendered change](_site/user-guide/tracking.html#ug-19-09).

Existing accurate availability notice highlighted in orange per user request; wording unchanged.

**Original / insertion anchor**
```text
Explicit turn-count tracking currently has the following restrictions:

- Directed turn counting is implemented only for a `RING`. On a `LINE`, an
  explicit `TURNS` value currently does not activate a turn-count stop.
- Exactly one `DT`, `MAXSTEPS`, and `ZSTOP` segment must be defined.
- Restart tracking is not supported.
- One beam/container is required. Space charge is allowed: the bunch receives
  its normal self-field solve and kick over the accepted, possibly shortened
  step. The stopping plane is determined by the external-field reference,
  not by the bunch centroid.
- Boundary refinement excludes spin; the ordinary turn counter does not
  add a spin restriction.
- Emission must already be complete when tracking starts.
- The lattice may contain static drifts, markers, monitors, multipoles, SBENDs,
  RBENDs, solenoids, cyclotron sectors, and `VARIABLE_RF_CAVITY` elements.
  General field-map RF cavities and other time-dependent element types are
  not supported for localized `TURNS`, and neither is `FIELDMAP`. This
  eligibility is separate from the narrower conditions for
  [boundary refinement](#ring-boundary-refinement).
- `TURNS` cannot be combined with `EKINSTOP`.
```

**Existing wording (unchanged; highlighted for discussion)**
```text
Explicit turn-count tracking currently has the following restrictions:

- Directed turn counting is implemented only for a `RING`. On a `LINE`, an
  explicit `TURNS` value currently does not activate a turn-count stop.
- Exactly one `DT`, `MAXSTEPS`, and `ZSTOP` segment must be defined.
- Restart tracking is not supported.
- One beam/container is required. Space charge is allowed: the bunch receives
  its normal self-field solve and kick over the accepted, possibly shortened
  step. The stopping plane is determined by the external-field reference,
  not by the bunch centroid.
- Boundary refinement excludes spin; the ordinary turn counter does not
  add a spin restriction.
- Emission must already be complete when tracking starts.
- The lattice may contain static drifts, markers, monitors, multipoles, SBENDs,
  RBENDs, solenoids, cyclotron sectors, and `VARIABLE_RF_CAVITY` elements.
  General field-map RF cavities and other time-dependent element types are
  not supported for localized `TURNS`, and neither is `FIELDMAP`. This
  eligibility is separate from the narrower conditions for
  [boundary refinement](#ring-boundary-refinement).
- `TURNS` cannot be combined with `EKINSTOP`.
```

Evidence: `src/Track/TrackRun.cpp:665-722`; `src/Algorithms/ParallelTracker.cpp`.

### UG-19-10 — Feature coverage / availability — Removed from manual

Location: `user-guide/tracking.qmd:394` in the baseline. Removed from the manual; original text retained in this record.

Existing accurate availability notice highlighted in orange per user request; wording unchanged.

**Original / insertion anchor**
```text
The selected beam cannot have global processes. No RF/6D closure, space charge,
restart, energy continuation, or automatic integer tune and
plane assignment is provided. Unsupported attributes such as `ZSTOP`, `BEAMS`,
`FIELDSOLVER`, and `ENERGYSTART` are errors, not ignored compatibility settings.
```

**Existing wording (unchanged; highlighted for discussion)**
```text
The selected beam cannot have global processes. No RF/6D closure, space charge,
restart, energy continuation, or automatic integer tune and
plane assignment is provided. Unsupported attributes such as `ZSTOP`, `BEAMS`,
`FIELDSOLVER`, and `ENERGYSTART` are errors, not ignored compatibility settings.
```

Evidence: `src/Track/CofCmd.cpp:23-53`; `src/Track/CofCmd.cpp:390-447`.

**User decision:** User requested this complete paragraph removed; preserve the preceding COF field/aperture discussion and following results section.

### UG-19-11 — Feature coverage / availability — Accepted 2026-10-29

Location: `user-guide/tracking.qmd:440` in the baseline. [Rendered change](_site/user-guide/tracking.html#ug-19-11).

Existing accurate availability notice highlighted in orange per user request; wording unchanged.

**Original / insertion anchor**
```text
The initial handover supports one fresh beam, `ZSTART=0`, and completed emission.
`FROMFILE` and `EMITTEDFROMFILE` are rejected because their existing absolute
coordinate convention would make placement ambiguous. Restart and spectral tune
mode cannot use `INITIALORBIT`. Space-charge matching is not performed by COF;
an orbit-centred bunch is not necessarily a self-consistently matched bunch.
Space-charge tracking may use either `TURNS` or the `TRACK` stopping schedule.
```

**Existing wording (unchanged; highlighted for discussion)**
```text
The initial handover supports one fresh beam, `ZSTART=0`, and completed emission.
`FROMFILE` and `EMITTEDFROMFILE` are rejected because their existing absolute
coordinate convention would make placement ambiguous. Restart and spectral tune
mode cannot use `INITIALORBIT`. Space-charge matching is not performed by COF;
an orbit-centred bunch is not necessarily a self-consistently matched bunch.
Space-charge tracking may use either `TURNS` or the `TRACK` stopping schedule.
```

Evidence: `src/Track/TrackCmd.cpp:257-338`; `src/Track/TrackRun.cpp:740-748`.

### UG-20-01 — Feature coverage / availability — Accepted 2026-10-29

Location: `user-guide/wakefields/index.qmd:11` in the baseline. [Rendered change](_site/user-guide/wakefields/index.html#ug-20-01).

Existing accurate availability notice highlighted in orange per user request; wording unchanged.

**Original / insertion anchor**
```text
`WAKE` and `FILTER` are not registered by the current OPALX executable. The
OPAL view preserves the complete legacy interface as a compatibility reference
and a visible reminder of functionality that may be ported later.
```

**Proposed wording / discussion addition**
```text
`WAKE` and `FILTER` are not available in the current OPALX version.
```

Evidence: `src/OpalConfigure/Configure.cpp:108-144`.

**User decision:** Apply the user-supplied availability statement as final wording; spelling and sentence capitalization normalized.

### UG-20-02 — Technical / units / links — Accepted 2026-10-30

Location: `user-guide/wakefields/index.qmd:181` in the baseline. [Rendered change](_site/user-guide/wakefields/index.html#ug-20-02).

The retained OPAL formula misses the factor12 in the denominator and misidentifies the stencil order. Current retained Stencil.cpp confirms the interior formula and subsequent smoothing; FILTER remains unavailable in OPALX.

**Original / insertion anchor**
```text
The derivative is then computed with the second-order stencil

$$
f'_i = \frac{f_{i-2} - 8 f_{i-1} + 8 f_{i+1} - f_{i+2}}{h}.
$$ {#eq-wake-stencil-derivative}
```

**Proposed wording / discussion addition**
```text
At interior points with spacing $h$, the derivative uses the fourth-order
centred stencil

$$
f'_i = \frac{f_{i-2} - 8 f_{i-1} + 8 f_{i+1} - f_{i+2}}{12h}.
$$ {#eq-wake-stencil-derivative}

The smoothing filter is then applied to the derivative.
```

Evidence: `src/Filters/Stencil.cpp:34-51`; `src/OpalConfigure/Configure.cpp:108-144`.

**User decision:** Accepted during interactive review on2026-10-30; retain current proposal and remove review styling.

### UG-21-01 — Feature coverage / availability — Accepted 2026-10-29

Location: `user-guide/geometry/index.qmd:11` in the baseline. [Rendered change](_site/user-guide/geometry/index.html#ug-21-01).

Existing accurate availability notice highlighted in orange per user request; wording unchanged.

**Original / insertion anchor**
```text
`GEOMETRY` is not registered by the current OPALX executable. Internal
boundary-geometry classes remain in the source, but they do not provide a
usable OPALX input definition. The OPAL view preserves the complete legacy
interface.
```

**Proposed wording / discussion addition**
```text
`GEOMETRY` is not available in the current OPALX version.
```

Evidence: `src/OpalConfigure/Configure.cpp:108-144`.

**User decision:** Apply the user-supplied availability statement as final wording; spelling and sentence capitalization normalized.

### UG-22-01 — Feature coverage / availability — Accepted 2026-10-29

Location: `user-guide/particle-matter/index.qmd:11` in the baseline. [Rendered change](_site/user-guide/particle-matter/index.html#ug-22-01).

Existing accurate availability notice highlighted in orange per user request; wording unchanged.

**Original / insertion anchor**
```text
`PARTICLEMATTERINTERACTION` is not registered by the current OPALX executable.
Internal material and scattering classes are not a user-facing replacement.
The OPAL view preserves the complete legacy interface and model description.
```

**Proposed wording / discussion addition**
```text
`PARTICLEMATTERINTERACTION` is not available in the current OPALX version.
```

Evidence: `src/OpalConfigure/Configure.cpp:108-144`.

**User decision:** Apply the user-supplied availability statement as final wording; spelling and sentence capitalization normalized.

### UG-22-02 — Technical / units / links — Retired from review; legacy documentation retained

Location: `user-guide/particle-matter/index.qmd:55` in the baseline. [Rendered change](_site/user-guide/particle-matter/index.html#ug-22-02).

Make the provenance explicit so the model description is not mistaken for OPALX availability.

**Original / insertion anchor**
```text
The manual states that this form is used for incident `PROTON`, `DEUTERON`,
```

**Proposed wording / discussion addition**
```text
The retained OPAL documentation states that this form is used for incident `PROTON`, `DEUTERON`,
```

Evidence: `user-guide/particle-matter/index.qmd:10-14`; `src/OpalConfigure/Configure.cpp:108-144`.

**User decision:** Discarded from active review as legacy OPAL; retain documentation.

### UG-22-03 — English — Accepted 2026-10-29

Location: `user-guide/particle-matter/index.qmd:169` in the baseline. [Rendered change](_site/user-guide/particle-matter/index.html#ug-22-03).

Replace vague path wording and clarify which documentation makes the restriction.

**Original / insertion anchor**
```text
The manual explicitly restricts this electromagnetic stripping path to
`OPAL-cycl`.
```

**Proposed wording / discussion addition**
```text
The retained OPAL documentation restricts this electromagnetic stripping model
to `OPAL-cycl`.
```

Evidence: `user-guide/particle-matter/index.qmd:169-170`.

### UG-22-04 — English — Accepted 2026-10-29

Location: `user-guide/particle-matter/index.qmd:175` in the baseline. [Rendered change](_site/user-guide/particle-matter/index.html#ug-22-04).

Replace vague code-path wording with the implementation being described.

**Original / insertion anchor**
```text
large for accurate material-interaction physics. In the legacy code path,
```

**Proposed wording / discussion addition**
```text
large for accurate material-interaction physics. In the legacy implementation,
```

Evidence: `user-guide/particle-matter/index.qmd:174-176`.

### UG-23-01 — Technical / units / links — Retired from review; legacy documentation retained

Location: `user-guide/optimization/index.qmd:202` in the baseline. [Rendered change](_site/user-guide/optimization/index.html#ug-23-01).

Replace an ambiguous original-manual reference with explicit legacy provenance.

**Original / insertion anchor**
```text
The original manual includes a full example based on the files
```

**Proposed wording / discussion addition**
```text
The retained OPAL documentation includes a full example based on the files
```

Evidence: `user-guide/optimization/index.qmd:202-204`.

**User decision:** Discarded from active review as legacy OPAL; retain documentation.

### UG-23-02 — Feature coverage / availability — Accepted 2026-10-29

Location: `user-guide/optimization/index.qmd:227` in the baseline. [Rendered change](_site/user-guide/optimization/index.html#ug-23-02).

Identify the unavailable commands explicitly and avoid presenting a port as an established roadmap commitment.

**Original / insertion anchor**
```text
This optimization feature is not yet available in OPALX. The OPAL view is
retained as a compatibility reference and a reminder of intended future
functionality.
```

**Proposed wording / discussion addition**
```text
`OPTIMIZE`, `DVAR`, `OBJECTIVE`, and `CONSTRAINT` are not available in the current OPALX version. The OPAL view is retained as a compatibility reference. A port and its schedule are unconfirmed.
```

Evidence: `src/OpalConfigure/Configure.cpp:108-144`.

**User decision:** Apply the user-supplied availability statement as final wording; spelling and sentence capitalization normalized.

### UG-24-01 — Feature coverage / availability — Accepted 2026-10-29

Location: `user-guide/sampler/index.qmd:11` in the baseline. [Rendered change](_site/user-guide/sampler/index.html#ug-24-01).

Preserve the correct availability restriction without claiming intended future functionality absent roadmap evidence.

**Original / insertion anchor**
```text
`SAMPLE` and `SAMPLING` are not registered by the current OPALX executable.
The OPAL view preserves the complete legacy workflow as a compatibility
reference and a reminder of intended future functionality.
```

**Proposed wording / discussion addition**
```text
`SAMPLE` and `SAMPLING` are not available in the current OPALX version.
```

Evidence: `src/OpalConfigure/Configure.cpp:108-144`.

**User decision:** Apply the user-supplied availability statement as final wording; spelling and sentence capitalization normalized.

### UG-24-02 — Technical / units / links — Retired from review; legacy documentation retained

Location: `user-guide/sampler/index.qmd:113` in the baseline. [Rendered change](_site/user-guide/sampler/index.html#ug-24-02).

Make the provenance of the linked SAMPLE example explicit.

**Original / insertion anchor**
```text
The original manual gives a complete example in
```

**Proposed wording / discussion addition**
```text
The retained OPAL documentation gives a complete example in
```

Evidence: `user-guide/sampler/index.qmd:113-114`.

**User decision:** Discarded from active review as legacy OPAL; retain documentation.


## Chapter coverage

- **6**: Read full page; source and internal links checked. No material English or interface correction found.
- **7**: Read full page; checked relevant parser/registration/runtime sources and internal links. Findings are source comparisons, not numerical validation.
- **8**: Read full page; checked relevant parser/registration/runtime sources and internal links. Findings are source comparisons, not numerical validation.
- **9**: Read full page; checked relevant parser/registration/runtime sources and internal links. Findings are source comparisons, not numerical validation.
- **10**: Read full page; checked relevant parser/registration/runtime sources and internal links. Findings are source comparisons, not numerical validation.
- **11**: Read full page; checked relevant parser/registration/runtime sources and internal links. Findings are source comparisons, not numerical validation.
- **12**: Complete current OPALX page read; registry, element wrappers, field kernels, named fringe models and relevant unit tests checked. All 1332 lines of the retained legacy include reviewed for English/presentation; historical physics not freshly validated.
- **13**: Read full chapter and checked public sector/trim-coil, COF, directed-turn, energy-stop, and spectral-tune interfaces. Existing limitations retained; no code changes or dynamics rerun.
- **14**: Read full dual OPAL/OPALX page; checked current command registration, grid, output units, transforms, output timing, and file location. Historical OPAL interface retained.
- **15**: Read full chapter; checked LINE/RING parser, source-frame construction, modifiers, immediate member resolution, ring membership, and length calculation.
- **16**: Read full chapter and retained legacy include; checked species, charge weighting, energy precedence, source versus daughter rules, spin registration, and photon rejection. No spin-physics chapter edits.
- **17**: Read full current chapter plus 498-line retained legacy include; checked all seven distribution registrations, sampler dispatch, source attributes, source/file timing, input lookup, Gaussian/flat-top rules, and restart restrictions. Historical OPAL technical claims not revalidated against absent legacy source.
- **18**: Read complete current page and included _legacy-field-solver.qmd. Verified public FIELDSOLVER/BINNING registration, config conversion/validation, FFT2D5 storage/reference-path/model, cathode restrictions, and relevant existing space-charge tests. No new numerical tests run.
- **19**: Read complete TRACK/RUN/COF page. Compared TRACK/RUN/COF registered attributes and defaults, current configuration/handover interfaces and availability. No new model validation run.
- **20**: Read complete OPALX/OPAL page. Verified WAKE/FILTER absent registration; corrected retained Stencil.cpp interior formula. Other retained legacy physics was not independently rederived.
- **21**: Read complete page. GEOMETRY remains absent from current registration; existing explicit availability notice is correct. Linked/embedded local assets checked; no proposed change.
- **22**: Read complete OPALX/OPAL page. PARTICLEMATTERINTERACTION remains unregistered; retained material/scattering descriptions were reviewed for clarity and internal presentation, not independently validated against absent legacy runtime.
- **23**: Read complete OPALX/OPAL page. Verified optimizer commands absent from current registration; reviewed retained equations/examples and local links. No supported current optimizer to audit.
- **24**: Read complete OPALX/OPAL page. Verified SAMPLE/SAMPLING absent from current registration; reviewed retained raster/sequential count equations/examples and local links. No supported current sampler to audit.
