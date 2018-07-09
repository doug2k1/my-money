const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const { importSchema } = require('graphql-import');
const authMiddleware = require('./middleware/authMiddleware');
const resolvers = require('./graphql/resolvers');

const setup = app => {
  const schema = makeExecutableSchema({
    typeDefs: importSchema('src/graphql/schema.graphql'),
    resolvers
  });

  // graphql endpoint
  app.use(
    '/graphql',
    authMiddleware(),
    graphqlExpress(req => {
      return { schema, context: { user: req.user } };
    })
  );

  // graphiql endpoint
  app.use(
    '/graphiql',
    authMiddleware(),
    graphiqlExpress({ endpointURL: '/graphql' })
  );
};

module.exports = setup;
