import React from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Footer() {
   const showToastMessage = () => {
    toast.success("Sign Up Successfully !", {
      position: "bottom-right"
    });
  };
  return (
    <div className='footercard'>
      <h2>Join Our Team Now</h2>
      <div className='signup'><input type="text" placeholder='enter your email' /> 
      <button onClick={showToastMessage} className='signup-button '>Sign up Me!</button>
      <ToastContainer />
      </div>
      <div>
        
      </div>
    </div>
  )
}
