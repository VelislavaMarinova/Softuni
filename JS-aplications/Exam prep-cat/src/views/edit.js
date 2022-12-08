import { editItem, getById } from "../api/data.js";
import { html } from "../lib.js";
import { submitHandler } from "../util.js";

export async function editView(ctx){
    const id  = ctx.params.id
    const pet = await  getById(id) 
    ctx.render(editTemplate(pet,submitHandler(onSubmit)))

    async function onSubmit({name,breed,age,weight,image}){
        if (name == "" || breed == "" || age == "" || weight == "" || image == "") {
            return alert('All fields are required')
        }

       const res= await editItem(id,{name, breed, age, weight, image});
       console.log(res);
        ctx.page.redirect('/catalog/'+ res._id)
    }
}

const editTemplate=(pet,onSubmit)=>html`<section id="editPage">



<form @submit=${onSubmit}class="editForm">
    <img src="./images/editpage-dog.jpg">
    <div>
        <h2>Edit PetPal</h2>
        <div class="name">
            <label for="name">Name:</label>
            <input name="name" id="name" type="text" .value=${pet.name}>
        </div>
        <div class="breed">
            <label for="breed">Breed:</label>
            <input name="breed" id="breed" type="text" .value=${pet.breed}>
        </div>
        <div class="Age">
            <label for="age">Age:</label>
            <input name="age" id="age" type="text" .value=${pet.age}>
        </div>
        <div class="weight">
            <label for="weight">Weight:</label>
            <input name="weight" id="weight" type="text" .value=${pet.weight}>
        </div>
        <div class="image">
            <label for="image">Image:</label>
            <input name="image" id="image" type="text" .value=${pet.image}>
        </div>
        <button class="btn" type="submit">Edit Pet</button>
    </div>
</form>
</section>`
