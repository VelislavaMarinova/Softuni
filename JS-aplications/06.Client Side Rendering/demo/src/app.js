import{render}from './template.js';

const username = "Peter<script>Hacked</script>"
const items = [
    'product1',
    'product1',
    'product3'
]
let ctx = {
    username,
    items
}
const views = {
    'home-link':'home',//file name===template //'<h2>Home Page</h2><p>Welcome, %%username%%</p>',//use string replace :пише се маркер:поредица от символи к. е малко 
    'catalog-link':'catalog', //file name===template //'<h2>Catalog Page</h2><ul>%%items%%</ul>',//вероятно да се появи в стандартното съдържание
    'about-link':'about'//file name===template  //'<h2>About Page</h2>'//заместваме Peter  с маркер %%username%%
};

document.querySelector('nav').addEventListener('click', (e) => {
    if (e.target.tagName == 'A') {
        const view = views[e.target.id];//home/catalog/about
        if (view !== undefined) {
            render(view,ctx)//view=home/catalog/about,  ctx={username,items}
        }
    }
})

//f.render прехвърлен в template

// function render(html) {
//     let ctx = {
//         username,
//         items
//     }
//     const result = html.replace(placeholderPattern, replacer)
    
//     /*
//      let result = html.replace('%%username%%', username)//replace in string(html ===string)
//     let result = html.replace('%%username%%', ctx['username']);
//     // result = result.replace('%%items%%', items.map(i => `<li>${i}</li>`).join('\n'))
//     result = result.replace('%%items%%', ctx['items'].map(i => `<li>${i}</li>`).join('\n'));
//     */
//     document.querySelector('main').innerHTML = result;
//     function replacer(match, name) {
//         const value = ctx[name];
//         if (value !== undefined) {
//             return value || match
//         }
//         // console.log(name); ==username;items
//         return ctx[name] || match//ако 1 парам. е undefined връщаме 2рия

//     }
// }

