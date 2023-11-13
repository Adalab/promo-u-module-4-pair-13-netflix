const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const usersSchema = new Schema(
  {
    user: { type: String },
    password: { type: String },
    name: { type: String },
    email: { type: String },
    plan_details: { type: String },
  },
  { collection: 'users' }
);
const User = mongoose.model('users', usersSchema);
module.exports = User;
