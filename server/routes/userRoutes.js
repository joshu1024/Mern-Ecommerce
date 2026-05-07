import express from "express";
import protectRoute from "../middleware/authMiddleware.js";
import {
  loginUser,
  logOutUser,
  registerUser,
} from "../controllers/userController.js";
import { getUserProfile } from "../controllers/userController.js";
import rateLimit from "express-rate-limit";

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { error: "Too many attampts please try again later" },
});

const router = express.Router();
router.post("/register", authLimiter, registerUser);
router.post("/login", authLimiter, loginUser);
router.post("/logout", logOutUser);
router.get("/profile", protectRoute, getUserProfile);

export default router;
