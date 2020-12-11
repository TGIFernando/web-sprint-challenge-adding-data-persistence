// build your `/api/projects` router here
const express = require('express')
const Project = require('./model')

const router = express.Router()

router.get('/', async (req, res,) => {
    try {
        const proj = await Project.get()
        res.status(200).json(proj)
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
})

router.post('/', (req, res)=>{
    Project.addProject(req.body)
    .then(data=>{
        res.status(201).json(data)
    })
    .catch(err=>{
        res.status(500).json({message: err.message})
    })
})

module.exports = router