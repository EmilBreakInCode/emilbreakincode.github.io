// Code snippet copy button
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('pre').forEach(pre => {
    const btn = document.createElement('button');
    btn.className = 'copy-btn';
    btn.innerText = 'Copy';
    btn.addEventListener('click', () => {
      const code = pre.querySelector('code') ? pre.querySelector('code').innerText : pre.innerText;
      navigator.clipboard.writeText(code).then(() => {
        btn.innerText = 'Copied!';
        setTimeout(() => { btn.innerText = 'Copy'; }, 1500);
      });
    });
    pre.appendChild(btn);
  });
});
