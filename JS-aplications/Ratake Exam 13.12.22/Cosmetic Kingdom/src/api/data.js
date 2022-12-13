import * as api from './api.js'

const endpoints = {

    all: "/data/products?sortBy=_createdOn%20desc",
    getById: "/data/products/",
    create: "/data/products",
    edit: "/data/products/",
    delete: "/data/products/",
};

export async function getAll() {
    return await api.get(endpoints.all);
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

