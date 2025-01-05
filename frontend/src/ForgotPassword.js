import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ForgotPassword() {
    const [userDetail, setUserDetail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the form submission logic here
        console.log('Reset password request for:', userDetail);
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow-lg" style={{ maxWidth: '400px', width: '100%' }}>
                <h2 className="text-center mb-3">Forgot Password</h2>
                <p className="text-center text-muted mb-4">
                    Enter your email address or username to reset your password.
                </p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input
                            type="text"
                            name="userDetail"
                            className="form-control"
                            placeholder="Email or Username"
                            value={userDetail}
                            onChange={(e) => setUserDetail(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                        Reset Password
                    </button>
                </form>
                <div className="text-center mt-3">
                    <a href="/login" className="text-decoration-none">Back to Login</a>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
