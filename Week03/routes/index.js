
const express = require('express');
const routes = express.Router();

const myControllers = require('../controllers');

routes.get('/', myControllers.getData);

routes.post('/', myControllers.addContact);

routes.put('/:id', myControllers.updateContact);

routes.delete('/:id', myControllers.deleteContact);

module.exports = routes;