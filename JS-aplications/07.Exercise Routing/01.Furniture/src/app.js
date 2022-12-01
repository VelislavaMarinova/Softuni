import { login,register } from "../src/api/data.js"

import page from "../../node_modules/page/page.mjs";
import { catalogView } from "./views/catalog.js";
import { createView } from "./views/create.js";
import { detailsView } from "./views/details.js";
import { editView } from "./views/edit.js";
import { loginView } from "./views/login.js";
import { myFurnitureView } from "./views/my-furniture.js";
import { registerView } from "./views/register.js";

page("/",catalogView);
page("/catalog",catalogView);
page("/create",createView);
page("/details/id",detailsView);
page("/edit/id",editView);
page("/login",loginView);
page("/my-furniture",myFurnitureView);
page("/register",registerView);
page("*",catalogView);

window.login=login;
window.register=register;
