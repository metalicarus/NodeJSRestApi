exports.exception = ((err, request, response, next) => {
    console.log('tô aqui!')
    response.status(500).json({
        timestamp: new Date(),
        status: 500,
        error: 'Internal Server Error',
        message: err,
        path: request.path
    })
});
