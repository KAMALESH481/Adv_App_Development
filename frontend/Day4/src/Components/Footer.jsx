import React from 'react'
import "./footer.css"
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';

const Footer = () => {
  return (
    <div className='footerbody'  style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>
        <div className='abt'>
            <div className='abtcnt'>
              <h4 style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>ABOUT</h4><br/>
              <p >Our mission is to revolutionize the way individuals and companies discover each other.
                 We strive to make the job search process seamless, efficient, and rewarding for everyone involved. 
                By leveraging cutting-edge technology and innovative solutions,
                 we are committed to creating a platform that transforms the employment landscape.</p>
            </div>
            <div className='quick'>
              <h5 style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",marginLeft:"40px"}}>QUICK LINKS</h5>
              <br></br>
              <br></br>
              <ul >
                <li style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>Contact Us</li>
                <li style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>Job</li>
                <li style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>Companies</li>
                <li style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>Service</li>
                <li style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>Login</li>
              </ul>
            </div>
            <div className='term'>
              <h4 style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>Legal</h4>
              
              <ul>
                <li>Privacy Policy</li>
                <li>Terms of Use</li>
                <li>Site Map</li>
              </ul>

            </div>
        </div>
        
        <div className='copy' ><p style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",marginTop:"-0.2cm"}}>Copyright © 2024 All Rights are Reserved Waah! jobs</p>
          <div className='iconn'>
        <div className='icon '>
      <GoogleIcon  style={{color:"#34A853"}}/></div>
        <div className='icon'>
     <FacebookIcon style={{color:"#316FF6"}}/></div>
        <div className='icon'>
     <InstagramIcon style={{color:"rgb(233, 79, 104)"}}/></div>
        <div className='icon'>
    <XIcon style={{color:"black"}}/></div>
        <div className='icon'>
  <LinkedInIcon style={{color:"#316FF6"}}/></div>
  </div>
  </div>
    </div>
  )
}

export default Footer