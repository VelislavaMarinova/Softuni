import { createCard } from "../api/data.js";
import { html } from "../lib.js";
import { submitHandler } from "../util.js";


export async function createView(ctx) {
  ctx.render(createTempalte(submitHandler(onSubmit)))

  async function onSubmit({ title, description, imageUrl }) {

    if (title == "" && description == "" && imageUrl == "") {
      return alert('All fields are required')
    }
    else if (title == "" && description == "") {
      return alert('All fields are required')
    } else if (description == "" && imageUrl == "") {
      return alert('All fields are required')
    } else if (title == "" && imageUrl == "") {
      return alert('All fields are required')
    } else if (!title) {
      alert('Please enter an email!');
      return;
    } else if (!description) {
      alert('Please enter a description!');
      return;
    } else if (!imageUrl) {
      alert('Please enter an image URL');
      return;
    }
    await createCard({
      title,
      description,
      imageUrl

    });
    ctx.page.redirect('/catalog')
  }
}
const createTempalte = (onSubmit) => html`<section id="create-meme">
<form @submit=${onSubmit} id="create-form">
    <div class="container">
        <h1>Create Meme</h1>
        <label for="title">Title</label>
        <input id="title" type="text" placeholder="Enter Title" name="title">
        <label for="description">Description</label>
        <textarea id="description" placeholder="Enter Description" name="description"></textarea>
        <label for="imageUrl">Meme Image</label>
        <input id="imageUrl" type="text" placeholder="Enter meme ImageUrl" name="imageUrl">
        <input type="submit" class="registerbtn button" value="Create Meme">
    </div>
</form>
</section>`


// export async function createView(ctx) {
//     ctx.render(createTempalte(submitHandler(onSubmit)))

//     async function onSubmit({
//         brand,
//         model,
//         imageUrl,
//         release,
//         designer,
//         value
//       }
//       ) {
//         if (brand == "" || model == "" || imageUrl == "" || release == "" || designer == ""|| value == "") {
//             return alert('All fields are required')
//         }
//         await createCard({
//             brand,
//             model,
//             imageUrl,
//             release,
//             designer,
//             value
//           });
//         ctx.page.redirect('/catalog')
//     }
// }
// const createTempalte = (onSubmit) => html`
// <section id="create">
// <div class="form">
//   <h2>Add item</h2>
//   <form @submit=${onSubmit} class="create-form">
//     <input
//       type="text"
//       name="brand"
//       id="shoe-brand"
//       placeholder="Brand"
//     />
//     <input
//       type="text"
//       name="model"
//       id="shoe-model"
//       placeholder="Model"
//     />
//     <input
//       type="text"
//       name="imageUrl"
//       id="shoe-img"
//       placeholder="Image url"
//     />
//     <input
//       type="text"
//       name="release"
//       id="shoe-release"
//       placeholder="Release date"
//     />
//     <input
//       type="text"
//       name="designer"
//       id="shoe-designer"
//       placeholder="Designer"
//     />
//     <input
//       type="text"
//       name="value"
//       id="shoe-value"
//       placeholder="Value"
//     />

//     <button type="submit">post</button>
//   </form>
// </div>
// </section>
// `;
