import dotenv from "dotenv";
import express from "express";
import {
  addToCart,
  getCart,
  clearCart,
  removeCartItem,
} from "../controllers/cartController.js";
import protectRoute from "../middleware/authMiddleware.js";
dotenv.config();
const router = express.Router();
router.post("/addToCart", protectRoute, addToCart);
router.get("/getCart", protectRoute, getCart);
router.delete("/clearCart", protectRoute, clearCart);
router.delete("/removeItem/:cartItemId", protectRoute, removeCartItem);

export default router;
