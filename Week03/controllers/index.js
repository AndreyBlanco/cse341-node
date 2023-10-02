const { ObjectId } = require('mongodb');
const mongodb = require('../db/connect');

const getData = async(req, res, next) => {
    const result = await mongodb.getDb().db().collection('contacts').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
    });
};

const addContact = async (req, res) => {
    const newContact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
    const result1 = await mongodb.getDb().db().collection('contacts').insertOne(newContact);
    if (result1.acknowledged) {
        res.status(201).json(result1);
    } else {
        res.status(500).json(result1.error || 'Error adding the contact. ' + result1.acknowledged);
    }
    
};

const updateContact = async (req, res) => {
    const userId = new ObjectId(req.params.id);

    const newInfo = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
    const result2 = await mongodb.getDb().db().collection('contacts').replaceOne({_id: userId}, newInfo);
    if (result2.modifiedCount > 0) {
        res.status(204).send('Info replaced.');
    } else {
        res.status(500).json(result2.error || 'Error updating the contact.');
    }
};

const deleteContact = async (req, res) => {
    const userId = new ObjectId(req.params.id);

    const result3 = await mongodb.getDb().db().collection('contacts').deleteOne({_id: userId}, true);
    if (result3.deletedCount > 0) {
        res.status(204).send(userId + 'Deleted');
    } else {
        res.status(500).json(result3.error || 'Error deleting the contact.');
    }
};

module.exports = {getData, addContact, updateContact, deleteContact};