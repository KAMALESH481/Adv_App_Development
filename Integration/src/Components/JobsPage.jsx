
import React from 'react';
import './JobsPage.css'; 
import { useNavigate } from 'react-router-dom';
const JobsPage = ({userJobs,companyANDtitle}) => {
  const navigate=useNavigate();
  const handleSubmit=(name,title)=>
  { 
    const jobContainers={
      companyname:name,
      jobtitle:title
    }
    companyANDtitle(jobContainers)
    navigate('/ApplicationForm')
    
  }
  return (
    <div className="jobs-page">
      <h1>Current Job Openings</h1>

      <div className="job-listings">
        {userJobs.map((job, index) => (
          <div key={index} className="job-listing">
            <h2>{job.jobTitle}</h2>
            <p className="company">{job.companyName}</p>
            <p className="location">{job.location}</p>
            <p className="description">{job.description}</p>
            <button onClick={()=>handleSubmit(job.companyName,job.jobTitle)}  className="apply-button">Apply Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobsPage;
