/* ============================================
   MISS MÉLANIE — api/_data.js
   Copie côté serveur (CommonJS) des prix du forfait 10 cours.
   Ne JAMAIS faire confiance à un prix envoyé par le client — le serveur
   recalcule toujours le montant à partir du serviceId reçu.

   IMPORTANT : garder ce fichier synchronisé avec js/data.js (SERVICES)
   à chaque changement de prix. js/data.js reste la référence pour l'affichage
   côté client ; ce fichier est la référence pour la facturation Stripe.
   ============================================ */

const SERVICES = [
  { id: 'english-5-9', nameFr: 'Anglais — 5 à 9 ans', nameEn: 'English — Ages 5–9', package10Price: 45000 },
  { id: 'english-10-16', nameFr: 'Anglais — 10 à 16 ans', nameEn: 'English — Ages 10–16', package10Price: 55000 },
  { id: 'exam-prep-10-16', nameFr: 'Préparation aux examens — 10 à 16 ans', nameEn: 'Exam Prep — Ages 10–16', package10Price: 60000 },
  { id: 'conversation-confidence-5-9', nameFr: 'Conversation et confiance — 5 à 9 ans', nameEn: 'Conversation & Confidence — Ages 5–9', package10Price: 45000 },
  { id: 'conversation-confidence-10-16', nameFr: 'Conversation et confiance — 10 à 16 ans', nameEn: 'Conversation & Confidence — Ages 10–16', package10Price: 45000 },
  { id: 'stem-club-5-9', nameFr: 'Club STIM — 5 à 9 ans', nameEn: 'STEM Club — Ages 5–9', package10Price: 40000 },
  { id: 'stem-club-10-16', nameFr: 'Club STIM — 10 à 16 ans', nameEn: 'STEM Club — Ages 10–16', package10Price: 50000 },
  { id: 'book-club-5-9', nameFr: 'Club de lecture — 5 à 9 ans', nameEn: 'Book Club — Ages 5–9', package10Price: 40000 },
  { id: 'book-club-10-16', nameFr: 'Club de lecture — 10 à 16 ans', nameEn: 'Book Club — Ages 10–16', package10Price: 50000 },
  { id: 'creative-writing-10-16', nameFr: 'Écriture créative — 10 à 16 ans', nameEn: 'Creative Writing — Ages 10–16', package10Price: 50000 },
  { id: 'storytime-art-5-9', nameFr: 'Club conte et art — 4 à 9 ans', nameEn: 'Storytime Art Club — Ages 4–9', package10Price: 40000 },
  { id: 'homeschool-support-parents', nameFr: 'Soutien école-maison (parents)', nameEn: 'Homeschool Support (Parents)', package10Price: 55000 },
  { id: 'homeschool-social-5-9', nameFr: 'Club social école-maison — 5 à 9 ans', nameEn: 'Homeschool Social Club — Ages 5–9', package10Price: 40000 },
  { id: 'homeschool-social-10-16', nameFr: 'Club social école-maison — 10 à 16 ans', nameEn: 'Homeschool Social Club — Ages 10–16', package10Price: 50000 },
  { id: 'discovery-session', nameFr: 'Séance découverte', nameEn: 'Discovery Session', package10Price: null },
];

// Toggle taxes — désactivé tant que Melanie n'a pas consulté un comptable.
const TAX_CONFIG = {
  enabled: false,
  tps: 0.05,
  tvq: 0.09975,
  exemptServices: [],
};

module.exports = { SERVICES, TAX_CONFIG };
