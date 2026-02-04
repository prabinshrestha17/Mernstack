import axios from "axios";
import React, { useState } from "react";

const UpdateProfile = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");

  const [error, setError] = useState("");

  const handleUpdateProfile = async e => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    console.log(token);

    try {
      const response = await axios.patch(
        "http://localhost:8080/user/update-user",
        {
          email: email,
          username: userName,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setError(response.data.message);

      console.log(response.data);
      alert(response.data.message);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <h1>Update Profile </h1>
      <form onSubmit={handleUpdateProfile}>
        <input
          type="text"
          value={userName}
          onChange={e => {
            setUserName(e.target.value);
          }}
          placeholder="Enter your username"
        />

        <input
          type="email"
          value={email}
          onChange={e => {
            setEmail(e.target.value);
          }}
          placeholder="Enter your email"
        />

        <button type="submit">Update Profile</button>
      </form>

      <p>
        Your new username is{" "}
        <span style={{ fontWeight: "bold" }}> {userName}</span> and your updated
        email is <span style={{ fontWeight: "bold" }}>{email}</span>
      </p>
    </div>
  );
};

export default UpdateProfile;
