import React, { useState } from 'react';
import Footer from './Footer';
import { Link, useNavigate } from 'react-router-dom';

export default function Contact() {
  const navigate = useNavigate();

  const [state, setState] = useState({
    name: "",
    age: "",
    address: "",
    email: "",
    phone: ""
  });

  const [errors, setErrors] = useState({});

  function getinput(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  const validateForm = () => {
    const newErrors = {};

    if (!state.name.trim()) newErrors.name = "Name is required";
    if (!state.age.trim()) newErrors.age = "Service is required";
    if (!state.address.trim()) newErrors.address = "Address is required";

    if (!state.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(state.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!state.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(state.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      navigate("/success");  
    }
  };

  return (
    <div className='body'>
      <div className="form-wrapper" style={{ margin: '50px 0px 0px 0px' }}>
        <div className="form-card">
          <h2 className="title">Get in Touch</h2>

          <label>Name</label>
          <input type="text" name="name" placeholder="Enter your name" onChange={getinput} />
          {errors.name && <p className="err">{errors.name}</p>}

          <label>Service</label>
          <input type="text" name="age" placeholder="ex. Modular kitchen, living room,..." onChange={getinput} />
          {errors.age && <p className="err">{errors.age}</p>}

          <label>Address</label>
          <input type="text" name="address" placeholder="Enter your address" onChange={getinput} />
          {errors.address && <p className="err">{errors.address}</p>}

          <label>Email</label>
          <input type="email" name="email" placeholder="Enter your email" onChange={getinput} />
          {errors.email && <p className="err">{errors.email}</p>}

          <label>Phone Number</label>
          <input type="tel" name="phone" placeholder="Enter your phone number" onChange={getinput} />
          {errors.phone && <p className="err">{errors.phone}</p>}

          <button className="submit-btn" onClick={handleSubmit}>
            Contact
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
