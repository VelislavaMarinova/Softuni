import { nothing } from "../lib.js";
import { getById, deleteCard } from "../api/data.js";
import { html } from "../lib.js";

export async function detailsView(ctx) {
  const id = ctx.params.id;
  const card = await getById(id);
  const hasUser = Boolean(ctx.user);
  const isOwner = hasUser && (ctx.user.id == card._ownerId);
  ctx.render(detailsTempalte(card, isOwner, onDelete));

  async function onDelete() {
    const choice = confirm('Are you shure you wat to delete this item?');
    if (choice) {
      await deleteCard(ctx.params.id);
      ctx.page.redirect('/');
    }
  }
}
const detailsTempalte = (card, isOwner, onDelete) => html` <section id="meme-details">
<h1>Meme Title: ${card.title}

</h1>
<div class="meme-details">
    <div class="meme-img">
        <img alt="meme-alt" src=${card.imageUrl}>
    </div>
    <div class="meme-description">
        <h2>Meme Description</h2>
        <p>
           ${card.description}
        </p>
${isOwner ? html`<a class="button warning" href="/edit/${card._id}">Edit</a>
<button @click=${onDelete} class="button danger">Delete</button>` : nothing}
        <!-- Buttons Edit/Delete should be displayed only for creator of this meme  -->
         </div>
</div>
</section>`

// export async function detailsView(ctx) {
//     const id = ctx.params.id;
//     const card = await getById(id);
//     const hasUser = Boolean(ctx.user);
//     const isOwner = hasUser && (ctx.user.id == card._ownerId);
//     ctx.render(detailsTempalte(card,isOwner,onDelete));

//     async function onDelete() {
//                 const choice = confirm('Are you shure you wat to delete this item?');
//                 if (choice) {
//                     await deleteCard(ctx.params.id);
//                     ctx.page.redirect('/');
//                 }
//             }
// }
// const detailsTempalte = (card, isOwner,onDelete) => html`
// <section id="details">
// <div id="details-wrapper">
//   <p id="details-title">Shoe Details</p>
//   <div id="img-wrapper">
//     <img src=${card.imageUrl} />
//   </div>
//   <div id="info-wrapper">
//     <p>Brand: <span id="details-brand">${card.brand}</span></p>
//     <p>
//       Model: <span id="details-model">${card.model}</span>
//     </p>
//     <p>Release date: <span id="details-release">${card.release}</span></p>
//     <p>Designer: <span id="details-designer">${card.designer}</span></p>
//     <p>Value: <span id="details-value">${card.value}</span></p>
//   </div>
//   <!--Edit and Delete are only for creator-->
// ${isOwner ? html`<div id="action-buttons">
// <a href="/edit/${card._id}" id="edit-btn">Edit</a>
// <a @click=${onDelete} href="javascript: void(0)" id="delete-btn">Delete</a>
// </div>`: nothing}
//   </div>
// </section>
// `;

