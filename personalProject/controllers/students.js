const ObjectId = require('mongodb').ObjectId;
const mongodb = require('../db/connect');

const getStudents = async(req, res, next) => {
    const result = await mongodb.getDb().db().collection('students').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
    });
};

const getOneStudent = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const result = await await mongodb.getDb().db().collection('students').find({_id: userId});
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
    });
};

const addStudent = async (req, res) => {
    const newContact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        grade: req.body.grade,
        disabilities: req.body.disabilities
    };
    const result1 = await mongodb.getDb().db().collection('students').insertOne(newContact);
    if (result1.acknowledged) {
        res.status(201).json(result1);
    } else {
        res.status(500).json(result1.error || 'Error adding the student. ' + result1.acknowledged);
    }
    
};

const updateStudent = async (req, res) => {
    const userId = new ObjectId(req.params.id);

    const newInfo = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        grade: req.body.grade,
        disabilities: req.body.disabilities
    };
    const result2 = await mongodb.getDb().db().collection('students').replaceOne({_id: userId}, newInfo);
    if (result2.modifiedCount > 0) {
        res.status(204).send('Info replaced.');
    } else {
        res.status(500).json(result2.error || 'Error updating the student info.');
    }
};

const deleteStudent = async (req, res) => {
    const userId = new ObjectId(req.params.id);

    const result3 = await mongodb.getDb().db().collection('students').deleteOne({_id: userId}, true);
    if (result3.deletedCount > 0) {
        res.status(200).send(userId + ' was deleted.');
    } else {
        res.status(500).json(result3.error || 'Error deleting the disability.' + userId);
    }
};

module.exports = {getStudents, getOneStudent, addStudent, updateStudent, deleteStudent};