import React from "react";
import "../../css/HomePage.css"; // Or use styled-components
import logo from "../images/pocket_trainer_logo_2.0.png"; // Adjust path as needed
import loginIcon from "../images/login-icon-2.0.png"; // Adjust path as needed

const PocketHomePage = () => {
  return (
    <div className="hero-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="Fitness Club Logo" className="logo" />
          <span className="app-name">POCKET TRAINER</span>
        </div>
        <ul className="navbar-menu">
          <li className="active">HOME</li>
          <li>STORE</li>
          <li>BLOGS</li>
          <li>ABOUT US</li>
          <li>CONTACT US</li>
        </ul>
        <div className="navbar-icons">
          {/* <span className="icon">🔍</span>
          <span className="icon">🛒</span> */}
          <button className="login-btn">
            <img src={loginIcon} alt="Login" className="login-icon" />
    
        </button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="hero-content">
        <h1>
         SET THE TONE <br/>
         FOR THE DAY
        </h1>
       
        <div className="hero-buttons">
          {/* <button className="learn-more">LEARN MORE</button> */}
          <button className="join-now">JOIN NOW</button>
        </div>
      </div>

      {/* Carousel and Social */}
      <div className="hero-footer">
        <div className="carousel-indicators">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="slide-number">01</span>
          <span className="slide-total">03</span>
        </div>
        <div className="social-icons">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default PocketHomePage;