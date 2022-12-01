import { get,post,put,del } from './api.js'
const endpoints={
    'login': '/users/login',
    'register':'/users/register'
}

export async function login(email, password) {
    const res = await post(endpoints.login,{email,password});
    localStorage.setItem("userData",JSON.stringify(res));//запазваме получените данни за user в localStorage/sessionStorage
    return res; 
}

export async function register(email,password){
    const res = await post(endpoints.register,{email,password});
    localStorage.setItem("userData",JSON.stringify(res))
    return res; 
}