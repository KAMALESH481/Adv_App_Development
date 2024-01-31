// App.jsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import AddItems from './Components/AddItems';
import Search from './Components/Search';
import JobsPage from './Components/JobsPage';
import ResumePage from './Components/Resume';
import ContactPage from './Components/Contact';
import HackathonsPage from './Components/Hack';
import AdminHomePage from './Admin/AdminHome';
import AddJobs from './Admin/AddJobs';
import UserJobsList from './Admin/create';

const App = () => {

  const [allJobs, setAllJobs] = useState(() => {
    const storedJobs = localStorage.getItem('userJobs');
    return storedJobs ? JSON.parse(storedJobs) : [];
  });


  const handleAddJob = (newJob) => {
    const updatedJobs = [...allJobs, newJob];
    setAllJobs(updatedJobs);
    localStorage.setItem('userJobs', JSON.stringify(updatedJobs));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/' element={<Home />} />
        <Route path='/Hack' element={<HackathonsPage />} />
        <Route path='/TrendJobs' element={<JobsPage userJobs={allJobs}/>} />
        <Route path='/CreateYourResume' element={<ResumePage />} />
        <Route path='/Contact' element={<ContactPage />} />
        <Route path='/AdminHome' element={<AdminHomePage />} />

        <Route path='/Add' element={<AddJobs onAddJob={handleAddJob} />} />
        <Route path='/Userlist' element={<UserJobsList userJobs={allJobs} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
