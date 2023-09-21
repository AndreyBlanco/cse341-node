
const routes = require('express').Router();

const myControllers = require('../controllers');

routes.get('/', myControllers.sayName);

module.exports = routes;