import React from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Footer() {
  const [inputValue, setInputValue] = useState('');

  const showToastMessage = () => {
    toast.success("Sign Up Successfully !", {
      position: "bottom-right"
    });
    setInputValue("");
  };

  return (
    <div className="footercard">
      <h2>Join Our Team Now</h2>

      <div className="signup">
        <input
          type="email"
          placeholder="enter your email"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          required
        />

        <button onClick={showToastMessage} className="signup-button">
          Sign up Me!
        </button>

        <ToastContainer />
      </div>

      <footer className="footer">
        <div className="footertop">
          <div className="ficons">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-pinterest"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
          </div>

          <div className="fmenu">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/">Wishlist</Link>
            <Link to="/">Purchase</Link>
          </div>

          <div className="footersub">
            <Link to="/living">Living Room</Link>
            <span>|</span>
            <Link to="/bedroom">Bed Room</Link>
            <span>|</span>
            <Link to="/kitchen">Kitchen</Link>
            <span>|</span>
            <Link to="/dinning">Dinning Room</Link>
          </div>
        </div>

        <div className="footerbottom">
          <small>© NESTIFY INTERRIOR DESIGN | ALL RIGHTS RESERVED</small>
        </div>
      </footer>
    </div>
  );
}
