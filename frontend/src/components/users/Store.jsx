import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Store = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/product/getAll",
        );
        // Kept your original data path (response.data.date)
        // Added optional chaining and fallback to empty array for safety
        setProducts(response.data.date || []);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProduct();
  }, []);

  const handleClick = (productId, price) => {
    navigate(`/order/${productId}/${price}`);
  };

  return (
    <div className="store-container">
      <h1 className="page-title">Our Collection</h1>

      {products.length === 0 ? (
        <p className="loading-text">Loading products...</p>
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
                <p className="product-details">{value.productDetails}</p>
                <div className="price-action-row">
                  <p className="product-price">Rs. {value.price}</p>
                  <button
                    className="buy-button"
                    onClick={() => handleClick(value._id, value.price)}
                  >
                    Buy Now
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

export default Store;