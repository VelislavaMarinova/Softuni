import { getAll } from '../api/data.js';
import { html } from '../lib.js';


export async function catalogView(ctx) {

  const allCards = await getAll();
  ctx.render(catalogTemplate(allCards));

};
const catalogTemplate = (allCards) => html`
<h2>Products</h2>
<section id="dashboard">
${allCards.length==0 ? html`<h2>No products yet.</h2>`: html`${allCards.map(c=>cardTemplate(c))}`}
</section>
`;

const cardTemplate = (card) => html`
<div class="product">
<img src=${card.imageUrl} alt="example1" />
<p class="title">${card.name}</p>
<p><strong>Price:</strong><span class="price">${card.price}</span>$</p>
<a class="details-btn" href="/catalog/${card._id}">Details</a>
</div>
`;

