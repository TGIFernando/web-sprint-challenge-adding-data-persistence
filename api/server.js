// build your server here
const express = require('express');
const morgan = require('morgan')
const cors = require('cors')
const projectRouter = require('./project/router')
const resourceRouter = require('./resource/router')
const tskRouter = require('./task/router')



const server = express()

server.use(cors())
server.use(morgan('dev'))
server.use(express.json())
server.use('/api/projects', projectRouter)
server.use('/api/resources', resourceRouter)
server.use('/api/tasks', tskRouter)


server.get('/', (_, res) => {
    res.send(`<h2>API is online<h2>`)
})



module.exports = server;