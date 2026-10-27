// Client-side search
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('search-input');
  const results = document.getElementById('search-results');
  if (!input || !results) return;

  let index = [];
  const root = input.dataset.root || './';
  fetch(root + 'search-index.json')
    .then(r => r.json())
    .then(data => { index = data; })
    .catch(() => {});

  input.addEventListener('input', (e) => {
    const q = e.target.value.trim().toLowerCase();
    if (!q) { results.style.display = 'none'; return; }
    const matches = index.filter(item => item.title.toLowerCase().includes(q) || item.keywords.toLowerCase().includes(q));
    if (matches.length === 0) {
      results.innerHTML = '<div style="padding:0.5rem;color:#888;">Ничего не найдено</div>';
    } else {
      results.innerHTML = matches.map(m => `<a href="${root}${m.url}"><strong>${m.title}</strong><div style="font-size:0.75rem;color:#64748b;">${m.category}</div></a>`).join('');
    }
    results.style.display = 'block';
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-box')) results.style.display = 'none';
  });
});
