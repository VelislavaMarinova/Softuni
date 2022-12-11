import { login } from "../api/user.js";
import { html } from "../lib.js";
import { submitHandler } from "../util.js";

export async function loginView(ctx){
  ctx.render(loginTempalte(submitHandler(onSubmit)));
    async function onSubmit({ email, password }) {
      document.querySelector('.profile span').textContent = `Welcome, ${email}`
                if (email == '' || password == '') {
                    return alert('All fields are required');
                }
                await login(email, password);
               ctx.updateNav();
                ctx.page.redirect('/catalog');
            }
}
const loginTempalte = (onSubmit) => html`<section id="login">
<form @submit=${onSubmit} id="login-form">
    <div class="container">
        <h1>Login</h1>
        <label for="email">Email</label>
        <input id="email" placeholder="Enter Email" name="email" type="text">
        <label for="password">Password</label>
        <input id="password" type="password" placeholder="Enter Password" name="password">
        <input type="submit" class="registerbtn button" value="Login">
        <div class="container signin">
            <p>Dont have an account?<a href="#">Sign up</a>.</p>
        </div>
    </div>
</form>
</section>`

// export async function loginView(ctx) {
//     ctx.render(loginTempalte(submitHandler(onSubmit)));
//     async function onSubmit({ email, password }) {
//                 if (email == '' || password == '') {
//                     return alert('All fields are required');
//                 }
//                 await login(email, password);
//                 ctx.updateNav();
//                 ctx.page.redirect('/');
//             }
// }
// const loginTempalte = (onSubmit) => html`<section id="login">
// <div class="form">
//   <h2>Login</h2>
//   <form @submit=${onSubmit}class="login-form">
//     <input type="text" name="email" id="email" placeholder="email" />
//     <input
//       type="password"
//       name="password"
//       id="password"
//       placeholder="password"
//     />
//     <button type="submit">login</button>
//     <p class="message">
//       Not registered? <a href="/register">Create an account</a>
//     </p>
//   </form>
// </div>
// </section>
// `;



