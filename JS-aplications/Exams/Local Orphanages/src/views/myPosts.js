import { getMy } from '../api/data.js';
import { html } from '../lib.js';
import { getUserData } from '../util.js';

export async function myPostsView(ctx){
    const userId = getUserData().id
    console.log(userId);
    const allMyCards= await getMy(userId);
    ctx.render(myPostsTemplate(allMyCards))
}

const myPostsTemplate= (allMyCards)=>html`<section id="my-posts-page">
<h1 class="title">My Posts</h1>
${allMyCards.length == 0 ?
    html`<h1 class="title no-posts-title">You have no posts yet!</h1></section>` : 
    html`<div class="all-posts"><div class="my-posts">${allMyCards.map(c=>myCardTemplate(c))}    
    </div>`}
    </section>
    `;
  const myCardTemplate = (card)=> html`<div class="post">
  <h2 class="post-title">${card.title}</h2>
  <img class="post-image" src=${card.imageUrl} alt="Material Image">
  <div class="btn-wrapper">
      <a href="/catalog/${card._id}" class="details-btn btn">Details</a>
  </div>
</div>` 
