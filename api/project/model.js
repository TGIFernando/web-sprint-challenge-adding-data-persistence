// build your `Project` model here
const db = require('../../data/dbConfig')
const mappers = require('../../data/helpers/mappers')

module.exports = {
    get,
    addProject
}

async function get(){
    const proj =  await db('projects')
    const adjusted = proj.map(p => {
        return {...p, completed: mappers.intToBoolean(p.completed)}
    })
    return(adjusted)
}

async function addProject(proj){
    const [id] = await db('projects').insert(proj);
    return db('projects').where({id}).first()
}