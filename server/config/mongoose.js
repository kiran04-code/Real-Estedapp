import mongoose from "mongoose";

export   async function DBConnections(url) {
  await mongoose.connect(url)
}
