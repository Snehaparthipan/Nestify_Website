import React from "react";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import aboutimg from "../assets/About1.jpeg";

export default function About() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 200);
  }, []);

  return (
    <>
      <div className={`hero-container ${loaded ? "fade-in" : ""}`}>
        <div className="hero-left">
          <h1 className="hero-title">
            Delightful Interiors, <br /> Made To Live
          </h1>

          <p className="hero-text">
            Homworks believes that designing an interior should be a holistic
            process. It is more than just the functionality of the items
            involved; design for us is an extension of your unique personality.
            It will give off an ambience that is found nowhere else except your
            home. We can customise designs and mould them to make the most of
            your space and have it satisfy all of your needs.
          </p>

          <button className="consult-button">Request Consultation</button>
        </div>
        <div className="hero-right">
          <img src={aboutimg} alt="Interior Design" className="hero-image" />
        </div>
      </div>

      <div className={`hero-container ${loaded ? "fade-in" : ""}`}>
        <div className="hero-right">
          <img src={aboutimg} alt="Interior Design" className="hero-image" />
        </div>
        <div className="hero-left">
          <h4>
            <i class="fa-solid fa-dot"></i>From your imagination to reality
          </h4>
          <h1 className="hero-title">End to End Perfection</h1>

          <p className="hero-text">
            In our country, which is renowned for its arts and architecture,
            people frequently face difficulties in realizing their dream homes.
            They often seek help to bring their dreams to life, sometimes
            resulting in unsatisfactory designs and quality. <br />
            <br />
            However, we are here to address all those challenges with our
            cutting-edge facility that guarantees top-quality end to end
            interior design services for your homes and offices. Our team of
            professionals maintain highest standards, from design to delivery.
          </p>

          <button className="consult-button">Learn More</button>
        </div>
      </div>
    </>
  );
}
