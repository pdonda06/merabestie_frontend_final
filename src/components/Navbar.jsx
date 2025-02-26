import { useState } from "react";
import "../style/Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo-container">
        <img src="../img/logo.png" alt="Logo" className="logo" />
        <span className="brand-name italianno-regular">Mera Bestie</span>
      </div>

      {/* Desktop Menu */}
      <div className="menu-links">
        <a href="/">Home</a>
        <a href="shop">Shop</a>
        <a href="contactus">Contact</a>
        <a href="dash">Dashboard</a>
        <a href="#">Items</a>
        <a href="#">Office Essentials</a>
      </div>

      {/* Icons */}
      <div className="icon-group">
        <img src="./img/cart_icon.png" alt="Cart" className="icon" />
        <a href="editprofile"><img src="../img/user.png" alt="User" className="icon" /></a>
        <img 
          src="../img/menu.png" 
          alt="Menu" 
          className="menu-icon" 
          onClick={() => setIsOpen(!isOpen)} 
        />
      </div>

      {/* Mobile Dropdown */}
      <div className={`dropdown-menu ${isOpen ? "open" : ""}`}>
        <a href="/">Home</a>
        <a href="shop">Shop</a>
        <a href="contactus">Contact</a>
        <a href="#">Items</a>
        <a href="#">Office Essentials</a>
      </div>
    </nav>
  );
}
