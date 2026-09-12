/* ============================================
   MISS MÉLANIE — middleware.js
   Vercel Edge Middleware — protège /admin par authentification HTTP Basic,
   vérifiée AVANT que le HTML ne soit servi (pas de contournement possible
   en lisant le code source, contrairement à une protection en JS client).

   Configuration requise sur Vercel (Project Settings → Environment Variables) :
     ADMIN_USERNAME = choisir un identifiant
     ADMIN_PASSWORD = choisir un mot de passe fort

   Tant que ces variables ne sont pas définies, l'accès reste bloqué pour
   tout le monde (échec sécurisé par défaut) — aucun mot de passe en dur
   dans le code.
   ============================================ */

import { next } from '@vercel/edge';

export const config = {
  matcher: ['/admin', '/admin/:path*'],
};

// Comparaison à temps constant pour éviter les attaques par mesure de timing.
function safeEqual(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string' || a.length !== b.length) return false;
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
}

export default function middleware(request) {
  const expectedUser = process.env.ADMIN_USERNAME;
  const expectedPass = process.env.ADMIN_PASSWORD;

  const authHeader = request.headers.get('authorization');

  if (authHeader && expectedUser && expectedPass) {
    const [scheme, encoded] = authHeader.split(' ');
    if (scheme === 'Basic' && encoded) {
      let decoded = '';
      try {
        decoded = atob(encoded);
      } catch (e) {
        decoded = '';
      }
      const sep = decoded.indexOf(':');
      const user = sep >= 0 ? decoded.slice(0, sep) : '';
      const pass = sep >= 0 ? decoded.slice(sep + 1) : '';

      if (safeEqual(user, expectedUser) && safeEqual(pass, expectedPass)) {
        return next();
      }
    }
  }

  return new Response('Authentification requise / Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Miss Melanie — Admin", charset="UTF-8"',
      'Cache-Control': 'no-store',
    },
  });
}
