import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/Styles/footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <Link to="/"><img src="/src/assets/images/heart.png" className="carefinderlogo" alt="CareFinder" /></Link>
                </div>
                <div className="footer-section">
                    <h2>CareFinder</h2>
                    <ul>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/team">Team</Link></li>
                        <li><Link to="/board">Board</Link></li>
                        <li><Link to="/careers">Careers</Link></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h2>Resources</h2>
                    <ul>
                        <li><Link to="/hospitals">Available Hospitals</Link></li>
                        <li><Link to="/hospitals-portal">Hospitals Portal</Link></li>
                        <li><Link to="/nursing-homes">Nursing Homes</Link></li>
                        <li><Link to="/dental-clinics">Dental Clinics</Link></li>
                        <li><Link to="/orthopaedic-hospitals">Orthopaedic Hospitals</Link></li>
                        <li><Link to="/faqs">FAQs</Link></li>
                        <li><Link to="/terms-of-use">Terms of Use</Link></li>
                        <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h2>Contact</h2>
                    <ul>
                        <li><a href="tel:+2347083381077">+2347083381077</a></li>
                        <li><a href="mailto:info@carefinder.com">info@carefinder.com</a></li>
                        <li>32, Federal Housing Estate, Garki Abuja</li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                &copy; {new Date().getFullYear()} CareFinder | All rights reserved.
            </div>

            <div className='socials-icon'>
                <img src="/src/assets/images/facebook.png" alt="Facebook" />
                <img src="/src/assets/images/twitter.png" alt="Twitter" />
                <img src="/src/assets/images/instagram.png" alt="Instagram" />
                <img src="/src/assets/images/linkedin.png" alt="LinkedIn" />
            </div>
        </footer>
    );
};

export default Footer;
