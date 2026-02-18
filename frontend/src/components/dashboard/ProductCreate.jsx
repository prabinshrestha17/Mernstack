import axios from "axios";
import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../../App.css";
import baseUrl from "../../config/env";

const ProductCreate = () => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [productDetails, setProductDetails] = useState("");
  const [brand, setBrand] = useState("");
  const [preview, setPreview] = useState(null);

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];
    setProductImage(file);
    setPreview(URL.createObjectURL(file));
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: false,
  });

  const handleSubmit = async e => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    if (!productImage) {
      alert("Please choose a product image");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", productImage);

      const uploadResponse = await axios.post(
        `${baseUrl}/file/upload`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        },
      );

      const imageUrl = uploadResponse.data.url;
      console.log(imageUrl);

      const response = await axios.post(
        `${baseUrl}/product/create`,
        {
          productName,
          price,
          productImage: imageUrl,
          quantity,
          category,
          productDetails,
          brand,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );

      toast.success("Product created successfully!");

      setTimeout(() => {
        setProductName("");
        setPrice("");
        setProductImage(null);
        setQuantity("");
        setCategory("");
        setProductDetails("");
        setBrand("");
      }, 2000);

      setPreview(null);

      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error creating product. Please try again.");
    }
  };

  return (
    <div className="create-product-wrapper">
      <div className="form-container">
        <h2 className="form-title">Add New Product</h2>

        <form onSubmit={handleSubmit} className="product-form">
          <div className="form-group">
            <label htmlFor="productName">Product Name</label>
            <input
              id="productName"
              type="text"
              className="form-control"
              placeholder="e.g. Wireless Headphones"
              value={productName}
              onChange={e => setProductName(e.target.value)}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group half-width">
              <label htmlFor="price">Price (Rs.)</label>
              <input
                id="price"
                type="number"
                className="form-control"
                placeholder="0.00"
                value={price}
                onChange={e => setPrice(e.target.value)}
                required
              />
            </div>

            <div className="form-group half-width">
              <label htmlFor="quantity">Quantity</label>
              <input
                id="quantity"
                type="number"
                className="form-control"
                placeholder="0"
                value={quantity}
                onChange={e => setQuantity(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group half-width">
              <label htmlFor="category">Category</label>
              <input
                id="category"
                type="text"
                className="form-control"
                placeholder="e.g. Electronics"
                value={category}
                onChange={e => setCategory(e.target.value)}
                required
              />
            </div>

            <div className="form-group half-width">
              <label htmlFor="brand">Brand</label>
              <input
                id="brand"
                type="text"
                className="form-control"
                placeholder="e.g. Sony"
                value={brand}
                onChange={e => setBrand(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="productDetails">Description</label>
            <textarea
              id="productDetails"
              className="form-control textarea"
              placeholder="Enter product details..."
              value={productDetails}
              onChange={e => setProductDetails(e.target.value)}
              rows="4"
            />
          </div>

          <div className="form-group">
            <label>Product Image</label>
            <div
              {...getRootProps()}
              className={`dropzone-area ${isDragActive ? "active" : ""}`}
            >
              <input {...getInputProps()} />
              {preview ? (
                <div className="image-preview-container">
                  <img src={preview} alt="Preview" className="image-preview" />
                  <p className="change-image-text">
                    Click or drag to change image
                  </p>
                </div>
              ) : (
                <div className="upload-placeholder">
                  <p>Drag & drop an image here, or click to select</p>
                </div>
              )}
            </div>
          </div>

          <button type="submit" className="submit-btn">
            Create Product
          </button>

          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
          />
        </form>
      </div>
    </div>
  );
};

export default ProductCreate;