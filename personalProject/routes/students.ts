const expresss = require('express');
const routers = expresss.Router();
const myControllers = require('../controllers/students.ts');
const validations = require('../middleware/validate.ts');

routers.get('/', myControllers.getStudents);

routers.get('/:id', myControllers.getOneStudent);

routers.post('/', validations.saveStudent, myControllers.addStudent);

routers.put('/:id', validations.saveStudent, myControllers.updateStudent);

routers.delete('/:id', myControllers.deleteStudent);

module.exports = routers;
