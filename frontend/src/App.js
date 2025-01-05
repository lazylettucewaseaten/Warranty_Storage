import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Register.css'
import './Login.css'
import './RegisterMerchant.css'
import FrontPage from "./FrontPage";
import UserLogin from  './user-login'
import Register from "./user-register";
import AboutUs from './AboutUs'
import RegisterMerchant from './merchant-register';
import ContactUs from './contactus';
import FAQs from './Faqs';
import WarrantyList from "./warranty-edit";
import MerchantValidation from "./MerchantValidation";
import ForgotPassword from "./ForgotPassword";
import OTPVerification from "./otp";
import ChangePassword from "./changePassword";
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/RegisterUser" element={<Register />} />
      <Route path="/" element={<FrontPage />} />
      <Route path="/Login" element={<UserLogin />} />
      <Route path="/RegisterMerchant" element={<RegisterMerchant />}></Route>
      <Route path="/AboutUs" element={<AboutUs/>}></Route>
      <Route path="/ContactUs" element={<ContactUs/>}></Route>
      <Route path="/FAQs" element={<FAQs/>}></Route>
      <Route path="/UserEdit" element={<WarrantyList/>}></Route>
      <Route path="/Currentwarrantylist" element={<MerchantValidation/>}></Route>
      <Route path="/ForgotPassword" element={<ForgotPassword/>}></Route>
      <Route path="/OTP" element={<OTPVerification/>}></Route>
      <Route path="/ChangePassword" element={<ChangePassword/>}></Route>
    </Routes>
  </Router>
  )
}

export default App;
