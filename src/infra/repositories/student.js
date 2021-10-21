const connection = require('../contexts/database');


exports.findAll = async (params = { sortBy: undefined, direction: undefined, page: undefined, perPage: undefined }) => {
    let sql = "SELECT * FROM students";
    if (params.sortBy !== undefined)
        sql += ` ORDER BY ${params.sortBy} ${params.direction}`
    if (params.perPage !== undefined)
        sql += ` LIMIT ${params.perPage}`
    if (params.page !== undefined)
        sql += ` OFFSET ${parseInt(params.page - 1) * parseInt(params.perPage)}`
    return new Promise((resolve, reject) => {
        connection.query(sql, (err, rows) => {
            if (err)
                reject(err)
            resolve(rows)
        })
    })
}
exports.findById = async (params = {academicRegistry: undefined}) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM students WHERE academicRegistry = '${params.academicRegistry}' LIMIT 1`, (err, row) => {
            if (err)
              reject(err)
            if (row.length === 1)
                resolve(row[0])
            reject(404)
        })
    })
        .catch(e => {
            throw new Error(404)
        })
}
exports.insert = async (params = {name: undefined, email: undefined, academicRegistry: undefined, cpf: undefined}) => {
    let sql = `INSERT INTO students (name, email, academicRegistry, cpf) VALUES ('${params.name}', '${params.email}', '${params.academicRegistry}', '${params.cpf}')`
    return new Promise((resolve, reject) => {
        connection.query(sql, (err, row) => {
            if (err)
                reject(err)
            console.log(row)
        })
    })
}
