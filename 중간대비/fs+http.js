const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
    const path = url.parse(req.url, true).pathname;  
 
    res.setHeader('Content-Type', 'text/html');
    if(path === '/asd'){
        fs.readFile('./file.html', (err, data) => {
            if(!err){
                res.statusCode = 200;
                res.end(data.toString() + "비동기로 실행");
            }
        })
    }else{
        const file = fs.readFileSync('./file.html');
        res.end(file.toString());
    }
});



server.listen(3000, () => {
    console.log('실행중');
    
});