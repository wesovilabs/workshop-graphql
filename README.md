# GraphQL Workshop

## Purpose
The only purpose of this repository is being used to do a workshop about GraphQL.

## What's about the project?

The projects is based in a meeting application in which the most important
entities are:
- Room: where the meeting take place.
- Person:
  * Employee: It's a person who's registered in the database.
  * ExternalWorker: Someone who can be invited to a meeting but he can't organize
    one.
- Meeting: The main entity.

## Running locally

 It's a nodeJS that provides a GraphQL API implemented with `koa` and `apollo`.
 On the datastore side, the application makes use of `mongoose` to establish connection with mongo.

 To avoid run a mongodb locally you can just perform the below command.
 ```
 make run
 ```

 This Makefile target will run the docker-compose in the repository root.

 The application will be running on http://localhost:7000

 The app container is run with nodemon so you can make changes in code and these
 will be automatically 'deployed'.

## Consuming the GraphQL API

In your browser open http://localhost:7000/graphql

To interact with API you could things like these

 ```graphql
 mutation{
   createRoom1:addRoom(room:{id:"room01",capacity:5}){
     id
   }
   createRoom2: addRoom(room:{id:"room02",capacity:6}){
     id
     capacity
   }
   createRoom3: addRoom(room:{id:"room03",capacity:8}){
     capacity
   }
   createEmployeeJohn: addEmployee(employee:{
     identifier:"employee001"
     firstname:"John"
     lastname:"Doe"
     email: "john.doe@email.com"
     salary: 45000.23
   }){
     identifier
     salary
   }
   createEmployeeJane: addEmployee(employee:{
     identifier:"employee002"
     firstname:"Jane"
     lastname:"Doe"
     email: "jane.doe@email.com"
     salary: 65000.23
   }){
     identifier
     salary
   }
   meeting1: addMeeting(meeting:{
     id: "meeting001"
     subject:"Cloud engine"
     type:brainstorming
     roomId:"room01"
     conferenceLink: "http://chat"
     when:"10/02/2019 11:15"
     organizerId:"employee001"
   }){
     id
     subject
   }

   invitationJane: sendInvitation(invitation:{
     meetingId:"meeting001"
     employeeId:"employee002"
   }){
     id
   }
   invitationDavidHanks: sendInvitation(invitation:{
     meetingId:"meeting001"
     externalWorker: {
       firstname:"David"
       lastname:"Hanks"
       email:"david.hanks@google.com"
       company:"google"
     }
   }){
     id
   }
   invitationLarryMcDonald: sendInvitation(invitation:{
     meetingId:"meeting001"
     externalWorker: {
       firstname:"Larry"
       lastname:"Mc Donald"
       email:"larry.mcdonald@google.com"
       company:"google"
     }
   }){
     id
   }
 }
 ```

 and once we have records into the database will be able to consume them.

```graphql
query {
   getMeeting(meetingId:"meeting001"){
    id
    organizer{
      identifier
      firstname
      lastname
      email
      salary(currency:Euro)
    }
    room{
      capacity
    }
    invitations {
      accepted
      person{
        firstname
        lastname
        email
        ... on Employee {
          identifier
          salary
        }
        ... on ExternalWorker {
          company
        }
      }
    }
  }
}
```
