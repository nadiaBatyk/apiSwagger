
require('dotenv').config()
const mongoConfig = {
  URL: `mongodb+srv://${process.env.MONGOUSER}:${process.env.MONGOPASS}@cluster0.7ddl8ks.mongodb.net/graphQL?retryWrites=true&w=majority`,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};
module.exports = mongoConfig
