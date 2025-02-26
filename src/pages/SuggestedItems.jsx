import "./SuggestedItems.css";
import highlighters from "../assets/highlighters.png";
import gelPens from "../assets/gelPens.png";
import penStand from "../assets/penStand.png";
import stamps from "../assets/stamps.png";

const suggestedProducts = [
  { id: 1, name: "Pastel highlighters Coloured", price: "₹ 358/-", image: highlighters },
  { id: 2, name: "Metallic Gel Pens (Set of 3)", price: "₹ 1250/pack", image: gelPens },
  { id: 3, name: "Custom Pen Stand with Nameplate", price: "₹ 899/-", image: penStand },
  { id: 4, name: "Custom colored Stamps Seals", price: "₹ 558/-", image: stamps },
];

const SuggestedItems = () => {
  return (
    <div className="suggested-container">
  <h1>Suggested for you</h1>
  <div className="suggested-wrapper">
    <div className="suggested-list">
      {suggestedProducts.map((product) => (
        <div key={product.id} className="suggested-item">
          <img src={product.image} alt={product.name} className="product-image" />
          <p className="product-name">{product.name}</p>
          <p className="product-price">{product.price}</p>
        </div>
      ))}
    </div>
    <a href="#" className="keep-shopping">Keep Shopping →</a>
  </div>
</div>



  );
};

export default SuggestedItems;
