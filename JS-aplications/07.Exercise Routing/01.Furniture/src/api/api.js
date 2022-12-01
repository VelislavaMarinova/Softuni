const host = 'http://localhost:3030';

async function requester(method, url, data) {
    const user = JSON.parse(sessionStorage.getItem('user'));
    const option = {
        method,
        headers: {}
    }

    if (data) {
        option.headers["Content-type"] = "application/json";
        option.body = JSON.stringify(data);
    }

    if (user) {
        const token = user.accessToken;
        option.headers['X-Authorization'] = token;
    }

    try {
        const response = await fetch(host + url, option);
        if (!response.ok) {
            if(response.status === 403) {
                sessionStorage.removeItem('user');
            }
            const err = await response.json();
            throw new Error(err.message);
        }
        if(response.status === 204) {
            return response;
        } else {
            return response.json();
        }

    } catch (error) {
        alert(error.message);
        throw error;
    }
}

const get = requester.bind(null, 'get');
const post = requester.bind(null, 'post');
const put = requester.bind(null, 'put');
const del = requester.bind(null, 'delete');

export {
    get,
    post,
    put,
    del
}
// const host = 'http://localhost:3030';

// async function request(url, options) {
//     try {
//         const response = await fetch(host + url, options)
//         if (!response.ok) {//if response fails
//             const err = await response.json();
//             throw new Error(err.message);//връща се от сървъра
//         }
//         try {
//             const data = await response.json();
//             return data
//         } catch (error) {
//             alert(error.message);
//             return error;
//         }
//     } catch (error) {
//         alert(error.message);
//         return error;
//     }
// };

// function getOption(method, body) {
//     const options = {
//         method,
//         headers: {},
//     }
//     //for authorization and tokens
//     //X-Authorization: {token}  
//     const user = JSON.parse(localStorage.getItem('userData'))//NB когато ги запазваме в localeStorage е много важно да вземем същото име userData
    
//     if (user) {
        
//         const token = user.accessToken;
//         options.headers["X-Authorization"] = { token }
//     }
//     if (body) {
//         options.headers["content-type"] = 'Application/json'
//         options.body = JSON.stringify(body)
//     }
//     return options;
// };

// export async function get(url){
//     return await request(url,getOption("GET"))
// };

// export async function post(url,data){
//     return await request(url,getOption("POST",data ))
// };
// export async function put(url,data){
//     return await request(url,getOption("PUT",data ))
// };
// export async function del(url){
//     return await request(url,getOption("DELETE"))
// };