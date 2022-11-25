import { getAllIdeas } from "../api/data.js"
const section = document.getElementById('dashboard-holder');
section.addEventListener('click', onDetailsSelect);
let ctx = null//за да направим редирект

export async function showCatalog(context) { //context - dependency-та
    ctx = context;
    context.showSection(section);//ТОЗИ модул не импортира нищо,а чака context да дойде отвън и вътре в него 
    //искаме да имаме достъп до функция, която като я извикаме, тя да визуализира секцията, която и подаваме.
    const ideas = await getAllIdeas();
    if (ideas.length === 0) {
        section.innerHTML = `<h1>No ideas yet! Be the first one :)</h1>`
    } else {
        section.replaceChildren(...ideas.map(idea => createIdeaPreview(idea)));//map връща масив затова трябва спред
    }
}
function createIdeaPreview(idea) {
    const element = document.createElement('div');
    element.className = 'card overflow-hidden current-card details';
    element.style.width = "20rem";
    element.style.height = "18rem";
    element.innerHTML = ` <div class="card-body">
<p class="card-text">${idea.title}</p>
</div>
<img class="card-image" src="${idea.img}" alt="Card image cap">
<a data-id = ${idea._id} class="btn" href="/details">Details</a>`;
    return element;
}
/*<div class="card overflow-hidden current-card details" style="width: 20rem; height: 18rem;">
    <div class="card-body">
        <p class="card-text">Dinner Recipe</p>
    </div>
    <img class="card-image" src="./images/dinner.jpg" alt="Card image cap">
        <a class="btn" href="">Details</a>
</div>*/
function onDetailsSelect(e) {
    if (e.target.tagName == "A") {
        e.preventDefault();
        const id = e.target.dataset.id;
        if (id) {
            ctx.goTo('/details', id)
        }
    }
}