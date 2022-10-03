const knex = require("../model/knex.js")



function getAllPersos(){
    return knex('persojjk').select('*')
}

function getOnePerso(id){
    return knex("persojjk").where("id", id)
}

function postPerso(perso){
    return knex("persojjk").insert(perso)
}

function updatePerso(id, perso){
    return knex("persojjk").where("id", id).update(perso)
}

function deletePerso(id){
    return knex("persojjk").where("id", id).del()
}


module.exports ={
    getAllPersos,
    getOnePerso,
    postPerso,
    updatePerso,
    deletePerso
} 
    