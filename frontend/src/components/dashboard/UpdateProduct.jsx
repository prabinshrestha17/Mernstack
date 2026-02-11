import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../App.css";

const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [product, setProduct] = useState({
    productName: "",
    productDetails: "",
    price: "",
    quantity: "",
    category: "",
    brand: "",
  });
  const [productImage, setProductImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/product/get/${id}`);
        const data = res.data.data;
        console.log(data);
        if (data) {
          setProduct({
            productName: data.productName || "",
            productDetails: data.productDetails || "",
            price: data.price || "",
            quantity: data?.data?.quantity || "",
            category: data.category || "",
            brand: data.brand || "",
          });
          setPreview(data.productImage);
        }
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const onDrop = useCallback(files => {
    const file = files[0];
    setProductImage(file);
    setPreview(URL.createObjectURL(file));
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { "image/*": [] },
    multiple: false,
    onDrop,
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setProduct(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async e => {
    e.preventDefault();

    try {
      let imageUrl = preview;

      if (productImage) {
        const formData = new FormData();
        formData.append("file", productImage);
        const uploadRes = await axios.post(
          "http://localhost:8080/file/upload",
          formData,
          { headers: { "Content-Type": "multipart/form-data" } },
        );
        imageUrl = uploadRes.data.url;
      }

      const updatedData = await axios.patch(
        `http://localhost:8080/product/update/${id}`,
        {
          ...product,
          productImage: imageUrl,
        },
        { headers: { Authorization: `Bearer ${token}` } },
      );

      console.log("yo cai hamro updated data ho hai ta", updatedData);

      toast.success("Product updated successfully!");
      setTimeout(() => {
        navigate("/dashboard/my-products");
      }, 2000);
    } catch (error) {
      console.log(error.message);
      toast.error("Failed to update product.");
    }
  };

  if (loading)
    return <div className="loading-screen">Loading Product Details...</div>;

  return (
    <div className="update-product-wrapper">
      <div className="form-container">
        <h2 className="form-title">Update Product</h2>

        <form onSubmit={handleUpdate} className="update-form">
          <div className="form-group">
            <label htmlFor="productName">Product Name</label>
            <input
              id="productName"
              name="productName"
              type="text"
              className="form-control"
              value={product.productName}
              onChange={handleChange}
              placeholder="Product Name"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group half-width">
              <label htmlFor="price">Price</label>
              <input
                id="price"
                name="price"
                type="number"
                className="form-control"
                value={product.price}
                onChange={handleChange}
                placeholder="Price"
                required
              />
            </div>

            <div className="form-group half-width">
              <label htmlFor="quantity">Quantity</label>
              <input
                id="quantity"
                name="quantity"
                type="number"
                className="form-control"
                value={product.quantity}
                onChange={handleChange}
                placeholder="Quantity"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group half-width">
              <label htmlFor="category">Category</label>
              <input
                id="category"
                name="category"
                type="text"
                className="form-control"
                value={product.category}
                onChange={handleChange}
                placeholder="Category"
              />
            </div>

            <div className="form-group half-width">
              <label htmlFor="brand">Brand</label>
              <input
                id="brand"
                name="brand"
                type="text"
                className="form-control"
                value={product.brand}
                onChange={handleChange}
                placeholder="Brand"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="productDetails">Product Details</label>
            <textarea
              id="productDetails"
              name="productDetails"
              className="form-control textarea"
              value={product.productDetails}
              onChange={handleChange}
              placeholder="Enter product description"
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
                    Click or drag to replace image
                  </p>
                </div>
              ) : (
                <div className="upload-placeholder">
                  <p>Drag & drop a new image or click to select</p>
                </div>
              )}
            </div>
          </div>

          <button type="submit" className="submit-btn">
            Save Changes
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

export default UpdateProduct;