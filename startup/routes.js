import express from "express";
import cors from "cors";
import order from "../routes/order.js";
import product from "../routes/product.js";
import user from "../routes/user.js";
import morgan from "morgan";
import winston from "./logging.js";

/**
 * @param {import('express').Express} app
 */
const expressApp = (app) => {
  app.use(cors());
  app.use(express.json());
  app.use(morgan("combined", { stream: winston.stream }));

  // routes
  app.use("/api/orders", order);
  app.use("/api/products", product);
  app.use("/api/users", user);
};

export default expressApp;
