import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("Dashboard token:", token);

    if (!token) {
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  return (
    <div>
      Dashboard
      <button
        onClick={() => {
          navigate("/dashboard/update-profile");
        }}
      >
        Update Profile
      </button>
    </div>
  );
};

export default Dashboard;
