// public/scripts/toggleTheme.js
function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme');

  if (current === 'dark') {
    html.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  } else {
    html.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
}

function getTheme() {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme');
  return current === 'dark' ? false : true;
}
