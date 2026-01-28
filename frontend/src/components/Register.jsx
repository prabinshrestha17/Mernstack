import React, { useState } from "react";
import "../../src/App.css";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/user/register", {
        username: username,
        email: email,
        password: password,
      });

      console.log(response.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleFormSubmit}>
        <h1>Register user </h1>
        <input
          type={username}
          onChange={event => {
            setUsername(event.target.value);
          }}
          placeholder="Username"
        />
        <br />
        <br />
        <input
          type={email}
          onChange={event => {
            setEmail(event.target.value);
          }}
          placeholder="email "
        />
        <br />
        <br />
        <input
          type={password}
          onChange={event => {
            setPassword(event.target.value);
          }}
          placeholder="yo chai hamro password"
        />
        <br />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
