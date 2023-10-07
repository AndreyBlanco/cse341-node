const routes = require('express').Router();
const temples = require('../controllers/temple.js');

routes.get('/', temples.findAll);
routes.get('/:temple_id', temples.findOne);
routes.post('/', temples.create);
routes.post('/:temple_id', temples.update);

module.exports = routes;
