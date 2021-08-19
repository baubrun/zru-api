import express from "express";
import { getOrder, postOrder } from "../controllers/order.js";

const router = express.Router();

router.get("/order/:id", getOrder);
router.post("/", postOrder);

export default router;
