import { login } from "../api/user.js";
import { html } from "../lib.js";
import { submitHandler } from "../util.js";

export async function loginView(ctx) {
  ctx.render(loginTempalte(submitHandler(onSubmit)));
  async function onSubmit({ email, password }) {
    if (email == '' || password == '') {
      return alert('All fields are required');
    }
    await login(email, password);
    ctx.updateNav();
    ctx.page.redirect('/catalog');
  }
}
const loginTempalte = (onSubmit) => html`<section id="login-page" class="auth">
<form @submit=${onSubmit} id="login">
    <h1 class="title">Login</h1>

    <article class="input-group">
        <label for="login-email">Email: </label>
        <input type="email" id="login-email" name="email">
    </article>

    <article class="input-group">
        <label for="password">Password: </label>
        <input type="password" id="password" name="password">
    </article>

    <input type="submit" class="btn submit-btn" value="Log In">
</form>
</section>
`

// export async function loginView(ctx) {
//   ctx.render(loginTempalte(submitHandler(onSubmit)));
//   async function onSubmit({ email, password }) {
//     if (email == '' || password == '') {
//       return alert('All fields are required');
//     }
//     await login(email, password);
//     ctx.updateNav();
//     ctx.page.redirect('/');
//   }
// }

// const loginTempalte = (onSubmit) => html`<section id="login">
// <div class="form">
//   <h2>Login</h2>
//   <form @submit=${onSubmit} class="login-form">
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



