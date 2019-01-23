const schema = require('./../service/schema.js');
const mongo = require('./../service/mongo.js');
const {mongoMeetingToModel,mongoEmployeeToGraphQL} = require('./util.js');

const addEmployee= (parentValue, args, ctx)=>{
  let employee =schema.Employee({
    _id: args.employee.identifier,
    firstname: args.employee.firstname,
    lastname: args.employee.lastname,
    email: args.employee.email,
    salary: args.employee.salary,
  });
  return mongo.createEmployee(employee).then((e)=>{
      return mongoEmployeeToGraphQL(e);
  });
};

const addRoom = (parentValue, args, ctx)=>{
  let room =schema.Room({
    _id: args.room.id,
    capacity: args.room.capacity
  });
  return mongo.createRoom(room).then((e) => {
    return room;
  });
};

const addMeeting= (parentValue, args, ctx)=>{
  let meeting =schema.Meeting({
    _id: args.meeting.id,
    capacity: args.meeting.capacity,
    subject: args.meeting.subject,
    type: args.meeting.type,
    roomId:args.meeting.roomId,
    conferenceLink:args.meeting.conferenceLink,
    when:args.meeting.when,
    organizerId:args.meeting.organizerId,
    cancelled:false,
  });
  return mongo.createMeeting(meeting).then((m)=>{
    return mongoMeetingToModel(m);
  });
};

const deleteMeeting =(parentValue, args, ctx)=>{
  return mongo.deleteMeeting(args.meetingId).then((meetings)=>{
    meetings=mongo.listMeetings();
    return [];
  });
};

const sendInvitation= (parentValue, args, ctx)=>{
  let invitation = {
    accepted: false
  };
  if (args.invitation.employeeId) {
    invitation.employeeId= args.invitation.employeeId;
  } else {
    invitation.externalWorker = {
      firstname: args.invitation.externalWorker.firstname,
      lastname: args.invitation.externalWorker.lastname,
      email: args.invitation.externalWorker.email,
      company: args.invitation.externalWorker.company,
    };
  }
  return mongo.addInvitation(args.invitation.meetingId,invitation).then((m)=>{
    return mongoMeetingToModel(m);
  });
};

const replyInvitation= (parentValue, args, ctx)=>{

};

module.exports = {
  addEmployee,
  addRoom,
  addMeeting,
  sendInvitation,
  replyInvitation,
  deleteMeeting,
};
