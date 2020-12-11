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
    const ah = await db('projects').where({id}).first()
    const newProj = {...ah, completed:mappers.intToBoolean(ah.completed)}
    return newProj
}