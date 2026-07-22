import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export default async function Db() {
  const dbUrl = process.env.DB_URL;
  if (!dbUrl) {
    throw new Error("DB_URL is not defined");
  }

  await mongoose.connect(dbUrl)
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });
}