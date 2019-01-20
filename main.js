const Koa = require('koa');
const { gql, ApolloServer,makeExecutableSchema } = require('apollo-server-koa');
const { importSchema } = require('graphql-import');

const fs = require('fs');
const path = require('path');
const query = require('./query')
const mutation = require('./mutation')
const db = require('./service/db');
const config = require('./config.js');

require('dotenv').config();
const app = new Koa();
const typeDefs = importSchema('./schema.graphql');
const resolvers = {
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
/**
const server = new ApolloServer({
  typeDefs,
  resolvers,
  resolverValidationOptions: { requireResolversForResolveType: false },
});
**/
server.applyMiddleware({ app });
db.connect()
app.listen({ port: config.get('server.port') }, () =>
  console.log(`🚀 Server ready at http://localhost:${config.get('server.port')}${server.graphqlPath}`),
);
