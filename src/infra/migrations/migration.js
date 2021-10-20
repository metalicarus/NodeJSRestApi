const connection = require('../contexts/database');

exports.commit = () => {
    connection.query(`
                    CREATE TABLE REST_API.Students(Name varchar(100) NOT NULL,
                    Email varchar(50) NOT NULL,
                    AcademicRegistry varchar(10) NOT NULL,
                    Cpf varchar(12) NOT NULL,
                    CONSTRAINT Students_PK PRIMARY KEY (AcademicRegistry))`,
     function (error) {
        if (error)
            throw error;
    });
    connection.end();
};
exports.rollback = () => {
    connection.query(`DROP TABLE IF EXISTS REST_API.Students`, function (error) {
        if (error)
            throw error;
    });
    connection.end();
};
