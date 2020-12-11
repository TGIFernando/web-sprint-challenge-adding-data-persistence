// build your server here
const express = require('express');
const morgan = require('morgan')
const cors = require('cors')




const server = express()

server.use(cors())
server.use(morgan('dev'))
server.use(express.json())





server.get('/', (_, res) => {
    res.send(`<h2>API is online<h2>`)
})



module.exports = server;