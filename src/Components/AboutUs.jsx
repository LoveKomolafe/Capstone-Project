import React from "react";

const AboutUs = () => {
  return (
    // The AboutUs component
    <div className="about">
      <h1>About Us</h1>
      <p className="p-about">
        Carefinder is a platform that connects patients to healthcare providers
        in Nigeria. We are committed to providing a seamless experience for
        patients to find the best care for their loved ones. We are also
        committed to providing healthcare providers with the tools they need to
        reach more patients and provide the best care possible.
      </p>
      <p className="p-about">
        Access to healthcare in Nigeria can be challenging and thorough, it is
        absurd that the first thing to living healthy. Carefinder is a simple
        tool and easy to use platform that aims to help users find, export and
        share hospitals within the region.
      </p>

      <img
        src="./src/assets/LogoHealth.png"
        alt="Health Logo"
        className="health-logo"
      ></img>
    </div>
  );
};

export default AboutUs;
