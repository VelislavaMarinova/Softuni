import { register } from "../api/users.js";

const section = document.getElementById('registerPage');


const form = section.querySelector('form');
form.addEventListener('submit', onSubmit);
let ctx = null

export function showRegister(context) { //context - dependency-та
    context.showSection(section);//ТОЗИ модул не импортира нищо,а чака context да дойде отвън и вътре в него 
    ctx = context                        //искаме да имаме достъп до функция, която като я извикаме, тя да визуализира секцията, която и подаваме.
}
async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');

    await register(email, password)// await защото ф. логин прави пост заявка и връща промис
    //резултата не ни интересува и не го хващаме в променлива
    //логин ще се погрижи всичко да бъде запазено в сторидж
    //ако логин хвърли ексепшън, това също ще хвърли ексепшън и приключва изпълнението
    //ако не хвърли ексепшън, ние искаме да редиректнем
    //редирект ще направим с контекста, в който имаме ф. гото, на к. като подадем име тя го приема и отиваме там
    form.reset();
    ctx.updateNav();
    ctx.goTo('/');
}
