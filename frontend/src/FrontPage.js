import React from "react"
import kingAB from "./assets/AB.png"
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Register from './user-register'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./navbar";

export default function FrontPage(props){
  const navigate = useNavigate();
  function handeluserlogin(){
    props.setLogin(2);
  }
  // const navigate = useNavigate();
  return (
        <div className="frontpage">
          <Navbar />
            <div class="px-4 pt-5 my-5 text-center border-bottom">
    <h1 class="display-4 fw-bold text-body-emphasis">Warranty Storage</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">Store and manage all your product warranties in one secure, mobile-friendly platform. Easily upload, organize, and access warranty information anytime, anywhere. Built with modern web technologies for fast and reliable service.</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
        <button type="button" class="btn btn-primary btn-lg px-4 me-sm-3"  onClick={() => navigate('/RegisterUser')}>
          Client Access</button>
        <button type="button" class="btn btn-outline-secondary btn-lg px-4" onClick={()=> navigate('/RegisterMerchant')}>Merchant Access</button>
      </div>
    </div>
    <div class="overflow-hidden">
      <div class="container px-5">
        {/* <img src="bootstrap-docs.png" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy"> */}
      </div>
    </div>
  </div>
  <div class="container px-4 py-5" id="icon-grid">
  <h2 class="pb-2 border-bottom">Features</h2>

  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
    <div class="col d-flex align-items-start">
      <svg class="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"></svg>
      <div>
        <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">Easy Access</h3>
        <p>Access all warranty information from any device, anytime.</p>
      </div>
    </div>

    <div class="col d-flex align-items-start">
      <svg class="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"></svg>
      <div>
        <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">Accurate Organization</h3>
        <p>Automatically categorize warranties for quick retrieval.</p>
      </div>
    </div>

    <div class="col d-flex align-items-start">
      <svg class="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"></svg>
      <div>
        <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">Official and Secure</h3>
        <p>Data is securely stored with robust encryption.</p>
      </div>
    </div>

    <div class="col d-flex align-items-start">
      <svg class="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"></svg>
      <div>
        <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">User-Friendly Interface</h3>
        <p>Intuitive design for easy navigation and use.</p>
      </div>
    </div>

    <div class="col d-flex align-items-start">
      <svg class="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"></svg>
      <div>
        <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">Cloud-Based Storage</h3>
        <p>Cloud storage for easy backup and retrieval.</p>
      </div>
    </div>

    <div class="col d-flex align-items-start">
      <svg class="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"></svg>
      <div>
        <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">Search Functionality</h3>
        <p>Quickly find warranties using product names or categories.</p>
      </div>
    </div>

    <div class="col d-flex align-items-start">
      <svg class="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"></svg>
      <div>
        <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">Responsive Design</h3>
        <p>Optimized for all screen sizes, from mobile to desktop.</p>
      </div>
    </div>

    <div class="col d-flex align-items-start">
      <svg class="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"></svg>
      <div>
        <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">Custom Reminders</h3>
        <p>Set reminders for warranty expiration and renewal dates.</p>
      </div>
    </div>
  </div>
</div>
<footer class="py-3 mt-4 bg-dark text-light">
<ul class="nav justify-content-center border-bottom pb-3 mb-3">
    <li class="nav-item"><a href="/AboutUs" class="nav-link px-2 text-light">About</a></li>
    <li class="nav-item"><a href="/RegisterUser" class="nav-link px-2 text-light">Client</a></li>
    <li class="nav-item"><a href="/RegisterMerchant" class="nav-link px-2 text-light">Merchant</a></li>
    <li class="nav-item"><a href="/ContactUs" class="nav-link px-2 text-light">ContactUs</a></li>
    <li class="nav-item"><a href="/FAQs" class="nav-link px-2 text-light">FAQs</a></li>
  </ul>
  <p class="text-center text-light">© 2024 LazyKings, Inc</p>
</footer>

        </div>
    )
}