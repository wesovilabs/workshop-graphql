const {Movie} = require('./model.js');
const mongoose = require('mongoose');

const listAllMovies= ()=>{
  return Movie.find({});
};

const getMovieById = (movieId) =>{
  return Movie.findById(movieId);
};

const createMovie=(movie)=>{
  movie._id=mongoose.mongo.ObjectId();
  movie.save((err)=>{
    console.log(err);
  });
  return movie;
};

module.exports = {
  listAllMovies,
  getMovieById,
  createMovie,
};
