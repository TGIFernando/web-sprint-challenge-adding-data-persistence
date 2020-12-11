// build your `Task` model here
const db = require('../../data/dbConfig')

module.exports = {
    get,
    addTask
}

function get(){
    return db('tasks')
}

async function addTask(task){
    const[id] = await db('tasks').insert(task)
    return db('tasks').where({id}).first()
}