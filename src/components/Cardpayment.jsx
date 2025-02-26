import React from "react";
import "../style/CardPayment.css";

const CardPayment = () => {
  return (
    <div className="container">
      <div className="payment-box">
        {/* Left Form Section */}
        <div className="form-section">
          <h2 className="title">PAYMENT THROUGH CARD</h2>
          <form>
            <label>Cardholder Name</label>
            <input type="text" className="input-field" placeholder="Enter Name" />
            
            <label>Card Number</label>
            <input type="text" className="input-field" placeholder="XXXX XXXX XXXX XXXX" />
            
            <div className="flex-container">
              <div className="half-width">
                <label>Date</label>
                <input type="text" className="input-field" placeholder="MM/YY" />
              </div>
              <div className="half-width">
                <label>CVV</label>
                <input type="password" className="input-field" placeholder="***" />
              </div>
            </div>

            <div className="checkbox-container">
              <input type="checkbox" id="save-details" />
              <label htmlFor="save-details">Save my payment details for future purchases</label>
            </div>
          </form>
        </div>
        
        {/* Right Image Section */}
        <div className="image-section">
          <img src="../img/card.jpg" alt="Payment Illustration" className="payment-image" />
        </div>
      </div>
      
      {/* Confirm & Pay Button */}
      <div className="button-container">
        <button className="confirm-button">Confirm & Pay</button>
      </div>
    </div>
  );
};

export default CardPayment;
