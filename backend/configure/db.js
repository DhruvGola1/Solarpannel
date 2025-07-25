import mongoose from "mongoose";
import "dotenv/config";
const DATA_URI = process.env.DATA_URI || "mongodb://localhost:27017";

const dataBase = async () => {
  try {
    const DB = {
      dbName: "solarPannel",
    };
    const connectDB = await mongoose.connect(DATA_URI, DB);
    console.log("Connected Successfully");
  } catch (error) {
    console.log("not Connected", error);
  }
};

export default dataBase;
