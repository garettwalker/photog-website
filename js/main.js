/**
 * Abiding Light Studio - Main JavaScript
 * Subtle, natural interactions for a warm photography portfolio
 */

(function() {
  'use strict';

  /* =======================================================================
     MOBILE NAVIGATION TOGGLE
     ======================================================================= */
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      menuToggle.classList.toggle('active', isOpen);
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* =======================================================================
     HEADER SCROLL STATE - Adds subtle background on scroll
     ======================================================================= */
  const siteHeader = document.getElementById('siteHeader');

  function updateHeader() {
    if (siteHeader) {
      siteHeader.classList.toggle('scrolled', window.scrollY > 24);
    }
  }

  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  /* =======================================================================
     SOFT FADE-IN REVEAL ANIMATION
     Elements with .reveal class fade in as they enter viewport
     ======================================================================= */
  const revealElements = document.querySelectorAll('.reveal');

  if (revealElements.length) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.14,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach((element) => revealObserver.observe(element));
  }

  /* =======================================================================
     CONTACT FORM HANDLER
     Visual demo - connect to Formspree, Netlify Forms, or your backend
     ======================================================================= */
  const inquiryForm = document.getElementById('inquiryForm');
  const formNote = document.getElementById('formNote');

  if (inquiryForm && formNote) {
    inquiryForm.addEventListener('submit', (event) => {
      event.preventDefault();
      formNote.textContent = 'Thank you. This demo form is working visually. Connect it to a form service before publishing.';
      inquiryForm.reset();
    });
  }

  /* =======================================================================
     FOOTER YEAR - Auto-updates copyright year
     ======================================================================= */
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

})();
