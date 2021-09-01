'use strict';

const express = require('express');

const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');

const { signUp, signIn } = require('./auth/basic')

const server = express();

server.use(express.json());


server.get('/', (req, res) => {
    res.status(200).send('Hello 👋 to basic-auth server 🖥')
})



server.post('/signup', signUp, (req, res, next) => {

    res.status(201).json(req.record);

});


server.post('/signin', signIn, (req, res, next) => {

    res.status(200).json(req.user)

});


server.use('*', notFoundHandler)
server.use(errorHandler)



const start = PORT => {
    server.listen(PORT, () => console.log('server up ', PORT))
}

module.exports = {
    server: server,
    start: start
}