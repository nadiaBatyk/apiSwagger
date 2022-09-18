const express = require("express");
require("dotenv").config({ path: "../.env" });

const session = require("express-session");
const compression = require("compression");
const logger = require("./config/winstonConfig");
const logWinston = require("./utils/logger");
const {graphqlHTTP} = require('express-graphql');
const {makeExecutableSchema} = require('@graphql-tools/schema')
const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolvers')
const connectDB = require('./persistencia/db/index')
const app = express();

//conexion DB
connectDB()

//middlewares
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const schema = makeExecutableSchema({
  typeDefs:typeDefs,
  resolvers:resolvers
})

//RUTAS
//app.use("/productos", logWinston, rutasProducto);

app.use('/graphql',graphqlHTTP({
  schema:schema,
  graphiql:true
}))
app.get("*.ico", function () {});
app.use("*", (req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});
app.use((err, req, res, next) => {
  if (err) {
    
    logger.warn(`ruta inexistente`);
    res.send(`ruta inexistente`);
  }
});
//PUERTO

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
  logger.info(`conectado al puerto ${PORT}`);
});
server.on("error", (error) => logger.error(`error en el servidor ${error}`));
