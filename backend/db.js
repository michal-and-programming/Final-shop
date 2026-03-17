import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("Connected to the database");
  } catch (err) {
    console.error("Database connection error:", err);
  }
};

export default connectToDB;