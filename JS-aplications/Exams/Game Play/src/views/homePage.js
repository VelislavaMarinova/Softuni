import { getResentlyAdded } from "../api/data.js";
import { html } from "../lib.js";

export async function homePageView(ctx) {
  const recentlyAdded = await getResentlyAdded();
  ctx.render(homePageTemplate(recentlyAdded));
};

const homePageTemplate = (recentlyAdded) => html`
<section id="welcome-world">
<div class="welcome-message">
    <h2>ALL new games are</h2>
    <h3>Only in GamesPlay</h3>
</div>
<img src="./images/four_slider_img01.png" alt="hero">
<div id="home-page">
    <h1>Latest Games</h1>
    ${recentlyAdded.length == 0 ? html`<p class="no-articles">No games yet</p>` : recentlyAdded.map(c => cardTemplate(c))}
    <!-- Display div: with information about every game (if any) -->
</div>
</section>
`;

const cardTemplate = (card) => html`
<div class="game">
<div class="image-wrap">
    <img src=${card.imageUrl}>
</div>
<h3>${card.title}</h3>
<div class="rating">
    <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
</div>
<div class="data-buttons">
    <a href="/catalog/${card._id}" class="btn details-btn">Details</a>
</div>
</div>
`;