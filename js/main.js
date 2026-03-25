/* ═══════════════════════════════════════════════════════════════════════════
   ROTTEN CHAMBER — Main JavaScript
   Nav behavior, scroll animations, card flip, dust particles
   ═══════════════════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  // ─── Sticky Nav ────────────────────────────────────────────────────────
  const nav = document.getElementById('nav');
  const heroSection = document.getElementById('hero');

  function updateNav() {
    if (!nav || !heroSection) return;
    const scrolled = window.scrollY > 60;
    nav.classList.toggle('scrolled', scrolled);
  }

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  // ─── Scroll Progress Bar ─────────────────────────────────────────────
  var scrollProgress = document.getElementById('scroll-progress');

  function updateScrollProgress() {
    if (!scrollProgress) return;
    var scrollTop = window.scrollY;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    var percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollProgress.style.width = percent + '%';
  }

  window.addEventListener('scroll', updateScrollProgress, { passive: true });
  updateScrollProgress();

  // ─── Back to Top ─────────────────────────────────────────────────────
  var backToTop = document.getElementById('back-to-top');

  function updateBackToTop() {
    if (!backToTop) return;
    var show = window.scrollY > window.innerHeight;
    backToTop.classList.toggle('visible', show);
  }

  if (backToTop) {
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  window.addEventListener('scroll', updateBackToTop, { passive: true });
  updateBackToTop();

  // ─── Mobile Menu Toggle ────────────────────────────────────────────────
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', function () {
      nav.classList.toggle('menu-open');
      const isOpen = nav.classList.contains('menu-open');
      mobileToggle.innerHTML = isOpen ? '&#10005;' : '&#9776;';
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu on link click
    navLinks.querySelectorAll('.nav__link').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('menu-open');
        mobileToggle.innerHTML = '&#9776;';
      });
    });
  }

  // ─── Active Nav Link Highlighting ──────────────────────────────────────
  const sections = document.querySelectorAll('section[id]');
  const navLinkEls = document.querySelectorAll('.nav__link');

  function updateActiveLink() {
    const scrollPos = window.scrollY + 100;

    sections.forEach(function (section) {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinkEls.forEach(function (link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });

  // ─── Scroll Reveal ─────────────────────────────────────────────────────
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReducedMotion) {
    const revealEls = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    revealEls.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    // If reduced motion, show everything immediately
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('visible');
    });
  }

  // ─── Language Switcher Toggle ──────────────────────────────────────────
  const langSwitcher = document.getElementById('lang-switcher');

  if (langSwitcher) {
    const currentBtn = langSwitcher.querySelector('.lang-switcher__current');

    currentBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      langSwitcher.classList.toggle('open');
    });

    document.addEventListener('click', function () {
      langSwitcher.classList.remove('open');
    });

    langSwitcher.querySelectorAll('.lang-switcher__option').forEach(function (opt) {
      opt.addEventListener('click', function () {
        const lang = this.getAttribute('data-lang');
        langSwitcher.querySelector('.lang-switcher__label').textContent = lang.toUpperCase();

        langSwitcher.querySelectorAll('.lang-switcher__option').forEach(function (o) {
          o.classList.remove('active');
        });
        this.classList.add('active');

        langSwitcher.classList.remove('open');

        // Trigger i18n language change if available
        if (typeof window.setLanguage === 'function') {
          window.setLanguage(lang);
        }
      });
    });
  }

  // ─── Screenshot Lightbox ───────────────────────────────────────────────
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightbox-img');
  var lightboxCaption = document.getElementById('lightbox-caption');
  var lightboxCounter = document.getElementById('lightbox-counter');
  var screenshots = document.querySelectorAll('.screenshot[data-lightbox]');
  var currentIndex = 0;

  function openLightbox(index) {
    if (!lightbox || !screenshots.length) return;
    currentIndex = index;
    var shot = screenshots[index];
    var img = shot.querySelector('.screenshot__img');
    var caption = shot.querySelector('.screenshot__caption');

    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightboxCaption.textContent = caption ? caption.textContent : '';
    lightboxCounter.textContent = 'Evidence ' + (index + 1) + ' of ' + screenshots.length;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  function navigateLightbox(delta) {
    var next = (currentIndex + delta + screenshots.length) % screenshots.length;
    openLightbox(next);
  }

  screenshots.forEach(function (shot, i) {
    shot.addEventListener('click', function () { openLightbox(i); });
  });

  if (lightbox) {
    lightbox.querySelector('.lightbox__close').addEventListener('click', closeLightbox);
    lightbox.querySelector('.lightbox__prev').addEventListener('click', function () { navigateLightbox(-1); });
    lightbox.querySelector('.lightbox__next').addEventListener('click', function () { navigateLightbox(1); });

    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', function (e) {
      if (!lightbox.classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigateLightbox(-1);
      if (e.key === 'ArrowRight') navigateLightbox(1);
    });
  }

  // ─── Dust Particle System (Hero Canvas) ────────────────────────────────
  if (!prefersReducedMotion) {
    const canvas = document.getElementById('hero-particles');
    if (canvas && heroSection) {
      initParticles(canvas, heroSection);
    }
  }

  function initParticles(canvas, container) {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    var particles = [];
    var isVisible = true;
    var animFrameId = null;
    var PARTICLE_COUNT = 35;

    function resize() {
      var rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    }

    function createParticle() {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: -(Math.random() * 0.4 + 0.1),
        opacity: Math.random() * 0.2 + 0.05,
        wobbleSpeed: Math.random() * 0.02 + 0.005,
        wobbleAmp: Math.random() * 0.5 + 0.2,
        phase: Math.random() * Math.PI * 2,
        life: 0,
        maxLife: Math.random() * 600 + 300
      };
    }

    function init() {
      particles = [];
      for (var i = 0; i < PARTICLE_COUNT; i++) {
        var p = createParticle();
        p.life = Math.random() * p.maxLife;
        particles.push(p);
      }
    }

    function update() {
      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        p.life++;
        p.phase += p.wobbleSpeed;
        p.x += p.speedX + Math.sin(p.phase) * p.wobbleAmp;
        p.y += p.speedY;

        if (p.life > p.maxLife || p.y < -10 || p.x < -10 || p.x > canvas.width + 10) {
          particles[i] = createParticle();
          particles[i].y = canvas.height + 10;
        }
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        var fadeIn = Math.min(p.life / 60, 1);
        var fadeOut = Math.min((p.maxLife - p.life) / 60, 1);
        var alpha = p.opacity * fadeIn * fadeOut;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 242, 204, ' + alpha + ')';
        ctx.fill();
      }
    }

    function loop() {
      if (!isVisible) {
        animFrameId = null;
        return;
      }
      update();
      draw();
      animFrameId = requestAnimationFrame(loop);
    }

    // Visibility observer — pause when hero not visible
    var visObserver = new IntersectionObserver(function (entries) {
      isVisible = entries[0].isIntersecting;
      if (isVisible && !animFrameId) {
        animFrameId = requestAnimationFrame(loop);
      }
    }, { threshold: 0.1 });

    visObserver.observe(container);

    // Init
    resize();
    init();
    window.addEventListener('resize', function () {
      resize();
      init();
    });

    if (isVisible) {
      animFrameId = requestAnimationFrame(loop);
    }
  }

})();
