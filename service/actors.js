const {Actor} = require('./model.js');
const mongoose = require('mongoose');

const dbCreateActor=(actor)=>{
  actor._id=mongoose.mongo.ObjectId();
  actor.save((err)=>{
    console.log(err);
  });
  return actor;
};

module.exports = {
  dbCreateActor,
};
