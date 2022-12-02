import { html, render } from '../../node_modules/lit-html/lit-html.js'
import { login } from '../api/data.js';
import { updateNav } from '../app.js';

let page = null;
export async function loginView(ctx) {
    page = ctx.page;
    ctx.render(createLoginTemplate(onSubmit));
};

async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target)
    const { email, password } = Object.fromEntries(formData);
    await login(email,password);
    alert("succseful login")
    updateNav()
   page.redirect('/')
}

function createLoginTemplate(handler) {
    return html`
    <div class="row space-top">
    <div class="col-md-12">
        <h1>Login User</h1>
        <p>Please fill all fields.</p>
    </div>
</div>
<form @submit = ${handler}>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="email">Email</label>
                <input class="form-control" id="email" type="text" name="email">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="password">Password</label>
                <input class="form-control" id="password" type="password" name="password">
            </div>
            <input type="submit" class="btn btn-primary" value="Login" />
        </div>
    </div>
</form>
</div>`
}