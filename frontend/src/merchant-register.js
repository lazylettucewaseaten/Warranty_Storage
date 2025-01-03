import React from "react"
import './RegisterMerchant.css';    
import {Link} from 'react-router-dom'
import axios from "axios";
function RegisterMerchant({ togglePage }) {

  const [formData, setFormData] = React.useState({
    business_name: "",
    your_name: "",
    work_email: "",
    alt_phone: "",
    work_phone: "",
    business_add: "",
    business_type: "",
    password: "",
    confirm_password: "",
    terms: false,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === 'checkbox' ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the backend with form data
      const response = await axios.post('http://localhost:5000/warranty/setup/addmerchant', formData);
      console.log(response.data);  // Handle success response
      alert('Registration successful!');
    } catch (error) {
      console.error('Error registering:', error);  // Handle error
      alert('Error registering. Please try again.');
    }
  };
    return (
      <div className="register-merchant-container">
        <div className="register-form-card">
          <h2 className="text-center">Register Merchant</h2>

    <form onSubmit={handleSubmit}>
      {/* Business Name Field */}
      <div className="form-group">
        <label htmlFor="business_name">Business Name</label>
        <input
          type="text"
          className="form-control"
          id="business_name"
          value={formData.business_name}
          onChange={handleChange}
          placeholder="Enter your business name"
          required
        />
      </div>

      {/* Your Name Field */}
      <div className="form-group">
        <label htmlFor="your_name">Your Name</label>
        <input
          type="text"
          className="form-control"
          id="your_name"
          value={formData.your_name}
          onChange={handleChange}
          placeholder="Enter your full name"
          required
        />
      </div>

      {/* Work Email Field */}
      <div className="form-group">
        <label htmlFor="work_email">Work Email</label>
        <input
          type="email"
          className="form-control"
          id="work_email"
          value={formData.work_email}
          onChange={handleChange}
          placeholder="Enter your work email"
          required
        />
      </div>

      {/* Alternate Phone Field */}
      <div className="form-group">
        <label htmlFor="alt_phone">Alternate Phone</label>
        <input
          type="text"
          className="form-control"
          id="alt_phone"
          value={formData.alt_phone}
          onChange={handleChange}
          placeholder="Enter alternate phone number"
          required
        />
      </div>

      {/* Work Phone Field */}
      <div className="form-group">
        <label htmlFor="work_phone">Work Phone</label>
        <input
          type="text"
          className="form-control"
          id="work_phone"
          value={formData.work_phone}
          onChange={handleChange}
          placeholder="Enter work phone number"
          required
        />
      </div>

      {/* Address Field */}
      <div className="form-group">
        <label htmlFor="business_add">Business Address</label>
        <input
          type="text"
          className="form-control"
          id="business_add"
          value={formData.business_add}
          onChange={handleChange}
          placeholder="Enter your business address"
          required
        />
      </div>

      {/* Business Type Field */}
      <div className="form-group">
        <label htmlFor="business_type">Business Type</label>
        <select
          className="form-control"
          id="business_type"
          value={formData.business_type}
          onChange={handleChange}
          required
        >
          <option value="">Select Business Type</option>
          <option value="Retail">Retail</option>
          <option value="Service">Service</option>
          <option value="Manufacturing">Manufacturing</option>
          <option value="Consulting">Consulting</option>
        </select>
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

      {/* Confirm Password Field */}
      <div className="form-group">
        <label htmlFor="confirm_password">Confirm Password</label>
        <input
          type="password"
          className="form-control"
          id="confirm_password"
          value={formData.confirm_password}
          onChange={handleChange}
          placeholder="Confirm your password"
          required
        />
      </div>

      {/* Terms and Conditions Checkbox */}
      <div className="form-group form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="terms"
          checked={formData.terms}
          onChange={handleChange}
          required
        />
        <label className="form-check-label" htmlFor="terms">
          I agree to the <a href="#terms" className="text-primary">Terms and Conditions</a>
        </label>
      </div>

      {/* Submit Button */}
      <button type="submit" className="btn btn-primary btn-block mt-3">
        Register
      </button>
    </form>
        </div>
      </div>
    );
  }
  
  export default RegisterMerchant;
  
