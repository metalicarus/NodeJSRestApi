const router = require('express').Router();
const handler = require('../controllers/handlers/handler');
const controller = require('../controllers/student');

router.get('/findAll', (request, response) => {
    handler(controller.findAll(request, response));
});

module.exports = router;