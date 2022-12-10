import { getAll } from '../api/data.js';
import { html } from '../lib.js';


export async function catalogView(ctx) {

  const allCards = await getAll();
  ctx.render(catalogTemplate(allCards));

};

const catalogTemplate = (allCards) => html`<section id="dashboard-page">
<h1 class="title">All Posts</h1>

<!-- Display a div with information about every post (if any)-->
${allCards.length == 0 ?
html`<h1 class="title no-posts-title">No posts yet!</h1></section>` : 
html`<div class="all-posts">${allCards.map(c=>cardTemplate(c))}    
</div>`}
</section>
`;

const cardTemplate = (card) => html`
<div class="post">
        <h2 class="post-title">${card.title}</h2>
        <img class="post-image" src=${card.imageUrl} alt="Kids clothes">
        <div class="btn-wrapper">
            <a href="/catalog/${card._id}" class="details-btn btn">Details</a>
        </div>
    </div>
`;

