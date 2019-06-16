const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();
const usersRouter = require('./users-router')

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use('/users', usersRouter)

server.get('/', (req, res) => {
    console.log(process.env.NODE_ENV)

    res.status(200).send({
        message: 'Server is working'
    })
})

module.exports = server;