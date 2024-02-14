import React from 'react'
import "./JobsApp.css"
import frontend from "./ImagesForJobs/FrontEnd.jpg"
import backend from "./ImagesForJobs/Backend.jpg"
import FullStack from "./ImagesForJobs/Fullstack.jpg"
import DataAnalyst from "./ImagesForJobs/DataAnalyst.jpg"
import DataScientist from "./ImagesForJobs/DataScientist.jpg"
import Devops from "./ImagesForJobs/Devops.jpg"
import auto from "./ImagesForJobs/automation.png"
import Machine from "./ImagesForJobs/Machine.avif"
import Prompt from "./ImagesForJobs/prompt.jpg"
import cloud from "./ImagesForJobs/Cloud.jpg"
import { Link } from 'react-router-dom'
const JobsApp = () => {
  return (
    <div className='containerForJobs' >
    <div className='row-jobs'>
    <div className='Individual'>
    <img src={frontend}></img>
    <p1>Frontend Developer</p1>
   <p4><Link to="/ApplicationForm" style={{color:"black"}}> Apply Now</Link></p4>
    </div>
    <div className='Individual'>
    <img src={backend}></img>
    <p1> Backend Developer</p1>
    <p4><Link to="/ApplicationForm"style={{color:"black"}}> Apply Now</Link></p4>
    </div>
    <div className='Individual'>
    <img src={FullStack}></img>
    <p1>FullStack Developer</p1>
    <p4><Link to="/ApplicationForm"style={{color:"black"}}> Apply Now</Link></p4>
    </div>
    <div className='Individual'>
    <img src={auto}></img>
    <p1>Automation and Robotics</p1>
    <p4><Link to="/ApplicationForm"style={{color:"black"}}> Apply Now</Link></p4>
    </div>
    <div className='Individual'>
    <img src={cloud}></img>
    <p1>Cloud Engineer</p1>
    <p4><Link to="/ApplicationForm"style={{color:"black"}}> Apply Now</Link></p4>
    </div>
    </div>
    <div className='row-jobs'>
    <div className='Individual'>
    <img src={DataAnalyst}></img>
    <p1>DataAnalyst</p1>
    <p4 ><Link to="/ApplicationForm"style={{color:"black"}}> Apply Now</Link></p4>
    </div>
    <div className='Individual'>
    <img src={DataScientist}></img>
    <p1>DataScientist</p1>
     <p4><Link to="/ApplicationForm"style={{color:"black"}}> Apply Now</Link></p4>
    </div>
    <div className='Individual'>
    <img src={Devops}></img>
    <p1> Devops</p1>
    <p4><Link to="/ApplicationForm"style={{color:"black"}}> Apply Now</Link></p4>
    </div>
    <div className='Individual'>
    <img src={Machine}></img>
    <p1>Machine Learning</p1>
    <p4><Link to="/ApplicationForm"style={{color:"black"}}> Apply Now</Link></p4>
    </div>
    <div className='Individual'>
    <img src={Prompt}></img>
    <p1>Promt Engineer</p1>
    <p4><Link to="/ApplicationForm"style={{color:"black"}}> Apply Now</Link></p4>
    </div>
    </div>
   
    </div>
  )
}

export default JobsApp