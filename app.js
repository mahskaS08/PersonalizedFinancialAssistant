
const express=require('express');
const mongoose = require('mongoose');
const app=express();
const session = require('express-session');
const cookieParser = require('cookie-parser');

const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
