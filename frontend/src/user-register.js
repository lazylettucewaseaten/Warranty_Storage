import "./Login.css";
// import './Register.css'
import { Link, Navigate } from "react-router-dom";
import axios from 'axios'
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./navbar";
export default function Register(){
  const [text, setText] = useState("");
  const words = ["Welcome Back!", "Secure Login", "Your Journey Starts Here"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
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
  const navigate=useNavigate();
  const handlenavigatelogin=(e)=>{
    e.preventDefault();
    navigate('/Login')
  }

  useEffect(() => {
    let currentLetterIndex = 0;
    let isAdding = true;

    const typeWriter = () => {
      const currentWord = words[currentWordIndex];

      if (isAdding) {
        if (currentLetterIndex <= currentWord.length) {
          setText(currentWord.slice(0, currentLetterIndex));
          currentLetterIndex++;
        } else {
          setTimeout(() => {
            isAdding = false;
            currentLetterIndex--;
          }, 1000);
        }
      } else {
        if (currentLetterIndex >= 0) {
          setText(currentWord.slice(0, currentLetterIndex));
          currentLetterIndex--;
        } else {
          isAdding = true;
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          currentLetterIndex = 0;
        }
      }
    };

    const interval = setInterval(typeWriter, 200);
    return () => clearInterval(interval);
  }, [currentWordIndex]);


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
      <>
      <Navbar/>
<div className="page-container">
      <div className="content-wrapper">
        <div className="typewriter-section">
          <h1 className="main-text">
            {text}
            <span className="cursor">|</span>
          </h1>
        </div>

        <div className="login-box">
          <h2 className="login-title">Register</h2>
          <form onSubmit={handleSubmit} >
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                className="form-input"
                value={formData.username}
                onChange={handleChange}
                required
                />
            </div>

            <div className="form-group">
              <label htmlFor="email">Enter your email</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                required
                />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="form-input"
                value={formData.password}
                onChange={handleChange}
                required
                />
            </div>

            {/* <div className="form-options">
              <label className="remember-me">
              <input type="checkbox" /> Remember me
              </label>
              </div> */}

  <button type="submit" className="btn btn-primary btn-block mt-3">
    Sign Up
  </button>
</form>
<div className="social-divider">
            <span>or</span>
          </div>

          <button className="guest-button" onClick={handlenavigatelogin}>Login</button>
        </div>
      </div>
    </div>          
              </>
  );
}
            
            
                   

