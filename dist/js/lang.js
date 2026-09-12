/* ============================================
   MISS MÉLANIE — lang.js
   Système de traduction FR/EN — une page, deux langues, pas de redirect
   ============================================ */

let currentLang = localStorage.getItem('lang') || 'fr';

function applyLang() {
  // Éléments avec texte court traduit via data-fr / data-en
  document.querySelectorAll('[data-fr]').forEach((el) => {
    const value = el.dataset[currentLang];
    if (value === undefined) return;

    if (el.hasAttribute('data-attr')) {
      // Traduit un attribut (placeholder, aria-label, alt...) plutôt que le texte
      const attr = el.getAttribute('data-attr');
      el.setAttribute(attr, value);
    } else {
      // innerHTML plutôt que textContent : certains titres contiennent un
      // <span> d'accent (ex: "Un cours pour chaque <span>aventurier</span>").
      // Contenu 100% statique/interne — jamais de saisie utilisateur ici.
      el.innerHTML = value;
    }
  });

  // Blocs de contenu long — <div class="lang-fr"> / <div class="lang-en">
  document.querySelectorAll('.lang-fr').forEach((el) => {
    el.style.display = currentLang === 'fr' ? '' : 'none';
  });
  document.querySelectorAll('.lang-en').forEach((el) => {
    el.style.display = currentLang === 'en' ? '' : 'none';
  });

  document.documentElement.lang = currentLang;

  const toggleBtn = document.getElementById('lang-toggle');
  if (toggleBtn) {
    toggleBtn.textContent = currentLang === 'fr' ? 'EN' : 'FR';
  }

  document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: currentLang } }));
}

function toggleLang() {
  currentLang = currentLang === 'fr' ? 'en' : 'fr';
  localStorage.setItem('lang', currentLang);
  applyLang();
}

document.addEventListener('DOMContentLoaded', applyLang);
