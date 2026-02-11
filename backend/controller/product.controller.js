import { Product } from "../schema/product.schema.js";

export const createProductController = async (req, res) => {
  try {
    let data = req.body;
    const result = await Product.create(data);
    res.status(201).json({
      message: "Product Created Successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const getAllProductController = async (req, res) => {
  try {
    const result = await Product.find({});
    res.status(200).json({
      message: "Products fetched successfully",
      date: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const getSpecificProductController = async (req, res) => {
  try {
    let id = req.params.id; // dynamic route bata value get garna parey req.params.id user garnu parcha
    const result = await Product.findById(id);

    res.status(200).json({
      message: "Specific Product fetched ",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const updateProductController = async (req, res) => {
  try {
    let id = req.params.id;
    let data = req.body;
    //let quantity = data.quantity
    const result = await Product.findByIdAndUpdate(
      id,
      { ...data },
      { new: true },
    );
    res.status(200).json({
      message: "Product Updated Successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const deleteProductController = async (req, res) => {
  try {
    let id = req.params.id;
    const result = await Product.findByIdAndDelete(id);
    res.status(200).json({
      message: "Product Deleted Successfullt",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
