const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const actorsSchema = new Schema(
  {
    name: { type: String },
    lastname: { type: String },
    country: { type: String },
    birthday: { type: String },
  },
  { collection: 'actors' }
);
const Actor = mongoose.model('actors', actorsSchema);
module.exports = Actor;