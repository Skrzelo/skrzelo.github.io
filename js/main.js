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

// ============ WIDOKI: podstrona zastępuje zawartość ekranu ============
// Adres z kotwicą (#about, #projects…) decyduje, który widok jest widoczny.
// Dzięki temu przycisk „wstecz" w przeglądarce i linki działają.
(function () {
  var VIEWS = ['home', 'about', 'projects', 'skills', 'contact'];

  function currentView() {
    var name = window.location.hash.replace('#', '');
    return VIEWS.indexOf(name) === -1 ? 'home' : name;
  }

  function showView() {
    var name = currentView();

    document.querySelectorAll('[data-view]').forEach(function (view) {
      view.hidden = view.getAttribute('data-view') !== name;
    });

    document.querySelectorAll('[data-nav]').forEach(function (link) {
      if (link.getAttribute('data-nav') === name) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });

    window.scrollTo(0, 0);
  }

  window.addEventListener('hashchange', showView);
  showView();
})();

// ============ ROZWIJANE MENU (prawy górny róg) ============
(function () {
  var toggle = document.querySelector('.menu-toggle');
  var panel = document.getElementById('menu-panel');
  if (!toggle || !panel) return;

  function setOpen(open) {
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    panel.hidden = !open;
  }

  // Kliknięcie przycisku otwiera lub zamyka listę
  toggle.addEventListener('click', function (e) {
    e.stopPropagation();
    setOpen(panel.hidden);
  });

  // Wybór podstrony zamyka listę
  panel.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });

  // Kliknięcie poza menu zamyka listę
  document.addEventListener('click', function (e) {
    if (!panel.hidden && !e.target.closest('.topbar')) setOpen(false);
  });

  // Escape zamyka listę i wraca fokus na przycisk
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !panel.hidden) {
      setOpen(false);
      toggle.focus();
    }
  });

  setOpen(false);
})();

// ============ ROK W STOPCE ============
(function () {
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();

// ============ TŁO REAGUJĄCE NA MYSZ (płynne podążanie) ============
(function () {
  // Pomijamy animację, gdy użytkownik wyłączył ruch w systemie
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var root = document.documentElement;
  var EASING = 0.12;   // im mniejsza wartość, tym wolniejsze podążanie (0–1)
  var target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  var pos = { x: target.x, y: target.y };
  var running = false;

  function render() {
    pos.x += (target.x - pos.x) * EASING;
    pos.y += (target.y - pos.y) * EASING;
    root.style.setProperty('--mx', pos.x + 'px');
    root.style.setProperty('--my', pos.y + 'px');

    // Pętla działa tylko, dopóki gradient się porusza, żeby nie marnować zasobów
    if (Math.abs(target.x - pos.x) > 0.5 || Math.abs(target.y - pos.y) > 0.5) {
      requestAnimationFrame(render);
    } else {
      running = false;
    }
  }

  window.addEventListener('pointermove', function (e) {
    target.x = e.clientX;
    target.y = e.clientY;
    if (!running) {
      running = true;
      requestAnimationFrame(render);
    }
  });
})();
