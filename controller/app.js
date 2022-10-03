const knex = require("../model/knex.js")



function getAllPersos(){
    return knex('persojjk').select('*')
}

async function getOnePerso(id){
    return knex("persojjk").where("id", id)
}

async function postPerso(perso){
    return knex("persojjk").insert(perso)
}

async function updatePerso(id, perso){
    return knex("persojjk").where("id", id).update(perso)
}

async function deletePerso(id){
    return knex("persojjk").where("id", id).del()
}


module.exports ={
    getAllPersos,
    getOnePerso,
    postPerso,
    updatePerso,
    deletePerso
} 
    