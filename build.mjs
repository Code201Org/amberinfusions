import { readFile, writeFile } from 'node:fs/promises';

// Keep the approved desktop and phone presentations independent. Only IDs are
// namespaced; shared interactions are initialized against each layout root.
const read = file => readFile(`src/${file}`, 'utf8');
const layouts = [];
for (const name of ['desktop', 'mobile']) {
  let html = await read(`${name}.html`);
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
await writeFile('dist/app.js', await read('app.js'));
await writeFile('dist/styles.css', await read('shared.css'));
console.log('Built independent desktop and mobile layouts.');
