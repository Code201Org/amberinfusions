const contact = {"phone":"+918891548891","display":"+91 88915 48891","whatsapp":"918891548891","message":"Hello Amber Infusions, I would like to enquire about your infusions and arrange a consultation."};
document.getElementById('year').textContent = new Date().getFullYear();
const tabs = [...document.querySelectorAll('[role="tab"]')];
const panels = [...document.querySelectorAll('.resource-panel')];
const categories = { publications: 'scientific publications', content: 'educational content', videos: 'educational videos' };

function selectTab(tab, updateUrl = false) {
  const selected = tab.getAttribute('aria-controls');
  tabs.forEach(item => {
    const active = item === tab;
    item.setAttribute('aria-selected', String(active));
    item.tabIndex = active ? 0 : -1;
  });
  panels.forEach(panel => {
    panel.hidden = panel.id !== selected;
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('aria-labelledby', `tab-${panel.id}`);
    panel.tabIndex = 0;
    const message = `Hello Amber Infusions, I would like to enquire about ${categories[panel.id]} for healthcare professionals.`;
    panel.querySelector('a').href = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`;
  });
  if (updateUrl) history.replaceState(null, '', `#${selected}`);
}

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectTab(tab, true));
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    if (next !== undefined) { event.preventDefault(); selectTab(tabs[next], true); tabs[next].focus(); }
  });
});
function resolveTab() { selectTab(tabs.find(tab => tab.getAttribute('aria-controls') === location.hash.slice(1)) || tabs[0]); }
document.querySelector('[role="tablist"]').hidden = false;
window.addEventListener('hashchange', resolveTab);
resolveTab();
