const knex = require("../model/knex.js")



async function getAllPersos(){
    return await knex('persojjk').select('*')
}

async function getOnePerso(id){
    return await knex("persojjk").where("id", id)
}

async function postPerso(perso){
    return await knex("persojjk").insert(perso)
}

async function updatePerso(id, perso){
    return await knex("persojjk").where("id", id).update(perso)
}

async function deletePerso(id){
    return await knex("persojjk").where("id", id).del()
}


module.exports ={
    getAllPersos,
    getOnePerso,
    postPerso,
    updatePerso,
    deletePerso
} 
    