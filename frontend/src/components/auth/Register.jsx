import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../../App.css";
import baseUrl from "../../config/env";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post(`${baseUrl}/user/register`, {
        username: username,
        email: email,
        password: password,
      });

      console.log(response.data);
      // Reset form
      setUsername("");
      setEmail("");
      setPassword("");

      alert("Registration successful! Please login.");
      navigate("/login");
    } catch (error) {
      console.log(error.message);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="register-wrapper">
      <div className="register-card">
        <div className="register-header">
          <h2>Create Account</h2>
          <p>Join us to get started</p>
        </div>

        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              className="form-control"
              required
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder="Choose a username"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              className="form-control"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              className="form-control"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Create a password"
            />
          </div>

          <button type="submit" className="register-btn">
            Register
          </button>

          <div className="form-footer">
            <p className="login-text">
              Already have an account? <Link to="/login">Log in here</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;