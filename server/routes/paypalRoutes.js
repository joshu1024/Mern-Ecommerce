import express from "express";
import protectRoute from "../middleware/authMiddleware.js";
import { createOrder } from "../controllers/orderController.js";
import { captureOrder } from "../controllers/paypalController.js";

const router = express.Router();

router.post("/create-order", protectRoute, createOrder);
router.post("/capture-order", protectRoute, captureOrder);

export default router;
