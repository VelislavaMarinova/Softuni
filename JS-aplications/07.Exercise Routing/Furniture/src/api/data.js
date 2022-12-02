import { get, post, put, del } from './api.js';
const endpoints = {
    'login': '/users/login/',
    'register': '/users/register/',
    "logout": "/users/logout/",
    "catalog": "/data/catalog/",
    "myFurniture": "/data/catalog?where=_ownerId%3D%22"
}
// •	Login User (POST): http://localhost:3030/  
export async function login(email, password) {
    const res = await post(endpoints.login, { email, password });
    localStorage.setItem("userData", JSON.stringify(res));//запазваме получените данни за user в localStorage/sessionStorage
    return res;
};
// •	Register User (POST): http://localhost:3030 
export async function register(email, password) {
    const res = await post(endpoints.register, { email, password });
    localStorage.setItem("userData", JSON.stringify(res));
    return res;
};
// •	Logout User (GET): http://localhost:3030/users/logout
export async function logout() {
    const res = await del(endpoints.logout);
    localStorage.removeItem('userData');
    return res;
};
// •	Create Furniture (POST): http://localhost:3030/data/catalog
export async function createItem(data) {
    const res = await post(endpoints.catalog, data);
    return res;
};

//All Furniture (GET): http://localhost:3030/data/catalog
export async function getAllItems() {
    const res = await get(endpoints.catalog);
    return res;
};

// •	Furniture Details (GET): http://localhost:3030/data/catalog/:id 
export async function itemDetails(id) {
    const res = await get(endpoints.catalog + id);
    return res;
};
// •	Update Furniture (PUT): http://localhost:3030/data/catalog/:id
export async function editItem(id, data) {
    const res = await put(endpoints.catalog + id, data);
    return res;
};
// •	Delete Furniture (DELETE):  http://localhost:3030/data/catalog/:id
export async function deleteItem(id) {
    const res = await del(endpoints.catalog + id)
    return res;
};
// •	My Furniture (GET): http://localhost:3030/data/catalog?where=_ownerId%3D%22{userId}%22
export async function getMyItems() {
    //{userId}%22
    const usedData = JSON.parse(localStorage.getItem('userData'));
    const userId = usedData && usedData._id //ако има userData, тогава вземи userData._id
    let id = `${{ userId } % 22}`
    const res = await get(endpoints.myFurniture + id);
    return res;
}