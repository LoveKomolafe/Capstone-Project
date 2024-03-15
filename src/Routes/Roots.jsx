import { Link } from "react-router-dom";
import React, { useState } from "react";
import CallToAction from "../Components/CallToAction";
import "../assets/Styles/root.css";
import Footer from "../Components/Footer";

function Roots() {
  return (
    <div className="section">
      <div className="header">
        <div className="care" >
          <Link to="/">
            <img src="/src/assets/images/heart.png" alt="" className="carelogo"/>
            <div className="carename">C A R E F I N D E R</div>
          </Link>
        </div>
        <div className="details">
          <Link to="/">Home</Link>
          <Link to="/aboutus">About Us</Link>
          <Link to="/admin/signup">Admin</Link>
          <Link to="/login">Login</Link>
          <button className="signUp">
            <Link to="/signup">Sign Up</Link>
          </button>
        </div>
      </div>
      <CallToAction />
      <Footer />
    </div>
  );
}

export default Roots;
