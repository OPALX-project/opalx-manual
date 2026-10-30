# OPALX V1.0 manual audit

Status updated: 2026-10-30. Current manual: `72a3965`; original User Guide source audit: OPALX master `9a14973b0030355e1291159281c5ed8e66c3ea56`. This is a documentation audit, not a new runtime validation.

| Scope | Unresolved work | Record |
|---|---|---|
| User Guide 6–24 | 4 existing numbered review decisions; 123 accepted, 20 removed, 1 rejected, 3 moved to issues, 3 retired from review | [Detailed audit](USER_GUIDE_6_24_AUDIT.md) / [local index](_site/user-guide-audit.html) |
| Cross-chapter consistency | 2 additional wording follow-ups; existing approvals unchanged | Table below |
| Getting Started 2–5 | Chapters 2–4 change markings cleared on 2026-10-30; recorded execution limitation remains | [Audit](GETTING_STARTED_AUDIT.md) |
| Source verification/implementation | 7 OPEN issues, tracked separately from manual review | Issue table below |
| Publication | Accepted User Guide decisions authorized for commit/push on2026-10-30 | Verify the resulting Actions run and published pages |

All 154 original User Guide finding IDs and statuses are retained. The chapter-local “Local review” boxes are removed; numbered orange/blue proposals remain visible. No new implementation work is inferred from a pending documentation decision.

## Pending decisions by finding

These proposals are already marked in the manual. Review the current wording; imported corrections take precedence over superseded historical proposals.

| Finding | Topic | Decision remaining |
|---|---|---|
| [UG-12-28](_site/user-guide/elements.html#ug-12-28) | Symmetric Enge exit offset | Accept or revise the exit term using p(x-L/2), replacing the old p(x+L/2) shift. |
| [UG-12-29](_site/user-guide/elements.html#ug-12-29) | Asymmetric Enge entrance half-length | Confirm START_HALF_LENGTH describes the entrance offset L_s. |
| [UG-12-30](_site/user-guide/elements.html#ug-12-30) | Asymmetric Enge exit half-length | Confirm END_HALF_LENGTH describes the exit offset L_e. |
| [UG-12-31](_site/user-guide/elements.html#ug-12-31) | Asymmetric Enge exit formula | Accept or revise use of the separate exit polynomial p_e and the exit shift x-L_e. |

## Cross-chapter consistency

2 documentation follow-ups are separate from the original numbered audit decisions. Existing accepted text and all 154 historical IDs/statuses are preserved; these follow-ups are not implementation defects.

| Follow-up | Discrepancy | Next manual decision | References |
|---|---|---|---|
| CONS-01 | Cyclotron says explicit TURNS stopping is unsupported with space charge; TRACK says space charge is allowed and can use TURNS. | Agree one description of support and distinguish any validation policy from an enforced limitation. Keep both existing approvals until that wording decision. | [UG-13-01](_site/user-guide/cyclotron.html#ug-13-01), [UG-19-09](_site/user-guide/tracking.html#ug-19-09), [UG-19-11](_site/user-guide/tracking.html#ug-19-11) |
| CONS-02 | The BEAM catalog advertises current/frequency and the core-syntax example assigns BCURRENT, while the detailed BEAM table rejects BCURRENT/BFREQ and directs users to BCHARGE. | Align the catalog and attribute-assignment example with supported BEAM attributes such as BCHARGE, allocation and source lists, consistent with the approved BEAM table. | [BEAM catalog](_site/user-guide/input-language.html#simulation-definitions), [Attribute-assignment example](_site/user-guide/input-language.html#core-syntax), [UG-16-03](_site/user-guide/beam.html#ug-16-03) |

## Source issues — separate work

States checked through GitHub CLI on 2026-10-29. Their manual notes were removed or resolved earlier; an OPEN issue is not an additional pending User Guide finding.

| Issue | Work remaining | Audit scope | State |
|---|---|---|---|
| [#648](https://github.com/OPALX-project/OPALX/issues/648) | Honor AUTOPHASE=0 during reference advancement to TRACK.ZSTART | Auto-phasing appendix | OPEN |
| [#649](https://github.com/OPALX-project/OPALX/issues/649) | Make DESIGNENERGY tuning consistent across traveling-wave regions | Auto-phasing appendix | OPEN |
| [#650](https://github.com/OPALX-project/OPALX/issues/650) | Review expression functions USER0/1/2, GETEKIN and SI/SC/SO | UG-09-07: manual paragraph removed; verification remains open. | OPEN |
| [#651](https://github.com/OPALX-project/OPALX/issues/651) | Verify SELECT pattern matching and observable selection behavior on master | UG-09-12: examples removed; verification remains open. | OPEN |
| [#652](https://github.com/OPALX-project/OPALX/issues/652) | Implement BINNING PARAMETER=POSITIONZ and PZ in the space-charge solver | UG-18-20: documentation resolved; selector implementation remains open. | OPEN |
| [#653](https://github.com/OPALX-project/OPALX/issues/653) | Expose BORIS for TRACK.TIMEINTEGRATOR and honor the effective integrator choice | UG-19-05: documentation resolved; configuration implementation remains open. | OPEN |
| [#654](https://github.com/OPALX-project/OPALX/issues/654) | Resolve DUMPEMFIELDS time units for RF sampling and output | UG-14-03: manual review note removed; time-unit decision and RF verification remain open. | OPEN |

## Getting Started and publication

Red change indications and review-copy notices were removed on 2026-10-30 from the [installation](_site/getting-started/index.html), [first simulation](_site/getting-started/first-simulation.html), and [cluster](_site/getting-started/clusters/index.html) pages. The revised instructions and examples are retained. Worked inputs remain unchanged. The earlier audit did not run a fresh release build or simulation, and did not establish a release-matched regression tag; this remains a recorded validation limit rather than a newly requested test campaign.

After the remaining manual decisions, commit and publish the current cleanup and audit-record updates when authorized, then verify the published pages. Retain the accepted availability wording and existing assignments/checkmarks in external audit tables; those external documents were not changed by this local pass.
