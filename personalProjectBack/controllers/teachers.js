const ObjectId = require('mongodb').ObjectId;
const mongodb = require('../db/connect');

const getTeachers = (req, res) => {
  mongodb
    .getDb()
    .db()
    .collection('teachers')
    .find()
    .toArray((err, lists) => {
      if (err) {
        res.status(400).json({ message: err });
      }
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    });
};

const getOneTeacher = async (req, res) => {
  const userId = new ObjectId(req.params.id);
    
  mongodb
    .getDb()
    .db()
    .collection('teachers')
    .find({ _id: userId })
    .toArray((err, lists) => {
      if (err)  {
        res.status(400).json({ message: err });
      } else if (lists[0] == undefined) {
        res.status(400).json({ message: `Teacher ${userId} doesn´t exist.` });
      } else {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
      }
    });
};

const addTeacher = async (req, res) => {
  const newContact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password
  };
  const result1 = await mongodb.getDb().db().collection('teachers').insertOne(newContact);
  if (result1.acknowledged) {
    res.status(201).json(result1);
  } else {
    res.status(500).json(result1.error || 'Error adding the teacher. ' + result1.acknowledged);
  }
};

const updateTeacher = async (req, res) => {
  const userId = new ObjectId(req.params.id);

  const newInfo = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password
  };
  const result2 = await mongodb
    .getDb()
    .db()
    .collection('teachers')
    .replaceOne({ _id: userId }, newInfo);
  if (result2.modifiedCount > 0) {
    res.status(200).json('Info replaced.');
  } else {
    res.status(500).json(result2.error || 'Error updating the teacher info.');
  }
};

const deleteTeacher = async (req, res) => {
  const userId = new ObjectId(req.params.id);

  const result3 = await mongodb
    .getDb()
    .db()
    .collection('teachers')
    .deleteOne({ _id: userId }, true);
  if (result3.deletedCount > 0) {
    res.status(200).json(userId + ' was deleted.');
  } else {
    res.status(500).json(result3.error || 'Error deleting the teacher ' + userId);
  }
};

module.exports = { getTeachers, getOneTeacher, addTeacher, updateTeacher, deleteTeacher };
