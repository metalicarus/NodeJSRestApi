const repository = require ('../infra/repositories/student.js');
const {response} = require("express");

exports.findAll = async (params) => {
    return await repository.findAll(params);
}
exports.findById = async (id) => {
    return await repository.findById({academicRegistry: id});
}
