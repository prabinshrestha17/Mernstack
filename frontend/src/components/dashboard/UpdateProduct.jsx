import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const UpdateProduct = () => {
  const { id } = useParams();

  const [productName, setProductName] = useState("");
  const [productDetails, setProductDetails] = useState("");
  const [price, setPrice] = useState("");
  const [productImage, setProductImage] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/product/getAll",
        );
        console.log(response);

        setProducts(response.data.date || []);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProduct();
  }, []);

  const handleUpdate = async e => {
    e.preventDefault();

    try {
      const response = await axios.patch(
        `http://localhost:8080/product/update/${id}`,
        {
          productName,
          productDetails,
          price,
          brand,
          category,
          quantity,
          productImage,
        },
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleUpdate}></form>
    </div>
  );
};

export default UpdateProduct;
