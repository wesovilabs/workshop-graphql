const Koa = require('koa');
const { gql, ApolloServer,makeExecutableSchema } = require('apollo-server-koa');
const { importSchema } = require('graphql-import');

const fs = require('fs');
const path = require('path');
const query = require('./resolvers/query')
const mutation = require('./resolvers/mutation')
const db = require('./service/db');
const config = require('./config.js');

require('dotenv').config();
const app = new Koa();
const typeDefs = importSchema('./schema.graphql');
const resolvers = {
  Person: {
    __resolveType(obj, context, info){
      if(obj.company){
        return 'ExternalWorker';
      }
      return 'Employee';
    },
  },
  Employee: {
    salary: ({ salary }, { currency }) => currency === 'Euro' ? salary : salary * 1.14
  },
  Query: query,
  Mutation: mutation,
};


const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  resolverValidationOptions: { requireResolversForResolveType: false },
});

const server = new ApolloServer({
  schema,
})

server.applyMiddleware({ app });
db.connect()
app.listen({ port: config.get('server.port') }, () =>
  console.log(`🚀 Server ready at http://localhost:${config.get('server.port')}${server.graphqlPath}`),
);
