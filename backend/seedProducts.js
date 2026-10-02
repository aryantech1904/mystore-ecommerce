
const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

require("dotenv").config();

const mongoose = require("mongoose");
const Product = require("./models/Product");

const products = [
  {
    id: 1,
    name: "Smartphone",
    price: 19999,
    category: "Electronics",
    image: "/images/smartphone.jpg",
    description: "A modern smartphone with powerful performance.",
    stock: 10,
  },
  {
    id: 2,
    name: "Laptop",
    price: 49999,
    category: "Electronics",
    image: "/images/laptop.jpg",
    description: "A laptop for work, study and entertainment.",
    stock: 10,
  },
  {
    id: 3,
    name: "Headphone",
    price: 2999,
    category: "Accessories",
    image: "/images/headphone.jpg",
    description: "Comfortable headphones with clear sound.",
    stock: 10,
  },
  {
    id: 4,
    name: "Smart Watch",
    price: 3999,
    category: "Electronics",
    image: "/images/smartwatch.jpg",
    description: "A smart watch for everyday use.",
    stock: 10,
  },
  {
    id: 5,
    name: "Camera",
    price: 34999,
    category: "Electronics",
    image: "/images/camera.jpg",
    description: "Capture photos and videos with this camera.",
    stock: 10,
  },
  {
    id: 6,
    name: "Gaming Mouse",
    price: 1499,
    category: "Accessories",
    image: "/images/gaming-mouse.jpg",
    description: "A responsive mouse for gaming and everyday use.",
    stock: 10,
  },
];

async function seedProducts() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully!");

    for (const product of products) {
      await Product.updateOne(
        { id: product.id },
        { $set: product },
        { upsert: true }
      );
    }

    console.log("All 6 products saved successfully!");

    await mongoose.disconnect();
    console.log("Database connection closed.");
  } catch (error) {
    console.error("Error:", error.message);
    await mongoose.disconnect();
    process.exitCode = 1;
  }
}

seedProducts();