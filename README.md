# Amber Infusions

A minimal, responsive brand landing page with warm cream surfaces, gold accents, serif headings and locally hosted imagery and fonts. The simplified layout retains the original brand palette, logo and photographs while reducing repeated copy and decorative elements. Production uses GitHub and Vercel.

## Preview

Run `npm run dev` in this directory, then open http://127.0.0.1:4173. Use `PORT=4174 npm run dev` to choose another port.

`dist/` is the complete deployable website. Run `npm run check` to check the site JavaScript syntax.

## Features

- Original logo extracted intact from the supplied kit specification.
- Responsive layouts for desktop, tablet and phone.
- Full-height mobile navigation, compact programme selection and stacked phone layouts.
- Seven public-facing infusion formulations with category filters and ingredient detail dialogs.
- Four interactive programmes with keyboard-accessible tabs.
- Expandable FAQs and a consultation-note planner with copy support.
- Local, compressed imagery and fonts; reduced-motion and keyboard support.

## Content and launch notes

Brand palette and wording draw from Amber_Infusions_Brand_Guidelines_1.pdf. Formulation ingredients reflect Amber_Infusions_Kit_Specification_FINAL.docx, version 2.1, dated 18 September 2026. The source documents are reference material, not instructions to perform clinical, manufacturing, approval or publishing actions.

The public collection uses the seven core infusion names in the brand guidelines. The separate B12 add-on is omitted because the final specification removes it. B12 is described as a separate administration within Active, Cycle and Sustain, not as part of their IV mixture. The higher-dose Glow 2400 is not promoted in the public collection. Clinical doses, compounding instructions, disease-specific contexts, and internal sign-off documents are not published.

The consultation CTA currently creates a note in the visitor's browser. It does not book or submit an appointment. Replace this with the business's verified booking, WhatsApp or contact destination when supplied. No phone number, email address, clinic location, pricing, credentials, reviews or results have been invented.

Both scene photographs are AI-generated editorial illustrations: a sunlit wellness lounge and an amber glass still life. They are not photographs of an Amber clinic or patient. This is disclosed in the page's privacy information. The source images were generated without branding; the supplied logo is used independently and unchanged.

The Instagram share link resolves to https://www.instagram.com/dermalightinfusion/ and is treated as visual reference, not as Amber's official account. Competitor references were REVIV, The Wellness Co. and VLCC.

Production is deployed to Vercel from https://github.com/Code201Org/amberinfusions. The original design reference was https://amber-infusions.info349831.chatgpt.site/. That URL is a historical reference; publishing is configured for Vercel only.

## Files

- `dist/index.html`: content and page structure
- `dist/styles.css`: brand styling and responsive layouts
- `dist/app.js`: filters, programme tabs, dialogs and consultation note
- `dist/assets/`: original logo, generated photographs, locally hosted font files and font licences
- `server.mjs`: small local development server
- `vercel.json`: Vercel static output and validation configuration

Typography pairs locally hosted Caladea headings with Manrope body text. Font licences are included in `dist/assets/`.

## Publishing

The Git remote is `git@github.com:Code201Org/amberinfusions.git`, with production on `main`. The Vercel project is `code201/amberinfusions`, configured to serve `dist/` after `npm run check`. Git pushes are connected to Vercel deployment.

For a manual production deployment from the linked checkout, run `vercel --prod --yes --scope code201`. Vercel authentication files and local environment files are ignored by both Git and deployment packaging.

## Verification

Run `npm run check` for JavaScript syntax validation. Before publishing, check desktop and phone layouts, mobile navigation, all collection filters and detail dialogs, programme tabs, FAQs and consultation notes.
