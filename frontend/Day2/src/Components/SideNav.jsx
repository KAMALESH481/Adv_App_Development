import React from 'react'
import JobPortal from './Location'
import "./Home.css"

const SideNav = ({dash}) => {
  return (
    <div className='img-dash'>
    <div className='dashboard-row2'>
    <input className="search-jobs"type="text" placeholder='Search Jobs'></input>
    <JobPortal />
    <img src={search}></img>
    </div>
    <div className={dash? 'dashboard-column-active':'dashboard-column'}>
    <div>Profile</div><br></br>
    <div>Profile</div><br></br>
    <div>Profile</div><br></br>
    <div>Profile</div><br></br>
    <div>Profile</div><br></br>
    </div>
    </div>
  )
}

export default SideNav