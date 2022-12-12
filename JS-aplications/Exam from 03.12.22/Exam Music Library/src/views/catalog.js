import { getAll } from '../api/data.js';
import { html } from '../lib.js';

export async function catalogView(ctx) {

  const allCards = await getAll();
  ctx.render(catalogTemplate(allCards));

};
const catalogTemplate=(allCards)=>html`<section id="dashboard">
<h2>Albums</h2>
<ul class="card-wrapper">

${allCards.length ==0 ? html`<h2>There are no albums added yet.</h2>`: html`${allCards.map(c=>cardTemplate(c))}`}
</ul>
</section>
`;

const cardTemplate =(card)=>html`
<li class="card">
<img src=${card.imageUrl} alt="travis" />
<p>
  <strong>Singer/Band: </strong><span class="singer">${card.singer}</span>
</p>
<p>
  <strong>Album name: </strong><span class="album">${card.album}</span>
</p>
<p><strong>Sales:</strong><span class="sales">${card.sales}</span></p>
<a class="details-btn" href="/catalog/${card._id}">Details</a>
</li>
`;
