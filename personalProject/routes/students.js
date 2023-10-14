const express = require('express');
const router = express.Router();

const myControllers = require('../controllers/students');

router.get('/', myControllers.getStudents);

router.get('/:id', myControllers.getOneStudent);

router.post('/', myControllers.addStudent);

router.put('/:id', myControllers.updateStudent);

router.delete('/:id', myControllers.deleteStudent);

module.exports = router;