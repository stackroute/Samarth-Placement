const masterMongoDBName = process.env.APP_DB || 'samarthplatformdb';

const mongo = {
  host: process.env.MONGO_HOST || "localhost",
  port: process.env.MONGO_PORT || 27017
};

const mongoURL = ('mongodb://' + mongo.host + ':' + mongo.port + '/' +
  masterMongoDBName);

module.exports = {
  PORT: process.env.PORT || 8080,
  MONGO_MASTER_DB_NAME: masterMongoDBName,
  MONGO_MASTER_SERVER: mongo,
  MONGO_URL: mongoURL
};
