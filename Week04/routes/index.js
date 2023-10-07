const swagger = require('./swagger');
const express = require('express');
const router = express.Router();

router.use('/', swagger);
router.use('/contacts', require('./contacts'));

module.exports = router;