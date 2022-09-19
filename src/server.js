const express = require("express");
require("dotenv").config({ path: "../.env" });

const compression = require("compression");
const logger = require("./config/winstonConfig");
const { graphqlHTTP } = require("express-graphql");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");
const connectDB = require("./persistencia/db/index");
const app = express();

//conexion DB
connectDB();

//middlewares
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const schema = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers,
});

//RUTAS

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);
app.get("*.ico", function () {});
app.use("*", (req, res, next) => {
  res.redirect("/graphql");
});

//PUERTO

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
  logger.info(`conectado al puerto ${PORT}`);
});
server.on("error", (error) => logger.error(`error en el servidor ${error}`));
