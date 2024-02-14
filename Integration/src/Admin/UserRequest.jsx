import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./UserRequest.css"
const UserRequest = (props) => {
  const navigate=useNavigate();
 function handleAcc(comp,tit)
  {
    console.log(comp);
    const note={
      company:comp,
      title:tit
    }
    localStorage.setItem("coms",note);
       props.Accept(note)
       console.log(note);
       navigate("/Notifications")
  } 
  return (
    <>
    <h1>UserApplication Requests</h1>
    <div className='req'>
    {props.toAdmin.map((job, index) => (
      <div key={index} className="job-listing">
        <h2>{job.name}</h2>
        <p className="company">{job.email}</p>
        <p>Company Name :{job.company}</p>
        <p>Job Title :{job.title}</p>
        <div className='buttons'>
        <button onClick={()=>handleAcc(job.company,job.title)} style={{"backgroundColor":"green"}}>Accept</button>
        <button onClick={()=>handleAcc(job.company,job.title)} style={{"backgroundColor":"red"}}>Decline</button>
        </div>
        
      </div>
    ))}
  </div>
    </>
  )
}

export default UserRequest