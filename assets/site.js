/* Eleicao.vip — shared behavior: scroll reveal, countdown, form */
(function () {
  'use strict';

  /* ---- Reveal on scroll ---- */
  function initReveal() {
    var els = document.querySelectorAll('[data-reveal]');
    function reveal(e) { e.classList.add('in'); }

    // Reveal anything already within (or near) the viewport immediately.
    function revealVisible() {
      var vh = window.innerHeight || document.documentElement.clientHeight;
      els.forEach(function (e) {
        if (e.classList.contains('in')) return;
        var r = e.getBoundingClientRect();
        if (r.top < vh * 1.05 && r.bottom > 0) reveal(e);
      });
    }

    if (!('IntersectionObserver' in window)) {
      els.forEach(reveal);
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { reveal(en.target); io.unobserve(en.target); }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -6% 0px' });
    els.forEach(function (e) { io.observe(e); });

    // Lock the final state on elements that should be visible, so content
    // can never stay stuck if the host iframe throttles CSS transitions.
    function forceInView() {
      var vh = window.innerHeight || document.documentElement.clientHeight;
      els.forEach(function (e) {
        var r = e.getBoundingClientRect();
        if (r.top < vh * 1.05 && r.bottom > 0) e.classList.add('force');
      });
    }

    revealVisible();
    requestAnimationFrame(revealVisible);
    window.addEventListener('scroll', function () {
      revealVisible();
      setTimeout(forceInView, 700);
    }, { passive: true });
    setTimeout(forceInView, 900);                              // above-the-fold safety
    setTimeout(function () { els.forEach(function (e) { e.classList.add('force'); }); }, 1700); // full safety net
  }

  /* ---- Countdown to election day ---- */
  function initCountdown() {
    var root = document.querySelector('[data-countdown]');
    if (!root) return;
    var TARGET = new Date('2026-10-04T08:00:00-03:00').getTime();
    var dEl = root.querySelector('[data-d]');
    var hEl = root.querySelector('[data-h]');
    var mEl = root.querySelector('[data-m]');
    function pad(n) { return String(n).padStart(2, '0'); }
    function tick() {
      var diff = Math.max(TARGET - Date.now(), 0);
      var d = Math.floor(diff / 86400000);
      var h = Math.floor((diff / 3600000) % 24);
      var m = Math.floor((diff / 60000) % 60);
      if (dEl) dEl.textContent = pad(d);
      if (hEl) hEl.textContent = pad(h);
      if (mEl) mEl.textContent = pad(m);
    }
    tick();
    setInterval(tick, 1000);
  }

  /* ---- Lead form (internal page) ---- */
  function initForm() {
    var form = document.querySelector('[data-lead-form]');
    if (!form) return;
    var ok = form.querySelector('[data-form-success]');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var valid = true;
      form.querySelectorAll('[required]').forEach(function (f) {
        var bad = !String(f.value || '').trim();
        f.classList.toggle('ring-2', bad);
        f.classList.toggle('ring-red-400', bad);
        if (bad) valid = false;
      });
      if (!valid) return;
      form.querySelector('[data-form-fields]').style.display = 'none';
      if (ok) ok.style.display = 'flex';
    });
    form.querySelectorAll('input,select,textarea').forEach(function (f) {
      f.addEventListener('input', function () {
        f.classList.remove('ring-2', 'ring-red-400');
      });
    });
  }

  /* ---- Nav shadow on scroll ---- */
  function initNav() {
    var nav = document.querySelector('[data-nav]');
    if (!nav) return;
    function onScroll() {
      if (window.scrollY > 12) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---- Animated count-up for metric numbers ---- */
  function initCounters() {
    var nums = document.querySelectorAll('[data-count]');
    if (!nums.length) return;

    function format(el, val) {
      var dec = parseInt(el.getAttribute('data-decimals') || '0', 10);
      var s = dec ? val.toFixed(dec).replace('.', ',') : String(Math.round(val));
      return (el.getAttribute('data-prefix') || '') + s + (el.getAttribute('data-suffix') || '');
    }
    function run(el) {
      if (el.__counted) return;
      el.__counted = true;
      var target = parseFloat(el.getAttribute('data-count'));
      var dur = 1400, start = performance.now();
      (function step(now) {
        var p = Math.min((now - start) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = format(el, target * eased);
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = format(el, target);
      })(start);
    }

    nums.forEach(function (el) { el.textContent = format(el, 0); });

    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) { run(e.target); io.unobserve(e.target); } });
      }, { threshold: 0.3 });
      nums.forEach(function (el) { io.observe(el); });
      var vh = window.innerHeight || document.documentElement.clientHeight;
      nums.forEach(function (el) { if (el.getBoundingClientRect().top < vh) run(el); });
    }
    // Failsafe: guarantee final values are shown even if rAF/IO is throttled.
    setTimeout(function () {
      nums.forEach(function (el) {
        el.__counted = true;
        el.textContent = format(el, parseFloat(el.getAttribute('data-count')));
      });
    }, 1900);
  }

  function init() {
    initReveal();
    initCountdown();
    initCounters();
    initForm();
    initNav();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
