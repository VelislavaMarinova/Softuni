import { editCard, getById } from "../api/data.js";
import { html } from "../lib.js";
import { submitHandler } from "../util.js";

export async function editView(ctx) {
  const id = ctx.params.id
  const card = await getById(id)
  ctx.render(editTemplate(card, submitHandler(onSubmit)))

  async function onSubmit({name,imageUrl, category, description, price}){
    if (name == "" || imageUrl == "" || category == "" || description == "" || price == "") {
      return alert('All fields are required');
    }

    const res = await editCard(id, {name,imageUrl, category, description, price});
 
    ctx.page.redirect('/catalog/' + res._id);
  }
}

const editTemplate = (card,onSubmit) => html`
<section id="edit">
          <div class="form">
            <h2>Edit Product</h2>
            <form @submit=${onSubmit} class="edit-form">
              <input type="text"
                  name="name"
                id="name"
                placeholder="Product Name"
                .value=${card.name}
              />
              <input
                type="text"
                name="imageUrl"
                id="product-image"
                placeholder="Product Image"
                .value=${card.imageUrl}
              />
              <input
                type="text"
                name="category"
                id="product-category"
                placeholder="Category"
                .value=${card.category}
              />
              <textarea
                id="product-description"
                name="description"
                placeholder="Description"
                rows="5"
                cols="50"
              >${card.description}</textarea>
              
              <input
                type="text"
                name="price"
                id="product-price"
                placeholder="Price"
                .value=${card.price}
              />
              <button type="submit">post</button>
            </form>
          </div>
        </section>
        `;





