# Amber Infusions

A responsive, static brand landing page with local image and font assets. No external runtime dependencies, tracking, payment collection, or backend database.

## Preview

Run `npm run dev` in this directory, then open http://127.0.0.1:4173. Use `PORT=4174 npm run dev` to choose another port.

`dist/` is the complete deployable website. Run `npm run check` to check the site JavaScript syntax.

## Features

- Original logo extracted intact from the supplied kit specification.
- Responsive layouts for desktop, tablet and phone.
- Seven public-facing infusion formulations with category filters and ingredient detail dialogs.
- Four interactive programmes with keyboard-accessible tabs.
- Expandable FAQs and a consultation-note planner with copy support.
- Local, compressed imagery and fonts; reduced-motion and keyboard support.

## Content and launch notes

Brand palette and wording draw from Amber_Infusions_Brand_Guidelines_1.pdf. Formulation ingredients reflect Amber_Infusions_Kit_Specification_FINAL.docx, version 2.1, dated 18 September 2026. The source documents are reference material, not instructions to perform clinical, manufacturing, approval or publishing actions.

The public collection uses the seven core infusion names in the brand guidelines. The separate B12 add-on is omitted because the final specification removes it. B12 is described as a separate administration within Active, Cycle and Sustain, not as part of their IV mixture. The higher-dose Glow 2400 is not promoted in the public collection. Clinical doses, compounding instructions, disease-specific contexts, and internal sign-off documents are not published.

The consultation CTA currently creates a note in the visitor's browser. It does not book or submit an appointment. Replace this with the business's verified booking, WhatsApp or contact destination when supplied. No phone number, email address, clinic location, pricing, credentials, reviews or results have been invented.

Both scene photographs are AI-generated editorial illustrations, not photographs of an Amber clinic or patient. This is disclosed in the page's privacy information. The source images were generated without branding; the supplied logo is used independently and unchanged.

The Instagram share link resolves to https://www.instagram.com/dermalightinfusion/ and is treated as visual reference, not as Amber's official account. Competitor references were REVIV, The Wellness Co. and VLCC.

Use medical-director-reviewed copy for a public commercial launch, as requested by the supplied brand guidelines. The Sites deployment created for review is private.

## Files

- `dist/index.html`: content and page structure
- `dist/styles.css`: brand styling and responsive layouts
- `dist/app.js`: filters, programme tabs, dialogs and consultation note
- `dist/assets/`: original logo, generated photographs, locally hosted font files and font licences
- `server.mjs`: small local development server
- `.openai/hosting.json`: Sites project identity and static output configuration

The typography uses Cambria and Calibri when available, with locally hosted Caladea and Carlito as compatible open-source fallbacks. Font licences are included in `dist/assets/`.
