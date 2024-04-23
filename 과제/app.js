// ./HW01-stu/main.js
const express = require('express');
const app = express();

const hostname = '127.0.0.1';
const port = 3000;

const users = require('./routes/users');
const board = require('./routes/boards');
app.use('/',users);

app.use('/',board);

app.listen(port, () => {
  console.log(`Express is running on http://${hostname}:${port}/`);
} );
