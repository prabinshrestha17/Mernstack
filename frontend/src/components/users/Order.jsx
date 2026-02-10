import axios from "axios";
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../App.css";

const Order = () => {
  const { id, price } = useParams();
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);
  const actualPrice = Number(price) * quantity;

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
        totalPrice: actualPrice,
        userInfo: {
          fullName: userInfo.fullName,
          email: userInfo.email,
          address: userInfo.address,
          city: userInfo.city,
          phone: userInfo.phone,
        },
      });

      console.log(orderData);
      alert("Order created successfully!");
    } catch (error) {
      console.log(error.message);
      alert("Failed to place order.");
    }
  };

  return (
    <div className="order-wrapper">
      <div className="order-card">
        <h2 className="page-title">Secure Checkout</h2>

        <div className="order-content">
          <div className="order-summary-section">
            <h3 className="section-title">Order Summary</h3>
            <div className="summary-card">
              <div className="summary-row">
                <span className="label">Product ID:</span>
                <span className="value">{id}</span>
              </div>
              <div className="summary-row">
                <span className="label">Unit Price:</span>
                <span className="value">Rs. {price}</span>
              </div>

              <div className="summary-row input-row">
                <label htmlFor="quantity" className="label">
                  Quantity:
                </label>
                <input
                  id="quantity"
                  type="number"
                  min="1"
                  className="qty-input"
                  value={quantity}
                  onChange={e => setQuantity(Number(e.target.value))}
                />
              </div>

              <div className="divider"></div>

              <div className="summary-row total-row">
                <span className="total-label">Total Amount:</span>
                <span className="total-value">Rs. {actualPrice}</span>
              </div>
            </div>
          </div>

          <form onSubmit={createOrder} className="shipping-form-section">
            <h3 className="section-title">Shipping Information</h3>

            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                id="fullName"
                type="text"
                className="form-control"
                required
                value={userInfo.fullName}
                onChange={e =>
                  setUserInfo({ ...userInfo, fullName: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                className="form-control"
                required
                value={userInfo.email}
                onChange={e =>
                  setUserInfo({ ...userInfo, email: e.target.value })
                }
              />
            </div>

            <div className="form-row">
              <div className="form-group half-width">
                <label htmlFor="city">City</label>
                <input
                  id="city"
                  type="text"
                  className="form-control"
                  required
                  value={userInfo.city}
                  onChange={e =>
                    setUserInfo({ ...userInfo, city: e.target.value })
                  }
                />
              </div>
              <div className="form-group half-width">
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  type="tel"
                  className="form-control"
                  required
                  value={userInfo.phone}
                  onChange={e =>
                    setUserInfo({ ...userInfo, phone: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="address">Delivery Address</label>
              <textarea
                id="address"
                className="form-control textarea"
                required
                rows="2"
                value={userInfo.address}
                onChange={e =>
                  setUserInfo({ ...userInfo, address: e.target.value })
                }
              />
            </div>

            <button type="submit" className="confirm-btn">
              Confirm Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Order;