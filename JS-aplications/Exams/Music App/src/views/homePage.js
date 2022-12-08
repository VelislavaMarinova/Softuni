import { html } from "../lib.js";

export async function homePageView(ctx) {
    ctx.render(homePageTemplate())
}
const homePageTemplate = () => html`<section id="welcomePage">
<div id="welcome-message">
    <h1>Welcome to</h1>
    <h1>My Music Application!</h1>
</div>

<div class="music-img">
    <img src="./images/musicIcons.webp">
</div>
</section>`


// export function homePageView(ctx){
//     ctx.render(homePageTemplate())

// }

// const homePageTemplate=()=>html`
// <section class="welcome-content">
//             <article class="welcome-content-text">
//                 <h1>We Care</h1>
//                 <h1 class="bold-welcome">Your Pets</h1>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
//             </article>
//             <article class="welcome-content-image">
//                 <img src="./images/header-dog.png" alt="dog">
//             </article>
//         </section>`;


