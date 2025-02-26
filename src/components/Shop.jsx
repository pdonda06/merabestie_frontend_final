import React from "react";
import "../style/Shop.css";
import { useNavigate } from "react-router-dom";
import metallicGelpen from "../assets/metallic-gel-pens.png" 
import pastelNotebook from "../assets/pastel-notebook.jpg"
import shiffonBallpen from "../assets/shiffon-blue-pens.png"
import giftCard from "../assets/gift_card.jpg"
import pencileColour from "../assets/pencile-colour.jpg"
import sketchBook from "../assets/sketchbook.jpg"
import Marker from "../assets/marker.jpg"
import Nameplate from "../assets/nameplate.jpg"
import stamps from "../assets/stamps.jpg"




const products = [
  {
    id: 1,
    image: metallicGelpen,
    label: "Best Seller",
    title: "Metallic Gel Pens with Customized Gems",
    price: "₹ 1250/-",
    rating: 4.98,
    reviews: 144,
  },
  {
    id: 2,
    image: pastelNotebook,
    label: "Best Seller",
    title: "Pastel Notebooks spiraled with Golden Prints",
    price: "₹ 899/-",
    rating: 4.95,
    reviews: 128,
  },
  {
    id: 3,
    image: shiffonBallpen,
    label: "Trending",
    title: "Engraved Leather Notebook",
    price: "₹ 678/-",
    rating: 4.97,
    reviews: 99,
  },
];

const products1 = [
  {
    id: 1,
    image: giftCard,
    label: "Best Seller",
    title: "Metallic Gel Pens with Customized Gems",
    price: "₹ 1250/-",
    rating: 4.98,
    reviews: 144,
  },
  {
    id: 2,
    image: pencileColour,
    label: "Best Seller",
    title: "Pastel Notebooks spiraled with Golden Prints",
    price: "₹ 899/-",
    rating: 4.95,
    reviews: 128,
  },
  {
    id: 3,
    image: Nameplate,
    label: "Trending",
    title: "Engraved Leather Notebook",
    price: "₹ 678/-",
    rating: 4.97,
    reviews: 99,
  },
];

const products2 = [
  {
    id: 1,
    image: sketchBook,
    label: "Best Seller",
    title: "Metallic Gel Pens with Customized Gems",
    price: "₹ 1250/-",
    rating: 4.98,
    reviews: 144,
  },
  {
    id: 2,
    image: Marker,
    label: "Best Seller",
    title: "Pastel Notebooks spiraled with Golden Prints",
    price: "₹ 899/-",
    rating: 4.95,
    reviews: 128,
  },
  {
    id: 3,
    image: stamps,
    label: "Trending",
    title: "Engraved Leather Notebook",
    price: "₹ 678/-",
    rating: 4.97,
    reviews: 99,
  },
];

export default function ShopPage() {
  const nav=useNavigate()
  return (
    <div className="shop-container">
      <section className="shop-banner">
        <img className="img1" src="../img/shop_head.png" alt="" />
        {/* <h1>SHOP</h1>
        <p>Stationary</p> */}
      </section>
      <section className="shop-products">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} className="product-image" />
            <span className="product-label">{product.label}</span>
            <div className="product-info">
              <h3>{product.title}</h3>
              <p>{product.price}</p>
              <p>⭐ {product.rating} ({product.reviews} reviews)</p>
              <button onClick={()=>nav("/cart")} className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        ))}
      </section>

      <section className="shop-products">
        {products1.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} className="product-image" />
            <span className="product-label">{product.label}</span>
            <div className="product-info">
              <h3>{product.title}</h3>
              <p>{product.price}</p>
              <p>⭐ {product.rating} ({product.reviews} reviews)</p>
              <button onClick={()=>nav("/cart")} className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        ))}
      </section>

      <section className="shop-products">
        {products2.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} className="product-image" />
            <span className="product-label">{product.label}</span>
            <div className="product-info">
              <h3>{product.title}</h3>
              <p>{product.price}</p>
              <p>⭐ {product.rating} ({product.reviews} reviews)</p>
              <button onClick={()=>nav("/cart")} className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        ))}
      </section>

      <img className="img1" src="../img/shop_in.png"/>

      <section className="shop-products">
        {products1.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} className="product-image" />
            <span className="product-label">{product.label}</span>
            <div className="product-info">
              <h3>{product.title}</h3>
              <p>{product.price}</p>
              <p>⭐ {product.rating} ({product.reviews} reviews)</p>
              <button onClick={()=>nav("/cart")} className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        ))}
      </section>

      
    </div>
  );
}
