import { login } from "../api/user.js";
import { html } from "../lib.js";
import { submitHandler } from "../util.js";

export async function loginView(ctx) {
    ctx.render(loginTempalte(submitHandler(onSubmit)))
    async function onSubmit({ email, password }) {
                if (email == '' || password == '') {
                    return alert('All fields are required')
                }
                await login(email, password);
                ctx.updateNav()
                ctx.page.redirect('/');
            }
}
const loginTempalte = (onSubmit) => html`
<section id="loginPage">
<form @submit=${onSubmit}>
    <fieldset>
        <legend>Login</legend>

        <label for="email" class="vhide">Email</label>
        <input id="email" class="email" name="email" type="text" placeholder="Email">

        <label for="password" class="vhide">Password</label>
        <input id="password" class="password" name="password" type="password" placeholder="Password">

        <button type="submit" class="login">Login</button>

        <p class="field">
            <span>If you don't have profile click <a href="/register">here</a></span>
        </p>
    </fieldset>
</form>
</section>
`;


// export async function loginView(ctx) {
//     ctx.render(loginTempalte(submitHandler(onSubmit)));

//     async function onSubmit({ email, password }) {
//         if (email == '' || password == '') {
//             return alert('All fields are required')
//         }
//         await login(email, password);
//         ctx.updateNav()
//         ctx.page.redirect('/');
//     }
// }

// const loginTempalte = (onSubmit) => html` <section id="loginPage">
// <form @submit=${onSubmit}class="loginForm">
//     <img src="./images/logo.png" alt="logo" />
//     <h2>Login</h2>

//     <div>
//         <label for="email">Email:</label>
//         <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
//     </div>

//     <div>
//         <label for="password">Password:</label>
//         <input id="password" name="password" type="password" placeholder="********" value="">
//     </div>

//     <button class="btn" type="submit">Login</button>

//     <p class="field">
//         <span>If you don't have profile click <a href="/register">here</a></span>
//     </p>
// </form>
// </section>
// `;
