const masterMongoDBName = process.env.APP_DB;

const mongo = {
  host: process.env.MONGO_HOST,
  port: process.env.MONGO_PORT
};

const mongoURL = ('mongodb://' + mongo.host + ':' + mongo.port + '/' +
  masterMongoDBName);

module.exports = {
  PORT: process.env.PORT,
  MONGO_MASTER_DB_NAME: masterMongoDBName,
  MONGO_MASTER_SERVER: mongo,
  MONGO_URL: mongoURL
};
