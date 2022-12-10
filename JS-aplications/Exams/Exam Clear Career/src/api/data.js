import * as api from './api.js'

const endpoints = {

    all: "/data/offers?sortBy=_createdOn%20desc",
    getById: "/data/offers/",
    create: "/data/offers",
    edit: "/data/offers/",
    delete: "/data/offers/"
};

export async function getAll() {
    return await api.get(endpoints.all);
};

export async function getById(id) {
    return api.get(endpoints.getById + id);
};

// export async function getMyItems(userId) {
//     return api.get(endpoints.myItems(userId))
// };

export async function createCard(data) {
    return api.post(endpoints.create, data);
};

export async function editCard(id, data) {
    return api.put(endpoints.edit + id, data);
};

export async function deleteCard(id,) {
    return api.del(endpoints.delete + id);
};

