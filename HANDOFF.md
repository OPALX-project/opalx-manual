# COF manual update, 2026-09-10

- Goal: reconcile the COF and related TRACK documentation with `/Users/adelmann/git/opalx` at `288d4327c`.
- Manual: `/Users/adelmann/git/opalx-manual`, base `4548fd0`; four existing modified pages preserved in `/tmp/opalx-manual-cof-baseline`.
- Source audit complete: named COF command, retained laboratory launch state, INITIALORBIT validation, exact optional JSON output, final-turn localization and restrictions.
- Editing staged copies of tracking, cyclotron, beam-lines, input-language, command/file references, architecture, physics, limitations, validator, and maintenance register.
- Decisions: distinguish fixed-section COF from TRACK's momentum-normal return plane and production integrator; remove invalid space-charge TURNS example; preserve experimental status and existing physics caveats.
- Checks: five CTest suites, nine executable checks (including one/two-rank equality), source validation, 57-chapter HTML, five report pages, six browser tests and desktop/mobile COF checks pass. Initial executable checker failed on missing baseline; temporary copy uses saved verified JSON and passes. New table wrappers remove mobile overflow. Full PDF build stalled at chapter 19 twice, including an isolated-browser retry; task-owned processes stopped. Link validator only reports missing book PDF (57 links); documents checkout absent.
- Additional source cross-check: removed stale TRACK.MAP_ORDER, added EKINSTOP and spectral controls, registered COF/COLLIMATOR/CONSTANTFOCUSING in inventories. Detailed guides for the latter two remain pending.
- Documentation update complete. Remaining publication/environment work is recorded in REMEMBER.md: resolve local PDF rendering, restore documents checkout and moved regression baseline. No commit or push requested.
