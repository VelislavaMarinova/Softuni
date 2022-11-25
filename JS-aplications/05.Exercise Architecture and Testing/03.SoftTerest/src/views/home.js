const section = document.getElementById('homePage');

export function showHome(context){ //context - dependency-та
context.showSection(section);//ТОЗИ модул не импортира нищо,а чака context да дойде отвън и вътре в него 
                            //искаме да имаме достъп до функция, която като я извикаме, тя да визуализира секцията, която и подаваме.
}