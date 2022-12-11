import {post, get} from '../api/api.js';
import { clearUserData, setUserData } from '../util.js';

  
export async function login(email, password) {
    const result = await post('/users/login', { email, password });
console.log(result);
    const userData = {
       
        email: result.email,
        id: result._id,
        token: result.accessToken,
        username: result.username
    }
   setUserData(userData);
   
}
export async function register(email, password, username, gender) {
    const result = await post('/users/register', { email, password, username, gender});

    const userData = {
        username: result.username,
        email: result.email,
        id: result._id,
        token: result.accessToken
    }
    setUserData(userData);
   
};

export async function logout(){
 get('/users/logout');
    clearUserData()
};