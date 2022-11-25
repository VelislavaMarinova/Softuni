import { createIdea } from "../api/data.js";

const section = document.getElementById('createPage');
const form = section.querySelector('form');
form.addEventListener('submit', onSubmit);
let ctx = null;

export function showCreate(context) { //context - dependency-та
    context.showSection(section);//ТОЗИ модул не импортира нищо,а чака context да дойде отвън и вътре в него 
    ctx = context                  //искаме да имаме достъп до функция, която като я извикаме, тя да визуализира секцията, която и подаваме.
}
async function onSubmit(e) {
    e.preventDefault()
    const formData = new FormData(form)
    let title = formData.get('title');
    let describtion = formData.get('description');
    let imgUrl = formData.get('imageURL');

    await createIdea({
        title,
        describtion,
        imgUrl
    });
    form.reset();//във формите е хубаво да се прави ресет
    ctx.goTo('/catalog');

    // await createIdea({title,describtion,imgUrl})
    // ctx.goTo('/catalog');//redirect
}