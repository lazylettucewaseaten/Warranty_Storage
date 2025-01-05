import './Login.css';
import React from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Hook for navigation
import bcrypt, { compare, compareSync } from 'bcryptjs';

function Login() {
const navigate =useNavigate();
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    isMerchant:false
  });
  const [err ,checkerr] =React.useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const task = await axios.post("http://localhost:5000/warranty/setup/id", formData);
      const check =compareSync(formData.password ,task.data.hashed)
      if(check)
        {
      if(!formData.isMerchant)
      {
        console.log(formData.isMerchent)
            const token = task.data.token;
            // Save the token to localStorage
            localStorage.setItem("jwt_token", token);
            localStorage.setItem("Data" ,formData.email)
            navigate("/UserEdit");
            
            console.log("done")
          }
          else
          {
            const token = task.data.token;
            // Save the token to localStorage
            localStorage.setItem("jwt_token", token);
            localStorage.setItem("Data" ,formData.email)
            localStorage.setItem("SN", task.data.StoreName);
            localStorage.setItem("SA" ,task.data.StoreLocation)
            localStorage.setItem("WN" ,task.data.WorkNumber);
            navigate("/Currentwarrantylist");
            
            console.log("chus")
          }
        }
        
        } catch (error) {
          checkerr(1);
        }
  };

  return (
    <div className="app-container">
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4 shadow" style={{ width: '400px' }}>
          <h2 className="text-center mb-4">Login</h2>
          <form onSubmit={handleSubmit}>
      {/* Email Field */}
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />
      </div>

      {/* Password Field */}
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          required
        />
        </div>
        <div className="form-group">
  <label htmlFor="isMerchant">Is Merchant</label>
  <input
    type="checkbox"
    className="mx-2"
    id="isMerchant"
    checked={formData.isMerchant} 
    onChange={() =>
      setFormData((prevData) => ({
        ...prevData,
        isMerchant: !prevData.isMerchant, 
      }))
    }
  />
  <label>{formData.isMerchant ? "Yes" : "No"}</label>
</div>


      {/* Forgot Password Link */}
      <div className="form-group d-flex justify-content-between align-items-center">
        <a href="/ForgotPassword" className="text-primary">Forgot Password?</a>
      </div>

      {/* Submit Button */}
      <button type="submit" className="btn btn-primary btn-block mt-3">
        Submit
      </button>
    </form>
    {err&&<h4>Credentials are Wrong</h4>}
        </div>
      </div>
    </div>
    
  );
}

export default Login;
