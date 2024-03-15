import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import hospitalData from "../assets/hospitalfile.json";
import { sendPasswordResetEmail } from "firebase/auth";
import {
  FaChartLine,
  FaUser,
  FaSearch,
  FaHeart,
  FaBell,
  FaCog,
} from "react-icons/fa";

const firebaseConfig = {
    apiKey: "AIzaSyAN_uOu62BOdQDAW_GgYslvezpB6gb18gs",
    authDomain: "carefinder-b47c8.firebaseapp.com",
    projectId: "carefinder-b47c8",
    storageBucket: "carefinder-b47c8.appspot.com",
    messagingSenderId: "234260773894",
    appId: "1:234260773894:web:c1ade34071f063be441787",
    measurementId: "G-GT4HFHNWYC"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const ShareHospital = () => {
  const [email, setEmail] = useState("");
  const [shareableLink, setShareableLink] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleEmailShare = async (e) => {
    e.preventDefault();

    try {
      // Send email to user
      await auth.sendPasswordResetEmail(email, {
        subject: "Shared Hospital Data",
        text: `Here is the link to the hospital data: ${shareableLink}`,
      });
      console.log("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email: ", error);
    }
  };



  return (
    <div>
        <header>
        <div className="container">
          <div className="logo">C A R E F I N D E R</div>
          <Link to="/">Home</Link>
          <div className="profile-dropdown">
            <button
              type="button"
              className="profile-button"
              onClick={toggleDropdown}
            >
              <img src="https://picsum.photos/50" alt="Profile" />
            </button>
            {dropdownOpen && (
              <div className="dropdown-content">
                <ul>
                  <li>
                    <FaChartLine />
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <FaUser />
                    <Link to="/dashboard/profile">Profile</Link>
                  </li>
                  <li>
                    <FaSearch />
                    <Link to="/dashboard/search">Search Hospitals</Link>
                  </li>
                  <li>
                    <FaHeart />
                    <Link to="/dashboard/share">Share Hospitals</Link>
                  </li>
                  <li>
                    <FaBell />
                    <Link to="/dashboard/notifications">Notifications</Link>
                  </li>
                  <li>
                    <FaCog />
                    <Link to="/dashboard/settings">Settings</Link>
                  </li>
                  <li>
                    <Link to="/logout">Logout</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </header>
        <main>
            <div className="search">
              <h2>Share Hospital Information</h2>
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Recipient's Email"
                />
                <br />
                <div className="entry">
                    <button  onClick={handleEmailShare}>Share via Email</button>
                </div>
              </div>
              <div>
                
              </div>
            </div>
        </main>
    </div>
  );
};

export default ShareHospital;
