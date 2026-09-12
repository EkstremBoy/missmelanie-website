/* ============================================
   MISS MÉLANIE — api/create-checkout-session.js
   Vercel Serverless Function (Node.js)
   Crée une session Stripe Checkout pour le forfait 10 cours UNIQUEMENT.
   Aucune vente à la pièce. Le prix est toujours recalculé côté serveur
   à partir du serviceId — jamais fait confiance à un prix venant du client.

   Variables d'environnement requises (Vercel → Settings → Environment Variables):
   STRIPE_SECRET_KEY, PUBLIC_SITE_URL (ex: https://missmelanie.online)
   ============================================ */

const Stripe = require('stripe');
const { SERVICES, TAX_CONFIG } = require('./_data');

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-06-20',
});

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { serviceId, packageType } = req.body || {};

    if (packageType !== 'package10') {
      return res.status(400).json({ error: 'Seul le forfait 10 cours est offert à l\'achat en ligne.' });
    }

    const service = SERVICES.find((s) => s.id === serviceId);
    if (!service || !service.package10Price) {
      return res.status(400).json({ error: 'Service invalide ou forfait non disponible pour ce cours.' });
    }

    const siteUrl = process.env.PUBLIC_SITE_URL || `https://${req.headers.host}`;

    // Taxes désactivées pour l'instant — TAX_CONFIG.enabled reste OFF
    // jusqu'à ce que Melanie ait consulté un comptable.
    const unitAmount = service.package10Price;

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      currency: 'cad',
      locale: 'auto',
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: 'cad',
            unit_amount: unitAmount,
            product_data: {
              name: `${service.nameFr} — Forfait 10 cours / 10-Class Package`,
            },
          },
        },
      ],
      metadata: {
        serviceId: service.id,
        packageType: 'package10',
        taxEnabled: String(TAX_CONFIG.enabled),
      },
      success_url: `${siteUrl}/success.html?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/cancel.html`,
    });

    // Note: le courriel de confirmation/reçu est envoyé automatiquement par
    // Stripe si "Email receipts" est activé dans Stripe Dashboard → Settings
    // → Customer emails. Checkout Sessions collecte déjà l'email du client.

    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error('Stripe checkout session error:', err);
    return res.status(500).json({ error: 'Impossible de créer la session de paiement.' });
  }
};
