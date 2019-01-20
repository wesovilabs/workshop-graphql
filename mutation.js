const {dbCreateActor} = require('./service/actors.js');
const {dbCreateDirector} = require('./service/directors.js');
const {createMovie} = require('./service/movies.js');
const {Actor, Director,Movie} = require('./service/model.js');

const addMovie =(parentValue, args, ctx)=>{
  console.log(ctx);
  let movie= Movie({
    title: args.input.title,
    year: args.input.year,
    genre: args.input.genre,
    directorId: args.input.director,
    audience: args.input.audience,
    boxOffice: args.input.boxOffice,
  });
  return createMovie(movie);
};

const addActor =(parentValue, args, ctx)=>{
  const input=args.input;
  return dbCreateActor(
    Actor(input)
  );
};
const addDirector=(parentValue, args, ctx)=>{
  const input=args.input;
  return dbCreateDirector(
    Director(input)
  );
};
const addCharacter=(input)=>{

};
const setMovieBoxOffice=(id,boxOffice)=>{

};
const deleteMovie = (id)=>{

};
module.exports = {
  addMovie,
  addActor,
  addDirector,
  addCharacter,
  setMovieBoxOffice,
  deleteMovie
};
