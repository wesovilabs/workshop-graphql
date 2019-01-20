const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    _id: Schema.Types.ObjectId,
    title: String,
    year: Number,
    genre: String,
    directorId: String,
    characters: [{
      name: String,
      actorId: String,
    }],
    audience: Number,
    boxOffice: Number,
});

const ActorSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    male: Boolean,
    profileUrl: String,
});

const DirectorSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    male: Boolean,
    profileUrl: String,
});

const Actor = mongoose.model('Actor', ActorSchema);
const Director = mongoose.model('Director', DirectorSchema);
const Movie = mongoose.model('Movie', MovieSchema);


Movie.listAll=()=>{
  return this.find({});
};

module.exports = {
  Actor,
  Director,
  Movie,
};
