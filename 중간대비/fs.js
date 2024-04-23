const fs = require("fs");

//비동기
fs.readFile("./file.txt", (err, data) =>
  console.log('비동기:',data.toString())
);


const file = fs.readFileSync('./file.txt');
console.log('동기:',file.toString());
