import { getAll } from '../api/data.js';
import { html,nothing } from '../lib.js';
import { getUserData } from '../util.js';



export async function catalogView(ctx) {
    const user = getUserData();
    const allSongs = await getAll()
                // - ctx.render(catalogTemplate(allPets))
    
    ctx.render(catalogTemplate(allSongs,user))

}
const catalogTemplate = (songs,user) => html`
<section id="catalogPage">
<h1>All Albums</h1>
${songs.length == 0 ? html`<p>No Albums in Catalog!</p>`: songs.map(s => songTemplate(s,user))}  
</section>
`;

const songTemplate = (song,user) => html`<div class="card-box">
<img src=${song.imgUrl}>
<div>
    <div class="text-center">
        <p class="name">Name: ${song.name}</p>
        <p class="artist">Artist: ${song.artist}</p>
        <p class="genre">Genre: ${song.genre}</p>
        <p class="price">Price: ${song.price}</p>
        <p class="date">Release Date: ${song.releaseDate}</p>
    </div>
    ${user ? html`<div class="btn-group">
    <a href="/catalog/${song._id}" id="details">Details</a>
</div>`: nothing}
</div>
</div>
`;

// <div class="animals-board">
//          <article class="service-img">
//              <img class="animal-image-cover" src=${pet.image}>
//          </article>
//          <h2 class="name">${pet.name}</h2>
//          <h3 class="breed">${pet.breed}</h3>
//          <div class="action">
//              <a class="btn" href="/catalog/${pet._id}">Details</a>
//          </div>
//      </div>`

// export async function catalogView(ctx) {
//     const allPets = await getAll()
//     ctx.render(catalogTemplate(allPets))

// }

// const catalogTemplate = (pets) => html`<section id="dashboard">
//  <h2 class="dashboard-title">Services for every animal</h2>
//  <div class="animals-dashboard">
//    ${pets.length == 0 ? html`<div>
//    <p class="no-pets">No pets in dashboard</p>
// </div>`: pets.map(p => petTemplate(p))}  

// </div>
// </section>
// `;
// const petTemplate = (pet) => html`
// <div class="animals-board">
//          <article class="service-img">
//              <img class="animal-image-cover" src=${pet.image}>
//          </article>
//          <h2 class="name">${pet.name}</h2>
//          <h3 class="breed">${pet.breed}</h3>
//          <div class="action">
//              <a class="btn" href="/catalog/${pet._id}">Details</a>
//          </div>
//      </div>`