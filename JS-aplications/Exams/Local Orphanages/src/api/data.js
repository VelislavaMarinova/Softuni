import * as api from './api.js'

const endpoints = {

    all: "/data/posts?sortBy=_createdOn%20desc",
    getById: "/data/posts/",
    create: "/data/posts",
    edit: "/data/posts/",
    delete: "/data/posts/",
    myData: (userId) => `/data/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
};

export async function getAll() {
    return await api.get(endpoints.all);
};

export async function getById(id) {
    return api.get(endpoints.getById + id);
};

export async function getMy(userId) {
    return api.get(endpoints.myData(userId))
};

export async function createCard(data) {
    return api.post(endpoints.create, data);
};

export async function editCard(id, data) {
    return api.put(endpoints.edit + id, data);
};

export async function deleteCard(id,) {
    return api.del(endpoints.delete + id);
};

