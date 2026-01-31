import React, { useState } from "react";
import axios from "axios";

import "../../src/App.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/user/register", {
        username: username,
        email: email,
        password: password,
      });

      setUsername("");
      setEmail("");
      setPassword("");
      console.log(response.data);
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          required
          value={username}
          onChange={e => {
            setUsername(e.target.value);
          }}
          placeholder="username"
        />
        <br />
        <br />
        <input
          type="email"
          required
          value={email}
          onChange={e => {
            setEmail(e.target.value);
          }}
          placeholder="email"
        />
        <br />
        <br />
        <input
          required
          type="password"
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
          placeholder="password"
        />
        <br />
        <br />

        <button type="submit">register</button>
      </form>
    </div>
  );
};

export default Register;
