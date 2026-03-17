/* ═══════════════════════════════════════════════════════════════════════════
   ROTTEN COUNCIL — Internationalization Engine
   JSON-based translation with data-i18n attributes
   ═══════════════════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  // Supported languages — add new entries here when adding a language
  var LANGUAGES = [
    { code: 'en', name: 'English' }
    // { code: 'tr', name: 'Turkce' },
    // { code: 'de', name: 'Deutsch' },
    // { code: 'fr', name: 'Francais' },
    // { code: 'es', name: 'Espanol' },
  ];

  var DEFAULT_LANG = 'en';
  var currentLang = DEFAULT_LANG;
  var translations = {};

  // ─── Language Detection ────────────────────────────────────────────────
  function detectLanguage() {
    // 1. Check localStorage
    var stored = localStorage.getItem('rc-lang');
    if (stored && isSupported(stored)) return stored;

    // 2. Check URL parameter
    var params = new URLSearchParams(window.location.search);
    var urlLang = params.get('lang');
    if (urlLang && isSupported(urlLang)) return urlLang;

    // 3. Check browser language
    var browserLang = (navigator.language || '').split('-')[0].toLowerCase();
    if (isSupported(browserLang)) return browserLang;

    return DEFAULT_LANG;
  }

  function isSupported(code) {
    return LANGUAGES.some(function (l) { return l.code === code; });
  }

  // ─── Load Translations ────────────────────────────────────────────────
  function loadTranslations(lang) {
    // English is embedded in HTML as default — no need to load
    if (lang === DEFAULT_LANG) {
      currentLang = lang;
      localStorage.setItem('rc-lang', lang);
      updateHTMLLang(lang);
      return Promise.resolve();
    }

    return fetch('lang/' + lang + '.json')
      .then(function (res) {
        if (!res.ok) throw new Error('Failed to load ' + lang + '.json');
        return res.json();
      })
      .then(function (data) {
        translations[lang] = data;
        currentLang = lang;
        localStorage.setItem('rc-lang', lang);
        applyTranslations(lang);
        updateHTMLLang(lang);
      })
      .catch(function (err) {
        console.warn('i18n: Could not load language "' + lang + '":', err.message);
        // Fallback to default
        currentLang = DEFAULT_LANG;
      });
  }

  // ─── Apply Translations to DOM ────────────────────────────────────────
  function applyTranslations(lang) {
    var data = translations[lang];
    if (!data) return;

    // Text content
    var els = document.querySelectorAll('[data-i18n]');
    els.forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (data[key] !== undefined) {
        el.textContent = data[key];
      }
    });

    // Attributes (e.g., data-i18n-attr="alt:role.mayor.name,title:some.key")
    var attrEls = document.querySelectorAll('[data-i18n-attr]');
    attrEls.forEach(function (el) {
      var pairs = el.getAttribute('data-i18n-attr').split(',');
      pairs.forEach(function (pair) {
        var parts = pair.trim().split(':');
        if (parts.length === 2 && data[parts[1]] !== undefined) {
          el.setAttribute(parts[0], data[parts[1]]);
        }
      });
    });
  }

  function updateHTMLLang(lang) {
    document.documentElement.setAttribute('lang', lang);
  }

  // ─── Translation Helper (for JS-generated content) ────────────────────
  function t(key) {
    if (currentLang !== DEFAULT_LANG && translations[currentLang] && translations[currentLang][key]) {
      return translations[currentLang][key];
    }
    // Fallback: find the default text from DOM
    var el = document.querySelector('[data-i18n="' + key + '"]');
    return el ? el.textContent : key;
  }

  // ─── Public API ────────────────────────────────────────────────────────
  window.setLanguage = function (lang) {
    if (lang === currentLang) return;
    if (!isSupported(lang)) {
      console.warn('i18n: Language "' + lang + '" is not supported');
      return;
    }

    if (lang === DEFAULT_LANG) {
      // Reload page to restore default HTML text
      localStorage.setItem('rc-lang', lang);
      window.location.reload();
      return;
    }

    loadTranslations(lang);
  };

  window.getCurrentLanguage = function () {
    return currentLang;
  };

  window.getSupportedLanguages = function () {
    return LANGUAGES.slice();
  };

  window.t = t;

  // ─── Initialize ────────────────────────────────────────────────────────
  var detectedLang = detectLanguage();
  if (detectedLang !== DEFAULT_LANG) {
    loadTranslations(detectedLang);
  } else {
    updateHTMLLang(DEFAULT_LANG);
  }

  // Build language switcher dropdown dynamically
  var dropdown = document.querySelector('.lang-switcher__dropdown');
  if (dropdown && LANGUAGES.length > 1) {
    dropdown.innerHTML = '';
    LANGUAGES.forEach(function (lang) {
      var btn = document.createElement('button');
      btn.className = 'lang-switcher__option' + (lang.code === currentLang ? ' active' : '');
      btn.setAttribute('data-lang', lang.code);
      btn.textContent = lang.name;
      dropdown.appendChild(btn);
    });
  }

})();
