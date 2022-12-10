import { nothing } from "../lib.js";
import { getById, deleteCard } from "../api/data.js";
import { html } from "../lib.js";   


export async function detailsView(ctx) {
  const id = ctx.params.id;
  const card = await getById(id);
  const hasUser = Boolean(ctx.user);

  const isOwner = hasUser && (ctx.user.id == card._ownerId);
  console.log(hasUser);
  console.log(isOwner);
  ctx.render(detailsTemplate(card,hasUser,isOwner, onDelete));

  async function onDelete() {
    const choice = confirm('Are you shure you wat to delete this item?');
    if (choice) {
      await deleteCard(ctx.params.id);
      ctx.page.redirect('/catalog');
    }
  }
}

const detailsTemplate = (card,hasUser, isOwner, onDelete) => html`<section id="details-page">
<h1 class="title">Post Details</h1>

<div id="container">
    <div id="details">
        <div class="image-wrapper">
            <img src=${card.imageUrl} alt="Material Image" class="post-image">
        </div>
        <div class="info">
            <h2 class="title post-title">${card.title}</h2>
            <p class="post-description">Description: ${card.description}</p>
            <p class="post-address">Address: ${card.address}</p>
            <p class="post-number">Phone number: ${card.phone}</p>
            <p class="donate-Item">Donate Materials: 0</p>

${isOwner ? html`<div class="btns">
    <a href="/edit/${card._id}" class="edit-btn btn">Edit</a>
     <a @click=${onDelete} href="javascript: void(0)" class="delete-btn btn">Delete</a></div>`: html`${hasUser ? html`<div class="btns"> <a href="#" class="donate-btn btn">Donate</a> </div>` : nothing}`}
     
        </div>
    </div>
</div>
</section>`

// export async function detailsView(ctx) {
//   const id = ctx.params.id;
//   const card = await getById(id);
//   const hasUser = Boolean(ctx.user);
//   const isOwner = hasUser && (ctx.user.id == card._ownerId);
//   ctx.render(detailsTemplate(card, hasUser,isOwner, onDelete));

//   async function onDelete() {
//     const choice = confirm('Are you shure you wat to delete this item?');
//     if (choice) {
//       await deleteCard(ctx.params.id);
//       ctx.page.redirect('/');
//     }
//   }
// }
// const detailsTemplate = (card,hasUser, isOwner, onDelete) => html` <section id="details">
// <div id="details-wrapper">
//   <img id="details-img" src=${card.imageUrl} alt="example1" />
//   <p id="details-title">${card.title}</p>
//   <p id="details-category">
//     Category: <span id="categories">${card.category}</span>
//   </p>
//   <p id="details-salary">
//     Salary: <span id="salary-number">${card.salary}</span>
//   </p>
//   <div id="info-wrapper">
//     <div id="details-description">
//       <h4>Description</h4>
//       <span>${card.description}</span
//       >
//     </div>
//     <div id="details-requirements">
//       <h4>Requirements</h4>
//       <span
//         >${card.requirements}</span
//       >
//     </div>
//   </div>
//   <p>Applications: <strong id="applications">1</strong></p>

  
//   ${hasUser? html`<div id="action-buttons">

//   <!--Edit and Delete are only for creator-->

//   ${isOwner ? html` <a href="/edit/${card._id}" id="edit-btn">Edit</a>
//   <a @click=${onDelete} href="javascript: void(0)" id="delete-btn">Delete</a>`: nothing}


//   <!--Bonus - Only for logged-in users ( not authors )-->

//   <a href="" id="apply-btn">Apply</a>
// </div>`: nothing}
//   </div>
// </section>
// `;

