import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom"; // Hook for navigation
import { colors } from '@mui/material';
import axios from "axios";

function OTPVerification() {
    const [otp, setOtp] = useState('');
    const [generatedOtp, setGeneratedOtp] = useState(null); 
    const [Wrong ,setWrong] =useState(false);
    const navigate =useNavigate();
    let randint;
    const email =localStorage.getItem("email");
    const sendMail=async()=>{
        randint = await Math.floor(1000 + Math.random() * 9000);
        setGeneratedOtp(randint)
        console.log(randint)
        await axios.post("http://localhost:5000/warranty/setup/OTP", {
            email:email,
            num:randint
        });
    }
    
    // React.useEffect(()=>{
        // } ,[])
        // <body></body>

    const handleSubmit = (e) => {
        e.preventDefault();
        if((generatedOtp === parseInt(otp)))
        {
            navigate("/ChangePassword")
        }
        else
        {
            setWrong(true);
        }

    };
    // window.addEventListener('load', sendMail());
    return (
        <div className="container d-flex justify-content-center align-items-center vh-100" >
            <div className="card p-4 shadow-lg" style={{ maxWidth: '400px', width: '100%' }}>
                <h2 className="text-center mb-3">OTP Verification</h2>
                <p className="text-center text-muted mb-4">
                    Please enter the 4-digit OTP sent to your registered email.
                </p>
                {Wrong && <h5 style={{ color: 'red', textAlign: 'center' }}>Wrong OTP</h5>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input
                            type="text"
                            name="otp"
                            className="form-control text-center"
                            placeholder="Enter OTP"
                            maxLength="4"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                        Verify OTP
                    </button>
                </form>
                <div className="text-center mt-3">
                    <p className="mb-1">Didn't receive the OTP?</p>
                    <button className="btn btn-link text-decoration-none" onClick={() => sendMail()}>Resend OTP</button>
                </div>
            </div>
        </div>
    );
}

export default OTPVerification;