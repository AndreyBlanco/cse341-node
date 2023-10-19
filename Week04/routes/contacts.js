const express = require('express');
const router = express.Router();

const myControllers = require('../controllers');
const validation = require('../middleware/validate');

router.get('/', myControllers.getData);

router.get('/:id', myControllers.getOne);

router.post('/', validation.saveContact, myControllers.addContact);

router.put('/:id', myControllers.updateContact);

router.delete('/:id', myControllers.deleteContact);

module.exports = router;