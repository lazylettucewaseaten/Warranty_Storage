import React from "react"
// import './Register.css'
import { Link } from "react-router-dom";
import axios from 'axios'
export default function Register(){

  const [formData, setFormData] = React.useState({
    username: '',
    email: '',
    password: ''
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submit behavior

    try {
      // Sending POST request using Axios
await axios.post('http://localhost:5000/warranty/setup', formData);
      alert('Form submitted successfully!');
    } catch (error) {
      // Handle error
      console.error('Error submitting form:', error);
      alert('Error submitting form.');
    }
  };


    return (
        
        <div className="app-container">
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4 shadow" style={{ width: '400px' }}>
          <h2 className="text-center mb-4">Sign Up</h2>
          <form onSubmit={handleSubmit} >
  {/* Username Field */}
  <div className="form-group">
    <label htmlFor="username">Username</label>
    <input
      type="text"
      className="form-control"
      id="username"
      name="username"  // Added name attribute
      placeholder="Enter your name"
      value={formData.username}
      onChange={handleChange}
      required
    />
  </div>
  {/* Email Field */}
  <div className="form-group">
    <label htmlFor="email">Email address</label>
    <input
      type="email"
      className="form-control"
      id="email"
      name="email"  // Added name attribute
      placeholder="Enter your email"
      value={formData.email}
      onChange={handleChange}
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
      name="password"  // Added name attribute
      placeholder="Enter your password"
      value={formData.password}
      onChange={handleChange}
      required
    />
  </div>

  {/* Submit Button */}
  <button type="submit" className="btn btn-primary btn-block mt-3">
    Sign Up
  </button>
</form>


          {/* Link to Login page for users with existing accounts */}
          <div className="text-center mt-3">
            <p>Already have an account? <Link to="/login" className="text-primary">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
            
            
                   
