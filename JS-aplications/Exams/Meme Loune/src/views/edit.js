import { editCard, getById } from "../api/data.js";
import { html } from "../lib.js";
import { submitHandler } from "../util.js";

export async function editView(ctx) {
  const id = ctx.params.id
  const card = await getById(id)
  ctx.render(editTemplate(card, submitHandler(onSubmit)))

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

    const res = await editCard(id, { title, description, imageUrl });

    ctx.page.redirect('/catalog/' + res._id);
  }
}
const editTemplate = (card,onSubmit) => html` <section id="edit-meme">
<form  @submit=${onSubmit} id="edit-form">
    <h1>Edit Meme</h1>
    <div class="container">
        <label for="title">Title</label>
        <input id="title" type="text" placeholder="Enter Title" name="title" .value=${card.title}>
        <label for="description">Description</label>
        <textarea id="description" placeholder="Enter Description" name="description">${card.description}</textarea>
        <label for="imageUrl">Image Url</label>
        <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" .value=${card.imageUrl}>
        <input type="submit" class="registerbtn button" value="Edit Meme">
    </div>
</form>
</section>
`;

// export async function editView(ctx) {
//     const id  = ctx.params.id
//      const card = await  getById(id)
//     ctx.render(editTemplate(card,submitHandler(onSubmit)))

//     async function onSubmit({
//         brand,
//         model,
//         imageUrl,
//         release,
//         designer,
//         value
//       }
//       ){
//         if  (brand == "" || model == "" || imageUrl == "" || release == "" || designer == ""|| value == "") {
//             return alert('All fields are required')
//         }

//        const res= await editCard(id,{
//         brand,
//         model,
//         imageUrl,
//         release,
//         designer,
//         value
//       });
//     //    console.log(res);
//         ctx.page.redirect('/catalog/'+ res._id)
//     }
// }
// const editTemplate = (card,onSubmit) => html` <section id="edit">
// <div class="form">
//   <h2>Edit item</h2>
//   <form @submit=${onSubmit} class="edit-form">
//     <input
//       type="text"
//       name="brand"
//       id="shoe-brand"
//       placeholder="Brand"
//       .value=${card.brand}
//     />
//     <input
//       type="text"
//       name="model"
//       id="shoe-model"
//       placeholder="Model"
//       .value=${card.model}
//     />
//     <input
//       type="text"
//       name="imageUrl"
//       id="shoe-img"
//       placeholder="Image url"
//       .value=${card.imageUrl}
//     />
//     <input
//       type="text"
//       name="release"
//       id="shoe-release"
//       placeholder="Release date"
//       .value=${card.release}
//     />
//     <input
//       type="text"
//       name="designer"
//       id="shoe-designer"
//       placeholder="Designer"
//       .value=${card.designer}
//     />
//     <input
//       type="text"
//       name="value"
//       id="shoe-value"
//       placeholder="Value"
//       .value=${card.value}
//     />

//     <button type="submit">post</button>
//   </form>
// </div>
// </section>`


