import { html, render } from '../node_modules/lit-html/lit-html.js';

const form = document.querySelector('form');
const root = document.getElementById('root')
form.addEventListener('submit', onSubmit);


function onSubmit(e) {//1
    e.preventDefault()
    const formData = new FormData(form);
    const { towns } = Object.fromEntries(formData);
    const townsArray = towns.split(', ');
    renderTownList(townsArray);
    form.reset()
};

function renderTownList(data) {//3
    const res = crteateTownList(data);
    render(res, root);
};

function crteateTownList(data) {//2
    const ul = html`
                    <ul>
                    ${data.map(el => html`<li>${el}</li>`)}
                    </ul>
                    `;
    return ul
};