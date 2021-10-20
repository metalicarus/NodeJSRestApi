const express = require('express');
const app = express();
const router = require('./routes');
const exception = require('./controllers/handlers/exception');

app.use(express.json({limit: '5mb'}));
app.use(router);
app.use(exception);

module.exports = app;
