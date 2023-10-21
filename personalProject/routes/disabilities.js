const express = require('express');
const router = express.Router();

const myControllers = require('../controllers/disabilities');
const validation = require('../middleware/validate');

router.get('/', myControllers.getDisabilities);

router.get('/:id', myControllers.getOneDisability);

router.post('/', validation.saveDisability, myControllers.addDisability);

router.put('/:id', validation.saveDisability, myControllers.updateDisability);

router.delete('/:id', myControllers.deleteDisability);

module.exports = router;
