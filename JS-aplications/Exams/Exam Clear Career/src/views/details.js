import { nothing } from "../lib.js";
import { getById, deleteCard } from "../api/data.js";
import { html } from "../lib.js";

export async function detailsView(ctx) {
  const id = ctx.params.id;
  const card = await getById(id);
  const hasUser = Boolean(ctx.user);
  const isOwner = hasUser && (ctx.user.id == card._ownerId);
  ctx.render(detailsTemplate(card, hasUser,isOwner, onDelete));

  async function onDelete() {
    const choice = confirm('Are you shure you wat to delete this item?');
    if (choice) {
      await deleteCard(ctx.params.id);
      ctx.page.redirect('/');
    }
  }
}
const detailsTemplate = (card,hasUser, isOwner, onDelete) => html` <section id="details">
<div id="details-wrapper">
  <img id="details-img" src=${card.imageUrl} alt="example1" />
  <p id="details-title">${card.title}</p>
  <p id="details-category">
    Category: <span id="categories">${card.category}</span>
  </p>
  <p id="details-salary">
    Salary: <span id="salary-number">${card.salary}</span>
  </p>
  <div id="info-wrapper">
    <div id="details-description">
      <h4>Description</h4>
      <span>${card.description}</span
      >
    </div>
    <div id="details-requirements">
      <h4>Requirements</h4>
      <span
        >${card.requirements}</span
      >
    </div>
  </div>
  <p>Applications: <strong id="applications">1</strong></p>

  
  ${hasUser? html`<div id="action-buttons">

  <!--Edit and Delete are only for creator-->

  ${isOwner ? html` <a href="/edit/${card._id}" id="edit-btn">Edit</a>
  <a @click=${onDelete} href="javascript: void(0)" id="delete-btn">Delete</a>`: nothing}


  <!--Bonus - Only for logged-in users ( not authors )-->

  <a href="" id="apply-btn">Apply</a>
</div>`: nothing}
  </div>
</section>
`;

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

