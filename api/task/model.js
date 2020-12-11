// build your `Task` model here
const db = require('../../data/dbConfig')
const mappers = require('../../data/helpers/mappers')

module.exports = {
    get,
    addTask
}

async function get(){
    const ta = await db('tasks as t')
        .join('projects as p', 'p.id', 't.project_id')
        .select('p.description as project_description', 'p.name as project_name', 't.completed', 't.description', 't.id', 't.notes')
    const newTask = ta.map(itm => {
        return {...itm, completed: mappers.intToBoolean(itm.completed)}
    })
    return newTask
}

async function addTask(task){
    const[id] = await db('tasks').insert(task)
    const eh = await db('tasks').where({id}).first()
    const newTask = {...eh, completed: mappers.intToBoolean(eh.completed)}
    return newTask
}