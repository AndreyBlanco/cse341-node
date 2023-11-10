const express = require('express');
const router = express.Router();

const myControllers = require('../controllers/students');
const validation = require('../middleware/validate');

router.get('/', requiresAuth(), myControllers.getStudents);

router.get('/:id', requiresAuth(), myControllers.getOneStudent);

router.post('/', requiresAuth(), validation.saveStudent, myControllers.addStudent);

router.put('/:id', requiresAuth(), validation.saveStudent, myControllers.updateStudent);

router.delete('/:id', requiresAuth(), myControllers.deleteStudent);

module.exports = router;
