const {Director} = require('./model.js');
const mongoose = require('mongoose');

const dbCreateDirector=(director)=>{
  director._id=mongoose.mongo.ObjectId();
  director.save((err)=>{
    console.log(err);
  });
  return director;
};

module.exports = {
  dbCreateDirector,
};
