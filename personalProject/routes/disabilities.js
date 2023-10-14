const express = require('express');
const router = express.Router();

const myControllers = require('../controllers/disabilities');

router.get('/', myControllers.getDisabilities);

router.get('/:id', myControllers.getOneDisability);

router.post('/', myControllers.addDisability);

router.put('/:id', myControllers.updateDisability);

router.delete('/:id', myControllers.deleteDisability);

module.exports = router;