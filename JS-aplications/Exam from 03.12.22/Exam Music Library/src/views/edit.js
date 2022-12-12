import { editCard, getById } from "../api/data.js";
import { html } from "../lib.js";
import { submitHandler } from "../util.js";

export async function editView(ctx) {
    const id = ctx.params.id
    const card = await getById(id)
    ctx.render(editTemplate(card,submitHandler(onSubmit)))

    async function onSubmit({singer,album, imageUrl, release, label, sales}) {
        if (singer == "" || album == "" || imageUrl == "" || release == "" || label == "" || sales == "") {
            return alert('All fields are required')
        }

        const res = await editCard(id, {singer,album, imageUrl, release, label, sales});
        ctx.page.redirect('/catalog/' + res._id)
    }
}
const editTemplate = (card,onSubmit) => html`
<section id="edit">
<div class="form">
  <h2>Edit Album</h2>
  <form @submit=${onSubmit} class="edit-form">
    <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" .value=${card.singer}>
    <input type="text" name="album" id="album-album" placeholder="Album" .value=${card.album}>
    <input type="text" name="imageUrl" id="album-img" placeholder="Image url" .value=${card.imageUrl}>
    <input type="text" name="release" id="album-release" placeholder="Release date" .value=${card.release}>
    <input type="text" name="label" id="album-label" placeholder="Label" .value=${card.label}>
    <input type="text" name="sales" id="album-sales" placeholder="Sales" .value=${card.sales}>

    <button type="submit">post</button>
  </form>
</div>
</section>
`;




