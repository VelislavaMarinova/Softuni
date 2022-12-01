import { login, logout, register } from "../src/api/data.js";
import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";

import { catalogView } from "./views/catalog.js";
import { createView } from "./views/create.js";
import { detailsView } from "./views/details.js";
import { editView } from "./views/edit.js";
import { loginView } from "./views/login.js";
import { myFurnitureView } from "./views/my-furniture.js";
import { registerView } from "./views/register.js";


const root = document.querySelector(".container");

page("/", renderMiddleware, catalogView);
page("/catalog", renderMiddleware, catalogView);
page("/create", renderMiddleware, createView);
page("/details/id", renderMiddleware, detailsView);
page("/edit/id", renderMiddleware, editView);
page("/login", renderMiddleware, loginView);
page("/my-furniture", renderMiddleware, myFurnitureView);
page("/register", renderMiddleware, registerView);
page("*", renderMiddleware, catalogView);

page.start();
updateNav();

const logoutBtn = document.getElementById('logoutBtn');
logoutBtn.addEventListener('click',async()=>{
    await logout();
    updateNav();
    page.redirect("/");
});


function updateNav() {
    const userSection = document.getElementById('user');
    const guestSection = document.getElementById('guest');
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
        userSection.style.display = "inline-block";
        guestSection.style.display = "none";
    } else {
        userSection.style.display = "none";
        guestSection.style.display = "inline-block";
    }
};

function renderMiddleware(ctx, next) {
    ctx.render = (content) => render(content, root);
    ctx.updateNav = updateNav;
    next();
}

window.login = login;
window.register = register;
