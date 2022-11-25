import { deleteById, getById } from "../api/data.js";

const section = document.getElementById('detailsPage');

export async function showDetails(context, id) { //context - dependency-та
    const idea = await getById(id)
    console.log(idea);
    context.showSection(section);//ТОЗИ модул не импортира нищо,а чака context да дойде отвън и вътре в него 
    //искаме да имаме достъп до функция, която като я извикаме, тя да визуализира секцията, която и подаваме.

    const user = JSON.parse(localStorage.getItem('user'));//в Localstorage ma string  и затпва се налага parse
    const isOwner = user && user._id == idea._ownerId;


    section.innerHTML = createIdeaHTML(idea, isOwner);
    if (isOwner) {
        section.querySelector('#deleteBtn').addEventListener('click', async (e) => {//слагаме потвърждение конфирм
            e.preventDefault()
            const choice = confirm('Are you shure you want to delete this idea?') //това е блокираща операция и се изпълнява асинхронно
            //ако кликнем Ok choice връща true, 
            if (choice) {
               await deleteById(id);
               context.goTo('/catalog');
            }
        })
    };
};

function createIdeaHTML(idea,isOwner) {
    let html = `<img class="det-img" src="${idea.img}" />
    <div class="desc">
        <h2 class="display-5">${idea.title}</h2>
        <p class="infoType">Description:</p>
        <p class="idea-description">${idea.description}</p>
    </div>`;


    //NB!!! този див ни трябва за всяка идея, но те нямат общ родител в html и затова ще се въведе чрез фрагмент
    /*<div class="desc">
                <h2 class="display-5">Dinner Recipe</h2>
                <p class="infoType">Description:</p>
                <p class="idea-description">There are few things as comforting as heaping bowl of pasta at the end of a long
                    day. With so many easy pasta recipes out there, there's something for every palate to love. That's why
                    pasta
                    makes such a quick, easy dinner for your family—it's likely to satisfy everyone's cravings, due to its
                    versatility.</p>
            </div>
            <div class="text-center">
                <a class="btn detb" href="">Delete</a>
            </div>*/
    if (isOwner) {
        html += `<div class="text-center">
                <a id ='deleteBtn' class="btn detb" href="">Delete</a>
                </div>`
    }


    return html;
}       