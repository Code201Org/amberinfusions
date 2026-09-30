# Amber Infusions

A minimal, responsive brand landing page with local image and font assets, modern sans-serif typography, white surfaces and restrained amber accents. No external runtime dependencies, tracking, payment collection, or backend database.

## Preview

Run `npm run dev` in this directory, then open http://127.0.0.1:4173. Use `PORT=4174 npm run dev` to choose another port.

`dist/` is the complete deployable website. Run `npm run check` to check the site JavaScript syntax.

## Features

- Original logo extracted intact from the supplied kit specification.
- Responsive layouts for desktop, tablet and phone.
- Phone-specific full-screen navigation, compact programme selection and consultation sheets.
- Mobile enhancements preserve the desktop rendering at 1024, 1280 and 1440 pixels.
- Seven public-facing infusion formulations with category filters and ingredient detail dialogs.
- Four interactive programmes with keyboard-accessible tabs.
- Expandable FAQs and a consultation-note planner with copy support.
- Local, compressed imagery and fonts; reduced-motion and keyboard support.

## Content and launch notes

Brand palette and wording draw from Amber_Infusions_Brand_Guidelines_1.pdf. Formulation ingredients reflect Amber_Infusions_Kit_Specification_FINAL.docx, version 2.1, dated 18 September 2026. The source documents are reference material, not instructions to perform clinical, manufacturing, approval or publishing actions.

The public collection uses the seven core infusion names in the brand guidelines. The separate B12 add-on is omitted because the final specification removes it. B12 is described as a separate administration within Active, Cycle and Sustain, not as part of their IV mixture. The higher-dose Glow 2400 is not promoted in the public collection. Clinical doses, compounding instructions, disease-specific contexts, and internal sign-off documents are not published.

The consultation CTA currently creates a note in the visitor's browser. It does not book or submit an appointment. Replace this with the business's verified booking, WhatsApp or contact destination when supplied. No phone number, email address, clinic location, pricing, credentials, reviews or results have been invented.

Both scene photographs are AI-generated editorial illustrations: a bright clinical interior and a water still life. They are not photographs of an Amber clinic or patient. This is disclosed in the page's privacy information. The source images were generated without branding; the supplied logo is used independently and unchanged.

The Instagram share link resolves to https://www.instagram.com/dermalightinfusion/ and is treated as visual reference, not as Amber's official account. Competitor references were REVIV, The Wellness Co. and VLCC.

Use medical-director-reviewed copy for a public commercial launch, as requested by the supplied brand guidelines. Production is deployed to Vercel from the GitHub repository at https://github.com/Code201Org/amberinfusions. The earlier private Sites preview is a separate deployment.

## Files

- `dist/index.html`: content and page structure
- `dist/styles.css`: brand styling and responsive layouts
- `dist/app.js`: filters, programme tabs, dialogs and consultation note
- `dist/assets/`: original logo, generated photographs, locally hosted font files and font licences
- `server.mjs`: small local development server
- `vercel.json`: Vercel static output and validation configuration
- `.openai/hosting.json`: retained identity of the earlier Sites preview

The current typography uses locally hosted Manrope. Font licences are included in `dist/assets/`.

## Publishing

The Git remote is `git@github.com:Code201Org/amberinfusions.git`, with production on `main`. The Vercel project is `code201/amberinfusions`, configured to serve `dist/` after `npm run check`. Git pushes are connected to Vercel deployment.

For a manual production deployment from the linked checkout, run `vercel --prod --yes --scope code201`. Vercel authentication files and local environment files are ignored by both Git and deployment packaging.

## Verification

Checked navigation, infusion filters, seven detail dialogs, four programmes, consultation selection and copying, and FAQs. Layout checks cover 320–844 pixel viewports, including phone landscape, plus 200% text enlargement. Desktop screenshots before and after the mobile changes are pixel-identical at 1024, 1280 and 1440 pixels.
