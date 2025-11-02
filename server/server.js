import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectToDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import cookieParser from "cookie-parser";
import orderRoutes from "./routes/orderRoutes.js";
import paypalRoutes from "./routes/paypalRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
import fs from "fs";

const uploadDir = path.join(path.resolve(), "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
  console.log("✅ Uploads directory created");
}

const app = express();
const PORT = process.env.PORT || 5000;
app.use((req, res, next) => {
  console.log("➡️ Incoming:", req.method, req.originalUrl);
  next();
});
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://mern-ecommerce-26w1-git-main-joes-projects-50075601.vercel.app",
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use("/api/user", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/paypal", paypalRoutes);
app.use("/api/admin", adminRoutes);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/", (req, res) => {
  res.send("✅ MERN E-Commerce API is running successfully!");
});

app.use((req, res) => {
  console.log("❌ No route matched:", req.originalUrl);
  res.status(404).json({ message: "Route not found" });
});
app.get("/cleanup-carts", async (req, res) => {
  await Cart.deleteMany({});
  res.send("All carts cleared");
});

app.listen(PORT, () => {
  console.log(`server running at ${PORT}`);
  connectToDB();
});
