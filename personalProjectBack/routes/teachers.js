const express = require('express');
const router = express.Router();

const myControllers = require('../controllers/teachers');
const validation = require('../middleware/validate');

router.get('/', myControllers.getTeachers);

router.get('/:id', myControllers.getOneTeacher);

router.post('/', validation.saveTeacher, myControllers.addTeacher);

router.put('/:id', validation.saveTeacher, myControllers.updateTeacher);

router.delete('/:id', myControllers.deleteTeacher);

module.exports = router;
