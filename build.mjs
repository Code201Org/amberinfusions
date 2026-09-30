import { readFile, writeFile } from 'node:fs/promises';

// Keep the approved desktop and phone presentations independent. Only IDs are
// namespaced; shared interactions are initialized against each layout root.
const read = file => readFile(`src/${file}`, 'utf8');
const contact = JSON.parse(await read('contact.json'));
const whatsapp = message => `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`;
const contactTokens = {
  PHONE_HREF: `tel:${contact.phone}`,
  PHONE_DISPLAY: contact.display,
  WHATSAPP_URL: whatsapp(contact.message),
  DOCTORS_WHATSAPP_URL: whatsapp('Hello Amber Infusions, I would like to enquire about scientific publications and educational resources for healthcare professionals.')
};
const renderContact = source => source.replace(/\{\{([A-Z_]+)\}\}/g, (token, key) => contactTokens[key] ?? token);
const layouts = [];
for (const name of ['desktop', 'mobile']) {
  let html = renderContact(await read(`${name}.html`));
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  html = html.replace(/\bid="([^"]+)"/g, (_, id) => `id="${name}-${id}"`);
  html = html.replace(/\b(for|aria-controls|aria-labelledby)="([^"]+)"/g,
    (_, attr, value) => `${attr}="${value.split(' ').map(id => `${name}-${id}`).join(' ')}"`);
  html = html.replace(/href="#([^"]+)"/g, (_, id) => `href="#${name}-${id}"`);
  layouts.push(`<div data-layout="${name}">\n${html}</div>`);

  let css = await read(`${name}.css`);
  for (const id of ids) {
    css = css.replace(new RegExp(`#${id}(?![\\w-])`, 'g'), `#${name}-${id}`);
  }
  await writeFile(`dist/${name}.css`, css);
}
const document = (await read('document.html')).replace('<!-- LAYOUTS -->', layouts.join('\n'));
await writeFile('dist/index.html', document);
await writeFile('dist/app.js', (await read('app.js')).replace('__CONTACT__', JSON.stringify(contact)));
await writeFile('dist/styles.css', await read('shared.css'));
await writeFile('dist/doctors.html', renderContact(await read('doctors.html')));
await writeFile('dist/doctors.css', await read('doctors.css'));
await writeFile('dist/doctors.js', (await read('doctors.js')).replace('__CONTACT__', JSON.stringify(contact)));
console.log('Built desktop, mobile, contact links and Doctors page.');
