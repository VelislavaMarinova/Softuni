import { getAll } from '../api/data.js';
import { html } from '../lib.js';

export async function catalogView(ctx) {

  const allCards = await getAll();
  ctx.render(catalogTemplate(allCards));

};
const catalogTemplate=(allCards)=>html` <section id="catalog-page">
<h1>All Games</h1>
${allCards.length == 0 ? html`<h3 class="no-articles">No articles yet</h3>` : allCards.map(c=>cardTemplate(c))}
</section>
`;

const cardTemplate =(card)=>html`<div class="allGames">
<div class="allGames-info">
    <img src=${card.imageUrl}>
    <h6>${card.category}</h6>
    <h2>${card.title}</h2>
    <a href="/catalog/${card._id}" class="details-button">Details</a>
</div>
</div>
`;
