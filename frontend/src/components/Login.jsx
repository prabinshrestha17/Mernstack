import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
      console.log(token);

      const isToken = localStorage.setItem("token", token);
      alert("Login successful...");

      if (isToken) {
        navigate("/dashboard");
      } else {
        Error("failed to login");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="header">
      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          required
          onChange={e => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <br />
        <input
          type="password"
          value={password}
          required
          onChange={e => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
