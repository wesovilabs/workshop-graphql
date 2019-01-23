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
 On the datastore side, the application make uses of `mongoose` to establish connection with mongo.

 To avoid run a mongodb locally you can just perform the below command.
 ```
 make run
 ```

 This Makefile target will run the docker-compose in the repository root.
