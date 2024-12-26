const darkMode = (localStorage.getItem('darkMode') ?? 'false') === 'true';

if (darkMode) {
  const link = document.createElement('link');

  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.media = 'all';
  link.href = 'static/stylesDark.css';

  document.getElementsByTagName('head')[0].appendChild(link);

  if (window.location.pathname == '/') {
    document.getElementById('githubStatsImg').src = 'https://github-readme-stats.vercel.app/api?username=ddededodediamante&theme=dark';
    document.getElementById('githubTopLanguagesImg').src = 'https://github-readme-stats.vercel.app/api/top-langs?username=ddededodediamante&theme=dark'
  }
}

function toggleDarkMode() {
  if (darkMode) {
    localStorage.setItem('darkMode', 'false');
  } else {
    localStorage.setItem('darkMode', 'true');
  }

  window.location.reload();
}
