import { useState } from "react";
import "./Checkout.css";

import upiIcon from "../assets/upi.png";
import visaIcon from "../assets/visa.png";
import mastercardIcon from "../assets/mastercard.png";
import codIcon from "../assets/cod.png";

import Pencils from "../assets/Rectangle 95.png";
import Notebook from "../assets/Rectangle 94.png";
import SNotes from "../assets/Rectangle 97.png";

import UpiPaymentImage from "../assets/UPI_payment.png"; // Import the image
import CardPaymentImage from "../assets/card_payment.png";

import CartSummary from "./CartSummary";

const initialCartItems = [
  {
    id: 1,
    name: "Color Pencils",
    description: "1 pack - 12 colours",
    price: 100,
    quantity: 2,
    image: Pencils,
  },
  {
    id: 2,
    name: "Sticky Notes",
    description: "1 set - 8 colours",
    price: 80,
    quantity: 5,
    image: SNotes,
  },
  {
    id: 3,
    name: "Notebook",
    description: "King size spiraled - 180 pages",
    price: 70,
    quantity: 1,
    image: Notebook,
  },
];

const Checkout = () => {
  const [selectedMethod, setSelectedMethod] = useState("Master Card");
  const [showUPIImage, setShowUPIImage] = useState(false);
  const [showCardPayment, setShowCardPayment] = useState(false);

  const paymentOptions = [
    { name: "Upi Payment", icon: upiIcon },
    { name: "Visa Card", icon: visaIcon, details: "****4586" },
    { name: "Master Card", icon: mastercardIcon, details: "****7582" },
    { name: "Cash on Delivery", icon: codIcon },
  ];

  const handlePlaceOrder = () => {
    if (selectedMethod === "Upi Payment") {
      setShowUPIImage(true);
      setShowCardPayment(false);
    } else if (selectedMethod === "Visa Card" || selectedMethod === "Master Card") {
      setShowCardPayment(true);
      setShowUPIImage(false);
    } else {
      setShowUPIImage(false);
      setShowCardPayment(false);
      alert("Order Placed Successfully!");
    }
  };

  return (
    <>
      <div className="checkout-container">
        <div className="checkout-header"></div>

        {/* Billing Details */}
        <div className="billing-details">
          <h3>Billing Details</h3>
          <form className="checkout-form">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" placeholder="Enter first name" required />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <div className="phone-input">
                <select>
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                </select>
                <input type="text" placeholder="Enter phone number" required />
              </div>
            </div>

            <div className="form-group">
              <label>Last Name</label>
              <input type="text" placeholder="Enter last name" required />
            </div>

            <div className="form-group">
              <label>Town/City</label>
              <input type="text" placeholder="Enter city" required />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="Enter email" required />
            </div>

            <div className="form-group">
              <div className="street-address">
                <label>Street Address</label>
                <textarea placeholder="Enter street address" required></textarea>
              </div>
            </div>

            <div className="form-group">
              <label>Country/Region</label>
              <input type="text" placeholder="Enter country" required />
            </div>

            <div className="form-group">
              <label>State</label>
              <input type="text" placeholder="Enter state" required />
            </div>

            <div className="form-group">
              <label>Pin Code</label>
              <input type="text" placeholder="Enter pin code" required />
            </div>
          </form>
        </div>

        {/* Cart Summary */}
        <CartSummary cartItems={initialCartItems} />

        {/* Payment Method */}
        <div className="payment-method">
          <h3>Payment Method</h3>
          <div className="payment-options">
            {paymentOptions.map((option) => (
              <label key={option.name} className="payment-option">
                <img
                  src={option.icon}
                  alt={option.name}
                  className="payment-icon"
                />
                <span>
                  {option.name}{" "}
                  {option.details && (
                    <span className="card-details">{option.details}</span>
                  )}
                </span>
                <input
                  type="radio"
                  name="payment"
                  value={option.name}
                  checked={selectedMethod === option.name}
                  onChange={() => setSelectedMethod(option.name)}
                />
                <span className="radio-custom"></span>
              </label>
            ))}
          </div>
          <button className="place-order" onClick={handlePlaceOrder}>
            Place an order
          </button>
        </div>
      </div>

      {/* Display UPI Payment Image when selected */}
      {showUPIImage && (
  <div className="upi-payment-popup">
    {/* Cancel Button (Top-Left) */}
    <button onClick={() => setShowUPIImage(false)} className="cancel-btn">
      ← Cancel
    </button>

    <img src={UpiPaymentImage} alt="UPI Payment" className="upi-image" />
    
    <div className="upi-buttons">
      <button className="scan-pay-btn">Scan & Pay</button>
      <button onClick={() => setShowUPIImage(false)} className="change-method-btn">
        ← Change Payment Method
      </button>
    </div>
  </div>
)}


{/* Display Card Payment Form */}
{showCardPayment && (
        <div className="card-payment-popup">
            {/* Cancel Button (Top-Left) */}
    <buttonon onClick={() => setShowCardPayment(false)} className="cancel-btn">
      ← Cancel
    </buttonon>

          <div className="card-payment-container">
            <div className="card-form">
              <h2>PAYMENT THROUGH CARD</h2>
              <label>Cardholder Name</label>
              <input type="text" placeholder="Enter Name" />
              <label>Card Number</label>
              <input type="text" placeholder="XXXX-XXXX-XXXX-XXXX" />
              <div className="card-details">
                <div>
                  <label>Date</label>
                  <input type="text" placeholder="MM/YY" />
                </div>
                <div>
                  <label>CVV</label>
                  <input type="password" placeholder="***" />
                </div>
              </div>
              <div className="save-card">
                <input type="checkbox" id="saveCard" />
                <label htmlFor="saveCard">Save my payment details for future purchases</label>
              </div>
              <button className="confirm-pay-btn">Confirm & Pay</button>
            </div>
            <div className="card-image-container">
              <img src={CardPaymentImage} alt="Card Payment" className="card-image" />
            </div>
          </div>
          <button onClick={() => setShowCardPayment(false)} className="change-method-btn">← Change Payment Method</button>
        </div>
      )}


       <div className="scroll-up-container">
         <div className="scroll-up-line"></div>
         <div
           className="scroll-up-button"
           onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
         >
           ↑
         </div>
       </div>
    </>
  );
};

export default Checkout;





