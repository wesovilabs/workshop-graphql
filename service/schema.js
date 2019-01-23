const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoomSchema = new Schema({
  _id: String,
  capacity: Number,
});

const EmployeeSchema = new Schema({
  _id: String,
  firstname: String,
  lastname: String,
  email: String,
  salary: Number,
});

const MeetingSchema = new Schema({
  _id: String,
  subject: String,
  type: String,
  cancelled: Boolean,
  roomId: String,
  conferenceLink: String,
  when:String,
  organizerId:String,
  invitations:[Schema.Types.Mixed]
});


const Room = mongoose.model('Room', RoomSchema);
const Employee = mongoose.model('Employee', EmployeeSchema);
const Meeting = mongoose.model('Meeting', MeetingSchema);

module.exports = {
  Room,
  Employee,
  Meeting,
};
