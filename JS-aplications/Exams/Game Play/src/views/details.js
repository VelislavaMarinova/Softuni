import { nothing } from "../lib.js";
import { getById, deleteCard } from "../api/data.js";
import { html } from "../lib.js";

export async function detailsView(ctx) {
  const id = ctx.params.id;
  const card = await getById(id);
  const hasUser = Boolean(ctx.user);
  const isOwner = hasUser && (ctx.user.id == card._ownerId);
  ctx.render(detailsTemplate(card,hasUser, isOwner, onDelete));

  async function onDelete() {
    const choice = confirm('Are you shure you wat to delete this item?');
    if (choice) {
      await deleteCard(ctx.params.id);
      ctx.page.redirect('/');
    }
  }
}
const detailsTemplate = (card,hasUser, isOwner, onDelete) => html`
<section id="game-details">
<h1>Game Details</h1>
<div class="info-section">

    <div class="game-header">
        <img class="game-img" src=${card.imageUrl} />
        <h1>${card.title}</h1>
        <span class="levels">MaxLevel: ${card.maxLevel}</span>
        <p class="type">${card.category}</p>
    </div>

    <p class="text">
    ${card.summary}
    </p>
<!-- Bonus ( for Guests and Users ) -->
                <div class="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        <!-- list all comments for current game (If any) -->
                        <li class="comment">
                            <p>Content: I rate this one quite highly.</p>
                        </li>
                        <li class="comment">
                            <p>Content: The best game.</p>
                        </li>
                    </ul>
                    <!-- Display paragraph: If there are no games in the database -->
                    <p class="no-comment">No comments.</p>
                </div>
${isOwner ? html` <div class="buttons">
<a href="/edit/${card._id}" class="button">Edit</a>
<a @click = ${onDelete} href="javascript: void(0)" class="button">Delete</a>
</div>`: nothing}
</div>
${hasUser && !isOwner? html`<article class="create-comment">
<label>Add new comment:</label>
<form class="form">
  <textarea name="comment" placeholder="Comment......"></textarea>
                <input class="btn submit" type="submit" value="Add Comment">
            </form>
        </article>` : nothing}
        </section>
        `;

