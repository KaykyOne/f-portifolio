// public/scripts/toggleTheme.js
window.toggleTheme = () => {
  const html = document.documentElement;
  html.classList.toggle('dark');
  localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
};
