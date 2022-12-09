import { logout } from './api/user.js';
import { page, render } from './lib.js'
import { getUserData } from './util.js';
import { catalogView } from './views/catalog.js';
import { createView } from './views/create.js';
import { detailsView } from './views/details.js';
import { editView } from './views/edit.js';
import { homePageView } from './views/homePage.js';
import { loginView } from './views/login.js';
import { registerView } from './views/register.js';
import { searchView } from './views/search.js';

const root = document.querySelector('main');
document.getElementById('logoutBtn').addEventListener('click', onLogout);

page(decorateContext);
page('/', homePageView);//catalogView//() => console.log('home')
page('/catalog', catalogView);//() => console.log('catalog')
page('/login', loginView);//() => console.log('login')
page('/register', registerView);// //() => console.log('register'))
page('/create', createView); ////) => console.log('create'));
page('/catalog/:id', detailsView);//*details/:id*/ // () => console.log('details'));
page('/edit/:id', editView); ////() => console.log('edit'));
page('/search', searchView);

updateNav()
page.start()

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root);
    ctx.updateNav = updateNav;
    const user = getUserData();

    if (user) {
        ctx.user = user
    }
    next();
};
function updateNav() {

    const userData = getUserData();

    if (userData) {
        document.querySelector('.user').style.display = 'inline';
        document.querySelector('.guest').style.display = 'none';

    } else {
        document.querySelector('.user').style.display = 'none';
        document.querySelector('.guest').style.display = 'inline';
    }
}

async function onLogout() {
    
    await logout();
    updateNav();
    page.redirect('/');
};