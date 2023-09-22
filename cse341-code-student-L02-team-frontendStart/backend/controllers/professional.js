const mongodb = require('../db/connect');

console.log('punto control');

const getData = async(req, res, next) => {
    const result = await mongodb.getDb().db().collection('week2group').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
    });
};

console.log(getData);

module.exports = {getData};