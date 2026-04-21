// EMBA Famulus — main.js
// All interactive behavior. Authoritative interaction spec:
// docs/superpowers/specs/2026-04-21-emba-famulus-landing-design.md §7

(() => {
  'use strict';

  // --- Nav: sticky blur on scroll ---
  const nav = document.getElementById('site-nav');
  const onScroll = () => {
    if (window.scrollY > 24) {
      nav.classList.add('bg-navy-900/90', 'backdrop-blur', 'border-b', 'border-line');
    } else {
      nav.classList.remove('bg-navy-900/90', 'backdrop-blur', 'border-b', 'border-line');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // --- Nav: mobile toggle ---
  const toggle = document.getElementById('nav-toggle');
  const mobile = document.getElementById('nav-mobile');
  toggle.addEventListener('click', () => {
    const isOpen = !mobile.classList.contains('hidden');
    mobile.classList.toggle('hidden');
    toggle.setAttribute('aria-expanded', String(!isOpen));
  });
  // Close mobile menu on anchor click
  mobile.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    mobile.classList.add('hidden');
    toggle.setAttribute('aria-expanded', 'false');
  }));
})();
