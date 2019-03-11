'use-strict';

const express = require('express');

const PORT = process.env.FRONT_HOST ? 80 : 8080;
const HOST = process.env.FRONT_HOST ? '0.0.0.0' : 'localhost';
const isAdmin = false;

const app = express();
app.get('/', (req, res) => {
    res.send('Hello\n');
});

app.get('/admin', (req, res) => {
    if (isAdmin) {
        res.send('Hello Admin\n');
    } else {
        throw new Error('Not Admin')
    }
});

const server = app.listen(PORT, HOST);
console.log(`Running on http://${process.env.FRONT_HOST ? process.env.FRONT_HOST : HOST + ':' + PORT}`);

module.exports = server;
