import { register } from "../api/user.js";
import { html } from "../lib.js";
import { submitHandler } from "../util.js";

export async function registerView(ctx) {
  ctx.render(registerTempalte(submitHandler(onSubmit)));
      async function onSubmit(data) {
  
          if (data.email == '' || data.password == '') {
              return alert('All fields are required');
          };
  
          if (data.password != data.repeatPassword) {
              return alert('Password don\'t match');
          };
  
          await register(data.email, data.password);
          ctx.updateNav();
          ctx.page.redirect('/catalog');
      }
}

const registerTempalte = (onSubmit) => html`<section id="register-page" class="auth">
<form @submit = ${onSubmit} id="register">
    <h1 class="title">Register</h1>

    <article class="input-group">
        <label for="register-email">Email: </label>
        <input type="email" id="register-email" name="email">
    </article>

    <article class="input-group">
        <label for="register-password">Password: </label>
        <input type="password" id="register-password" name="password">
    </article>

    <article class="input-group">
        <label for="repeat-password">Repeat Password: </label>
        <input type="password" id="repeat-password" name="repeatPassword">
    </article>

    <input type="submit" class="btn submit-btn" value="Register">
</form>
</section>
`


// export async function registerView(ctx) {
//     ctx.render(registerTempalte(submitHandler(onSubmit)));
//     async function onSubmit(data) {

//         if (data.email == '' || data.password == '') {
//             return alert('All fields are required');
//         };

//         if (data.password != data['re-password']) {
//             return alert('Password don\'t match');
//         };

//         await register(data.email, data.password);
//         ctx.updateNav();
//         ctx.page.redirect('/');
//     }
// }
// const registerTempalte = (onSubmit) => html`
// <section id="register">
// <div class="form">
//   <h2>Register</h2>
//   <form @submit=${onSubmit} class="login-form">
//     <input
//       type="text"
//       name="email"
//       id="register-email"
//       placeholder="email"
//     />
//     <input
//       type="password"
//       name="password"
//       id="register-password"
//       placeholder="password"
//     />
//     <input
//       type="password"
//       name="re-password"
//       id="repeat-password"
//       placeholder="repeat password"
//     />
//     <button type="submit">register</button>
//     <p class="message">Already registered? <a href="/login">Login</a></p>
//   </form>
// </div>
// </section>
// `;
