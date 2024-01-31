import React from 'react'
import "./Home.css"

const TopNav = ({dash,setDash}) => {
  return (
    <div className='dashboard-row'>
    <div className='left-section'>
    <img className="img-logo" src={logo}></img>
    <h3>Jobs</h3>
    </div>
    <div className='last'>
    <Link to="/Login"><div className="login">Login</div></Link>
    <Link to="/signup"><div className="signup">SignUp</div></Link>
    <img className="img-dashboard" src={dashboard} style={{cursor:"pointer"}} onClick={()=>{setDash(!dash)}}></img>
    </div>
    </div>
  )
}

export default TopNav