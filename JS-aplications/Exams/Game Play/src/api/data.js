import * as api from './api.js'

const endpoints = {

    all: "/data/games?sortBy=_createdOn%20desc",
    recentlyAdded: "/data/games?sortBy=_createdOn%20desc&distinct=category",
    getById: "/data/games/",
    create: "/data/games",
    edit: "/data/games/",
    delete: "/data/games/"
};

export async function getAll() {
    return await api.get(endpoints.all);
};

export async function getResentlyAdded() {
    return await api.get(endpoints.recentlyAdded);
};
export async function getById(id) {
    return api.get(endpoints.getById + id);
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

