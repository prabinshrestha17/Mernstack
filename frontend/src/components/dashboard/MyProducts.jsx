import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import baseUrl from "../../config/env";
const MyProducts = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${baseUrl}/product/getAll`);

        setProducts(response.data.date || []);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProduct();
  }, []);

  const handleClick = productId => {
    navigate(`/dashboard/update-product/${productId}`);
  };

  const handleDelete = async productId => {
    console.log(productId);
    try {
      const response = await axios.delete(
        `${baseUrl}/product/delete/${productId}`,
      );
      alert("Product deleted successfully!");
      setProducts(prevProducts =>
        prevProducts.filter(product => product._id !== productId),
      );
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="store-container">
      <h1 className="page-title">Our Collection</h1>

      {products.length === 0 ? (
        <p className="loading-text">No products</p>
      ) : (
        <div className="product-grid">
          {products.map((value, index) => (
            <div key={index} className="product-card">
              <div className="image-wrapper">
                <img
                  src={value.productImage}
                  alt={value.productName}
                  className="product-image"
                />
              </div>
              <div className="product-content">
                <h3 className="product-name">{value.productName}</h3>
                <p>In Stock: {value.quantity} pcs. </p>
                <p className="product-details">{value.productDetails}</p>
                <div className="price-action-row">
                  <p className="product-price">Rs. {value.price}</p>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(value._id)}
                  >
                    Delete
                  </button>
                  <button
                    className="buy-button"
                    onClick={() => handleClick(value._id)}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyProducts;
