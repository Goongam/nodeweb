const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req, res)=>{
    res.send('HOME');
})
app.listen(port, () => {
    console.log(`${port} 에서 서버 실행중`);
    
})