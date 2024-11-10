import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "";

const connect = async () => {
  try {
    console.log(MONGODB_URI);
    
    await mongoose.connect(MONGODB_URI);
  } catch (error) {
    throw new Error("Error in connecting to mongo db. " + error);
  }
};

export default connect;
