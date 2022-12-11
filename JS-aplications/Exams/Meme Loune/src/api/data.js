import * as api from './api.js'

const endpoints = {

    all: "/data/memes?sortBy=_createdOn%20desc",
    getById: "/data/memes/",
    myPage: (userId) => `/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
    create: "/data/memes",
    edit: "/data/memes/",
    delete: "/data/memes/"
};

export async function getAll() {
    return await api.get(endpoints.all);
};

export async function getById(id) {
    return api.get(endpoints.getById + id);
};

export async function getMy(userId) {
    return api.get(endpoints.myPage(userId))
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

