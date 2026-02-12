import React, { useState } from "react";
import axios from "axios";
import baseUrl from "../../config/env";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const handleForgotPassword = async e => {
    e.preventDefault();
    try {
      const response = await axios.post(`${baseUrl}/user/forgot-password`, {
        email: email,
      });

      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <form onSubmit={handleForgotPassword}>
        <input
          type="text"
          value={email}
          onChange={e => {
            setEmail(e.target.value);
          }}
          required
          placeholder="enter your email"
        />
        <button type="submit">send reset link</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
