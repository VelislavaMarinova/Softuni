import { html, render } from '../node_modules/lit-html/lit-html.js';

const listTemplate = (data) => html`
<ul>
${data.map(el => html`<li>${el}</li>`)}
</ul>`

document.getElementById('btnLoadTowns').addEventListener('click', getTowns);

function getTowns(e) {
    e.preventDefault();


    const root = document.getElementById('root');
    const input = document.getElementById('towns');
    if (input.value !== '') {
        let towns = input.value.split(',');
        const ul = document.createElement('ul');
        root.appendChild(ul);


        const result = listTemplate(towns)
        render(result, root);

        input.value = '';
    }
}