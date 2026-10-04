# Manual CI repair, 2026-10-04

- Goal: temporarily disable PDF generation as requested, restoring HTML-only publication after failed job 111513849489 in run 37228778262.
- Manual base: d142b91, initially clean main. User authorized commit and push to main after verification.
- Evidence: source/document validation, HTML, eight browser checks and report renders passed in CI. PDF failed in Quarto's SVG-to-PDF filter because rsvg-convert was unavailable. Duplicate closed-orbit-finder identifier also reported.
- Changes: BUILD_PDF=false gates all five PDF setup/render/validation steps; hide the book PDF download; retain librsvg2-bin before the gated render for future re-enabling; document the pause and prerequisites. Distinct cyclotron COF heading ID fixes the warning without changing the architecture anchor.
- Verification complete: source validator, full 58-chapter HTML, six report pages, eight browser tests, strict links across 64 HTML pages and workflow gate/order checks pass. No book-PDF download links remain. No PDF build run after the pause request.
- Status: changes verified and ready for the authorized commit and push; maintenance record in REMEMBER.md. Restore PDF only on request by enabling BUILD_PDF and book.downloads together; keep librsvg2-bin before rendering.
