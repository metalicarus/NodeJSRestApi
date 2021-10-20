const connection = require('../contexts/database');


exports.insert = async (params = { sortBy: undefined, direction: undefined, page: undefined, perPage: undefined }) => {
    const sql = `SELECT * FROM students ${params.sortBy === undefined ? 'ORDER BY name ASC ' : 'ORDER BY ' + params.sortBy}`
    connection.query(sql, function(error, rows){
        if (error)
            throw error 
        rows.array.forEach(element => {
            console.log(element);
        });
    })
}

exports.findAll = async () => {
    connection.query()
}