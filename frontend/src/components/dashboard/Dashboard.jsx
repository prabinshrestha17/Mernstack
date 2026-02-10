import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Store from "../users/Store";
import "../App.css";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    try {
      if (!token) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error.message);
    }
  }, [navigate]);

  return (
    <div className="buttons">
      <div>
        Dashboard
        <button
          onClick={() => {
            navigate("/dashboard/update-profile");
          }}
        >
          Update Profile
        </button>
        <button
          onClick={() => {
            navigate("/dashboard/create-product");
          }}
        >
          Create Product
        </button>
        <button
          onClick={() => {
            navigate("/dashboard/my-products");
          }}
        >
          My Products
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
