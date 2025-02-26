import "./CartPage.css";

const CartSummary = ({ cartItems = [] }) => {
  const calculateTotal = () =>
    cartItems.reduce(
      (total, item) => total + (item.price || 0) * (item.quantity || 1),
      0
    );

  return (
    <>
      <div className="heading">
        <h2>Cart Totals</h2>
      </div>
      <div className="cart-summary">
        <div className="summary-details">
          <div className="summary-row">
            <span>Subtotal:</span>
            <span>₹{calculateTotal()}.00</span>
          </div>
          <div className="summary-row">
            <span>Shipping Charge:</span>
            <span>₹60.00</span>
          </div>
          <div className="summary-row">
            <span>Coupon Code:</span>
            <span className="add-coupon">Add coupon</span>
          </div>
          <div className="summary-row total-amount">
            <span>Total:</span>
            <span>₹{calculateTotal() + 60}.00</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSummary;
