# Warranty Storage - MERN Stack Project

## Overview
Warranty Storage is a full-stack MERN (MongoDB, Express, React, Node.js) application designed to help merchants manage and verify warranty information for their customers. The application includes user authentication, secure password hashing, and a streamlined process for warranty verification.

## Features

### 1. *User Authentication*
- *Register/Login:* Users can register an account and log in securely.
- *Password Hashing:* User passwords are hashed using bcrypt to ensure security.
- *Session Management:* JWT (JSON Web Tokens) is used for managing user sessions.

### 2. *Warranty Management*
- *Add Warranty:* Merchants can add warranty information for customers.
- *View Warranties:* Merchants can view all stored warranties.
- *Verify Warranty:* Customers can submit their warranty details for verification by merchants.

### 3. *OTP Verification*
- *Password Reset:* Users can request a password reset, and an OTP (One-Time Password) is sent to their registered email.
- *OTP Validation:* OTP is validated before allowing the user to reset their password.

### 4. *Secure APIs*
- *Protected Routes:* APIs are secured with middleware to ensure only authenticated users have access.

### 5. *Responsive Design*
- Built with React and Bootstrap to ensure a seamless user experience across devices.

## Tech Stack

### Frontend
- React
- Bootstrap

### Backend
- Node.js
- Express.js

### Database
- MongoDB (NoSQL database)

### Other Tools
- Axios: For making API requests
- Mongoose: For interacting with MongoDB
- bcrypt: For password hashing
- nodemailer: For sending emails (OTP functionality)
- dotenv: For managing environment variables

## Installation

### Prerequisites
- Node.js
- npm (Node Package Manager)
- MongoDB instance (local or cloud)

### Steps to Set Up Locally

1. *Clone the Repository:*
   bash
   git clone https://github.com/your-username/warranty-storage.git
   cd warranty-storage
   

2. *Set Up Environment Variables:*
   Create a .env file in the root directory of the backend project and include:
   env
   PORT=5000
   MONGO_URI=<your-mongo-db-connection-string>
   JWT_SECRET=<your-jwt-secret>
   EMAIL=<your-email-address>
   PASSWORD=<your-email-password>
   

3. *Install Dependencies:*
   - Backend:
     bash
     cd backend
     npm install
     
   - Frontend:
     bash
     cd frontend
     npm install
     

4. *Start the Application:*
   - Start the backend server:
     bash
     cd backend
     npm start
     
   - Start the frontend server:
     bash
     cd frontend
     npm start
     

5. *Access the Application:*
   Open your browser and navigate to http://localhost:3000.

## Folder Structure

project-root/
|-- backend/
|   |-- controllers/       # Business logic for routes
|   |-- models/            # Mongoose schemas
|   |-- routes/            # API routes
|   |-- middleware/        # Middleware functions (auth, etc.)
|   |-- utils/             # Helper functions (e.g., for OTP/email)
|   |-- server.js          # Entry point for backend
|
|-- frontend/
|   |-- src/
|       |-- components/    # React components
|       |-- pages/         # Application pages (e.g., Login, Register, Dashboard)
|       |-- App.js         # Main React app component
|       |-- index.js       # Entry point for React
|
|-- README.md              # Documentation

## Future Enhancements
- Add support for multiple user roles (e.g., merchants, customers).
- Enable push notifications for OTP and updates.
- Integrate cloud storage for warranty documents.
- Enhance reporting and analytics for merchants.

## Contributing
We welcome contributions! Please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature.
3. Commit your changes and push to the branch.
4. Submit a pull request for review.

---
Thank you for using Warranty Storage!
