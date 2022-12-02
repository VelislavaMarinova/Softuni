import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { itemDetails } from '../api/data.js';


export async function detailsView(ctx) {
    const id = ctx.params.id
    const itemDescription = await itemDetails(id);
    // console.log(itemDescription);
    const userData = JSON.parse(localStorage.getItem('userData'))
    ctx.render(detailsTemplate(itemDescription, userData._id === itemDescription._ownerId))
}

function detailsTemplate(data,isOwner) {
    const dataImg = data.img.split('/');
    return html`
    <div class="row space-top">
    <div class="col-md-12">
        <h1>Furniture Details</h1>
    </div>
</div>
<div class="row space-top">
    <div class="col-md-4">
        <div class="card text-white bg-primary">
            <div class="card-body">
                <img src=${"/images/" + dataImg[dataImg.length - 1]} />
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <p>Make: <span>${data.make}</span></p>
        <p>Model: <span>${data.model}</span></p>
        <p>Year: <span>${data.year}</span></p>
        <p>Description: <span>${data.description}</span></p>
        <p>Price: <span>${data.price}</span></p>
        <p>Material: <span>${data.material}</span></p>
       ${isOwner ? html`
       <div>
              <a href=”#” class="btn btn-info">Edit</a>
                 <a href=”#” class="btn btn-red">Delete</a>
     </div>`
            : ""}
        
    </div>
</div>`
}