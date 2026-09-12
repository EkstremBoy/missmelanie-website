/* ============================================
   MISS MÉLANIE — api/admin-gate.js
   Vercel Serverless Function (Node.js) — protège /admin par authentification
   HTTP Basic, vérifiée AVANT que le HTML ne soit servi. Câblé via les
   "rewrites" de vercel.json : toute requête /admin ou /admin/* passe par
   cette fonction, qui ne renvoie le HTML correspondant (depuis
   _admin-content.js, un simple require() — pas de lecture de fichiers ni
   de bundling spécial) que si les identifiants sont valides.

   Configuration requise sur Vercel (Project Settings → Environment Variables) :
     ADMIN_USERNAME = choisir un identifiant
     ADMIN_PASSWORD = choisir un mot de passe fort

   Tant que ces variables ne sont pas définies, l'accès reste bloqué pour
   tout le monde (échec sécurisé par défaut) — aucun mot de passe en dur
   dans le code.
   ============================================ */

const pages = require('./_admin-content');

// Comparaison à temps constant pour éviter les attaques par mesure de timing.
function safeEqual(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string' || a.length !== b.length) return false;
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
}

function isAuthorized(req) {
  const expectedUser = process.env.ADMIN_USERNAME;
  const expectedPass = process.env.ADMIN_PASSWORD;
  if (!expectedUser || !expectedPass) return false;

  const authHeader = req.headers['authorization'];
  if (!authHeader) return false;

  const [scheme, encoded] = authHeader.split(' ');
  if (scheme !== 'Basic' || !encoded) return false;

  let decoded = '';
  try {
    decoded = Buffer.from(encoded, 'base64').toString('utf8');
  } catch (e) {
    return false;
  }

  const sep = decoded.indexOf(':');
  const user = sep >= 0 ? decoded.slice(0, sep) : '';
  const pass = sep >= 0 ? decoded.slice(sep + 1) : '';

  return safeEqual(user, expectedUser) && safeEqual(pass, expectedPass);
}

module.exports = (req, res) => {
  try {
    if (!isAuthorized(req)) {
      res.setHeader('WWW-Authenticate', 'Basic realm="Miss Melanie - Admin", charset="UTF-8"');
      res.setHeader('Cache-Control', 'no-store');
      res.status(401).send('Authentification requise / Authentication required');
      return;
    }

    let requested = req.query.path;
    if (Array.isArray(requested)) requested = requested.join('/');
    if (!requested) requested = 'index.html';

    const html = pages[requested];
    if (!html) {
      res.status(404).send('Page introuvable');
      return;
    }

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'no-store');
    res.status(200).send(html);
  } catch (err) {
    res.status(500).send('DEBUG ERROR: ' + (err && err.stack ? err.stack : String(err)));
  }
};
