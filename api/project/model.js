// build your `Project` model here
const db = require('../../data/dbConfig')

module.exports = {
    get,
    addProject
}

function get(){
    return db('projects')
}

async function addProject(proj){
    const [id] = await db('projects').insert(proj);
    return db('projects').where({id}).first()
}