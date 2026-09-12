/* ============================================
   MISS MÉLANIE — services.js
   Génère les cards de service à partir de js/data.js (source unique de prix).
   Seulement chargé sur services.html.
   ============================================ */

const MODE_LABEL = {
  online: { fr: 'En ligne', en: 'Online' },
  'in-person': { fr: 'Présentiel', en: 'In-person' },
};

// Construit le HTML d'un bloc de contenu détaillé (tagline, intro, liste, extra, objectif, avis légal)
function renderDetailsContent(d, lang) {
  if (!d) return '';
  const goalLabel = lang === 'fr' ? 'Objectif :' : 'The goal:';
  let html = '';
  if (d.tagline) html += `<p class="details-tagline">${d.tagline}</p>`;
  if (d.intro) html += `<p>${d.intro}</p>`;
  if (d.list && d.list.length) {
    html += d.listTitle ? `<p class="details-list-title">${d.listTitle}</p>` : '';
    html += `<ul class="details-list">${d.list.map((item) => `<li>${item}</li>`).join('')}</ul>`;
  }
  if (d.extra) html += `<p>${d.extra}</p>`;
  if (d.goal) html += `<p class="details-goal"><strong>${goalLabel}</strong> ${d.goal}</p>`;
  if (d.disclaimer) html += `<p class="details-disclaimer">${d.disclaimer}</p>`;
  return html;
}

// Pour les cours avec niveaux (Anglais) : intro générale + un bloc par niveau
function renderLeveledDetails(s, lang) {
  const familyIntro = lang === 'fr' ? s.familyIntroFr : s.familyIntroEn;
  const blocks = s.levels.map((level) => {
    const label = lang === 'fr' ? level.labelFr : level.labelEn;
    const d = level.details[lang];
    return `
      <div class="level-detail-block">
        <p class="level-detail-heading">${level.icon} ${label}</p>
        ${renderDetailsContent(d, lang)}
      </div>
    `;
  }).join('');
  return `${familyIntro ? `<p>${familyIntro}</p>` : ''}${blocks}`;
}

