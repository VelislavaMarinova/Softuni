import { logout } from './api/api.js';
import { render, html } from './lib.js';

import { page } from './lib.js';
import { getUserData } from './util.js';
import { catalogView } from './views/catalog.js';
import { createView } from './views/create.js';
import { detailsView } from './views/details.js';
import { editView } from './views/edit.js';
import { loginView } from './views/login.js';
import { registerView } from './views/register.js';

// import *as api from './api/data.js'
// window.api = api;

const root = document.querySelector('.container');
const logoutBtn = document.getElementById('logoutBtn');
logoutBtn.addEventListener('click', onLogout)

page(decorateContext)
page('/', catalogView);
page('/login', loginView);
page('/register', registerView);
page('/create', createView);
page('/details/:id', detailsView);
page('/edit/:id', editView);
page('/my-furniture', catalogView);

updateNav()
page.start();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root);
ctx.updateNav=updateNav;
    next();
};

function updateNav() {
    const userData = getUserData();
    console.log(userData);
    
    if (userData) {
        document.getElementById('user').style.display = 'inline-block'
        document.getElementById('guest').style.display = 'none'

    } else {
        document.getElementById('user').style.display = 'none'
        document.getElementById('guest').style.display = 'inline-block'
    }
}

async function onLogout() {
    await logout();
    updateNav();
    page.redirect('/');
}

