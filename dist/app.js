const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const infusions = {
  glow: { name: 'Amber Glow', family: 'Antioxidant collection', description: 'Antioxidant support for skin health', ingredients: ['Glutathione', 'Vitamin C'] },
  revive: { name: 'Amber Revive', family: 'Antioxidant collection', description: 'Antioxidant and recovery support', ingredients: ['N-acetylcysteine (NAC)', 'Vitamin C'] },
  complete: { name: 'Amber Complete', family: 'Antioxidant collection', description: 'Comprehensive antioxidant support (premium)', ingredients: ['Glutathione', 'N-acetylcysteine (NAC)', 'Vitamin C', 'Multivitamin'] },
  active: { name: 'Amber Active', family: 'Metabolic collection', description: 'Supports energy metabolism', ingredients: ['Levocarnitine', 'Vitamin B12 — administered separately'], extra: 'The vitamin B12 component is given separately by intramuscular injection and is not mixed into the infusion.' },
  cycle: { name: 'Amber Cycle', family: 'Metabolic collection', description: 'Metabolic and antioxidant support', ingredients: ['N-acetylcysteine (NAC)', 'Levocarnitine', 'Vitamin B12 — administered separately'], extra: 'The vitamin B12 component is given separately by intramuscular injection and is not mixed into the infusion.' },
  sustain: { name: 'Amber Sustain', family: 'Support collection', description: 'Hydration and nutritional support', ingredients: ['Multivitamin', 'Vitamin B12 — administered separately'], extra: 'The vitamin B12 component is given separately by intramuscular injection and is not mixed into the infusion.' },
  replenish: { name: 'Amber Replenish', family: 'Support collection', description: 'Micronutrient support (monthly)', ingredients: ['Trace elements: zinc, selenium, chromium, copper and manganese'] }
};
const programmes = {
  radiance: {name: 'Amber Radiance', category: 'The antioxidant programme', description: 'A structured antioxidant programme for skin health.', length: '8 weeks', approach: 'Two considered phases', copy: 'A planned course across two four-week phases, with the formulation for each session guided by a prescription.'},
  metabolic: {name: 'Amber Metabolic', category: 'The metabolic programme', description: 'A structured metabolic-support programme.', length: '8 weeks', approach: 'A prescribed course', copy: 'A structured programme bringing together Amber Active and Amber Cycle, with each session guided by your clinician.'},
  sustain: {name: 'Amber Sustain', category: 'The nutritional-support programme', description: 'Ongoing hydration and nutritional support.', length: 'Ongoing', approach: 'Clinician-guided care', copy: 'A medically supervised companion course, with the schedule and ongoing suitability reviewed by your clinician.'},
  cycle: {name: 'Amber Cycle', category: 'Metabolic & antioxidant support', description: 'A structured metabolic and antioxidant programme.', length: '12 weeks', approach: 'A planned sequence', copy: 'A planned course of Amber Cycle sessions, prescribed individually and guided by regular clinical assessment.'}
};

$('#year').textContent = new Date().getFullYear();
const menuButton = $('.menu-toggle');
const mobileNav = $('#mobile-nav');
function closeMenu() { menuButton.setAttribute('aria-expanded', 'false'); menuButton.setAttribute('aria-label', 'Open navigation'); mobileNav.hidden = true; }
menuButton.addEventListener('click', () => { const expanded = menuButton.getAttribute('aria-expanded') === 'true'; menuButton.setAttribute('aria-expanded', String(!expanded)); menuButton.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation'); mobileNav.hidden = expanded; });
$$('a, button', mobileNav).forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
matchMedia('(min-width: 901px)').addEventListener('change', event => { if (event.matches) closeMenu(); });

$$('[data-filter]').forEach(button => button.addEventListener('click', () => {
  const family = button.dataset.filter;
  $$('[data-filter]').forEach(item => { const active = item === button; item.classList.toggle('active', active); item.setAttribute('aria-pressed', String(active)); });
  let visible = 0;
  $$('.infusion-card').forEach(card => { card.hidden = family !== 'all' && card.dataset.family !== family; if (!card.hidden) visible++; });
  $('.collection-count').textContent = `${String(visible).padStart(2, '0')} / 07 formulations`;
  $('#b12-note').hidden = family === 'antioxidant';
}));

function selectProgramme(tab) {
  const programme = programmes[tab.dataset.programme];
  $$('.programme-tab').forEach(item => { const active = item === tab; item.classList.toggle('active', active); item.setAttribute('aria-selected', String(active)); item.tabIndex = active ? 0 : -1; });
  $('#programme-panel').setAttribute('aria-labelledby', tab.id);
  $('#programme-category').textContent = programme.category;
  $('#programme-name').textContent = programme.name;
  $('#programme-description').textContent = programme.description;
  $('#programme-length').textContent = programme.length;
  $('#programme-approach').textContent = programme.approach;
  $('#programme-copy').textContent = programme.copy;
  $('#programme-consult').dataset.consult = programme.name;
}
const programmeTabs = $$('.programme-tab');
programmeTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectProgramme(tab));
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = (index + 1) % programmeTabs.length;
    if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = (index - 1 + programmeTabs.length) % programmeTabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = programmeTabs.length - 1;
    if (next !== undefined) { event.preventDefault(); selectProgramme(programmeTabs[next]); programmeTabs[next].focus(); }
  });
});

