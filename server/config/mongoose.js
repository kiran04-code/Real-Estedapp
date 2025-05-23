import mongoose from "mongoose";

export  default async function DBConnections(url) {
  await mongoose.connect(url)
}
