import { getAll } from '../api/data.js';
import { html } from '../lib.js';

export async function catalogView(ctx) {

  const allCards = await getAll();
  ctx.render(catalogTemplate(allCards));

};

const catalogTemplate = (allCards) => html` <section id="dashboard">
<h2>Job Offers</h2>

<!-- Display a div with information about every post (if any)-->
${allCards.length == 0 ? html`<h2>No offers yet.</h2>`: allCards.map(c => cardTemplate(c))}


<!-- Display an h2 if there are no posts -->

</section>
`;

const cardTemplate = (card) => html`
<div class="offer">
<img src=${card.imageUrl} alt=${card.imageUrl} />
<p>
  <strong>Title: </strong
  ><span class="title">${card.title}</span>
</p>
<p><strong>Salary:</strong><span class="salary">${card.salary}</span></p>
<a class="details-btn" href="/catalog/${card._id}">Details</a>
</div>
`;

// export async function catalogView(ctx) {
//     const allCards = await getAll();
//     console.log(allCards.length);
//     ctx.render(catalogTemplate(allCards));
    
// };

// const catalogTemplate = (allCards) => html`<section id="dashboard">
// <h2>Collectibles</h2>
// <ul class="card-wrapper">
// ${allCards.length == 0 ? html`<h2>There are no items added yet.</h2>`: allCards.map(c => cardTemplate(c))}
// </ul>
// </section>
// `;

// const cardTemplate = (card) => html`<li class="card">
// <img src=${card.imageUrl} alt="travis" />
// <p>
//   <strong>Brand: </strong><span class="brand">${card.brand}</span>
// </p>
// <p>
//   <strong>Model: </strong
//   ><span class="model">${card.model}</span>
// </p>
// <p><strong>Value:</strong><span class="value">${card.value}</span>$</p>
// <a class="details-btn" href="/catalog/${card._id}">Details</a>
// </li>
// `;

