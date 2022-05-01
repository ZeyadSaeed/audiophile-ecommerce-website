import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "";

const connectDB = (handler: any) => async (req: any, res: any) => {
  if (mongoose.connections[0].readyState) {
    // Use current db connection
    return handler(req, res);
  }
  // Use new db connection
  await mongoose.connect(MONGODB_URI);
  return handler(req, res);
};

export default connectDB;
