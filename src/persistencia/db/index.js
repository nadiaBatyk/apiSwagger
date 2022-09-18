const mongoose = require("mongoose");
const mongoConfig = require("../../config/DBConfig");
const logger = require("../../config/winstonConfig");

async function connectDB(){
    try {
      await  mongoose.connect(mongoConfig.URL, mongoConfig.options);
      logger.info(`conectado a la base de datos con éxito`)
    } catch (error) {
        console.log(error);
    }
}
module.exports = connectDB