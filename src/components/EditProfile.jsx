import React, { useState } from "react";
import "../style/EditProfile.css";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    contactNumber: "",
    city: "",
    state: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="main-container">
      <aside className="sidebar">
        <ul>
          <li><img src="../img/edit.png" alt="Edit" className="icon" /> Edit Profile</li>
          <li><img src="../img/bell.png" alt="Notification" className="icon" /> Notification</li>
          <li><img src="../img/lock.png" alt="Security" className="icon" /> Security</li>
          <li><img src="../img/logout.png" alt="Logout" className="icon" /> Logout</li>
          <li><img src="../img/question.png" alt="Help" className="icon" /> Help</li>
        </ul>
      </aside>
      <div className="content">
        <header className="header">
          <h2>Settings</h2>
          <img src="../img/user.png" alt="User" className="user-image" />
        </header>
        <div className="form-wrapper">
          <h2 className="title">Edit Profile</h2>
          <div className="form-grid">
            <div className="input-group">
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" className="input" />
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" className="input" />
            </div>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="input" />
            <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" className="input" />
            <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} placeholder="Contact Number" className="input" />
            <div className="input-group">
              <select name="city" value={formData.city} onChange={handleChange} className="select">
                <option value="">Select City</option>
              </select>
              <select name="state" value={formData.state} onChange={handleChange} className="select">
                <option value="">Select State</option>
              </select>
            </div>
            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" className="input" />
            <div className="button-group">
              <button className="button cancel">Cancel</button>
              <button className="button save">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;