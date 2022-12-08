import * as api from './api.js'

const endpoints = {

    all: "/data/pets?sortBy=_createdOn%20desc&distinct=name",
    getById: "/data/pets/",
    myItems: (userId) => `/data/catalog?where=_ownerId%3D%22${userId}%22`,
    create: "/data/pets",
    edit:"/data/pets/",
    delete: "/data/pets/"
};

export async function getAll() {
    return await api.get(endpoints.all)
};

export async function getById(id) {
    return api.get(endpoints.getById + id)
};

export async function getMyItems(userId) {
    return api.get(endpoints.myItems(userId))
};

export async function createItem(data) {
    return api.post(endpoints.create, data)
};

export async function editItem(id, data) {
    return api.put(endpoints.edit + id,data)
};

export async function deleteItem(id,) {
    return api.del(endpoints.delete + id)
};

