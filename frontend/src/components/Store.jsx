import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Store = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/product/getAll",
        );

        console.log(response.data.date);
        setProducts(response.data.date);
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
    <div>
      {products.map((value, index) => (
        <div key={index}>
          <img
            src={value.productImage}
            alt="product image"
            height={200}
            width={200}
          />
          <h3>{value.productName}</h3>
          <p>{value.productDetails}</p>
          <p>Rs.{value.price}</p>
          <button onClick={() => handleClick(value._id, value.price)}>
            Buy Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default Store;
