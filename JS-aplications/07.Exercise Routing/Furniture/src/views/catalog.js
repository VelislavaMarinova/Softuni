import {html,render} from '../../node_modules/lit-html/lit-html.js'
import { getAllItems } from '../api/data.js';

export async function catalogView(ctx) {
    // const test = html`<p>hi</p>`
    const items =await getAllItems()//гет заявка и не получава данни
    // console.log(items);
    ctx.render(catalogTemplate(items));//items се подават в обект, поради формата на заявката
    // console.log('catalog');
}
function catalogTemplate(data) {
    return html` <div class="row space-top">
    <div class="col-md-12">
        <h1>Welcome to Furniture System</h1>
        <p>Select furniture from the catalog to view details.</p>
    </div>
</div>
<div class="row space-top">
${Object.values(data).map(i=>createItemTemplate(i))}
</div>`
};

function createItemTemplate(itemDetails) {//за генериране на всяка картичка отделно
    return html` <div class="col-md-4">
<div class="card text-white bg-primary">
    <div class="card-body">
            <img src=${itemDetails.img} />
            <p>${itemDetails.description}</p>
            <footer>
                <p>Price: <span>${itemDetails.price} $</span></p>
            </footer>
            <div>
                <a href="/details/${itemDetails._id}" class="btn btn-info">Details</a>
            </div>
    </div>
</div>
</div>`
}

