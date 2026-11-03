# OPALX Documentation

[![Build documentation preview](https://github.com/OPALX-project/opalx-manual/actions/workflows/build.yml/badge.svg)](https://github.com/OPALX-project/opalx-manual/actions/workflows/build.yml)

This repository is the text-first source for the redesigned OPALX manual. It
combines user documentation, physics notes, reference material, developer
guides, and troubleshooting information in one Quarto book.

The historical OPAL manual remains a separate project. OPAL-only chapters,
examples, reports, and presentations are deliberately not included here.

## Preview

Render or preview the organization configuration with:

```sh
quarto render --profile opalx --to html
quarto render resources/reports --profile opalx --to html
quarto preview --profile opalx
```

An ad hoc documents repository can be tested without editing a page:

```sh
cp _quarto.yml.local.example _quarto.yml.local
quarto render --profile opalx --to html
```

Binary documents and large datasets belong in `opalx-documents`. Pages refer
to that repository only through the `documents-base-url` metadata value.

## Latest Changes to the Manual

The front page shows the three most recent non-merge commits reachable from the
checked-out revision, beside News and above the introductory hero (below News on narrow screens).
Each entry shows just the commit date and subject; a full-history link follows.

Quarto runs `ruby scripts/generate_latest_changes.rb` before rendering. Its
output, `includes/_latest-changes.md`, is generated and must not be committed.
The `filters/latest-changes.lua` filter inserts it into the front-page
`latest-changes-list` placeholder during rendering. Do not replace the
placeholder with an `include` shortcode: Quarto books resolve includes while
discovering chapters, before the pre-render script can create the file.
This keeps a clean checkout renderable without committing generated content.

Links use the `manual-repository-url` metadata. No browser-side API request or
additional gem is needed. A checkout without Git history shows a link to the
full history instead; shallow clones display the history they have and warn.
Use `git fetch --unshallow` to complete a shallow local checkout. CI fetches
the full history automatically.

## Validation

```sh
ruby tests/test_latest_changes.rb
ruby scripts/validate_manual.rb
```

Set `DOCUMENTS_CHECKOUT=../opalx-documents` to verify configurable document
links against a local checkout of the document repository.

The generated C++ API documentation is published separately at the PSI Doxygen
site and is linked through the `doxygen-url` metadata value.

On the rendered website, Quarto persists the selected color scheme and the
manual's small sidebar-state script persists expanded and collapsed sections
between page navigations.

## Featured news

The front-page News ticker below the institution logos in `index.qmd` cycles
through the release announcement (first), movie, and arXiv paper every three
seconds. It sits
beside Latest Changes to the Manual, stacking above it on narrow screens.
Pause and navigation controls are available; opening the movie pauses rotation.
It contains curated announcements, separately
from the Git-generated Latest Changes. Its movie thumbnail lives in
`assets/images/news/`; the published MP4 lives in `opalx-documents/movies/`.
The player and download link use `documents-media-base-url` metadata, pointing
at GitHub’s LFS media endpoint. Movie playback needs internet access; rendering
does not require a local movie checkout or copy media into the HTML output.
The player opens on request and does not autoplay or preload the movie.

### Homepage layout

Developer details start expanded on desktop and collapsed on phones; institution
logos retain two columns on phones. News keeps a stable compact horizontal layout
beside the three-row manual history on desktop. Controls have 44 px touch targets,
documentation cards use native full-card links, and the hero heading remains
1.5 times the News heading size at each breakpoint.
