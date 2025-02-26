import React from "react";
import "./PaymentStatus.css";
import successImg from "../assets/success-icon.png";


const PaymentStatus = () => {
  return (
    <div className="payment-container">
      <a href="/" className="back-link">← BACK TO HOME</a>
      <div className="payment-box">
        <h2 className="congrats">CONGRATULATIONS</h2>
        <div className="success-icon">
          <img src={successImg} alt="Success" />
        </div>
        <p className="status-text">Payment Successful!</p>
        <a href="/" className="order-link">Order Placed</a>
        
        <div className="amount-details">
          <p>Total Amount: <span className="amount">₹ 730.00</span></p>
          <p>Paid Amount: <span className="paid-amount">₹ 730.00</span></p>
        </div>

        <button className="home-button">Go to Home</button>
      </div>
    </div>
  );
};

export default PaymentStatus;
