import React, { useState } from 'react';

const JobPortal = () => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedExperience, setSelectedExperience] = useState('');
  const locations = ['Chennai','Covai','Banglore','Mysore','Trivandrum','Cochin','Hyderabad','Vizag','Mumbai','Pune','Delhi','Kolkata'];
  const experiences = ['Entry Level', 'Intermediate', 'Experienced', 'Senior'];

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handleExperienceChange = (event) => {
    setSelectedExperience(event.target.value);
  };

  return (
    <div className='location'>
    <select id="location" style={{fontSize:"20px"}} value={selectedLocation} onChange={handleLocationChange}>
      <option style={{fontSize:"20px"}} value="">Select a location</option>
      {locations.map((location, index) => (
        <option style={{fontSize:"20px"}} key={index} value={location}>
          {location}
        </option>
      ))}
    </select>
      <select id="experience" style={{fontSize:"20px"}} value={selectedExperience} onChange={handleExperienceChange}>
        <option value="" style={{fontSize:"20px"}}>Select experience level</option>
        {experiences.map((experience, index) => (
          <option key={index} style={{fontSize:"20px"}} value={experience}>
            {experience}
          </option>
        ))}
      </select>
    </div>
  );
};

export default JobPortal;
