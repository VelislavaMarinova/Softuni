import { editCard, getById } from "../api/data.js";
import { html } from "../lib.js";
import { submitHandler } from "../util.js";

export async function editView(ctx) {
    const id = ctx.params.id
    const card = await getById(id)
    ctx.render(editTemplate(card,submitHandler(onSubmit)))

    async function onSubmit({title,category,maxLevel,imageUrl,summary}) {
        if (title == "" || category == "" || maxLevel == "" || imageUrl == "" || summary == "") {
            return alert('All fields are required')
        }

        const res = await editCard(id, {title,category,maxLevel,imageUrl,summary});
        ctx.page.redirect('/catalog/' + res._id)
    }
}
const editTemplate = (card,onSubmit) => html`
<section id="edit-page" class="auth">
<form @submit=${onSubmit} id="edit">
    <div class="container">

        <h1>Edit Game</h1>
        <label for="leg-title">Legendary title:</label>
        <input type="text" id="title" name="title" .value=${card.title}>

        <label for="category">Category:</label>
        <input type="text" id="category" name="category" .value=${card.category}>

        <label for="levels">MaxLevel:</label>
        <input type="number" id="maxLevel" name="maxLevel" min="1" .value=${card.maxLevel}>

        <label for="game-img">Image:</label>
        <input type="text" id="imageUrl" name="imageUrl" .value=${card.imageUrl}>

        <label for="summary">Summary:</label>
        <textarea name="summary" id="summary">${card.summary}</textarea>
        <input class="btn submit" type="submit" value="Edit Game">

    </div>
</form>
</section>
`;




