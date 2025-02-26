import "./ContactPage.css";
import Vector from "../assets/Vector.png";
import Vector1 from "../assets/Vector (1).png";
import SupportIcon from "../assets/ix_support.png";
import ContactBg from "../assets/Rectangle 278.png";



// Example icon imports if you want to use icons (FontAwesome, etc.)
// Alternatively, replace <i className="fas fa-life-ring"></i> with <img src="..." alt="..."/>
// or any other symbol you have.
function ContactPage() {
  return (
    <div className="contact-page">
      <div className="top-head">
        <p>Feel free to contact us @Personalized Stationery, Crafted with Love!</p>
      </div>
      {/* Top Header Section */}
      <header className="contact-header" style={{ backgroundImage: `url(${ContactBg})` }}>
        <h1>Contact Us</h1>
        <p>We’d Love to Hear From You</p>
        <span>Reach out for inquiries, support, or to have your doubts cleared.</span>
      </header>

      {/* Form Section */}
      <section className="contact-form-section">
  <h2>Contact our Friendly Reception <br /> Staff with any Enquiry</h2>
  <form className="contact-form">
    {/* Name and Email Side by Side */}
    <div className="form-row">
      <div className="form-group">
        <label>Name:</label>
        <input type="text" placeholder="Name:" />
      </div>

      <div className="form-group">
        <label>Email:</label>
        <input type="email" placeholder="Email:" />
      </div>
    </div>

    {/* Phone and Subject Side by Side */}
    <div className="form-row">
      <div className="form-group">
        <label>Phone:</label>
        <input type="text" placeholder="Phone:" />
      </div>

      <div className="form-group">
        <label>Subject:</label>
        <input type="text" placeholder="Subject:" />
      </div>
    </div>

    {/* Message Section */}
    <div className="form-group">
      <label>Message:</label>
      <textarea placeholder="Message:" rows="4" />
    </div>

    <button type="submit">Send Message</button>
  </form>
</section>


      {/* Support Team Section */}
      <section className="support-team">
        <h2>We Have a Professional <br>
        </br>Support Team</h2>
        <div className="support-cards">
          {/* Card 1 */}
          <div className="support-card">
            <div className="card-symbol">
              {/* Replace with your icon or image */}
              <img src={Vector} alt="Help Icon" />
              </div>
            <h3>Help and Support</h3>
            <p>support@wellbeing.com</p>
            <p>help@wellbeing.com</p>
          </div>

          {/* Card 2 */}
          <div className="support-card">
            <div className="card-symbol">
              {/* Replace with your icon or image */}
              <img src={Vector1} alt="Location Icon" />

            </div>
            <h3>Location</h3>
            <p>121 King Street Mumbai,</p>
            <p>3000, Mumbai</p>
          </div>

          {/* Card 3 */}
          <div className="support-card">
            <div className="card-symbol">
              {/* Replace with your icon or image */}
              <img src={SupportIcon} alt="Support Icon" />

            </div>
            <h3>Live Support</h3>
            <p>+12 345 789 289</p>
            <p>+12 980 567 321</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
