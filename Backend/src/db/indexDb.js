const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    mongoose
      .connect(
        "mongodb+srv://priyanshusinghthakur7600:0ThlBEYGLWtrbUbn@cluster0.zehigbj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
      )
      .then(() => {
        console.log("Connected to MongoDB");
      });
  } catch (err) {
    console.log("MongoDB connection error: ", err);
    process.exit(1);
  }
};

module.exports = connectDb;
