const swagger = require('./swagger');
const expressi = require('express');
const router = expressi.Router();

router.use('/', swagger);
router.use('/students', require('./students'));
router.use('/disabilities', require('./disabilities'));
router.use('/teachers', require('./teachers'));

module.exports = router;