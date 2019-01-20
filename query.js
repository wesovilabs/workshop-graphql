const {getMovieById,listAllMovies} = require('./service/movies.js');

const listMovies = () => {
  console.log(listAllMovies);
  return listAllMovies();
};
const listMoviesInYear = () => {

};
const listPeople = () => {

};
const listItems = () => {

};
const listTopBoxOfficeMovies = () => {

};
const getMovie = (id) => {
  return getMovieById(id);
};

module.exports = {
  listMovies,
  listMoviesInYear,
  listPeople,
  listItems,
  listTopBoxOfficeMovies,
  getMovie
};
