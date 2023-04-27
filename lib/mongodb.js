import mongoose from "mongoose";

const connection = {};

async function connectToDatabase(uri) {
  if (connection.isConnected) {
    return;
  }

  const db = await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  connection.isConnected = db.connections[0].readyState;

  console.log("MongoDB connected!");

  return db;
}

export default connectToDatabase;
