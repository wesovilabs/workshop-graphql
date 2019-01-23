const mongo = require('./../service/mongo.js');
const {mongoMeetingToModel} = require('./util.js');

const listMeetings = (parentValue, args, ctx)=>{

  return mongo.listMeetings().then((val)=>{
      let output=[];
      val.forEach((m)=>{
        meeting=mongoMeetingToModel(m);
        output.push(meeting);
      });
      return output;
  });
};

const listItems = (parentValue, args, ctx) =>{
  meetings=mongo.listMeetings();
  return [];
};
const getMeeting = (parentValue, args, ctx) => {
  return mongo.getMeeting(args.meetingId).then((meeting)=>{
    return mongoMeetingToModel(meeting);
  });
};

const listEmployeesWithSalaryUpper = (parentValue, args, ctx) => {
  meetings = mongo.listEmployeesWithSalaryUpper(args.salary);
};

module.exports = {
  listMeetings,
  listItems,
  getMeeting,
  listEmployeesWithSalaryUpper
};
