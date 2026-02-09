import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
    </div>
  );
};

export default Dashboard;
