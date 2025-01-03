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
  });
  const [err ,checkerr] =React.useState(0);

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
      console.log(task.data.hashed);
      const check =compareSync(formData.password ,task.data.hashed)
      if(check)
      {
        const token = task.data.token;

        // Save the token to localStorage
        localStorage.setItem("jwt_token", token);
        
        navigate("/UserEdit");
        console.log("done")
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

      {/* Forgot Password Link */}
      <div className="form-group d-flex justify-content-between align-items-center">
        <a href="#forgot-password" className="text-primary">Forgot Password?</a>
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
