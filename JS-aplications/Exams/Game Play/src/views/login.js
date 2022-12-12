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
    ctx.page.redirect('/');
  }
}

const loginTempalte = (onSubmit) => html`<section id="login-page" class="auth">
<form @submit=${onSubmit} id="login">

    <div class="container">
        <div class="brand-logo"></div>
        <h1>Login</h1>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Sokka@gmail.com">

        <label for="login-pass">Password:</label>
        <input type="password" id="login-password" name="password">
        <input type="submit" class="btn submit" value="Login">
        <p class="field">
            <span>If you don't have profile click <a href="/register">here</a></span>
        </p>
    </div>
</form>
</section>
`;






