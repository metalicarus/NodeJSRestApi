const express = require('express');
const app = express();


app.use(express.json({limit: '5mb'}));


module.exports = app;
