import React, { useState } from 'react';
import { FormControlLabel, Radio, Button, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import sign from "./ImagesForHome/signup.png";
import login from "./ImagesForHome/login.png";
import "./Login.css";
import axios from 'axios';

const Login = ({ home }) => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState("admin");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleUserTypeChange(event) {
    setUserType(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    console.log('User Type:', userType);
    console.log('Email:', email);
    console.log('Password:', password);
    
    // Validate email and password before submitting
    if (!email || !password) {
      alert("Email and password are required.");
      return;
    }

    try {
      const response = await axios.post("http://127.0.0.1:8081/api/v1/auth/login", { email, password });
      console.log(response);
      localStorage.setItem("email",email);
      
      if (userType === "admin") {
        navigate('/AdminHome');
      } else {
        home(email);
        navigate("/");
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert("Wrong credentials");
    }
  }

  return (
    <div className='Flex'>
      <div className='Signup-button'>
        <h1 style={{ color: "white", marginLeft: "30px" }}>Don't Have an account?</h1>
        <Link to="/Signup">
          <img className="img-back3" src={sign} alt="Sign Up" />
        </Link>
      </div>
      <div className='Sign-in'>
        <img className="img-back1" src={login} alt="Login" />
        <br />
        <div className='ui'>
          <FormControlLabel style={{ marginLeft: "-2cm" }}
            control={<Radio onClick={handleUserTypeChange} />}
            value="admin"
            label="Admin"
            checked={userType === "admin"}
          />
          <FormControlLabel
            control={<Radio onClick={handleUserTypeChange} />}
            value="user"
            label="User"
            checked={userType === "user"}
          />
        </div>

        <TextField style={{ width: "300px", marginBottom: "15px" }}
          type='email'
          label='Email Address'
          value={email}
          onChange={handleEmailChange}
          required
        />
        <TextField style={{ width: "300px", marginBottom: "20px" }}
          type='password'
          label='Password'
          value={password}
          onChange={handlePasswordChange}
          required
        />

        <div>
          <Button
            style={{ width: "300px", marginBottom: "20px", backgroundColor: "blue", color: "white" }} className="submit-button" type='submit' onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
