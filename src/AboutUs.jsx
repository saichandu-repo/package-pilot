import React from "react";
import "./AboutUs.css"; // Use this CSS file or convert to CSS Modules if preferred

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>About PackagePilot</h1>
        <p>Your trusted delivery partner for everyday essentials.</p>
      </div>

      <div className="about-content">
        <div className="about-section">
          <h2>Who We Are</h2>
          <p style={{color:"black"}}>
            PackagePilot is a fast, reliable, and customer-first delivery service
            dedicated to bringing freshness to your doorstep. Whether it's
            handpicked vegetables, premium quality non-veg items, delightful
            chocolates, or dairy-fresh milk products – we've got you covered.
          </p>
        </div>

        <div className="about-section">
          <h2>What We Deliver</h2>
          <ul>
            <li>🥦 Fresh Vegetables – directly sourced from local farms</li>
            <li>🍗 Non-Veg Raw Items – hygienically packed and fresh</li>
            <li>🍫 Chocolates & Desserts – sweet treats for every mood</li>
            <li>🥛 Milk & Dairy Products – pure, nutritious, and daily essentials</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>Why Choose Us</h2>
          <b>
            We believe in quality, punctuality, and customer satisfaction. Our
            mission is to simplify your life by ensuring your everyday groceries
            reach your home in the fastest and most efficient way possible.
          </b>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
