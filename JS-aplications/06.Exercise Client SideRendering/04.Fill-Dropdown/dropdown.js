import { html, render } from '../node_modules/lit-html/lit-html.js'

const url = 'http://localhost:3030/jsonstore/advanced/dropdown';
const root = document.getElementById('menu');

const optionTemplate = (data) => html`
<option value="${data._id}">${data.text}</option>
`;
const form = document.querySelector('form');
form.addEventListener('submit', addItem);

onLoad()
async function onLoad() {
    const response = await fetch(url);
    const data = await response.json();
    const options = Object.values(data).map(el => optionTemplate(el));
    render(options, root)
    console.log(data);
}

async function addItem(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const input = e.target.querySelector('#itemText').value;
    if (input === "") {
        return;
    }
    const dataBody = { text: input }

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(dataBody)
    })
    onLoad();
    e.target.querySelector('#itemText').value = "";
    // console.log(input);
    // console.log(e.target);

}