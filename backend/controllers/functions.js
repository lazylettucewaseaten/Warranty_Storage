const express=require('express')
const mongoose=require('mongoose')
const {UserLogin,Merchant,UserWarranty ,ContactUs}=require('../models/schema')
const asyncWrapper =require('../middleware/async')
const nodemailer =require("nodemailer")
require('dotenv').config();
const jwt =require('jsonwebtoken')
const multer = require('multer');
const verifyToken =require('../middleware/auth')

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        return cb(null,"./uploads");
    },
    filename : function (req,file,cb){
        return cb(null,`${Date.now()}-${file.originalname}}`);
    },
});

const upload=multer({storage:storage});


const bcrypt =require('bcrypt');
    const addingnewuser=async (req,res) => {
    let unhashedpassword=(req.body.password)
    const saltRounds=10
    salt=bcrypt.genSaltSync(saltRounds)
    hashed=bcrypt.hashSync(unhashedpassword,salt)
    try{
        const userinfo={
            "username":req.body.username,
            "email":req.body.email,
            "password":hashed
        }
        const task=await UserLogin.create(userinfo)

        res.status(200).json({userinfo})
    }
    catch(error){
        res.status(500).json(error)
    }
}

const fetchingdetails=async(req,res)=>{
    //got the email
    try {
        const output=await UserLogin.find({ email : req.body.email})
        if(output.length===0){
            return res.status(404).json({success:false,"msg":"user not found"})
        }
        console.log(output[0].password)
        const user = { email:req.body.email}; // Example user (this should be retrieved from your database)
        const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "1h" });
        console.log(token)
        const data={
            "hashed":output[0].password,
            "token":token
        }
        console.log(data)
        res.status(200).json(data)

    } catch (error) {
        res.status(500).json(error)
    }
}

const addingnewmerchantuser=async (req,res) => {
    console.log("Trying to add")
    let unhashedpassword=(req.body.password)
    const saltRounds=10
    salt=bcrypt.genSaltSync(saltRounds)
    hashed=bcrypt.hashSync(unhashedpassword,salt)
    try{
        const merchantuserinfo={
            "business_name":req.body.business_name,
            "your_name":req.body.your_name,
            "work_email":req.body.work_email,
            "alt_phone":req.body.alt_phone,
            "work_phone":req.body.work_phone,
            "business_add":req.body.business_add,
            "business_type":req.body.business_type,
            "password":hashed
        }
        console.log(merchantuserinfo)
        const task=await Merchant.create(merchantuserinfo)
        console.log(task)
        res.status(200).json({task})
    }
    catch(error){
        res.status(500).json(error)
    }
}
const uploadwarranty = async (req, res) => {
        if (!req.file) {
            console.log("Done")
            return res.status(400).json({ message: 'File is required.' });
        }
    try {
        const { email ,product_name, store_name, store_location ,purchase_date ,expiry_date } = req.body;
        const newWarranty = {
            "email":email,
            "product_name":product_name,
            "store_name":store_name,
            "purchase_date":purchase_date,
            "expiry_date":expiry_date,
            "store_location":store_location,
            "invoice": req.file.buffer, 
            "status": 'Pending Verification', 
        };
        console.log('Warranty Data:', newWarranty);
        const task = await UserWarranty.create(newWarranty);
        res.status(200).send({ message: 'Warranty uploaded and awaiting verification.' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Server error', error: error.message });
    }
};


const getWarranty = async (req, res) => {
    try {
        const warranty = await UserWarranty.find({ email: req.body.email });

        res.status(200).json(warranty);
    } catch (error) {
        res.status(500).send(error);
    }
};
// 
// Contact Us page
// 
const Contact =asyncWrapper(async(req ,res)=>{
    console.log("hello")
    const task = await ContactUs.create(req.body)
    const mailData = {
        from:process.env.Email ,  // sender address
        to: req.body.email,    // list of receivers
        subject: 'Conformation of the Query',
        text: 'Your Query Has been Received ,We will process it shortly ',
        html: '<b>Hey there! </b><br> This is our first message sent with Nodemailer<br/>',
    };
    
    // Create transporter using Gmail's SMTP server
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,  // Correct SMTP port for Gmail (SSL)
        secure: true,  // Use SSL
        auth: {
            user: process.env.Email,  // Your Gmail address
            pass: process.env.Password,         // Your Gmail app password (not your account password)
        },
    });
    transporter.sendMail(mailData, (error, info) => {
        if (error) {
            console.log('Error sending email:', error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
    res.status(201).json({task});
});





const fetchvalidations = async (req, res) => {
    try {
        const { store_name, store_location } = req.body;

        // Validate required parameters
        if (!store_name || !store_location) {
            return res.status(400).json({
                success: false,
                message: "Store name and store location are required.",
            });
        }

        // Fetch the warranties based on store_name and store_location
        const output = await UserWarranty.find({ store_name, store_location });

        // If no warranties found, return a message
        if (output.length === 0) {
            return res.status(200).json({
                success: true,
                msg: "No warranties for your store right now."
            });
        }

        // Optional: Process the output (e.g., add the invoice URL or file metadata)
        const responseData = output.map((warranty) => {
            return {
                ...warranty.toObject(), // Convert Mongoose document to plain object
                invoiceUrl: warranty.invoice ? `/download/invoice/${warranty._id}` : null, // Add a link to download the invoice
            };
        });

        // Send the processed data back to the client
        res.status(200).json({
            success: true,
            data: responseData, // Respond with the modified output that includes invoice download URL
        });

    } catch (error) {
        // Handle any errors during the process
        console.error("Error fetching validations:", error);
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};
const updatewarrantystatus = async (req, res) => {
    try {
        const { id } = req.params;  
        const { status } = req.body; 
        const updatedWarranty = await UserWarranty.findByIdAndUpdate(
            id,
            { status },
            { new: true } 
        );
        res.status(200).json({success:true,updatedWarranty});
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Error updating warranty status',
            error: error.message,
        });
    }
};
module.exports={addingnewuser,fetchingdetails,addingnewmerchantuser,uploadwarranty,getWarranty ,Contact,updatewarrantystatus,fetchvalidations}