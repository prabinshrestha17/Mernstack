import axios from "axios";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

const ProductCreate = () => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [productDetails, setProductDetails] = useState("");
  const [brand, setBrand] = useState("");
  const [preview, setPreview] = useState(null);

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [] },
    multiple: false,
    onDrop: acceptedFiles => {
      setProductImage(acceptedFiles[0]);
      setPreview(URL.createObjectURL(acceptedFiles[0]));
    },
  });

  const createProduct = async e => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    if (!productImage) {
      alert("choose the product image");
      return;
    }

    const formData = new FormData();
    formData.append("file", productImage);

    try {
      const uploadResponse = await axios.post(
        "http://localhost:8080/file/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      console.log(uploadResponse.data.url);

      const imageUrl = uploadResponse.data.url;

      const response = await axios.post(
        "http://localhost:8080/product/create",
        {
          productName: productName,
          price: price,
          productImage: imageUrl,
          quantity: quantity,
          category: category,
          productDetails: productDetails,
          brand: brand,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      console.log("product created successfully", response.data);
      alert("Product created successfully");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={createProduct}>
        <label htmlFor="productName">Product Name</label>
        <br />
        <input
          type="text"
          placeholder="product name"
          value={productName}
          onChange={e => {
            setProductName(e.target.value);
          }}
        />
        <br />
        <br />
        <label htmlFor="price">Price</label> <br />
        <input
          type="number"
          placeholder="price"
          value={price}
          onChange={e => {
            setPrice(e.target.value);
          }}
        />
        <br />
        <br />
        <label htmlFor="productImage">Product Image</label> <br />
        <div
          {...getRootProps()}
          style={{ border: "1px dashed black", padding: "20px" }}
        >
          <input {...getInputProps()} />

          {preview && (
            <div>
              <img src={preview} height={200} width={200} />
            </div>
          )}
        </div>
        <br />
        <br />
        <label htmlFor="quantity">Quantity</label> <br />
        <input
          type="number"
          placeholder="product quantity"
          value={quantity}
          onChange={e => {
            setQuantity(e.target.value);
          }}
        />
        <br />
        <br />
        <label htmlFor="category">Category</label> <br />
        <input
          type="text"
          placeholder="product category"
          value={category}
          onChange={e => {
            setCategory(e.target.value);
          }}
        />
        <br />
        <br />
        <label htmlFor="productDetails">Product Details</label> <br />
        <textarea
          placeholder="product Details"
          value={productDetails}
          onChange={e => {
            setProductDetails(e.target.value);
          }}
        />
        <br />
        <br />
        <label htmlFor="brand">Brand</label> <br />
        <input
          type="text"
          placeholder="product brand"
          value={brand}
          onChange={e => {
            setBrand(e.target.value);
          }}
        />
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
};

export default ProductCreate;
