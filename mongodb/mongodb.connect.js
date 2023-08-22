const mongoose = require("mongoose");

async function connect() {
  try {
    // Connect to MongoDB
    await mongoose
      .connect(
        "mongodb+srv://soo:12341@rtb.e20asj4.mongodb.net/?retryWrites=true&w=majority"
      )
      .then(() => console.log("MongoDB Connected"));
  } catch (err) {
    console.log("Error connectng to mongodb");
    console.log(err);
  }
}

module.exports = { connect };
