import React,{useState}from 'react'
import Footer from './Footer'

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
        <h2 className="title">Bio-Data Form</h2>
        <label>Name</label>
        <input 
          type="text"
          name="name"
          placeholder="Enter your name"
          onChange={getinput}
        />

        <label>Age</label>
        <input 
          type="number"
          name="age"
          placeholder="Enter your age"
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

        <button className="submit-btn">
          Submit
        </button>
        {/* onClick={getsubmit} */}
      </div>
    </div>
     <Footer/>
    </div>
  )
}
