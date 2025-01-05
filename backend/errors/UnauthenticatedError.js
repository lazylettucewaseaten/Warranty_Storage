class UnauthenticatedError extends Error {
    constructor(message) {
      super(message);
      this.statusCode = 401; // Unauthorized
    }
  }
  
  module.exports = UnauthenticatedError;
  //Data Validation Page UI
  //Login Old
  //FAQs
  //G Auth
  //Reject nodemailer form delete from database
  //Expiry Date Display
  //Forgot Password
  //Host
  //kafi hai 
  