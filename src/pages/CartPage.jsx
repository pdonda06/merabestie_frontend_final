import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CartPage.css";
import Pencils from "../assets/Rectangle 95.png";
import Notebook from "../assets/Rectangle 94.png";
import SNotes from "../assets/Rectangle 97.png";
import SuggestedItems from "./SuggestedItems";
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

const CartPage = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const navigate = useNavigate(); // Hook for navigation

  const updateQuantity = (id, change) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };


  return (
    <>
      <div className="cart-container">
        <div className="cart-header">
          <h1>Cart</h1>
        </div>
        <div className="cart-content">
          <table>
            <thead>
              <tr>
                <th>Product & Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td className="product-info">
                    <div className="product-details">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="product-image"
                      />
                      <div className="product-text">
                        <h2>{item.name}</h2>
                        <p className="description">{item.description}</p>
                        <p className="price">₹{item.price}.00</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="quantity-control">
                      <button
                        className="quantity-btn"
                        onClick={() => updateQuantity(item.id, -1)}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="quantity-btn"
                        onClick={() => updateQuantity(item.id, 1)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="total-price">
                    ₹{item.price * item.quantity}.00
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Cart Summary Component */}
          <CartSummary cartItems={cartItems} />

          {/* Navigate to Checkout Page */}
          <button
            className="checkout-btn"
            onClick={() => navigate("/check")}
          >
            Proceed to checkout
          </button>

          <SuggestedItems />
        </div>
      </div>

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

export default CartPage;
