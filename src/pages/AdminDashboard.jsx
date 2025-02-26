import "../pages/AdminDashboard.css";
import revenueImg from "../assets/Revenue.png";
import orderTimeImg from "../assets/Order-Time.png";
import orderImg from "../assets/Order Stats.png";
import ratingImg from "../assets/Rating.png";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <div className="backheader">
        {/* <h1>ADMIN BOARD</h1> */}
      </div>
      <div className="upper">
        <img src={revenueImg} alt="Revenue" className="dashboard-image" />
        </div>
      <div className="content1">
        {/* Left Side */}
       

        <div className="left-section1">
          <img src={orderTimeImg} alt="Order Time" className="dashboard-image" />
          <img src={ratingImg} alt="Rating" className="dashboard-image" />
        </div>

        {/* Right Side */}
        <div className="right-section1">
          <img src={orderImg} alt="Order" className="dashboard-image" />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
