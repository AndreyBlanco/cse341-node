const express = require('express');
const router = express.Router();

const myControllers = require('../controllers');

router.get('/', myControllers.getData);

router.get('/:id', myControllers.getOne);

router.post('/', myControllers.addContact);

router.put('/:id', myControllers.updateContact);

router.delete('/:id', myControllers.deleteContact);

module.exports = router;