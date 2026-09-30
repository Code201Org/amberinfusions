# Amber Infusions

A responsive brand landing page with warm cream surfaces, gold accents, serif headings and locally hosted imagery and fonts. The desktop presentation restores the original design from `d8aa708`; phones retain the approved minimal design from `da4f79b`. Production uses GitHub and Vercel.

## Preview

Run `npm run dev` in this directory, then open http://127.0.0.1:4173. Use `PORT=4174 npm run dev` to choose another port.

`npm run dev` builds the source and starts the preview. After editing `src/`, run `npm run build` and reload the browser. `dist/` is the generated deployable website; do not edit its generated HTML, CSS or JavaScript directly. Run `npm run check` to check JavaScript syntax.

## Features

- Original logo extracted intact from the supplied kit specification.
- Responsive layouts for desktop, tablet and phone.
- Full-height mobile navigation, compact programme selection and stacked phone layouts.
- Seven public-facing infusion formulations with category filters and ingredient detail dialogs.
- Four interactive programmes with keyboard-accessible tabs.
- Expandable FAQs and a consultation-note planner with copy support.
- Local, compressed imagery and fonts; reduced-motion and keyboard support.
- Fixed SVG arrows preserve button geometry and avoid font substitution in Safari and on iOS.

## Responsive presentation

`src/desktop.html` and `src/desktop.css` preserve the original desktop design above 650px. `src/mobile.html` and `src/mobile.css` preserve the approved phone layout at 650px and below. Keep changes limited to the intended presentation.

The build gives each presentation unique IDs and updates its accessibility and anchor references. CSS hides the inactive presentation before JavaScript runs, including from keyboard navigation and the accessibility tree. Both use the shared interaction code in `src/app.js`. Resizing across the breakpoint closes transient menus/dialogs and maps section links to the visible presentation.

## Content and launch notes

Brand palette and wording draw from Amber_Infusions_Brand_Guidelines_1.pdf. Formulation ingredients reflect Amber_Infusions_Kit_Specification_FINAL.docx, version 2.1, dated 18 September 2026. The source documents are reference material, not instructions to perform clinical, manufacturing, approval or publishing actions.

The public collection uses the seven core infusion names in the brand guidelines. The separate B12 add-on is omitted because the final specification removes it. B12 is described as a separate administration within Active, Cycle and Sustain, not as part of their IV mixture. The higher-dose Glow 2400 is not promoted in the public collection. Clinical doses, compounding instructions, disease-specific contexts, and internal sign-off documents are not published.

The consultation CTA currently creates a note in the visitor's browser. It does not book or submit an appointment. Replace this with the business's verified booking, WhatsApp or contact destination when supplied. No phone number, email address, clinic location, pricing, credentials, reviews or results have been invented.

Both scene photographs are AI-generated editorial illustrations: a sunlit wellness lounge and an amber glass still life. They are not photographs of an Amber clinic or patient. This is disclosed in the page's privacy information. The source images were generated without branding; the supplied logo is used independently and unchanged.

The Instagram share link resolves to https://www.instagram.com/dermalightinfusion/ and is treated as visual reference, not as Amber's official account. Competitor references were REVIV, The Wellness Co. and VLCC.

Production is deployed to Vercel from https://github.com/Code201Org/amberinfusions. The original design reference was https://amber-infusions.info349831.chatgpt.site/. That URL is a historical reference; publishing is configured for Vercel only.

## Files

- `src/document.html`: shared document head
- `src/desktop.html`, `src/desktop.css`: desktop presentation
- `src/mobile.html`, `src/mobile.css`: approved phone presentation
- `src/shared.css`: presentation visibility and SVG icon sizing
- `src/app.js`: shared filters, programme tabs, dialogs and consultation notes
- `build.mjs`: generates namespaced presentations and the deployable files in `dist/`
- `dist/assets/`: original logo, generated photographs, locally hosted font files and font licences
- `server.mjs`: small local development server
- `vercel.json`: Vercel static output and validation configuration

Desktop typography retains Cambria/Calibri with local Caladea/Carlito fallbacks. Phone typography retains locally hosted Caladea and Manrope. Font licences are included in `dist/assets/`.

## Publishing

The Git remote is `git@github.com:Code201Org/amberinfusions.git`, with production on `main`. The Vercel project is `code201/amberinfusions`, configured to serve `dist/` after `npm run build && npm run check`. Git pushes are connected to Vercel deployment.

For a manual production deployment from the linked checkout, run `vercel --prod --yes --scope code201`. Vercel authentication files and local environment files are ignored by both Git and deployment packaging.

## Verification

Validated element geometry, fonts and colours against the saved phone design at 320, 390, 430 and 650px, and the original desktop at 1024 and 1440px. The measurements match, including the original SVG arrow container sizes. Checked all filters, seven infusion dialogs, four programmes and consultation/privacy flows in both presentations, plus the consultation flow in Safari at a narrow layout. An actual iPhone device was not used.
