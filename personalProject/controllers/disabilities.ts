const getDisabilities = async (req, res) => {
  const result = await mongodb.getDb().db().collection('disabilities').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getOneDisability = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const result = await await mongodb.getDb().db().collection('disabilities').find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const addDisability = async (req, res) => {
  const newContact = {
    disability: req.body.disability,
    description: req.body.description
  };
  const result1 = await mongodb.getDb().db().collection('disabilities').insertOne(newContact);
  if (result1.acknowledged) {
    res.status(201).json(result1);
  } else {
    res.status(500).json(result1.error || 'Error adding the disability. ' + result1.acknowledged);
  }
};

const updateDisability = async (req, res) => {
  const userId = new ObjectId(req.params.id);

  const newInfo = {
    disability: req.body.disability,
    description: req.body.description
  };
  const result2 = await mongodb
    .getDb()
    .db()
    .collection('disabilities')
    .replaceOne({ _id: userId }, newInfo);
  if (result2.modifiedCount > 0) {
    res.status(200).json('Info replaced.');
  } else {
    res.status(500).json(result2.error || 'Error updating the disability info.');
  }
};

const deleteDisability = async (req, res) => {
  const userId = new ObjectId(req.params.id);

  const result3 = await mongodb
    .getDb()
    .db()
    .collection('disabilities')
    .deleteOne({ _id: userId }, true);
  if (result3.deletedCount > 0) {
    res.status(200).json(userId + ' was deleted.');
  } else {
    res.status(500).json(result3.error || 'Error deleting the disability.' + userId);
  }
};

module.exports = {
  getDisabilities,
  getOneDisability,
  addDisability,
  updateDisability,
  deleteDisability
};
