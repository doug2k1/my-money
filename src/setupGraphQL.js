const { ApolloServer } = require('apollo-server-express');
const { importSchema } = require('graphql-import');
const authMiddleware = require('./middleware/authMiddleware');
const resolvers = require('./graphql/resolvers');

const setup = app => {
  const path = '/graphql';

  const server = new ApolloServer({
    typeDefs: importSchema('src/graphql/schema.graphql'),
    resolvers,
    playground: { settings: { 'request.credentials': 'include' } },
    context: ({ req }) => {
      return { user: req.user };
    }
  });

  app.use(path, authMiddleware);
  server.applyMiddleware({ app, path });
};

module.exports = setup;
