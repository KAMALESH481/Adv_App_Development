import React, { useState,useEffect } from 'react';
import "./Profile.css"
import { Button, CircularProgress } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import WorkIcon from '@mui/icons-material/Work';
import WhereToVoteOutlinedIcon from '@mui/icons-material/WhereToVoteOutlined';
import ApartmentTwoToneIcon from '@mui/icons-material/ApartmentTwoTone';
// import UseTypingEffect from '../Components/Typing';
function Profile() {
  const [companies,setCompanies]=useState([]);
  const [apply, setApply] = useState(false);
  const [loading, setLoading] = useState(true);
  // const text = UseTypingEffect('Hello! Do You want to Apply for a Role', 150);
  useEffect(() => {
    // Simulate data fetching, replace with your actual data fetching logic
    const fetchData = async () => {
      try {
        // Set loading to true while fetching data
        setLoading(true);

        // Replace this with your actual data fetching logic
        const response = await fetch('http://localhost:8082/getResume');
        setCompanies(await response.json());
           console.log(companies)
        // Update state with fetched data

        // Set loading to false after data is fetched
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle errors if necessary
        setLoading(false);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []); // Run once on component mount

  if(loading){
    return(
      <div>
      <CircularProgress style={{color:'black' ,fontSize:'500cm',textAlign:'center'}} />
      </div>
      )
    }
      return (
        <div>
    <div className="viewvenue">
      {companies.map((company, index) => (
        <div key={index} className='view-container'>
          <div className='desc'>
          <h1 className='des-tit'>{company.firstname} {company.lastname}</h1>
          <p>EMAIL : {company.email}</p>
          <p>EDUCATION : {company.education}</p> 
          <p>MOBILE : {company.phone}</p> 
          <p>PROJECTS : {company.projects}</p> 
          <p>SKILLS : {company.skills}</p> 
         
         
            <br/>
            <Button style={{opacity:"0"}}variant="contained" color="primary" >
            Apply
            <ArrowForwardIcon/>
          </Button>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}


export default Profile;
// firstname: formData.firstname,
//       lastname:formData.lastname,
//       email: formData.email,
//       phone: formData.phone,
//       education: formData.education,
//       workexperience: formData.workexperience,
//       projects:formData.projects,
//       skills:formData.skills