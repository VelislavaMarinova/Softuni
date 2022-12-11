import { register } from "../api/user.js";
import { html } from "../lib.js";
import { submitHandler } from "../util.js";

export async function registerView(ctx) {
  ctx.render(registerTempalte(submitHandler(onSubmit)));
      async function onSubmit({username, email, password, repeatPass, gender}) {
  
                  if (!username || !email || !password || !repeatPass) {
                      return alert('All fields are required');
                  };
                //   if(!username) {
                //     notification('Please enter a username!');
                //     return;
                // }
                // if(!email) {
                //     notification('Please enter an email!');
                //     return;
                // }
                // if(!password) {
                //     notification('Please enter a password!');
                //     return;
                // }
                // if(!repeatPass) {
                //     notification('Please enter a password confirm!');
                //     return;
                // }
            
                // if (password !== repeatPass) {
                //     notification('Passwords don\'t match!');
                //     return;
                // }
  
                  
                  await register(email, password, username, gender);
                ctx.updateNav();
                  ctx.page.redirect('/catalog');
              }
}
const registerTempalte = (onSubmit) => html`<section id="register">
<form @submit=${onSubmit} id="register-form">
    <div class="container">
        <h1>Register</h1>
        <label for="username">Username</label>
        <input id="username" type="text" placeholder="Enter Username" name="username">
        <label for="email">Email</label>
        <input id="email" type="text" placeholder="Enter Email" name="email">
        <label for="password">Password</label>
        <input id="password" type="password" placeholder="Enter Password" name="password">
        <label for="repeatPass">Repeat Password</label>
        <input id="repeatPass" type="password" placeholder="Repeat Password" name="repeatPass">
        <div class="gender">
            <input type="radio" name="gender" id="female" value="female">
            <label for="female">Female</label>
            <input type="radio" name="gender" id="male" value="male" checked>
            <label for="male">Male</label>
        </div>
        <input type="submit" class="registerbtn button" value="Register">
        <div class="container signin">
            <p>Already have an account?<a href="#">Sign in</a>.</p>
        </div>
    </div>
</form>
</section>
`

// export async function registerView(ctx) {
//     ctx.render(registerTempalte(submitHandler(onSubmit)));
//     async function onSubmit(data) {

//                 if (data.email == '' || data.password == '') {
//                     return alert('All fields are required');
//                 };

//                 if(data.password !=data['re-password']){
//                    return alert('Password don\'t match');
//                 };
                
//                 await register(data.email, data.password);
//                 ctx.updateNav();
//                 ctx.page.redirect('/');
//             }
// }
// const registerTempalte = (onSubmit) => html`<section id="register">
// <div class="form">
//   <h2>Register</h2>
//   <form @submit=${onSubmit}class="login-form">
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
//     <button type="submit">login</button>
//     <p class="message">Already registered? <a href="/login">Login</a></p>
//   </form>
// </div>
// </section>
// `;



