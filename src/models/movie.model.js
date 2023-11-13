const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moviesSchema = new Schema(
  {
    title: { type: String },
    genre: { type: String },
    image: { type: String },
    category: { type: String },
    year: { type: String },
  },
  { collection: 'movies' }
);
const Movie = mongoose.model('movies', moviesSchema);
module.exports = Movie;
