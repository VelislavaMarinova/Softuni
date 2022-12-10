import { editCard, getById } from "../api/data.js";
import { html } from "../lib.js";
import { submitHandler } from "../util.js";

export async function editView(ctx) {
  const id = ctx.params.id
  const card = await getById(id)
  ctx.render(editTemplate(card, submitHandler(onSubmit)))

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

    const res = await editCard(id, {
      title,
      description,
      imageUrl,
      address,
      phone

    });
    //    console.log(res);
    ctx.page.redirect('/catalog/' + res._id)
  }
}
const editTemplate = (card,onSubmit) => html`<section id="edit-page" class="auth">
<form @submit=${onSubmit} id="edit">
    <h1 class="title">Edit Post</h1>

    <article class="input-group">
        <label for="title">Post Title</label>
        <input type="title" name="title" id="title" .value=${card.title}>
    </article>

    <article class="input-group">
        <label for="description">Description of the needs </label>
        <input type="text" name="description" id="description" .value=${card.description}>
    </article>

    <article class="input-group">
        <label for="imageUrl"> Needed materials image </label>
        <input type="text" name="imageUrl" id="imageUrl" .value=${card.imageUrl}>
    </article>

    <article class="input-group">
        <label for="address">Address of the orphanage</label>
        <input type="text" name="address" id="address" .value=${card.address}>
    </article>

    <article class="input-group">
        <label for="phone">Phone number of orphanage employee</label>
        <input type="text" name="phone" id="phone" .value=${card.phone}>
    </article>

    <input type="submit" class="btn submit" value="Edit Post">
</form>
</section>`

// export async function editView(ctx) {
//     const id = ctx.params.id
//     const card = await getById(id)
//     ctx.render(editTemplate(card, submitHandler(onSubmit)))

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

//         const res = await editCard(id, {
//             title,
//             imageUrl,
//             category,
//             description,
//             requirements,
//             salary
//         });
//         //    console.log(res);
//         ctx.page.redirect('/catalog/' + res._id)
//     }
// }
// const editTemplate = (card,onSubmit) => html` <section id="edit">
// <div class="form">
//   <h2>Edit Offer</h2>
//   <form @submit=${onSubmit} class="edit-form">
//     <input
//       type="text"
//       name="title"
//       id="job-title"
//       placeholder="Title"
//       .value=${card.title}
//     />
//     <input
//       type="text"
//       name="imageUrl"
//       id="job-logo"
//       placeholder="Company logo url"
//       .value=${card.imageUrl}
//     />
//     <input
//       type="text"
//       name="category"
//       id="job-category"
//       placeholder="Category"
//       .value=${card.category}
//     />
//     <textarea
//       id="job-description"
//       name="description"
//       placeholder="Description"
//       rows="4"
//       cols="50"
//     >${card.description}</textarea>
//     <textarea
//       id="job-requirements"
//       name="requirements"
//       placeholder="Requirements"
//       rows="4"
//       cols="50"
//     >${card.requirements}</textarea>
//     <input
//       type="text"
//       name="salary"
//       id="job-salary"
//       placeholder="Salary"
//       .value=${card.salary}
//     />

//     <button type="submit">post</button>
//   </form>
// </div>
// </section>`




