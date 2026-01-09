import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: [true, "Product Name is required"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
  },
  productImage: {
    type: String,
    required: [true, "Product image is required"],
  },
  quantity: {
    type: Number,
    required: [true, "Quantity is required"],
  },
  category: {
    type: [String],
    required: false,
  },
  productDetails: {
    type: String,
    required: [true, "Product Details is required"],
  },
  brand: {
    type: String,
    required: false,
  },
});

export const Product = mongoose.model("Product", productSchema);
