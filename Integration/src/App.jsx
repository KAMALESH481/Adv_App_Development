// App.jsx
import React, {  useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
// import AddItems from './Components/AddItems';
// import Search from './Components/Search';
import JobsPage from './Components/JobsPage';
import ResumePage from './Components/Resume';
import ContactPage from './Components/Contact';
import HackathonsPage from './Components/Hack';
import AdminHomePage from './Admin/AdminHome';
import AddJobs from './Admin/AddJobs';
import UserJobsList from './Admin/create';
import JobApplicationForm from './Components/JobApplicationForm';
import UserRequest from './Admin/UserRequest';
import Notify from './Components/Notify';
import Profile from './Components/Profile';

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
  const[name,setName]=useState("Guest")
  function ho(email){
    setName(email);
  }
  const [Company, setCompany] = useState([]);

   function handlecomANDtitle(jobContainer) {
    setCompany(jobContainer);
  }

  const[userRequest,setUserRequest]=useState(() => {
    const storedReqs = localStorage.getItem('userReqs');
    return storedReqs ? JSON.parse(storedReqs) : [];
  });
 function handleReq(formData)
 {
  const updatedReqs=[...userRequest,formData]
  setUserRequest(updatedReqs)
  localStorage.setItem('userReqs', JSON.stringify(updatedReqs));
 }
 const[jobnote,setJobnote]=useState([]);

 function handleAccept(note)
 {
  
    setJobnote(note)
  
 }


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Login' element={<Login home={ho}/>} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/' element={<Home displayName={name} />} />
        <Route path='/Hack' element={<HackathonsPage />} />
        <Route
          path='/TrendJobs'
          element={
            <JobsPage
              userJobs={allJobs}
              companyANDtitle={handlecomANDtitle}
            />
          }
        />
        <Route path='/CreateYourResume' element={<ResumePage />} />
        <Route path='/Contact' element={<ContactPage />} />
        <Route path='/AdminHome' element={<AdminHomePage />} />
        <Route path='/Add' element={<AddJobs onAddJob={handleAddJob} />} />
        <Route path='/Userlist' element={<UserJobsList userJobs={allJobs} />} />
        <Route path='/pro' element={<Profile/>} />
        <Route
          path='/ApplicationForm'
          element={<JobApplicationForm company={Company} Req={handleReq} />}
        />
        <Route path='/UserRequest' element={<UserRequest toAdmin={userRequest}
                                                         Accept={handleAccept}                                               
         />} />
         <Route
         path='/Notifications'
         element={<Notify note={jobnote}
                                 />}
       />
      </Routes>
    </BrowserRouter>
  );
};

export default App;