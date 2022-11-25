import * as api from './api.js';

const endPoints ={
    ideas:'/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc',
    create:'/data/ideas',
    ideaById:'/data/ideas/'
}; 

export async function  getAllIdeas(){
//    return [];//това е за да тестваме ако намя идеи за показване
    return api.get(endPoints.ideas)
};

export async function getById(id){
  return  api.get(endPoints.ideaById+id);
};

export async function createIdea(ideaData){
return api.post(endPoints.create, ideaData)
};

export async function deleteById(id){
api.delete(endPoints.ideaById+id)
};