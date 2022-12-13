import { nothing } from "../lib.js";
import { getById, deleteCard } from "../api/data.js";
import { html } from "../lib.js";
import { getNumberBuys, getTotalBoughtCount, requestAddBuys } from "../api/buy.js";


export async function detailsView(ctx) {
  const id = ctx.params.id;
  const card = await getById(id);

  const hasUser = Boolean(ctx.user);
  const isOwner = hasUser && (ctx.user.id == card._ownerId);

  const buyCount = await getTotalBoughtCount(id);
  let buyCountCurrentUser = {};

  if (hasUser) {
    buyCountCurrentUser = await getNumberBuys(id, ctx.user.id);
  };

  const hasBought = buyCountCurrentUser == 0 ? false : true;

  ctx.render(detailsTemplate(card, hasUser, isOwner, onDelete,buyCount, onBuy,hasBought));

  async function onDelete() {
    const choice = confirm('Are you shure you wat to delete this item?');
    if (choice) {
      await deleteCard(ctx.params.id);
      ctx.page.redirect('/catalog');
    };
  };
  async function onBuy() {
    debugger
    console.log(id);
    await requestAddBuys({ id });
    ctx.page.redirect('/details/' + id);
  }
}
const detailsTemplate = (card, hasUser, isOwner, onDelete,buyCount, onBuy,hasBought) => html`
<section id="details">
          <div id="details-wrapper">
            <img id="details-img" src=${card.imageUrl} alt="example1" />
            <p id="details-title">${card.name}</p>
            <p id="details-category">
              Category: <span id="categories">${card.category}</span>
            </p>
            <p id="details-price">
              Price: <span id="price-number">${card.price}</span>$</p>
            <div id="info-wrapper">
              <div id="details-description">
                <h4>Bought: <span id="buys">${buyCount}</span> times.</h4>
                <span>${card.description}</span>
              </div>
            </div>
<!--Edit and Delete are only for creator-->
${hasUser ? html`
            <div id="action-buttons">
                ${isOwner ? html`
                <a href="/edit/${card._id}" id="edit-btn">Edit</a>
            <a @click=${onDelete} href="javascript: void(0)" id="delete-btn">Delete</a>
                `: nothing}
                ${!isOwner && !hasBought ?  html`
                <a @click=${onBuy} href="javascript:void(0)" id="buy-btn">Buy</a>`
                : nothing}
            </div>
            `: nothing}


          
          </div>
        </section>
        `;


