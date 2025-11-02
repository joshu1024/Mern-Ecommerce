import express from "express";
import {
  addProduct,
  getProducts,
  getProductById,
  searchProducts,
  updateProduct,
} from "../controllers/productController.js";
import { addToCart } from "../controllers/cartController.js";
import protectRoute from "../middleware/authMiddleware.js";
import Product from "../models/Product.js";

import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";

const router = express.Router();

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "mern-ecommerce",
    allowed_formats: ["jpg", "jpeg", "png"],
  },
});

const upload = multer({ storage });

router.post("/add", upload.array("images", 5), addProduct);
router.post("/addToCart", protectRoute, addToCart);
router.get("/", getProducts);
router.get("/search", searchProducts);
router.get("/:id", getProductById);
router.put("/:id", upload.array("images", 5), updateProduct);

router.get("/category/:category", async (req, res) => {
  try {
    const category = req.params.category;
    const products = await Product.find({
      category: { $regex: new RegExp(category, "i") },
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/brand/:brand", async (req, res) => {
  try {
    const brand = req.params.brand;
    const products = await Product.find({
      brand: { $regex: new RegExp(brand, "i") },
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
