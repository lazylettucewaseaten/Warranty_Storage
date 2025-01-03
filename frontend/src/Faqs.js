import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar';
function FAQs() {
  return (
    <div>

      <Navbar />
    <div className="Faqs">
    <div className="container py-5" style={{ color: '#333', backgroundColor: '#f8f9fa' }}>
      <h1 className="text-center mb-4" style={{ color: '#222' }}>Frequently Asked Questions</h1>
      <div className="accordion accordion-flush" id="faqsAccordion">

        <div className="accordion-item border-2">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button collapsed bg-white text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              How do I add a warranty to the storage platform?
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#faqsAccordion">
            <div className="accordion-body" style={{ backgroundColor: '#e9ecef' }}>
              To add a warranty, simply upload a copy of it to the platform. Before it’s fully stored, the warranty will be sent to the merchant for verification to ensure it’s authentic.
            </div>
          </div>
        </div>

        <div className="accordion-item border-2">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed bg-white text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Why is merchant verification required for my warranty?
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqsAccordion">
            <div className="accordion-body" style={{ backgroundColor: '#e9ecef' }}>
              Merchant verification ensures that only valid, legitimate warranties are stored, protecting you from potentially incorrect or unauthorized records.
            </div>
          </div>
        </div>

        <div className="accordion-item border-2">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed bg-white text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              How long does the merchant verification process take?
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqsAccordion">
            <div className="accordion-body" style={{ backgroundColor: '#e9ecef' }}>
              The time for verification depends on the merchant's response. The platform keeps you updated on the status, and you will be notified once the merchant confirms the warranty.
            </div>
          </div>
        </div>

        <div className="accordion-item border-2">
          <h2 className="accordion-header" id="headingFour">
            <button className="accordion-button collapsed bg-white text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              How does the platform handle expired warranties?
            </button>
          </h2>
          <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqsAccordion">
            <div className="accordion-body" style={{ backgroundColor: '#e9ecef' }}>
              The platform automatically removes expired warranties from your account. This helps keep your records current and ensures you only see valid, active warranties.
            </div>
          </div>
        </div>

        <div className="accordion-item border-2">
          <h2 className="accordion-header" id="headingFive">
            <button className="accordion-button collapsed bg-white text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
              Will I be notified before a warranty expires?
            </button>
          </h2>
          <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faqsAccordion">
            <div className="accordion-body" style={{ backgroundColor: '#e9ecef' }}>
              Yes, you'll receive a notification before a warranty expires, giving you time to use any remaining benefits or services associated with it.
            </div>
          </div>
        </div>

        <div className="accordion-item border-2">
          <h2 className="accordion-header" id="headingSix">
            <button className="accordion-button collapsed bg-white text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
              Is my data secure on this platform?
            </button>
          </h2>
          <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#faqsAccordion">
            <div className="accordion-body" style={{ backgroundColor: '#e9ecef' }}>
              Absolutely. The platform uses secure, encrypted storage to protect your data, ensuring that only you and verified merchants can access your warranty information.
            </div>
          </div>
        </div>

      </div> 
    </div>
    </div>
    </div>
  );
}

export default FAQs;
