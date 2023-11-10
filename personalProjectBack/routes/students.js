const express = require('express');
const router = express.Router();

const myControllers = require('../controllers/students');
const validation = require('../middleware/validate');

router.get('/', myControllers.getStudents);

router.get('/:id', myControllers.getOneStudent);

router.post('/', validation.saveStudent, myControllers.addStudent);

router.put('/:id', validation.saveStudent, myControllers.updateStudent);

router.delete('/:id', myControllers.deleteStudent);

module.exports = router;
