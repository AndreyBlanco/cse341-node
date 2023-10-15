const swagger = require('./swagger');
const express = require('express');
const router = express.Router();

router.use('/', swagger);
router.use('/students', require('./students'));
router.use('/disabilities', require('./disabilities'));

module.exports = router;
