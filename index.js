'use strict';

require('dotenv').config();
const { start } = require('./src/server');
const { db } = require('./src/models/index');

const PORT = process.env.PORT;
console.log(PORT)

db.sync()
    .then(() => {
        start(PORT);
    }).catch(e => {
        console.error('Could not start server', e.message);
    });