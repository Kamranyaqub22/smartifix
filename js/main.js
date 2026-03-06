/* ============================================================
   SMARTIFIX — Main JavaScript
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Page Loader ---- */
  const loader = document.querySelector('.page-loader');
  if (loader) {
    window.addEventListener('load', () => {
      setTimeout(() => loader.classList.add('hidden'), 400);
    });
  }

  /* ---- Navbar Scroll ---- */
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    const handleScroll = () => {
      if (window.scrollY > 20) navbar.classList.add('scrolled');
      else navbar.classList.remove('scrolled');
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  /* ---- Mobile Menu ---- */
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ---- Active Nav Link ---- */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ---- FAQ Accordion ---- */
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  /* ---- Scroll Animations ---- */
  const animEls = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    animEls.forEach((el, i) => {
      el.style.transitionDelay = `${(i % 4) * 0.1}s`;
      io.observe(el);
    });
  } else {
    animEls.forEach(el => el.classList.add('visible'));
  }

  /* ---- Counter Animation ---- */
  const counters = document.querySelectorAll('[data-count]');
  if ('IntersectionObserver' in window) {
    const counterIO = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          animateCounter(e.target);
          counterIO.unobserve(e.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(c => counterIO.observe(c));
  }

  function animateCounter(el) {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    const duration = 1800;
    const start = performance.now();
    const isFloat = target % 1 !== 0;

    const step = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;
      el.textContent = prefix + (isFloat ? current.toFixed(1) : Math.floor(current)) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  /* ---- Back to Top ---- */
  const btt = document.querySelector('.back-to-top');
  if (btt) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) btt.classList.add('visible');
      else btt.classList.remove('visible');
    }, { passive: true });
    btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* ---- Contact Form — Formspree + WhatsApp fallback ---- */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('[type="submit"]');
      const origHTML = btn.innerHTML;
      btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:18px;height:18px;animation:spin 1s linear infinite"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4"/></svg> Sending…';
      btn.disabled = true;

      const formAction = contactForm.getAttribute('action');
      const successEl = document.getElementById('formSuccess');

      // Build WhatsApp message as fallback
      const fd = new FormData(contactForm);
      const wa = `Hi%20Smart%20iFix!%20Repair%20enquiry%3A%0AName%3A%20${encodeURIComponent(fd.get('name'))}%0APhone%3A%20${encodeURIComponent(fd.get('phone'))}%0ADevice%3A%20${encodeURIComponent(fd.get('device'))}%0AService%3A%20${encodeURIComponent(fd.get('service'))}%0AArea%3A%20${encodeURIComponent(fd.get('area') || 'Not given')}%0AMessage%3A%20${encodeURIComponent(fd.get('message'))}`;

      if (formAction && formAction.includes('formspree')) {
        // Real email via Formspree
        try {
          const res = await fetch(formAction, {
            method: 'POST',
            body: fd,
            headers: { 'Accept': 'application/json' }
          });
          if (res.ok) {
            contactForm.style.display = 'none';
            if (successEl) successEl.style.display = 'block';
          } else {
            throw new Error('Formspree error');
          }
        } catch {
          // Fallback to WhatsApp if Formspree fails
          window.open(`https://wa.me/447405119098?text=${wa}`, '_blank');
          btn.innerHTML = '✓ Sent to WhatsApp!';
          btn.style.background = 'linear-gradient(135deg, #25d366, #128c7e)';
          setTimeout(() => {
            btn.innerHTML = origHTML; btn.style.background = ''; btn.disabled = false;
          }, 4000);
        }
      } else {
        // WhatsApp-only mode (no Formspree set up yet)
        window.open(`https://wa.me/447405119098?text=${wa}`, '_blank');
        contactForm.style.display = 'none';
        if (successEl) successEl.style.display = 'block';
      }
    });
  }

  /* ---- Highlight today's hours ---- */
  const days = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
  const today = days[new Date().getDay()];
  const todayRow = document.querySelector(`.hours-row[data-day="${today}"]`);
  if (todayRow) todayRow.classList.add('today');

  /* ---- Smooth scroll anchor links ---- */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = navbar ? navbar.offsetHeight + 20 : 80;
        window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
      }
    });
  });

  /* ---- Announcement bar close ---- */
  const announcementClose = document.querySelector('.announcement-close');
  const announcementBar = document.querySelector('.announcement-bar');
  if (announcementClose && announcementBar) {
    announcementClose.addEventListener('click', () => {
      announcementBar.style.display = 'none';
      if (navbar) navbar.style.top = '0';
      const mobileMenuEl = document.querySelector('.mobile-menu');
      if (mobileMenuEl) mobileMenuEl.style.top = `var(--nav-height)`;
    });
  }

});
