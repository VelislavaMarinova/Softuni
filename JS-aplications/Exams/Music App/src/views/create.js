import { createItem } from "../api/data.js";
import { html } from "../lib.js";
import { submitHandler } from "../util.js";

export async function createView(ctx) {
    ctx.render(createTempalte(submitHandler(onSubmit)));

    async function onSubmit({  name, imgUrl, price, releaseDate, artist, genre, description }) {
                if (name == "" || imgUrl == "" || price == "" || releaseDate == "" || artist == ""|| genre == "" | description == "") {
                    return alert('All fields are required')
                }
                await createItem({  name, imgUrl, price, releaseDate, artist, genre, description });
                ctx.page.redirect('/catalog')
            }
}
const createTempalte = (onSubmit) => html`
<section class="createPage">
<form @submit=${onSubmit}>
    <fieldset>
        <legend>Add Album</legend>

        <div class="container">
            <label for="name" class="vhide">Album name</label>
            <input id="name" name="name" class="name" type="text" placeholder="Album name">

            <label for="imgUrl" class="vhide">Image Url</label>
            <input id="imgUrl" name="imgUrl" class="imgUrl" type="text" placeholder="Image Url">

            <label for="price" class="vhide">Price</label>
            <input id="price" name="price" class="price" type="text" placeholder="Price">

            <label for="releaseDate" class="vhide">Release date</label>
            <input id="releaseDate" name="releaseDate" class="releaseDate" type="text" placeholder="Release date">

            <label for="artist" class="vhide">Artist</label>
            <input id="artist" name="artist" class="artist" type="text" placeholder="Artist">

            <label for="genre" class="vhide">Genre</label>
            <input id="genre" name="genre" class="genre" type="text" placeholder="Genre">

            <label for="description" class="vhide">Description</label>
            <textarea name="description" class="description" placeholder="Description"></textarea>

            <button class="add-album" type="submit">Add New Album</button>
        </div>
    </fieldset>
</form>
</section>
`;



// export async function createView(ctx) {

//     ctx.render(createTempalte(submitHandler(onSubmit)))

//     async function onSubmit({ name, breed, age, weight, image }) {
//         if (name == "" || breed == "" || age == "" || weight == "" || image == "") {
//             return alert('All fields are required')
//         }
//         await createItem({ name, breed, age, weight, image });
//         ctx.page.redirect('/')
//     }
// }
// const createTempalte = (onSubmit) => html`<section id="createPage">

// <form @submit=${onSubmit} class="createForm">
//     <img src="./images/cat-create.jpg">
//     <div>
//         <h2>Create PetPal</h2>
//         <div class="name">
//             <label for="name">Name:</label>
//             <input name="name" id="name" type="text" placeholder="Max">
//         </div>
//         <div class="breed">
//             <label for="breed">Breed:</label>
//             <input name="breed" id="breed" type="text" placeholder="Shiba Inu">
//         </div>
//         <div class="Age">
//             <label for="age">Age:</label>
//             <input name="age" id="age" type="text" placeholder="2 years">
//         </div>
//         <div class="weight">
//             <label for="weight">Weight:</label>
//             <input name="weight" id="weight" type="text" placeholder="5kg">
//         </div>
//         <div class="image">
//             <label for="image">Image:</label>
//             <input name="image" id="image" type="text" placeholder="./image/dog.jpeg">
//         </div>
//         <button class="btn" type="submit">Create Pet</button>
//     </div>
// </form>
// </section>`
