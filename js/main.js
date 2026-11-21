// ============ PRZEŁĄCZNIK JĘZYKA PL / EN ============
(function () {
  var buttons = document.querySelectorAll('[data-set-lang]');

  function setLang(lang) {
    document.documentElement.setAttribute('data-lang', lang);
    document.documentElement.setAttribute('lang', lang);
    buttons.forEach(function (b) {
      b.setAttribute('aria-pressed', b.getAttribute('data-set-lang') === lang ? 'true' : 'false');
    });
    try { localStorage.setItem('lang', lang); } catch (e) {}
  }

  buttons.forEach(function (b) {
    b.addEventListener('click', function () {
      setLang(b.getAttribute('data-set-lang'));
    });
  });

  setLang(document.documentElement.getAttribute('data-lang'));
})();

// ============ ROK W STOPCE ============
(function () {
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
