const mongo = require('./../service/mongo.js');

const mongoEmployeeToGraphQL = (e)=>{
  return {
    identifier: e._id,
    firstname: e.firstname,
    lastname: e.lastname,
    email: e.email,
    salary: e.salary,
  };
};

const getEmployee = (employeeId) =>{
  return mongo.getEmployee(employeeId).then((val)=>{
    return {
      identifier: val._id,
      firstname: val.firstname,
      lastname: val.lastname,
      email: val.email,
      salary: val.salary,
    };
  });
};


const getInvitations = (dbInvitations) => {
  let invitations = [];
  dbInvitations.forEach((invitation)=>{
        if (!invitation.employeeId){
          invitations.push({
            accepted: invitation.accepted,
            person:{
              firstname: invitation.externalWorker.firstname,
              lastname: invitation.externalWorker.lastname,
              email: invitation.externalWorker.email,
              company: invitation.externalWorker.company,
            }
          });
        } else{
          let employee = getEmployee(invitation.employeeId).then((val)=>val);
          invitations.push({
            accepted: invitation.accepted,
            person: employee,
          });
        }

  });
  console.log('invitations');
  return invitations;
};

const mongoMeetingToModel = (m)=>{


  let room = mongo.getRoom(m.roomId).then((val)=>{
    return {
      id: val._id,
      capacity: val.capacity,
    };
  });

  let organizer = getEmployee(m.organizerId).then((val)=>val);
  let invitations = getInvitations(m.invitations);
  return {
    id: m._id,
    subject: m.subject,
    type: m.type,
    cancelled: m.cancelled,
    room:room,
    conferenceLink:m.conferenceLink,
    when:m.when,
    organizer: organizer,
    invitations:invitations,
  };

};

module.exports = {
  mongoMeetingToModel,
  mongoEmployeeToGraphQL,
};