const detailDialog = $('#detail-dialog');
const consultDialog = $('#consult-dialog');
let lastFocused;
function openDialog(dialog) { lastFocused = document.activeElement; dialog.showModal(); document.body.classList.add('modal-open'); }
$$('dialog').forEach(dialog => {
  $('.dialog-close', dialog).addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });
  dialog.addEventListener('close', () => { if (!document.querySelector('dialog[open]')) { document.body.classList.remove('modal-open'); if (lastFocused?.isConnected) lastFocused.focus(); } });
});
$$('[data-infusion]').forEach(button => button.addEventListener('click', () => {
  const item = infusions[button.dataset.infusion];
  $('#detail-content').innerHTML = `<span class="eyebrow">${item.family}</span><h2 id="detail-title">${item.name}</h2><p class="detail-description">${item.description}</p><div class="detail-label">The formulation includes</div><ul class="ingredient-list">${item.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}</ul>${item.extra ? `<p class="detail-extra">${item.extra}</p>` : ''}<p class="detail-note">Your clinician will assess suitability, explain the formulation and discuss possible risks and alternatives before prescribing.</p><button class="button button-dark" id="detail-consult">Discuss this infusion</button>`;
  detailDialog.setAttribute('aria-labelledby', 'detail-title');
  $('#detail-consult').addEventListener('click', () => { detailDialog.close(); openConsult(['Amber Cycle', 'Amber Sustain'].includes(item.name) ? `${item.name} infusion` : item.name, button); });
  openDialog(detailDialog);
}));
const interest = $('#interest');
function updateNote() {
  $('#enquiry-text').textContent = `I would like to discuss ${interest.value}. Could we review my health history, whether an infusion is appropriate for me, the possible risks and alternatives, and what to expect from a session?`;
  $('#copy-status').textContent = 'Your note stays on this device. No appointment is booked.';
  $('#copy-enquiry').textContent = 'Copy consultation note';
}
function openConsult(selection, origin) {
  const options = [...interest.options].map(option => option.value);
  const selected = options.includes(selection) ? selection : options.includes(`${selection} programme`) ? `${selection} programme` : 'the Amber Infusions range';
  interest.value = selected; updateNote(); openDialog(consultDialog); if (origin) lastFocused = origin;
}
$$('[data-consult]').forEach(button => button.addEventListener('click', () => openConsult(button.dataset.consult)));
interest.addEventListener('change', updateNote);
$('#copy-enquiry').addEventListener('click', async () => {
  const note = $('#enquiry-text').textContent;
  try { await navigator.clipboard.writeText(note); $('#copy-enquiry').textContent = 'Note copied'; $('#copy-status').textContent = 'Copied. You can now share this note with your clinician.'; }
  catch { const range = document.createRange(); range.selectNodeContents($('#enquiry-text')); const selection = window.getSelection(); selection.removeAllRanges(); selection.addRange(range); $('#copy-status').textContent = 'Select and copy the highlighted note to share it with your clinician.'; }
});
$('#privacy-button').addEventListener('click', () => {
  $('#detail-content').innerHTML = '<span class="eyebrow">Your privacy</span><h2 id="detail-title">A private first step.</h2><p class="dialog-intro">This landing page does not collect consultation requests, health information or payment details. The consultation note is created in your browser and copied only when you choose to copy it.</p><p class="dialog-intro">We do not use marketing cookies or analytics on this page. Website hosting may process standard connection data to deliver and secure the site.</p><p class="detail-note">Images are illustrative and do not depict an identified Amber clinic or patient. This page provides general information about the range; individual medical advice comes from your clinician.</p>';
  detailDialog.setAttribute('aria-labelledby', 'detail-title'); openDialog(detailDialog);
});
consultDialog.setAttribute('aria-label', 'Prepare for your Amber consultation');
updateNote();
