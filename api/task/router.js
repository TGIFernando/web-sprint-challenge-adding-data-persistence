// build your `/api/tasks` router here
const express = require('express')
const Tasks = require('./model')

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const task = await Tasks.get()
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
})

router.post('/', async (req, res) => {
    try {
        const task = await Tasks.addTask(req.body)
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
})

module.exports = router