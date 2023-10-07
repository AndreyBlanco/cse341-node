const swagger = require('./swagger');
const express = require('express');
const routes = express.Router();

const myControllers = require('../controllers');

routes.use('/', swagger);

routes.get('/', myControllers.getData);

routes.get('/:id', myControllers.getOne);

routes.post('/', myControllers.addContact);

routes.put('/:id', myControllers.updateContact);

routes.delete('/:id', myControllers.deleteContact);

module.exports = routes;