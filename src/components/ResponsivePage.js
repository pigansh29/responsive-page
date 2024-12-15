import React, { useState } from "react";
import "./ResponsivePage.css";

const ResponsivePage = () => {
  const [showSignup, setShowSignup] = useState(false);

  const openSignup = () => setShowSignup(true);
  const closeSignup = () => setShowSignup(false);

  return (
    <div className="group-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img
            src="https://dont-copy.netlify.app/assets/logo-S2lIhR8K.svg"
            alt="Logo"
          />
        </div>

        <div className="search-container">
          <button className="search-icon">🔍</button>
          <input
            type="text"
            placeholder="Search for your favorite groups in ATG"
            className="search-input"
          />
        </div>

        <div className="account-section" onClick={openSignup}>
          <span>
            Create account.{" "}
            <span className="account-highlight">It’s free!</span> ▼
          </span>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="cont1">
        <div className="hero-section">
          <h1 className="hero-title">Computer Engineering</h1>
          <p className="hero-subtitle">
            142,765 Computer Engineers follow this
          </p>
        </div>
      </div>

      {/* Tabs and Action Buttons */}
      <div className="tabs-container">
        <div className="tabs">
          <span className="tab active">All Posts(32)</span>
          <span className="tab">Article</span>
          <span className="tab">Event</span>
          <span className="tab">Education</span>
          <span className="tab">Job</span>
        </div>

        <div className="action-buttons">
          <button className="write-post">Write a Post ▼</button>
          <button className="join-group">➕ Join Group</button>
        </div>
      </div>

      {/* Signup Popup */}
      {showSignup && (
        <div className="signup-overlay">
          <div className="signup-modal">
            <button className="close-btn" onClick={closeSignup}>
              &times;
            </button>
            <p className="signup-header">
              Let’s learn, share & inspire each other with our passion for
              computer engineering. <strong>Sign up now 🤘</strong>
            </p>

            <h2>Create Account</h2>
            <form className="signup-form">
              <div className="input-group">
                <input type="text" placeholder="First Name" required />
                <input type="text" placeholder="Last Name" required />
              </div>
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <input type="password" placeholder="Confirm Password" required />
              <button className="signup-btn">Create Account</button>
            </form>
            <div className="social-login">
              <button className="facebook-login">Sign up with Facebook</button>
              <button className="google-login">Sign up with Google</button>
            </div>
            <p className="signin-text">
              Already have an account? <span>Sign In</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResponsivePage;
