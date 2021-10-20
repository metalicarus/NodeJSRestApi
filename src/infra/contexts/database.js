var database = require('mysql');
var configs = require('../../configs/index').context.databases;

const connection = database.createConnection({
    host: 'localhost',
    port: '3306',
    database: 'REST_API',
    user: 'root',
    password: 'm16s97aa'
});

connection.connect(function(err) {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }
    console.log('Connected as id ' + connection.threadId);
});

module.exports = connection;