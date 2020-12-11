// build your `Resource` model here
const db = require('../../data/dbConfig')

module.exports = {
    getResources,
    addResource
}

function getResources(){
    return db('resources')
}

async function addResource(resource) {
    const [id] = await db('resources').insert(resource);
    return db('resources').where({id}).first();
}