/* ============================================
   MISS MÉLANIE — stripe.js
   Déclenche Stripe Checkout (hébergé) pour le forfait 10 cours.
   Cours à la pièce non offerts — seulement essai puis forfait 10 cours.
   ============================================ */

async function checkout(serviceId, packageType, buttonEl) {
  if (packageType !== 'package10') {
    console.error('checkout() supporte seulement "package10" pour le moment.');
    return;
  }

  const service = typeof getServiceById === 'function' ? getServiceById(serviceId) : null;
  if (!service || !service.package10Price) {
    alert('Ce service n\'offre pas de forfait 10 cours pour le moment.');
    return;
  }

  const button = buttonEl || null;
  const originalText = button ? button.textContent : null;
  if (button) {
    button.disabled = true;
    button.textContent = '...';
  }

  try {
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ serviceId, packageType }),
    });

    if (!response.ok) {
      throw new Error(`Checkout session failed: ${response.status}`);
    }

    const { url } = await response.json();
    window.location = url;
  } catch (err) {
    console.error(err);
    alert('Une erreur est survenue. Veuillez réessayer ou nous écrire à admin@missmelanie.online.');
    if (button) {
      button.disabled = false;
      button.textContent = originalText;
    }
  }
}
