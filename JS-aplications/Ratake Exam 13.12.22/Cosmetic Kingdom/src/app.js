import { getNumberBuys, getTotalBoughtCount, requestAddBuys } from './api/buy.js';
import { logout } from './api/user.js';
import { page, render } from './lib.js'
import { getUserData } from './util.js';
import { catalogView } from './views/catalog.js';
import { createView } from './views/create.js';
import { detailsView } from './views/details.js';
import { editView } from './views/edit.js';
import { homePageView } from './views/homePage.js';
import { loginView } from './views/login.js';
// import { myPostsView } from './views/myPosts.js';
import { registerView } from './views/register.js';


const root = document.querySelector('main');
document.getElementById('logoutBtn').addEventListener('click', onLogout);

page(decorateContext);
page('/', homePageView);
page('/catalog', catalogView);
page('/login', loginView);
page('/register', registerView);
page('/create', createView);
page('/catalog/:id', detailsView);
page('/edit/:id', editView);



updateNav();
page.start();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root);
    ctx.updateNav = updateNav;
    const user = getUserData();

    if (user) {
        ctx.user = user
    };
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
    };
};

async function onLogout() {

    await logout();
    updateNav();
    page.redirect('/');
};