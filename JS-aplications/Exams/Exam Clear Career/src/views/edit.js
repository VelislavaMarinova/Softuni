import { editCard, getById } from "../api/data.js";
import { html } from "../lib.js";
import { submitHandler } from "../util.js";

export async function editView(ctx) {
    const id = ctx.params.id
    const card = await getById(id)
    ctx.render(editTemplate(card, submitHandler(onSubmit)))

    async function onSubmit({
        title,
        imageUrl,
        category,
        description,
        requirements,
        salary
    }
    ) {
        if (title == "" || imageUrl == "" || category == "" || description == "" || requirements == "" || salary == "") {
            return alert('All fields are required')
        }

        const res = await editCard(id, {
            title,
            imageUrl,
            category,
            description,
            requirements,
            salary
        });
        //    console.log(res);
        ctx.page.redirect('/catalog/' + res._id)
    }
}
const editTemplate = (card,onSubmit) => html` <section id="edit">
<div class="form">
  <h2>Edit Offer</h2>
  <form @submit=${onSubmit} class="edit-form">
    <input
      type="text"
      name="title"
      id="job-title"
      placeholder="Title"
      .value=${card.title}
    />
    <input
      type="text"
      name="imageUrl"
      id="job-logo"
      placeholder="Company logo url"
      .value=${card.imageUrl}
    />
    <input
      type="text"
      name="category"
      id="job-category"
      placeholder="Category"
      .value=${card.category}
    />
    <textarea
      id="job-description"
      name="description"
      placeholder="Description"
      rows="4"
      cols="50"
    >${card.description}</textarea>
    <textarea
      id="job-requirements"
      name="requirements"
      placeholder="Requirements"
      rows="4"
      cols="50"
    >${card.requirements}</textarea>
    <input
      type="text"
      name="salary"
      id="job-salary"
      placeholder="Salary"
      .value=${card.salary}
    />

    <button type="submit">post</button>
  </form>
</div>
</section>`


    // export async function editView(ctx) {
   
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


