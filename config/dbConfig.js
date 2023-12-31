const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI || "mongodb://localhost:27017/framework";

if (!URI) {
  throw Error("Could not find MONGODB_URI in the .env file.");
}

mongoose
  .connect(URI)
  .then((db) => {
    console.log(`Connected to ${db.connection.name}`);
  })
  .catch((error) => {
    console.log(error.message);
  });
