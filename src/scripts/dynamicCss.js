let darkMode = (localStorage.getItem('darkMode') ?? 'false') === 'true';

function darkModeEnable() {
  const link = document.createElement('link');

  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.media = 'all';
  link.href = 'static/stylesDark.css';
  link.id = "darkCssStylesheet";

  document.getElementsByTagName('head')[0].appendChild(link);

  if (window.location.pathname == '/') {
    document.getElementById('githubStatsImg').src = 'https://github-readme-stats.vercel.app/api?username=ddededodediamante&theme=dark';
    document.getElementById('githubTopLanguagesImg').src = 'https://github-readme-stats.vercel.app/api/top-langs?username=ddededodediamante&theme=dark';
  }
}

function lightModeEnable() {
  let darkCss = document.getElementById('darkCssStylesheet');
  if (darkCss) darkCss.remove();

  if (window.location.pathname == '/') {
    document.getElementById('githubStatsImg').src = 'https://github-readme-stats.vercel.app/api?username=ddededodediamante';
    document.getElementById('githubTopLanguagesImg').src = 'https://github-readme-stats.vercel.app/api/top-langs?username=ddededodediamante';
  }
}

function toggleDarkMode() {
  darkMode = !darkMode;
  localStorage.setItem('darkMode', String(darkMode));
  if (darkMode) darkModeEnable(); else lightModeEnable();
}

if (darkMode) darkModeEnable(); else lightModeEnable();