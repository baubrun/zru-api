import express from "express";
import routesStartup from "./startup/routes.js";
import dbStartup, { dbOptions } from "./startup/db.js";
import mongoose from "mongoose";

const app = express();

routesStartup(app);
dbStartup(app, mongoose, dbOptions);
