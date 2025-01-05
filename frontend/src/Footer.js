import React from "react"
import kingAB from "./assets/AB.png"
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Register from './user-register'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Footer(){
    return (

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
    )
}