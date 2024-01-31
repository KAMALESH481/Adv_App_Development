import React from 'react'
import "./Home.css"
import search from "./ImagesForHome/search.png"
import logo from"./ImagesForHome/Logo.jpg"
import dashboard from "./ImagesForHome/dashboard.png"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import JobPortal from './Location'

import JobsApp from './JobsApp'
import Footer from './FOoter'

const Home = () => {
  const [dash,setDash]=useState(true)
   return (
  <>
    <div className='dashboard-row'>
    <div className='left-section'>
    <img className="img-logo" src={logo}></img>
    <h3>Wehire</h3>
    </div>
    <div className='last'>
    <Link to="/Login"><div className="login">Login</div></Link>
    <Link to="/signup"><div className="signup">SignUp</div></Link>
    <img className="img-dashboard" src={dashboard} style={{cursor:"pointer",marginLeft:"-2cm"}} onClick={()=>{setDash(!dash)}}></img>
    </div>
    </div>
    <div className='img-dash' >
    <div className='dashboard-row2'>
    <input className="search-jobs"type="text" placeholder='Search Jobs'></input>
    <JobPortal />
    <img src={search}></img>
    </div>
    <div className={dash? 'dashboard-column-active':'dashboard-column'} style={{position:"absolute"}}>
    <div>Profile</div>
    <Link to="/CreateYourResume"><div>Create Resume</div></Link>
    <Link to="/TrendJobs"><div>Job Openings</div></Link>
    <Link to="/Hack"><div>Courses</div></Link>
    <div>Logout</div>
    </div>
    </div>
    <JobsApp />
    <Footer />
    </>
   
  )

}

export default Home