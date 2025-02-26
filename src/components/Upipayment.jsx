import React from "react";
import "../style/UpiPayment.css";
import upiImage from "../assets/UPI_payment.png";


const UpiPayment = () => {
  return (
    <div className="upi-container">
      <a href="/" className="back-link">⬅ CANCEL</a>
      <div className="upi-box">
        <h2 className="upi-title">UPI PAYMENT</h2>
        <div className="upi-image">
          <img src={upiImage} alt="UPI QR Code" />

        </div>
        <button className="scan-pay-button">Scan & Pay</button>
        <button className="change-method-button">← Change Payment method</button>
      </div>
    </div>
  );
};

export default UpiPayment;
