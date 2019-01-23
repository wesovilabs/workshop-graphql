const {Room,Employee,Meeting} = require('./schema.js');
const mongoose = require('mongoose');

const listMeetings = () => {
  return Meeting.find({});
};

const getEmployee = (employeeId) => {
  return Employee.findById({"_id":employeeId});
};

const listEmployees = () => {
  return Employee.find({});
};

const getRoom = (roomId) => {
  return Room.findById(roomId);
};

const listRooms = () => {
  return Room.find({});
};

const getMeeting = (meetingId) => {
  return Meeting.findById(meetingId);
};

const listEmployeesWithSalaryUpper = (salary) => {
  return Meeting.find({});
};

const createRoom = (room) => {
  return room.save();
};

const createEmployee = (employee) => {
  return employee.save();
};

const createMeeting = (meeting) => {
  return meeting.save();
};

const updateMeeting = (meeting) => {
  return meeting.updateOne();
};

const deleteMeeting = (meetingId) => {
  return Meeting.remove({_id:meetingId});
};

const addInvitation = (meetingId,invitation) => {
  return Meeting.findOneAndUpdate(
    {
      _id: meetingId,
    },
    {
      $push: {invitations:invitation},
    }
  );
};


module.exports = {
    createMeeting,
    updateMeeting,
    deleteMeeting,
    getMeeting,
    listMeetings,
    createRoom,
    listRooms,
    listEmployees,
    createEmployee,
    listEmployeesWithSalaryUpper,
    getEmployee,
    getRoom,
    addInvitation,
};
