const mongoose = require('mongoose');
const password = require('../config/password');

const DATABASE_URI = password;

mongoose
  .connect(DATABASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'gradAssessment',
  })
  .then(() => console.log('Connected to mongo DB'))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

const fakeDataSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  other: String,
});

const User = mongoose.model('fakeData', fakeDataSchema);

module.exports = {
  User,
};
