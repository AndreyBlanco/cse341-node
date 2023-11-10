const myControllersd = require('../controllers/disabilities');
const validationd = require('../middleware/validate');
const expressd = require('express');
const routerd = expressd.Router();

routerd.get('/', myControllersd.getDisabilities);

routerd.get('/:id', myControllersd.getOneDisability);

routerd.post('/', validationd.saveDisability, myControllersd.addDisability);

routerd.put('/:id', validationd.saveDisability, myControllersd.updateDisability);

routerd.delete('/:id', myControllersd.deleteDisability);

module.exports = routerd;
