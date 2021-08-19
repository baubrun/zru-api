import dotenv from "dotenv";
dotenv.config();

const keys = {
  dbUri: process.env.DB_URI,
};

export default keys;
