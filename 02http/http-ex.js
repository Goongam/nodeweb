// ./02http/http-ex.js
const http = require('http');
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write("Hello");
    res.end("World \n");
});

server.listen(3000, '127.0.0.1', (req, res) => {
    console.log('히히');
});