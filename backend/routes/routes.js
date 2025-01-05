const express=require('express')
const multer = require('multer');
const upload = multer();
const router=express.Router()
// <<<<<<< HEAD
const {addingnewuser,fetchingdetails, addingnewmerchantuser, uploadwarranty,getWarranty ,Contact,fetchvalidations,updatewarrantystatus,  OTP, UpdatePassword,rejectionmail, UpdateExpiry}=require('../controllers/functions')
// =======
// const {addingnewuser,fetchingdetails, addingnewmerchantuser, uploadwarranty,getWarranty ,Contact,fetchvalidations,updatewarrantystatus,}=require('../controllers/functions')
// >>>>>>> 27950cdf6cf580a1ff8d31ccfd84f4e542458d33
const authHeader =require('../middleware/auth')

router.route('/').post(addingnewuser)
router.route('/addmerchant').post(addingnewmerchantuser)
router.route('/id').post(fetchingdetails).get(authHeader)



router.route('/getwarranty').post(getWarranty)
router.post('/createwarranty',upload.single('invoice'),uploadwarranty)


router.route('/merchantverifications').post(fetchvalidations);
router.route('/merchantverifications/:id').patch(updatewarrantystatus);

router.route('/contactus').post(Contact);
// <<<<<<< HEAD
router.route('/rejectwarranty').post(rejectionmail);
// =======
router.route('/OTP').post(OTP)


router.route('/UpdatePassword').post(UpdatePassword)
// >>>>>>> 27950cdf6cf580a1ff8d31ccfd84f4e542458d33

router.route('/UpdateExpiry').post(UpdateExpiry)
                            
module.exports=router