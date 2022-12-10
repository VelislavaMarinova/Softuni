import { createCard } from "../api/data.js";
import { html } from "../lib.js";
import { submitHandler } from "../util.js";

export async function createView(ctx) {
  ctx.render(createTemplate(submitHandler(onSubmit)))

      async function onSubmit({
        title,
        description,
        imageUrl,
        address,
        phone
      }
      ) {
          if (title == "" || description == "" || imageUrl == "" || address == "" || phone == "") {
              return alert('All fields are required')
          }
          await createCard({
            title,
            description,
            imageUrl,
            address,
            phone
          });
          ctx.page.redirect('/catalog')
      }
}
const createTemplate = (onSubmit) => html`<section id="create-page" class="auth">
<form @submit=${onSubmit} id="create">
    <h1 class="title">Create Post</h1>

    <article class="input-group">
        <label for="title">Post Title</label>
        <input type="title" name="title" id="title">
    </article>

    <article class="input-group">
        <label for="description">Description of the needs </label>
        <input type="text" name="description" id="description">
    </article>

    <article class="input-group">
        <label for="imageUrl"> Needed materials image </label>
        <input type="text" name="imageUrl" id="imageUrl">
    </article>

    <article class="input-group">
        <label for="address">Address of the orphanage</label>
        <input type="text" name="address" id="address">
    </article>

    <article class="input-group">
        <label for="phone">Phone number of orphanage employee</label>
        <input type="text" name="phone" id="phone">
    </article>

    <input type="submit" class="btn submit" value="Create Post">
</form>
</section>
`


// export async function createView(ctx) {
//     ctx.render(createTemplate(submitHandler(onSubmit)))

//     async function onSubmit({
//         title,
//         imageUrl, 
//         category, 
//         description, 
//         requirements, 
//         salary
      
//     }
//     ) {
//         if (title == "" || imageUrl == "" || category == "" || description == "" || requirements == "" || salary == "") {
//             return alert('All fields are required')
//         }
//         await createCard({
//             title,
//             imageUrl, 
//             category, 
//             description, 
//             requirements, 
//             salary
//         });
//         ctx.page.redirect('/catalog')
//     }
// }
// const createTemplate = (onSubmit) => html` <section id="create">
// <div class="form">
//   <h2>Create Offer</h2>
//   <form @submit=${onSubmit} class="create-form">
//     <input
//       type="text"
//       name="title"
//       id="job-title"
//       placeholder="Title"
//     />
//     <input
//       type="text"
//       name="imageUrl"
//       id="job-logo"
//       placeholder="Company logo url"
//     />
//     <input
//       type="text"
//       name="category"
//       id="job-category"
//       placeholder="Category"
//     />
//     <textarea
//       id="job-description"
//       name="description"
//       placeholder="Description"
//       rows="4"
//       cols="50"
//     ></textarea>
//     <textarea
//       id="job-requirements"
//       name="requirements"
//       placeholder="Requirements"
//       rows="4"
//       cols="50"
//     ></textarea>
//     <input
//       type="text"
//       name="salary"
//       id="job-salary"
//       placeholder="Salary"
//     />

//     <button type="submit">post</button>
//   </form>
// </div>
// </section>
// `;
