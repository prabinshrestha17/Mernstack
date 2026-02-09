import axios from "axios";
import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Order = () => {
  const { id, price } = useParams();

  const [quantity, setQuantity] = useState(1);

  const [totalPrice, setTotalPrice] = useState(price);

  const [userInfo, setUserInfo] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    phone: "",
  });

  const createOrder = async e => {
    e.preventDefault();
    try {
      const orderData = await axios.post("http://localhost:8080/order/create", {
        productId: id,
        quantity: quantity,
        totalPrice: Number(price) * quantity,
        userInfo: {
          fullName: userInfo.fullName,
          email: userInfo.email,
          address: userInfo.address,
          city: userInfo.city,
          phone: userInfo.phone,
        },
      });

      console.log(orderData);
      alert("Order created successfully");
    } catch (error) {
      console.log(error.message);
    }
  };

  const actualPrice = Number(price) * quantity;

  console.log(id, price);
  return (
    <div>
      <h2>Order Page</h2>
      <p>Product ID: {id}</p>
      <p>Price per item: Rs.{price}</p>

      <label htmlFor="quantity">Quantity:</label>
      <input
        type="number"
        value={quantity}
        onChange={e => setQuantity(Number(e.target.value))}
      />

      <p>Total Price: Rs.{actualPrice}</p>

      <form onSubmit={createOrder}>
        <h3>User Information</h3>
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          value={userInfo.fullName}
          onChange={e => {
            setUserInfo({ ...userInfo, fullName: e.target.value });
          }}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          value={userInfo.email}
          onChange={e => {
            setUserInfo({ ...userInfo, email: e.target.value });
          }}
        />
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          value={userInfo.address}
          onChange={e => {
            setUserInfo({ ...userInfo, address: e.target.value });
          }}
        />
        <label htmlFor="city">City:</label>
        <input
          type="text"
          value={userInfo.city}
          onChange={e => {
            setUserInfo({ ...userInfo, city: e.target.value });
          }}
        />
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          value={userInfo.phone}
          onChange={e => {
            setUserInfo({ ...userInfo, phone: e.target.value });
          }}
        />

        <button type="submit">Confirm Order</button>
      </form>
    </div>
  );
};

export default Order;
