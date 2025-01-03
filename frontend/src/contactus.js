import React from "react";
import Navbar from "./navbar";
import axios from "axios"
export default function ContactUs(){
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData)
        try{
         const response= await axios.post('http://localhost:5000/warranty/setup/contactus' ,formData)

         setFormData({
          name: '',
          email: '',
          message: ''
        });
        alert("Message Has been sent Successfully")
        }
        catch(error)
        {
          console.log(error)
        }
      };
    return(
        <div className="ContactUs">
          
            <div className="container my-5 d-flex justify-content-center">
      <div className="col-lg-6 col-md-8 col-sm-10">
        <div className="card shadow-lg border-1 rounded-lg">
          <div className="card-header text-center bg-dark text-light">
            <h2>Contact Us</h2>
            <p className="mb-0">We're here to help you!</p>
          </div>
          <div className="card-body p-5 bg-light">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="form-label">
                  <i className="fas fa-user me-2"></i>Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="form-label">
                  <i className="fas fa-envelope me-2"></i>Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="form-label">
                  <i className="fas fa-comment-dots me-2"></i>Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message here"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-dark px-5 py-2 rounded-pill shadow-sm">
                  Send Message <i className="fas fa-paper-plane ms-2"></i>
                </button>
              </div>
            </form>
          </div>
          <div className="card-footer text-center text-muted py-3">
            <small>© 2024 LazyKings, Inc. All rights reserved.</small>
          </div>
        </div>
      </div>
    </div>
        </div>
    )
}