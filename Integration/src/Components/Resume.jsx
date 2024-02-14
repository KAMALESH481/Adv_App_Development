
import React, { useState } from 'react';
import './Resume.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ResumePage = () => {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    education: '',
    workexperience: '',
    projects:'',
    skills:''
  });

  const handleChange = (e) => {
      const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const data = {
      firstname: formData.firstname,
      lastname:formData.lastname,
      email: formData.email,
      phone: formData.phone,
      education: formData.education,
      workexperience: formData.workexperience,
      projects:formData.projects,
      skills:formData.skills
    };
    axios.post("http://localhost:8082/addResume", data)
      .then(response => {
        console.log('Resume created successfully:', response.data);
      })
      .catch(error => {
        console.error('Error creating resume:', error);
      });
      navigate("/pro")

  };

  return (
    <div className="resume-page">
      <h1>Create Your Resume</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="education">Education:</label>
          <textarea
            id="education"
            name="education"
            value={formData.education}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="workExperience">Work Experience:</label>
          <textarea
            id="workExperience"
            name="workexperience"
            value={formData.workexperience}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="projects">Projects Completed:</label>
          <textarea
            id="projects"
            name="projects"
            value={formData.projects}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="skills">Skills:</label>
          <textarea
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ResumePage;
