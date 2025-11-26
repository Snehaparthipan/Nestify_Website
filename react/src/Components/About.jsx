import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

export default function About() {
  const [loaded, setLoaded] = useState(false);
  const [current, setCurrent] = useState(0);

  const slide = [
    {
      image: "",
      title: "...",
      content: "",
    },
  ];
const slides = [
  {
    left: {
      image: "https://i.postimg.cc/Dwf5Y1Q0/sofa1.jpg",
      title: "Installation",
      content: "We install your interiors in 5–7 days with expert supervision.",
    },
    right: {
      image: "https://i.postimg.cc/QMvLpjBS/About1.jpg",
      title: "Dedicated Service",
      content:
        "We support you even after installation for any service request.",
    },
  },

  {
    left: {
      image: "https://i.postimg.cc/QMvLpjBS/About1.jpg",
      title: "Design Planning",
      content: "Our experts plan your interiors with perfect measurements.",
    },
    right: {
      image: "https://i.postimg.cc/QMvLpjBS/About1.jpgg",
      title: "Customer Support",
      content: "Our team is available anytime to help solve your concerns.",
    },
  },
];



  useEffect(() => {
    setTimeout(() => setLoaded(true), 200);
  }, []);

  
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length
);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

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

      <div className={`hero-container ${loaded ? "fade-in" : ""}`}>
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
            <br /> <br />
            However, we are here to address all those challenges with
            cutting-edge facilities that guarantee top-quality interior design.
          </p>

          <button className="consult-button">Learn More</button>
        </div>
      </div>

      <div>
        <h1>What Sets Homworks Apart?</h1>
      </div>
    </>
  );
}
