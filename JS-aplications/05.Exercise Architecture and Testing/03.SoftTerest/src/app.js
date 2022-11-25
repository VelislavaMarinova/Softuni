import * as api from './api/users.js';
import { initialize } from './router.js';
import { showCatalog } from './views/catalog.js';
import { showCreate } from './views/create.js';
import { showDetails } from './views/details.js';
import { showHome } from './views/home.js'
import { showLogin } from './views/login.js';
import { showRegister } from './views/register.js';

//const main = document.getElementById('main')//преместен в router.js

// const homePage = document.getElementById('homePage');
// const registerPage = document.getElementById('registerPage');
// const loginPage = document.getElementById('loginPage');
// const catalogPage = document.getElementById('dashboard-holder');
// const detailsPage = document.getElementById('detailsPage');
// const createPage = document.getElementById('createPage');
const div = document.getElementById('views');
div.remove();
// document.querySelector('nav').addEventListener('click', onNavigate);//преместен в router.js

const links = {
    '/': showHome,//homePage,
    '/login': showLogin,
    '/register': showRegister,
    '/catalog': showCatalog,
    '/details': showDetails,
    '/create': showCreate,
    '/logout':onLogout,
}
function onLogout(){
    api.logout();
    router.updateNav()
    router.goTo('/')
}

//трябва да извикаме showHome, като и подадем обект, койо има като свойство showSection
// const context = {//с това правим redirect //Контекста е преместен в router.js
//     showSection,
//     goto
// }; 


//strart app
const router = initialize(links);
router.updateNav();
//Start app in home view
// window.showHome = () => {
//     showHome(context)
// };
router.goTo('/')
// showHome()
//Всичко надолу е преместено в router.js

// function showSection(section) {//тази ф. искаме да стигне до home.js
//     // const section = links[name];
//     //main.appendChild(section);    //проблем: показва нов секшън но не скрива предходния
//     main.replaceChildren(section)
// }

// // window.showSection = (name) => {
// //     const section = links[name];
// //     //main.appendChild(section);    //проблем: показва нов секшън но не скрива предходния
// //     main.replaceChildren(section)
// // } 
// function onNavigate(e) {
//     let target = e.target;//изваждаме таргета, и ако случайно сме кликнали на картинка, да премести таргета върху неговия 
//     if(target.tagName=='IMG'){//парент елемент, к е анкър тага
//         target=target.parentElement;
//     }
//     if (target.tagName == 'A') {
//         e.preventDefault()//тъй като anchor tags навигират нанякъде и имат дефолтно поведение
//         const url = new URL(target.href)
//         const name = url.pathname
//         // console.log(url.pathname)
//        goto(name)

//         if(typeof handler =='function'){
//             handler(context)
//         }
//         console.log(handler);
//     }
// }

// function goto(name){ 
//     const handler = links[name];

//     if(typeof handler =='function'){
//         handler(context)
//     }
// }