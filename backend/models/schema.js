const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
})
const merchantSchema=mongoose.Schema({
    business_name:{
      type:String,
      required:true,
    },
    your_name:{
        type:String,
        required:true,
    },
    work_email:{
        type:String,
        unique:true,
    },
    alt_phone:{
        type:String,
    },
    work_phone:{
        type:String,
        required:true,
        unique:true,
    },
    business_add:{
        type:String,
        required:true,
    },
    business_type:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
})
const warrantySchema =  mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
     },
    product_name: {
      type: String,
      required: true,
      trim: true,
    },
    purchase_date:{
        type:String,
        required:true,
    },
    expiry_date:{
        type:String,
        default:""
    },
    store_name: {
      type: String,
      required: true,
      trim: true,
    },
    store_location: {
      type: String,
      required: true,
      trim: true,
    },
    invoice: {
      type: Buffer, // Changed from String/URL to Buffer for storing binary data
      required: true,
    },
    status: {
      type: String,
      enum: ['Pending Verification', 'Verified', 'Expired' ,'Cancelled'],
      default: 'Pending Verification',
    },
  }); 
//Contact Us page

  const ContactUs = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
});

module.exports = {
    UserLogin: mongoose.model('UserLogin', userSchema),
    Merchant: mongoose.model('Merchant', merchantSchema),
    UserWarranty: mongoose.model('UserWarranty',warrantySchema),
    ContactUs: mongoose.model('ContactUs', ContactUs)

};