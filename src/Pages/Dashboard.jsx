import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/Styles/dashboard.css";
import {
  FaChartLine,
  FaUser,
  FaSearch,
  FaHeart,
  FaBell,
  FaCog,
} from "react-icons/fa";
import { db } from "../firebase";

const Dashboard = ({ userName }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownClose, setDropdownClose] = useState(false);

  const closeDropdown = () => {
    setDropdownClose(!dropdownClose);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const [currentQuote, setCurrentQuote] = useState(0);
  const quotes = [
    "Heath Care is not a privilege, it's a right. It is a right as fundamental as civil rights. It's a right as giving every child a chance to get public education",
    "Give people what they need: food, medicine, clean air, pure water, trees and grass, pleasant homes to live in, some hours of work, more hours of leisure. Don't ask who deserves it. Every human being deserves it.",
    "A tremendous amount of needless pain and suffering can be eliminated by ensuring that health insurance is universally available.",
    "Communities and countries and ultimately the world are only as strong as the health of their women.",
    "For he who has health has hope; and he who has hope, has everything.",
  ];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubscribe = async (formData) => {
    e.preventDefault();
    try {
      await db.collection("subscribers").add({ formData });
      console.log("Subscriber added successfully!");
      alert("Thank you for subscribing to our newsletter!");
      setName("");
      setEmail("");
    } catch (error) {
      console.error("Error adding subscribers: ", error);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((current) =>
        current === quotes.length - 1 ? 0 : current + 1
      );
    }, 10000); // Change Quotes every 10 seconds

    return () => clearInterval(interval);
  });

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
        <h1>Welcome to your Dashboard, {userName}</h1>

        <div className="dashboard-card">
          <div className="dash-card">
            <div className="dash-quotes">
              <h2 className="quotes">{quotes[currentQuote]}</h2>
            </div>
          </div>
          <h2 className="expertise">
            Providing<span className="highlight"> expertise</span>at your
            <span className="highlight"> convenience</span>
          </h2>
          <p className="expertise-para">
            We have experts in the field of medical and pharmaceutical care who
            are at your disposal in any location within the country.
          </p>
          <div className="care-med">
            <div className="med-care">
              <h2>
                Medical Care{" "}
                <img src="/src/assets/images/medicine.png" alt="medicine" />{" "}
              </h2>
              <ul>
                <li>Specialist care</li>
                <li>Nursing Care</li>
                <li>Dental Care</li>
                <li>Occupational Therapy</li>
                <li>Physiotherapy</li>
                <li>Midwifery</li>
                <li>Community Health</li>
                <li>And lot more</li>
              </ul>
            </div>
            <div className="pharm-care">
              <h2>
                Pharmaceutical Care{" "}
                <img src="/src/assets/images/pharmacy.png" alt="pharmacy" />
              </h2>
              <ul>
                <li>Drug - Drug Interaction</li>
                <li>Drug - Food Interaction</li>
                <li>Drug - Disease Interaction</li>
                <li>Drug - Allergy Interaction</li>
                <li>Drug - Pregnancy Interaction</li>
                <li>Drug - Lactation Interaction</li>
                <li>Drug - Geriatric Interaction</li>
                <li>And lot more</li>
              </ul>
            </div>
          </div>

          <div className="newsletter-section">
            <div className="newsletter">
              <h2>Subscribe to Our Newsletter</h2>
              <form onSubmit={handleSubscribe}>
                <label htmlFor="name">Full Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  required
                />
                <label htmlFor="email">Email Address:</label>
                <input
                  type="email"
                  id="email"
                  email="email"
                  placeholder="Enter your email address"
                  required
                />
                <button onClick={handleSubscribe}>Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <Link to="/">
              <img
                src="/src/assets/images/heart.png"
                className="carefinderlogo"
                alt="CareFinder"
              />
            </Link>
          </div>
          <div className="footer-section">
            <h2>CareFinder</h2>
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/team">Team</Link>
              </li>
              <li>
                <Link to="/board">Board</Link>
              </li>
              <li>
                <Link to="/careers">Careers</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h2>Resources</h2>
            <ul>
              <li>
                <Link to="/hospitals">Available Hospitals</Link>
              </li>
              <li>
                <Link to="/hospitals-portal">Hospitals Portal</Link>
              </li>
              <li>
                <Link to="/nursing-homes">Nursing Homes</Link>
              </li>
              <li>
                <Link to="/dental-clinics">Dental Clinics</Link>
              </li>
              <li>
                <Link to="/orthopaedic-hospitals">Orthopaedic Hospitals</Link>
              </li>
              <li>
                <Link to="/faqs">FAQs</Link>
              </li>
              <li>
                <Link to="/terms-of-use">Terms of Use</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h2>Contact</h2>
            <ul>
              <li>
                <a href="tel:+2347083381077">+2347083381077</a>
              </li>
              <li>
                <a href="mailto:info@carefinder.com">info@carefinder.com</a>
              </li>
              <li>32, Federal Housing Estate, Garki Abuja</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} CareFinder | All rights reserved.
        </div>

        <div className="socials-icon">
          <img src="/src/assets/images/facebook.png" alt="Facebook" />
          <img src="/src/assets/images/twitter.png" alt="Twitter" />
          <img src="/src/assets/images/instagram.png" alt="Instagram" />
          <img src="/src/assets/images/linkedin.png" alt="LinkedIn" />
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
