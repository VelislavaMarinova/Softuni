import { getMy } from '../api/data.js';
import { html } from '../lib.js';
import { getUserData } from '../util.js';

export async function profileView(ctx){
  
    const user = getUserData()
    console.log(user);
    // console.log(getUserData());
    // console.log(userId);
    const allMyCards= await getMy(user.id);
    console.log(allMyCards);
    ctx.render(profileTemplate(allMyCards,user))
}

const profileTemplate= (allMyCards,user)=>html`<section id="user-profile-page" class="user-profile">
<article class="user-info">
    <img id="user-avatar-url" alt="user-profile" src="/images/female.png">
    <div class="user-content">
        <p>Username: ${user.username}</p>
        <p>Email: ${user.email}</p>
        <p>My memes count: ${allMyCards.length}</p>
    </div>
</article>
<h1 id="user-listings-title">User Memes</h1>
<div class="user-meme-listings">

${allMyCards.length == 0 ? 
html`<p class="no-memes">No memes in database.</p>` : 
html`${allMyCards.map(c=>myCardTemplate(c))}`}
</div>
</section>
`;
const myCardTemplate = (card)=> html`<div class="user-meme">
<p class="user-meme-title">${card.title}</p>
<img class="userProfileImage" alt="meme-img" src=${card.imageUrl}>
<a class="button" href="/catalog/${card._id}">Details</a>
</div>`


 


// export async function profileView(ctx) {
//     ctx.render(profileTemplate())
// }
// const profileTemplate = () => html`<section id="user-profile-page" class="user-profile">
// <article class="user-info">
//     <img id="user-avatar-url" alt="user-profile" src="/images/female.png">
//     <div class="user-content">
//         <p>Username: Mary</p>
//         <p>Email: mary@abv.bg</p>
//         <p>My memes count: 2</p>
//     </div>
// </article>
// <h1 id="user-listings-title">User Memes</h1>
// <div class="user-meme-listings">
//     <!-- Display : All created memes by this user (If any) --> 
//     <div class="user-meme">
//         <p class="user-meme-title">Java Script joke</p>
//         <img class="userProfileImage" alt="meme-img" src="/images/1.png">
//         <a class="button" href="#">Details</a>
//     </div>
//     <div class="user-meme">
//         <p class="user-meme-title">Bad code can present some problems</p>
//         <img class="userProfileImage" alt="meme-img" src="/images/3.png">
//         <a class="button" href="#">Details</a>
//     </div>

//     <!-- Display : If user doesn't have own memes  --> 
//     <p class="no-memes">No memes in database.</p>
// </div>
// </section>` 
