// build your `/api/resources` router here
const express = require('express')
const Resource = require('./model')

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const rec = await Resource.getResources()
        res.status(200).json(rec)
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
})

router.post('/', async (req, res) => {
    try {
        const task = await Resource.addResource(req.body)
        res.status(201).json(task)
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
})

module.exports = router