import { makeExecutableSchema, gql } from "apollo-server-express";

const typeDefs = gql`
  type Query {
    silly: String
  }
`;

const resolvers = {
  Query: {
    silly: (_, __, { dataSources: { MyAPI } }) => MyAPI.hello(),
  },
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
