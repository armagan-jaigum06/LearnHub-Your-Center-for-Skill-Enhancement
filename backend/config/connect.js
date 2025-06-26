const mongoose = require("mongoose");

const connectionOfDb = () => {
  mongoose
    .connect(process.env.MONGO_URL) // <-- changed from MONGO_DB to MONGO_URL
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      throw new Error(`Could not connect to MongoDB: ${err}`);
    });
};

module.exports = connectionOfDb;