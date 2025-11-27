import React,{useState}from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom';

export default function Contact() {
  const [state, setState] = useState({
    name: "",
    age: "",
    address: "",
    email: "",
    phone: ""
  });

  function getinput(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  // function getsubmit() {
  //   setOut(state);
  // }
  return (
    <div className='body'>
      <div className="form-wrapper" style={{margin:'100px 0px 0px 0px'}}>
      <div className="form-card">
        <h2 className="title">Get in Touch</h2>
        <label>Name</label>
        <input 
          type="text"
          name="name"
          placeholder="Enter your name"
          onChange={getinput}
        />

        <label>Service</label>
        <input 
          type="text"
          name="age"
          placeholder="ex. Modular kitchen, living room,..."
          onChange={getinput}
        />

        <label>Address</label>
        <input 
          type="text"
          name="address"
          placeholder="Enter your address"
          onChange={getinput}
        />

        <label>Email</label>
        <input 
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={getinput}
        />

        <label>Phone Number</label>
        <input 
          type="tel"
          name="phone"
          placeholder="Enter your phone number"
          onChange={getinput}
        />

        <button className="submit-btn"><Link to='/success' style={{textDecoration:"none", color:'white'}}>Contact</Link>
        </button>
        {/* onClick={getsubmit} */}
      </div>
    </div>
     <Footer/>
    </div>
  )
}
