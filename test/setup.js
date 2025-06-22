const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');

let mongod;

beforeAll(async () => {
  mongod = await MongoMemoryServer.create();
  const uri = mongod.getUri();

  // Connect mongoose to this new in-memory server
  await mongoose.connect(uri);

  // Set the MONGO_URI environment variable for the application
  process.env.MONGO_URI = uri;
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongod.stop();
});
