// HackathonsPage.jsx

import React from 'react';
import './Hackathon.css';

const HackathonsPage = () => {
  const hackathonsData = [
    {
    HackathonName:"SIH",
    date:"12.02.2024",
    TeamMemebers:4,
    description:"",
    Location:"Sri Krishna Institutions,Coimbatore",
    img:"https://img.freepik.com/free-photo/colleagues-discussing-work-project_23-2147785030.jpg?w=996&t=st=1706553053~exp=1706553653~hmac=224d287065f67a29002bcce941eb0b27c180f4555e75fed20e4c2d4fc8787126"

    },
    {
        HackathonName:"SIH",
        date:"12.02.2024",
        TeamMemebers:4,
        description:"",
        Location:"Sri Krishna Institutions,Coimbatore",
        img:"https://img.freepik.com/free-photo/friendly-partners-handshaking-group-meeting-thanking-successful-teamwork_1163-4691.jpg?size=626&ext=jpg&ga=GA1.1.563811307.1678085397&semt=sph"
    
        }
        ,
    {
        HackathonName:"SIH",
        date:"12.02.2024",
        TeamMemebers:4,
        description:"",
        Location:"Sri Krishna Institutions,Coimbatore",
        img:"https://img.freepik.com/free-photo/friendly-partners-handshaking-group-meeting-thanking-successful-teamwork_1163-4691.jpg?size=626&ext=jpg&ga=GA1.1.563811307.1678085397&semt=sph"
    
        }
    

  ];

  return (
  <div className="hackathons-page">
  <div className="hackathons-list" style={{margin:"20px 10px 10px 25px"}}>
    <h1 style={{marginTop:"0px"}}>Hackathons</h1>
    <div id="slideshow" style={{display:"flex"}}>
    <div class="slide-wrapper" >
    <div class="slide">
    <h1 class="slide-number"  style={{display:"flex"}}>
                {hackathonsData.map((hackathon) => (
                  <div className="hackathon-item">
                    <div className='c1'>
                      <h2>{hackathon.HackathonName}</h2>
                        <p>Date: {hackathon.date}</p>
            <p>Description: {hackathon.description}</p>
            <p>Max-TeamMembers: {hackathon.TeamMemebers}</p>
            <p>Location: {hackathon.Location}</p>
            <button>Click here</button>
            </div>
            <div className='c2'>
            <img src={hackathon.img}></img>
            </div>
          </div>
        ))}
        </h1>
   
    </div>
    </div>
    </div>
       
      </div>
    </div>
  );
};

export default HackathonsPage;
