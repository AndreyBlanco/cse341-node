const expresst = require('express');
const routert = expresst.Router();
const myControllerst = require('../controllers/teachers.ts');
const validationt = require('../middleware/validate.ts');

routert.get('/', myControllerst.getTeachers);

routert.get('/:id', myControllerst.getOneTeacher);

routert.post('/', validationt.saveTeacher, myControllerst.addTeacher);

routert.put('/:id', validationt.saveTeacher, myControllerst.updateTeacher);

routert.delete('/:id', myControllerst.deleteTeacher);

module.exports = routert;
