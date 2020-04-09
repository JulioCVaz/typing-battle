// express
const express = require('express');
const cors = require('cors');
// server
const server = express();
// config server
server.use(cors());
server.use(express.static('public'));

server.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

server.listen('3333');