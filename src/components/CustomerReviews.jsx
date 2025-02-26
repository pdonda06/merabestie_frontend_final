import "../style/CustomerReviews.css";

const CustomerReviews = () => {
  const reviews = [
    {
      rating: 5,
      title: "Fantastic quality",
      text: "Absolutely love the customized notebooks I ordered! The quality is fantastic, and the designs are exactly how I wanted them.",
      name: "Samantha Roy",
    },
    {
      rating: 5,
      title: "Stunning Purchase",
      text: "Such a delightful experience! The custom greeting cards I ordered were amazing.",
      name: "Jiya Suryavanshi",
    },
    {
      rating: 5,
      title: "Worth every penny",
      text: "Great collection and smooth ordering process. Delivery took longer than expected, but the quality made up for it.",
      name: "Akash Jain",
    },
    {
      rating: 5,
      title: "Highly Recommended",
      text: "This shop has the best collection of aesthetic stationery! Will be recommending it to my friends.",
      name: "Sonakshi Arya",
    },
    {
      rating: 5,
      title: "Satisfactory Experience",
      text: "The shop provides excellent designs with premium looks. Perfect mix of elegance and creativity.",
      name: "Raghav Jha",
    },
  ];

  return (
    <div className="reviews-section">
      <h2>What Customers Say</h2>
      <div className="reviews-container">
        
        {/* Left Side: Large Image */}
        <div className="left-image">
          <img src="../img/od1.png" alt="Customer Reviews" />
        </div>

        {/* Right Side: Reviews */}
        <div className="reviews">
          {reviews.map((review, index) => (
            <div className="review-card" key={index}>
              <div className="stars">
                {"⭐".repeat(review.rating)}
              </div>
              <h3>{review.title}</h3>
              <p>{review.text}</p>
              <span className="reviewer">{review.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Read More Button */}
      <button className="read-more">READ MORE</button>
    </div>
  );
};

export default CustomerReviews;
