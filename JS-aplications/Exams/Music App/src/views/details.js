import { nothing } from "../lib.js";
import { getById,deleteItem } from "../api/data.js";
import { html } from "../lib.js";

export async function detailsView(ctx) {
    const id = ctx.params.id;
    const song = await getById(id);
    const hasUser = Boolean(ctx.user);
    const isOwner = hasUser && (ctx.user.id == song._ownerId);
    
    ctx.render(detailsTempalte(song, isOwner,onDelete))

    async function onDelete() {
                const choice = confirm('Are you shure you wat to delete this item?');
                if (choice) {
                    await deleteItem(ctx.params.id);
                    ctx.page.redirect('/');
                }
            }
}
const detailsTempalte = (song, isOwner,onDelete) => html`
<section id="detailsPage">
<div class="wrapper">
    <div class="albumCover">
        <img src=${song.imgUrl}>
    </div>
    <div class="albumInfo">
        <div class="albumText">

            <h1>Name: ${song.name}</h1>
            <h3>Artist: ${song.artist}</h3>
            <h4>Genre: ${song.genre}</h4>
            <h4>Price: ${song.price}</h4>
            <h4>Date: ${song.releaseDate}</h4>
            <p>Description: ${song.description}</p>
        </div>
       ${isOwner ? html`
       <div class="actionBtn">
       <a href=/edit/${song._id} class="edit">Edit</a>
       <a @click=${onDelete} href="javascript: void(0)" class="remove">Delete</a>
        </div>`: nothing} 
        <!-- Only for registered user and creator of the album-->

        </div>
</div>
</section>
`;



// export async function detailsView(ctx) {
//     const id = ctx.params.id;
//     // console.log(id);
//     const pet = await getById(id);
//     // const isOwner = false;
//     const hasUser = Boolean(ctx.user);
//     console.log(ctx.user.id);
//      console.log(pet._ownerId);
//     const isOwner = hasUser && (ctx.user.id == pet._ownerId);
//     // console.log(pet);
//     ctx.render(detailsTempalte(pet, hasUser, isOwner,onDelete))

//     async function onDelete() {
//         const choice = confirm('Are you shure you wat to delete this item?');
//         if (choice) {
//             await deleteItem(ctx.params.id);
//             ctx.page.redirect('/');
//         }
//     }
// }

// const detailsTempalte = (pet, hasUser, isOwner,onDelete) => html` <section id="detailsPage">
// <div class="details">
//     <div class="animalPic">
//         <img src=${pet.image}>
//     </div>
//     <div>
//         <div class="animalInfo">
//             <h1>Name: ${pet.name}</h1>
//             <h3>Breed: ${pet.breed}</h3>
//             <h4>Age: ${pet.age}</h4>
//             <h4>Weight: ${pet.weight}</h4>
//             <h4 class="donation">Donation: 0$</h4>
//         </div>
//         ${hasUser ? html`<div class="actionBtn">
//         <!-- Only for registered user and creator of the pets-->
//         ${isOwner ? html` 
//             <a href="/edit/${pet._id}" class="edit">Edit</a>
//             <a @click=${onDelete} href="javascript: void(0)" class="remove">Delete</a>`: html`
//             <a href="#" class="donate">Donate</a>`}
       
//         <!--(Bonus Part) Only for no creator and user-->
        
//     </div>` : nothing}
//         <!-- if there is no registered user, do not display div-->
                    
//                 </div>
//             </div>
//         </section>`


