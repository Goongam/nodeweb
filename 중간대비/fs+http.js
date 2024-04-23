const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    const file = fs.readFileSync('./file.html');
    res.end(file.toString());
});


server.listen(3000, () => {
    console.log('실행중');
    
});