import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

export default function About() {
  const [loaded, setLoaded] = useState(false);
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      left: {
        image: "https://i.postimg.cc/Dwf5Y1Q0/sofa1.jpg",
        title: "Installation",
        content:
          "We install your interiors in 5–7 days with expert supervision.",
      },
      right: {
        image: "https://i.postimg.cc/QMvLpjBS/About1.jpg",
        title: "Dedicated Service @ your door step",
        content:
          "We support you even after installation for any service request.",
      },
    },

    {
      left: {
        image: "https://i.postimg.cc/QMvLpjBS/About1.jpg",
        title: "Think Quality, Think Homworks",
        content: "Our experts plan your interiors with perfect measurements.",
      },
      right: {
        image: "https://i.postimg.cc/QMvLpjBS/About1.jpg",
        title: "A Perfect Pallete",
        content: "Our team is available anytime to help solve your concerns.",
      },
    },

    {
      left: {
        image: "https://i.postimg.cc/QMvLpjBS/About1.jpg",
        title: "Consummate Professionals",
        content: "Our experts plan your interiors with perfect measurements.",
      },
      right: {
        image: "https://i.postimg.cc/QMvLpjBS/About1.jpg",
        title: "Top Notch Infrastructure",
        content: "Our team is available anytime to help solve your concerns.",
      },
    },
  ];

  useEffect(() => {
    setTimeout(() => setLoaded(true), 200);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [current]);

  
  return (
    <>
      <div className={`hero-container ${loaded ? "fade-in" : ""}`}>
        <div className="hero-left">
          <h1 className="hero-title">
            Delightful Interiors, <br /> Made To Live7
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
          <img
            src="https://i.postimg.cc/Dwf5Y1Q0/sofa1.jpg"
            alt="Interior Design"
            className="hero-image"
          />
        </div>
      </div>

      <div
        className={`hero-container second-section ${loaded ? "fade-in" : ""}`}
      >
        <div className="hero-right">
          <img
            src="https://i.postimg.cc/QMvLpjBS/About1.jpg"
            alt="Interior Design"
            className="hero-image"
          />
        </div>

        <div className="hero-left">
          <h1 className="hero-title">End to End Perfection</h1>

          <p className="hero-text">
            In our country, which is renowned for its arts and architecture,
            people frequently face difficulties in realizing their dream homes.
            They often seek help to bring their dreams to life, sometimes
            resulting in unsatisfactory designs and quality. <br />
            However, we are here to address all those challenges with our
            cutting-edge facility that guarantees top-quality end to end
            interior design services for your homes and offices. Our team of
            professionals maintain highest standards, from design to delivery.
          </p>

          <button className="consult-button">Learn More</button>
        </div>
      </div>

      <div className="slider-container">
        <h1 className="slider-main-title">What Sets Homworks Apart?</h1>

        <div className="arrow left" onClick={prevSlide}>
          ←
        </div>

        <div className="two-card-wrapper">
          <div className="slide-card">
            <img src={slides[current].left.image} className="slide-img" />
            <h2 className="slide-title">{slides[current].left.title}</h2>
            <p className="slide-content">{slides[current].left.content}</p>
          </div>

          <div className="slide-card">
            <img src={slides[current].right.image} className="slide-img" />
            <h2 className="slide-title">{slides[current].right.title}</h2>
            <p className="slide-content">{slides[current].right.content}</p>
          </div>
        </div>
        <div className="arrow right" onClick={nextSlide}>
          →
        </div>
      </div>
    </>
  );
}
