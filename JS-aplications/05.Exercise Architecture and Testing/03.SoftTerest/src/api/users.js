import {get,post} from './api.js';

const endpoints = {
     login:'/users/login',
     logout:'/users/logout',
     register:'/users/register'
}

export async function login(email, password){
    //прави пост заявка с email, password, и ако получим положителен отговор трябва да запазим данните в localstorage
     const user = await post(endpoints.login,{email,password});
     localStorage.setItem('user',JSON.stringify(user));
};
export async function register(email, password){
     //прави пост заявка с email, password, и ако получим положителен отговор трябва да запазим данните в localstorage
     const user = await post(endpoints.register,{email,password});
     localStorage.setItem('user',JSON.stringify(user));
};
export async function logout(){
    get(endpoints.logout);
    localStorage.removeItem('user');
     
};
