import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../App.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async e => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/user/login", {
        email: email,
        password: password,
      });

      console.log(response);

      const token = response.data.token;
      localStorage.setItem("token", token);
      navigate("/dashboard");
    } catch (error) {
      console.log(error.message);
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <div className="login-header">
          <h2>Welcome Back</h2>
          <p>Please enter your details to sign in</p>
        </div>

        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              required
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              required
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="login-btn">
            Sign In
          </button>

          <div className="form-footer">
            <a href="/forgot-password" className="forgot-link">
              Forgot Password?
            </a>
            <div className="divider"></div>
            <p className="signup-text">
              Don't have an account? <a href="/register">Sign up</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login; 