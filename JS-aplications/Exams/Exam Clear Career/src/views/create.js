import { createCard } from "../api/data.js";
import { html } from "../lib.js";
import { submitHandler } from "../util.js";

export async function createView(ctx) {
    ctx.render(createTemplate(submitHandler(onSubmit)))

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
        await createCard({
            title,
            imageUrl, 
            category, 
            description, 
            requirements, 
            salary
        });
        ctx.page.redirect('/catalog')
    }
}
const createTemplate = (onSubmit) => html` <section id="create">
<div class="form">
  <h2>Create Offer</h2>
  <form @submit=${onSubmit} class="create-form">
    <input
      type="text"
      name="title"
      id="job-title"
      placeholder="Title"
    />
    <input
      type="text"
      name="imageUrl"
      id="job-logo"
      placeholder="Company logo url"
    />
    <input
      type="text"
      name="category"
      id="job-category"
      placeholder="Category"
    />
    <textarea
      id="job-description"
      name="description"
      placeholder="Description"
      rows="4"
      cols="50"
    ></textarea>
    <textarea
      id="job-requirements"
      name="requirements"
      placeholder="Requirements"
      rows="4"
      cols="50"
    ></textarea>
    <input
      type="text"
      name="salary"
      id="job-salary"
      placeholder="Salary"
    />

    <button type="submit">post</button>
  </form>
</div>
</section>
`
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
