const ProductCard = ({ product }) => {
    return (
      <div className="product-card">
        <div
          className="product-image-container"
          style={{ backgroundImage: `url(${product.image})` }}
        >
          {product.badge && <span className="badge">{product.badge}</span>}
          <span className="rating">{product.rating} ⭐</span>
        </div>
        <div className="product-info">
          <p className="product-title">{product.title}</p>
          <p className="product-price">{product.price}</p>
        </div>
      </div>
    );
  };
  
  export default ProductCard;
  