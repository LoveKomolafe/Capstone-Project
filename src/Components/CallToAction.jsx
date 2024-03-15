import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/Styles/calltoaction.css';

const CallToAction = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [
        './src/assets/images/Hosp2.jpg',
        './src/assets/images/Hosp4.jpg',
        './src/assets/images/Hosp5.jpg',
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage(current => (current === images.length - 1 ? 0 : current + 1));
        }, 10000); // Change image every 10 seconds

        return () => clearInterval(interval);
    });

    return (
        <div className="cta">
            <div className="cta_content">
                <img src={images[currentImage]} alt="Transition" className="transit-img"></img>
            </div>
            <div className="text-cta">
                <h2>Find the best care for your loved ones. Join Carefinder today!</h2>
                <p>Sign Up now to access a network of hospitals and healthcare providers in your area.</p>
                <button className="cta_button">
                    <Link to="/signup">Sign Up</Link>
                </button>
            </div>
        </div>
    )
};

export default CallToAction; 