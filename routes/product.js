import express from "express";
import { getProduct } from "../controllers/product.js";

const router = express.Router();

router.get("/product/:id", getProduct);

export default router;
