const host = 'http://localhost:3030';

async function request(method, url, data) {//1. method = 'get' -  ако не е подадена стойсност, приеми, че заявката е гет
    const options = {                   // местим метода на 1во място за да можем да го bind и трябва да му махнем default-ната
        // стойност
        method,
        headers: {}
    };
    if (data != undefined) {//мн е важно да направим тази проверка data!=undefined, защото, ако е само
        //if(data) ако на data се подаде falsy стойност тази проверка няма да мине
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }
    const user = JSON.parse(localStorage.getItem('user'));//в момента в к. имаме user, всяка една заявка ще бъде ауторизирана
    if(user){
        const token = user.accessToken;
        options.headers['X-Authorization'] = token;
    }

    try {
        const response = await fetch(host+url, options);
        if (response.ok != true) {
            if(response.status == 403){
                localStorage.removeItem(user)
            }
            const error = response.json();
            throw new Error(error.message)
        };

        //при logout responce.status = 204, празен респонс като го парснем
        //към response.json(); връща undefined
        if (response.status === 204) {
            return response
        } else {
            return response.json();
        }
    } catch (error) {
        alert(error.message);
        throw error;
    }
}
//извършване на декорация*
const get = request.bind(null, 'get');
const post = request.bind(null, 'post');
const put = request.bind(null, 'put');
const del = request.bind(null, 'delete');
//вместо да ги експотнем 1х1 ги експортираме всички накуп 

export {
    get,
    post,
    put,
    del as delete//съотвтно тези к. го импортират ще имат ф. delete
};

