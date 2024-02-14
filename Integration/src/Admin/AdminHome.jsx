
import React from 'react';
import './AdminHome.css'; 
import { Link } from 'react-router-dom'

const AdminHomePage = () => {
  return (
    <div className="admin-home">
      <header>
        <h1 style={{color:"black"}}>Job Portal Admin</h1>
      </header>
      <main>
        <section className="statistics">
    <Link to="/Add">
     <button className="stat-card" style={{width:"300px",color:"black"}}>Add Jobs</button> </Link>
          <Link to="/Userlist"><div className="stat-card" style={{width:"300px",color:"black"}}>Jobs Added</div></Link>
          <Link to="/UserRequest"><div className="stat-card" style={{width:"300px",color:"black"}}>View Applications</div></Link>
        </section>

      </main>
    </div>
  );
};

export default AdminHomePage;
