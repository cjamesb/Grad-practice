const db = require('../models');

const crudController = {};

//put middleware down here

//ObjectId.getTimestamp() gets the timestap from the objectID

crudController.addDoc = (req, res, next) => {
  console.log('req.params', req.params);
  console.log('req.headers', req.headers);
  console.log('req.body', req.body);
  const { name, other } = req.body;

  db.User.create({ name, other })
    .then((data) => {
      res.locals = data;
      return next();
    })
    .catch((err) => {
      return next(err);
    });
};

crudController.findAllDocs = (req, res, next) => {
  db.User.find({})
    .then((data) => {
      res.locals = data;
      return next();
    })
    .catch((err) => {
      return next(err);
    });
};
crudController.findDoc = (req, res, next) => {
  const { id } = req.body;
  db.User.findOne({ _id: id })
    .then((data) => {
      res.locals = data;
      return next();
    })
    .catch((err) => {
      return next(err);
    });
};

crudController.findOneAndDelete = (req, res, next) => {
  const { id } = req.body;
  db.User.findOneAndDelete({ _id: id })
    .then((data) => {
      res.locals = data;
      return next();
    })
    .catch((err) => {
      return next(err);
    });
};

crudController.nuke = (req, res, next) => {
  db.User.deleteMany({})
    .then((data) => {
      res.locals = data;
      return next();
    })
    .catch((err) => {
      return next(err);
    });
};

crudController.findOneAndUpdate = (req, res, next) => {
  const { name, other } = req.body;
  db.User.findOneAndUpdate({ name, other })
    .then((data) => {
      res.locals = data;
      return next();
    })
    .catch((err) => {
      return next(err);
    });
};

module.exports = crudController;
