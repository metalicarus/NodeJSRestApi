const service = require('../services/student');

exports.findAll = async (request, response) => {
    response.status(200).json(await service.findAll(request.query));
}
exports.findById = async (request, response) => {
    response.status(200).json(await service.findById(request.params.academicRegistry))
}


