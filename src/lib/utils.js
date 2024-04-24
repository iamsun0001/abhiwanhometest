const { mongoose } = require("mongoose");
const connection = {};
export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existing Connection");
    }
    const DB = await mongoose.connect(process.env.MONGO);
    connection.isConnected = mongoose.connections[0].readyState;
    console.log("Connect to MongoDB");
  } catch (error) {
    console.log(error);
    throw new Error("Couldn't connect to DB");
  }
};
