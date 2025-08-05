function navigateTo(view) {
  const main = document.getElementById('main-menu');
  const methods = document.getElementById('methods-menu');
  if (view === 'methods') {
    main.classList.add('hidden');
    methods.classList.remove('hidden');
  } else {
    main.classList.remove('hidden');
    methods.classList.add('hidden');
  }
}

function setTheme(mode) {
  document.body.className = 'theme-' + mode;
}
