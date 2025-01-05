import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom"; // Hook for navigation
import axios from 'axios';
function ChangePassword() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate =useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            const email =await localStorage.getItem("email")
            const task =await axios.post("http://localhost:5000/warranty/setup/UpdatePassword", {
                email:email,
                password:confirmPassword
            });
            navigate("/login")
            console.log('hello')
            alert('Password changed successfully');
        } else {
            console.error('Passwords do not match');
            alert('Passwords do not match');
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow-lg" style={{ maxWidth: '400px', width: '100%' }}>
                <h2 className="text-center mb-3">Change Password</h2>
                <p className="text-center text-muted mb-4">
                    Please enter and confirm your new password.
                </p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="New Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="password"
                            name="confirmPassword"
                            className="form-control"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                        Change Password
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ChangePassword;
