import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CheckAuthAndRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem("jwt_token");
      console.log(token);

      if (!token) {
        // Redirect to login if no token is present
        navigate("/Login");
        return;
      }

      try {
        // Send a request to verify the token
        const { data } = await axios.get("http://localhost:5000/warranty/setup/id", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("Token verified. Data:", data);

        // Optional: Navigate to a specific page if needed
        navigate("/UserEdit");
      } catch (error) {
        console.error("Token verification failed:", error);
        localStorage.removeItem("jwt_token"); // Remove invalid token
        navigate("/Login"); // Redirect to login
      }
    };

    verifyToken();
  }, [navigate]);

  return null; // This component is for redirection only
};

export default CheckAuthAndRedirect;
