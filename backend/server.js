const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");


require("dotenv").config();

const typeDefs = require("./Graphql/Types");
const resolvers = require("./Graphql/Resolvers");

const app = express();

//Middlewares
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });

app.listen(9000, async () => {
  mongoose
    .connect(process.env.MONGODB_URI)
    .catch((error) => handleError(error));

  console.log("RUN SERVER ");
});
