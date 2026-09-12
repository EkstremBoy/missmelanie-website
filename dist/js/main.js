/* ============================================
   MISS MÉLANIE — main.js
   Interactions générales : nav sticky, menu mobile, modal tech support
   ============================================ */

(function () {
  const header = document.querySelector('.site-header');
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

  // Nav — shadow au scroll
  if (header) {
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Menu mobile — hamburger fullscreen
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    mobileMenu.querySelectorAll('a, button').forEach((el) => {
      el.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }
})();

/* ---------- Modal support technique (contact.html) ---------- */
function openTechModal() {
  const modal = document.getElementById('tech-modal');
  if (modal) modal.classList.add('open');
}

function closeTechModal() {
  const modal = document.getElementById('tech-modal');
  if (modal) modal.classList.remove('open');
}

document.addEventListener('click', (e) => {
  const overlay = document.querySelector('.modal-overlay.open');
  if (overlay && e.target === overlay) {
    overlay.classList.remove('open');
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const overlay = document.querySelector('.modal-overlay.open');
    if (overlay) overlay.classList.remove('open');
  }
});
