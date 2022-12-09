import { getAll } from '../api/data.js';
import { html } from '../lib.js';

export async function catalogView(ctx) {
    const allCards = await getAll();
    console.log(allCards.length);
    ctx.render(catalogTemplate(allCards));
    
};

const catalogTemplate = (allCards) => html`<section id="dashboard">
<h2>Collectibles</h2>
<ul class="card-wrapper">
${allCards.length == 0 ? html`<h2>There are no items added yet.</h2>`: allCards.map(c => cardTemplate(c))}
</ul>
</section>
`;

const cardTemplate = (card) => html`<li class="card">
<img src=${card.imageUrl} alt="travis" />
<p>
  <strong>Brand: </strong><span class="brand">${card.brand}</span>
</p>
<p>
  <strong>Model: </strong
  ><span class="model">${card.model}</span>
</p>
<p><strong>Value:</strong><span class="value">${card.value}</span>$</p>
<a class="details-btn" href="/catalog/${card._id}">Details</a>
</li>
`;

