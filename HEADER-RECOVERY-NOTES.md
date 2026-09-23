# Header recovery notes (Option 1 only)

Requested desktop header contract:
1. Pink independent-redesign notice appears first.
2. Dark purple navigation header appears directly below it, consistently on the desktop homepage, podcast, tour, shop and contact pages.
3. The header remains sticky while scrolling.
4. Preserve the existing Instagram, YouTube and TikTok artwork and destinations. Do not redraw, replace or restyle the YouTube icon independently.
5. Make only header-related changes; preserve all page-specific content, imagery, buttons and layouts.

Inspection finding (2026-09-22): `site-polish.js` rebuilds the header of non-homepage pages using `header.innerHTML` in `unifyHeader()`, while the homepage has its own header markup in `index.html`. The shared stylesheet explicitly sets `header.site-standard` to `position:relative`, so it is not sticky. Multiple files can therefore produce different headers. No live-page changes were made by this notes commit.

Recovery procedure: preserve the current `main` commit; compare the homepage's original three icon SVG elements with the shared replacements; establish one shared header implementation and test all five desktop pages and mobile navigation before changing publication. Keep `Heather-McDonald-2` untouched.
