import { register } from "../api/user.js";
import { html } from "../lib.js";
import { submitHandler } from "../util.js";

export async function registerView(ctx) {
    ctx.render(registerTempalte(submitHandler(onSubmit)));
    async function onSubmit(data) {

                if (data.email == '' || data.password == '') {
                    return alert('All fields are required');
                };

                if(data.password !=data['re-password']){
                   return alert('Password don\'t match');
                };
                
                await register(data.email, data.password);
                ctx.updateNav();
                ctx.page.redirect('/');
            }
}
const registerTempalte = (onSubmit) => html`<section id="register">
<div class="form">
  <h2>Register</h2>
  <form @submit=${onSubmit}class="login-form">
    <input
      type="text"
      name="email"
      id="register-email"
      placeholder="email"
    />
    <input
      type="password"
      name="password"
      id="register-password"
      placeholder="password"
    />
    <input
      type="password"
      name="re-password"
      id="repeat-password"
      placeholder="repeat password"
    />
    <button type="submit">login</button>
    <p class="message">Already registered? <a href="/login">Login</a></p>
  </form>
</div>
</section>
`;



