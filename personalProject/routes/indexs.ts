const swagger = require('./swagger.ts');
const expressi = require('express');
const router = expressi.Router();

router.use('/', swagger);
router.use('/students', require('./students.ts'));
router.use('/disabilities', require('./disabilities.ts'));
router.use('/teachers', require('./teachers.ts'));

module.exports = router;