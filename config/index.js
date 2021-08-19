import dotenv from "dotenv";
dotenv.config();

const config = {
  port: process.env.PORT || 5000,
  dbName: process.env.DB_NAME,
};

export default config;
