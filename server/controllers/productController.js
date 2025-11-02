import Cart from "../models/cart.js";
import Product from "../models/Product.js";

// ✅ Add product (Cloudinary-ready)
export const addProduct = async (req, res) => {
  try {
    const { name, oldPrice, newPrice, brand, category } = req.body;

    // req.files[].path are already Cloudinary URLs
    const images = req.files ? req.files.map((file) => file.path) : [];

    const product = new Product({
      name,
      oldPrice,
      newPrice,
      brand,
      category,
      images,
    });

    await product.save();
    res.status(201).json(product);
  } catch (error) {
    console.error("❌ Add product error:", error);
    res.status(500).json({ message: "Failed to add product" });
  }
};

// ✅ Get all products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// ✅ Get single product by ID
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// ✅ Search products
export const searchProducts = async (req, res) => {
  try {
    const query = req.query.q?.trim();

    if (!query) {
      return res.status(400).json({ message: "Search query missing" });
    }

    console.log("🔍 Searching for:", query);

    const products = await Product.find({
      $or: [
        { name: { $regex: query, $options: "i" } },
        { brand: { $regex: query, $options: "i" } },
        { category: { $regex: query, $options: "i" } },
      ],
    });

    console.log("✅ Found:", products.length, "products");
    res.status(200).json(products);
  } catch (error) {
    console.error("❌ Search error:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// ✅ Update product (Cloudinary-ready)
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, oldPrice, newPrice, brand, category, stock } = req.body;

    const product = await Product.findById(id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    // new image URLs from Cloudinary (if any)
    const imageUrls = req.files ? req.files.map((file) => file.path) : [];

    // update fields
    product.name = name || product.name;
    product.oldPrice = oldPrice || product.oldPrice;
    product.newPrice = newPrice || product.newPrice;
    product.brand = brand || product.brand;
    product.category = category || product.category;
    product.stock = stock || product.stock;

    if (imageUrls.length > 0) {
      product.images = imageUrls; // overwrite old images
    }

    await product.save();
    res.json({ message: "✅ Product updated successfully", product });
  } catch (error) {
    console.error("❌ Update error:", error);
    res.status(500).json({ message: error.message });
  }
};
