import mongoose from "mongoose";

export default async function DBConnections(url) {
  try {
    await mongoose.connect(url);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error; // Re-throw if you want to handle it further up
  }
}
