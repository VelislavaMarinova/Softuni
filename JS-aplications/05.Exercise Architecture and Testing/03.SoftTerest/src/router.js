//ще направим router.js да експортира фактори ф. initialize,к приема списъка с контролери (links = controllers)
//създава обект и го връща


// let links = {}



export function initialize(links) {
    const main = document.getElementById('main')
    const nav = document.querySelector('nav')
    nav.addEventListener('click', onNavigate);
    const context = {//с това правим redirect
        showSection,
        goTo,
        updateNav
    };
    return context
    function showSection(section) {//тази ф. искаме да стигне до home.js
        // const section = links[name];
        //main.appendChild(section);    //проблем: показва нов секшън но не скрива предходния
        //трябва да го извикаме при старт на проложението 
        main.replaceChildren(section)
    }

    // window.showSection = (name) => {
    //     const section = links[name];
    //     //main.appendChild(section);    //проблем: показва нов секшън но не скрива предходния
    //     main.replaceChildren(section)
    // } 
    function onNavigate(e) {
        let target = e.target;//изваждаме таргета, и ако случайно сме кликнали на картинка, да премести таргета върху неговия 
        if (target.tagName == 'IMG') {//парент елемент, к е анкър тага
            target = target.parentElement;
        }
        if (target.tagName == 'A') {
            e.preventDefault()//тъй като anchor tags навигират нанякъде и имат дефолтно поведение
            const url = new URL(target.href)
            const name = url.pathname
            // console.log(url.pathname)
            goTo(name)

            if (typeof handler == 'function') {
                handler(context)
            }
            // console.log(handler);
        }
    };

    function goTo(name,...params) {//за да показва детайли, трябва да добавим още един параметър-ID
        //...params  е най чистия патерн за това
        const handler = links[name];

        if (typeof handler == 'function') {
            handler(context,...params)
        }
    };
    function updateNav() {
        //ще проверим дали има user и щепокажем кое да се вижда за User и за Guest
        //тази логика трябва да се добави в context
        const user = localStorage.getItem('user');
        if (user) {
            nav.querySelectorAll('.user').forEach(element => element.style.display = 'block');
            nav.querySelectorAll('.guest').forEach(element => element.style.display = 'none');
    
        } else {
            nav.querySelectorAll('.user').forEach(element => element.style.display = 'none');
            nav.querySelectorAll('.guest').forEach(element => element.style.display = 'block');
        }
    };
};

