import React, { useState } from 'react';
import "./Signup.css";
import signup from "./ImagesForHome/signup.png";
import background from "./ImagesForHome/login-background.jpg";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { fullName, email, password, confirmPassword, acceptTerms } = formData;

    // Perform validation
    if (!fullName || !email || !password || !confirmPassword || !acceptTerms) {
      alert('Please fill in all fields and accept terms and conditions.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    // If all validations pass, proceed with form submission
    const data = {
      name: fullName,
      email,
      password,
      confirmPassword
    };

    try {
      const response = await axios.post("http://localhost:8081/api/v1/auth/register", data);
      console.log(response);
      navigate("/login");
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div className='Flex'>
      <img className="img-back" src={background} style={{ borderRadius: "20px", height: "549px" }} alt="Background"></img>
      <div className='Sign-up'>
        <img className="sign" src={signup} alt="Sign Up"></img>
        <form onSubmit={handleSubmit}>
          <input type='text' name='fullName' placeholder='Full-Name' value={formData.fullName} onChange={handleChange} required></input>
          <input type='text' name='email' placeholder='Email-Addess' value={formData.email} onChange={handleChange} required></input>
          <input type='password' name='password' placeholder='Password' value={formData.password} onChange={handleChange} required></input>
          <input type='password' name='confirmPassword' placeholder='Confirm-Password' value={formData.confirmPassword} onChange={handleChange} required></input>
          <div className='terms'>
            <input type="checkbox" name="acceptTerms" checked={formData.acceptTerms} onChange={handleChange}></input>
            <p>Accept Terms and Conditions</p>
          </div>
          <button className="submit-button" style={{ marginLeft: "100px", width: "200px" }} type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
