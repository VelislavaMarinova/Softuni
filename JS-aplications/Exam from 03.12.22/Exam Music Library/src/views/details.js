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
<section id="details">
        <div id="details-wrapper">
          <p id="details-title">Album Details</p>
          <div id="img-wrapper">
            <img src="./images/BackinBlack.jpeg" alt="example1" />
          </div>
          <div id="info-wrapper">
            <p><strong>Band:</strong><span id="details-singer">${card.singer}</span></p>
            <p>
              <strong>Album name:</strong><span id="details-album">${card.album}</span>
            </p>
            <p><strong>Release date:</strong><span id="details-release">${card.release}</span></p>
            <p><strong>Label:</strong><span id="details-label">${card.label}</span></p>
            <p><strong>Sales:</strong><span id="details-sales">${card.sales}</span></p>
          </div>
          <div id="likes">Likes: <span id="likes-count">0</span></div>

          <!--Edit and Delete are only for creator-->
          ${hasUser && !isOwner ? html`<div id="action-buttons"><a href="" id="like-btn">Like</a></div>`: nothing}
          ${isOwner ? html`<div id="action-buttons">
          <a href="/edit/${card._id}" id="edit-btn">Edit</a>
          <a @click=${onDelete} href="javascript: void(0)" id="delete-btn">Delete</a></div>`:nothing}
        </div>
      </section>
`;

