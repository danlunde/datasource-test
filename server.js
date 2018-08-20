import express from "express";
import { ApolloServer } from "apollo-server-express";
import schema from "./data/schema";
import MyAPI from "./data/api/myapi";

const app = express();

const server = new ApolloServer({
  schema,
  dataSources: () => ({ MyAPI: new MyAPI() }),
});

server.applyMiddleware({ app, path: "/graphql" });

app.listen(8080, () => console.log(`Server is now running`));
