const express = require('express');
const server = express();

server.use((req, res, next) => {
    console.log('미들웨어 작동');
    next();
})
server.use('/', require('./modules/user'));

server.listen(3000, ()=>{
    console.log('open2');
});
