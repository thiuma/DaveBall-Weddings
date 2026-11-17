// Floating name + button: switch their colours to match the section behind them.
// Each section declares data-tone="light" or "dark"; we read whichever one sits
// under the middle of the top bar and copy its tone onto the bar.
const topbar = document.querySelector('.topbar');
const sections = [...document.querySelectorAll('[data-tone]')].filter((el) => el !== topbar);

function updateTone() {
  if (!topbar) return;
  const probe = topbar.getBoundingClientRect().height / 2;
  const current = sections.find((el) => {
    const r = el.getBoundingClientRect();
    return r.top <= probe && r.bottom > probe;
  });
  if (current) topbar.dataset.tone = current.dataset.tone;
}

let ticking = false;
function onScroll() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    updateTone();
    ticking = false;
  });
}

window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('resize', onScroll);
updateTone();
