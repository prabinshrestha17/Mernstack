import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import baseUrl from "../../config/env";

const ResetPassword = () => {
  const [password, setPassword] = useState("");

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const token = searchParams.get("token");
  console.log("this is our token", token);
  const handleResetPassword = async e => {
    e.preventDefault();

    try {
      const response = await axios.patch(
        `${baseUrl}/user/reset-password?token=${token}`,
        {
          password: password,
        },
      );

      console.log(response);
      alert("Password reset successfully.");
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <form onSubmit={handleResetPassword}>
        <input
          type="password"
          value={password}
          required
          placeholder="New password"
          onChange={e => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;
