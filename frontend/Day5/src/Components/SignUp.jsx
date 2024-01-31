import React, { useState } from 'react';
import "./Signup.css";
import signup from "./ImagesForHome/signup.png";
import background from "./ImagesForHome/login-background.jpg";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (event) => {

    event.preventDefault();
    console.log('Form Data:', formData);
    navigate('/Login');
  };
  
  return (
    <div className='Flex'>
      <img className="img-back" src={background} style={{ borderRadius: "20px", height: "549px" }} alt="Background"></img>
      <div className='Sign-up'>
        <img className="sign" src={signup} alt="Sign Up"></img>
        <form onSubmit={handleSubmit}>
          <input type='text' name='fullName' placeholder='Full-Name' value={formData.fullName} onChange={handleChange} required></input>
          <input type='number' name='mobileNumber' placeholder='Mobile-Number' value={formData.mobileNumber} onChange={handleChange} required></input>
          <input type='text' name='email' placeholder='Email-Addess' value={formData.email} onChange={handleChange} required></input>
          <input type='password' name='password' placeholder='Password' value={formData.password} onChange={handleChange} required></input>
          <input type='password' name='confirmPassword' placeholder='Confirm-Password' value={formData.confirmPassword} onChange={handleChange} required></input>
          <div className='terms'>
            <input type="checkbox" name="acceptTerms" checked={formData.acceptTerms} onChange={handleChange}></input>
            <p>Accept Terms and Conditions</p>
          </div>
          <button className="submit-button" style={{marginLeft:"100px",width:"200px"}}type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