function renderServices() {
  const grid = document.getElementById('services-grid');
  if (!grid) return;

  const lang = localStorage.getItem('lang') || 'fr';

  grid.innerHTML = SERVICES.map((s) => {
    const name = lang === 'fr' ? s.nameFr : s.nameEn;
    const description = lang === 'fr' ? s.descriptionFr : s.descriptionEn;
    const modeLabel = MODE_LABEL[s.mode][lang];
    const trialLabel = lang === 'fr' ? 'Cours d\'essai' : 'Trial class';
    const trialPriceLabel = formatPriceCAD(s.trialPrice);
    const perClass = s.package10Price ? formatPriceCAD(s.package10Price / 10) : null;
    const perClassSuffix = lang === 'fr' ? '/cours' : '/class';
    const packageTotal = s.package10Price ? formatPriceCAD(s.package10Price) : null;
    const packageLabel = lang === 'fr' ? 'Forfait 10 cours' : '10-class package';
    const trialBtnLabel = lang === 'fr' ? 'Réserver l\'essai' : 'Book trial';
    const packageBtnLabel = lang === 'fr' ? 'Acheter le forfait' : 'Buy the package';
    const popularLabel = lang === 'fr' ? 'POPULAIRE' : 'POPULAR';
    const groupLabel = lang === 'fr' ? 'Cours de groupe uniquement' : 'Group class only';
    const toggleMoreLabel = lang === 'fr' ? 'En savoir plus' : 'Learn more';
    const toggleLessLabel = lang === 'fr' ? 'Voir moins' : 'Show less';
    const noPackageLabel = lang === 'fr'
      ? 'Séance d\'introduction seulement — pas de forfait'
      : 'Introductory session only — no package';

    const detailsHtml = s.hasLevels
      ? renderLeveledDetails(s, lang)
      : renderDetailsContent(s.details && s.details[lang], lang);

    const levelsNoteHtml = s.hasLevels ? `
      <div class="levels-note">🎚️ ${lang === 'fr'
        ? `${s.levels.map((lvl) => lvl.labelFr).join(' · ')} — niveau établi au cours d'essai`
        : `${s.levels.map((lvl) => lvl.labelEn).join(' · ')} — level set during the trial class`}</div>
    ` : '';

    return `
      <article class="service-card" data-service-card data-age="${s.ageGroup}" data-mode="${s.mode}" data-club="${s.isClub}">
        ${s.popular ? `<span class="badge-popular">${popularLabel}</span>` : ''}
        <div class="service-badges">
          <span class="badge-trial">🎯 ${trialLabel}</span>
          ${s.isClub ? `<span class="badge-group">👥 ${groupLabel}</span>` : ''}
        </div>
        <h3>${name}</h3>
        <p class="service-meta">${s.duration} min · ${modeLabel}</p>
        <p class="service-description">${description}</p>
        <button type="button" class="service-toggle" data-more="${toggleMoreLabel}" data-less="${toggleLessLabel}">
          ${toggleMoreLabel} <span class="service-toggle-arrow">▾</span>
        </button>
        <div class="service-details">${detailsHtml}</div>
        ${levelsNoteHtml}
        <div class="service-footer">
          <div class="service-prices">
            <div class="price-row">
              <span>${trialLabel}</span>
              <strong>${trialPriceLabel}</strong>
            </div>
            ${s.package10Price ? `
              <div class="price-row package10">
                <span>${packageLabel}</span>
                <strong>${perClass}${perClassSuffix}</strong>
              </div>
            ` : `<div class="price-row"><span>${noPackageLabel}</span></div>`}
          </div>
          <a href="${BOOKING_LINKS.trial}" class="btn-secondary btn-block">${trialBtnLabel}</a>
          ${s.package10Price
            ? `<button class="btn-primary btn-block" onclick="checkout('${s.id}', 'package10', this)">${packageBtnLabel} — ${packageTotal}</button>`
            : `<button class="btn-primary btn-block" style="visibility:hidden" tabindex="-1" aria-hidden="true">${packageBtnLabel}</button>`}
        </div>
      </article>
    `;
  }).join('');
}

/* ---------- Filtres services (par âge / mode / clubs) ---------- */
function initServiceFilters() {
  // [data-filter] exclut le lien "Ateliers en garderie" (même style, mais c'est
  // une simple ancre vers #workshops, pas un filtre de la grille de cours)
  const buttons = document.querySelectorAll('.filter-btn[data-filter]');
  if (!buttons.length) return;

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      buttons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;

      document.querySelectorAll('[data-service-card]').forEach((card) => {
        const matches =
          filter === 'all' ||
          card.dataset.age === filter ||
          card.dataset.mode === filter ||
          (filter === 'clubs' && card.dataset.club === 'true');
        card.style.display = matches ? '' : 'none';
      });
    });
  });
}

// Lit ?age=5-9 dans l'URL (venant des cards de l'accueil) pour pré-filtrer la page
function applyUrlTarget() {
  const params = new URLSearchParams(window.location.search);
  const age = params.get('age');
  if (!age) return;
  const btn = document.querySelector(`.filter-btn[data-filter="${age}"]`);
  if (btn) btn.click();
}

/* ---------- Toggle "En savoir plus" (délégué — survit aux re-rendus) ---------- */
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.service-toggle');
  if (!btn) return;
  const details = btn.nextElementSibling;
  const isOpen = details.classList.toggle('open');
  btn.classList.toggle('open', isOpen);
  btn.firstChild.textContent = (isOpen ? btn.dataset.less : btn.dataset.more) + ' ';
});

/* ---------- Ateliers en garderie (DAYCARE_WORKSHOPS) ---------- */
function renderWorkshops() {
  const introEl = document.getElementById('workshops-intro');
  const gridEl = document.getElementById('workshops-grid');
  const flexEl = document.getElementById('workshops-flexibility');
  if (!introEl || !gridEl || !flexEl) return;

  const lang = localStorage.getItem('lang') || 'fr';
  const d = DAYCARE_WORKSHOPS;

  introEl.textContent = d.intro[lang];

  gridEl.innerHTML = d.items.map((w) => `
    <div class="workshop-card">
      <div class="workshop-icon">${w.icon}</div>
      <h3>${lang === 'fr' ? w.nameFr : w.nameEn}</h3>
      <p class="workshop-tagline">${w.tagline[lang]}</p>
      <p class="workshop-description">${w.description[lang]}</p>
    </div>
  `).join('');

  const rate1 = formatPriceCAD(d.rates.hour1);
  const rate2 = formatPriceCAD(d.rates.hours2);
  const rateLabel1 = lang === 'fr' ? '1 heure' : '1 Hour';
  const rateLabel2 = lang === 'fr' ? '2 heures consécutives' : '2 Consecutive Hours';
  const perHourNote = lang === 'fr' ? '(100 $/heure)' : '($100/hour)';
  const contactBtnLabel = lang === 'fr' ? 'Nous contacter pour réserver' : 'Contact us to book';

  flexEl.innerHTML = `
    <h3 style="margin-bottom:8px;">${lang === 'fr' ? d.flexibility.titleFr : d.flexibility.titleEn}</h3>
    <p>${d.flexibility.intro[lang]}</p>
    <ul class="details-list">${d.flexibility.list[lang].map((item) => `<li>${item}</li>`).join('')}</ul>
    <p>${d.flexibility.bookingNote[lang]}</p>
    <div class="workshop-rates">
      <div class="price-row"><span>${rateLabel1}</span><strong>${rate1}</strong></div>
      <div class="price-row package10"><span>${rateLabel2}</span><strong>${rate2} <span class="workshop-rate-note">${perHourNote}</span></strong></div>
    </div>
    <p style="font-size:13px; color:var(--text-mid);">${d.rateNote[lang]}</p>
    <p style="font-weight:700; color:var(--text-dark);">${d.closingLine[lang]}</p>
    <a href="contact.html" class="btn-primary" style="margin-top:12px;">${contactBtnLabel}</a>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  renderServices();
  initServiceFilters();
  applyUrlTarget();
  renderWorkshops();
});
document.addEventListener('langchange', () => {
  renderServices();
  renderWorkshops();
});
