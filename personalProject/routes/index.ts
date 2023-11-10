const swagger = require('./swagger');
const router = express.Router();

const myControllers = require('../controllers/disabilities');
const validation = require('../middleware/validate');

router.use('/', swagger);
router.use('/students', require('./students'));
router.use('/disabilities', require('./disabilities'));
router.use('/teachers', require('./teachers'));

module.exports = router;
