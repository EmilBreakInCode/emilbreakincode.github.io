// Sidebar interaction
document.addEventListener('DOMContentLoaded', () => {
  const current = window.location.pathname;
  document.querySelectorAll('aside a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && current.endsWith(href.replace('../', ''))) {
      link.classList.add('active');
    }
  });
});
