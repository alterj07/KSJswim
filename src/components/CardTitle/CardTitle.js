/**
 * CardTitle Component
 * Generates reusable card components with icon, title, and description
 */
export function createCard({ icon, title, description, variant = 'default', ctaLink = null, ctaText = null }) {
  const variantClass = variant ? `card-v-${variant}` : '';
  
  const card = document.createElement('div');
  card.className = `col-md-6`;
  
  const cardBody = `
    <div class="card h-100 ${variantClass}">
      <div class="card-body">
        ${icon ? `<span class="card-icon" aria-hidden="true">${icon}</span>` : ''}
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${description}</p>
        ${ctaLink && ctaText ? `<a href="${ctaLink}" class="ksj-card-cta-btn">${ctaText}</a>` : ''}
      </div>
    </div>
  `;
  
  card.innerHTML = cardBody;
  return card;
}

/**
 * Render multiple cards to a container
 */
export function renderCards(containerId, cardsData) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container with id "${containerId}" not found`);
    return;
  }
  
  cardsData.forEach(cardData => {
    const card = createCard(cardData);
    container.appendChild(card);
  });
}
