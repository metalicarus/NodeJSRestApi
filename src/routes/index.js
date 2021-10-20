const router = require('express').Router();

router.use('/api/students', require('./student'));
module.exports = router;