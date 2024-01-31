

import React from 'react';
import './AdminHome.css'; 
import { Link } from 'react-router-dom'

const AdminHomePage = () => {
  return (
    <div className="admin-home">
      <header>
        <h1>Job Portal Admin</h1>
      </header>
      <main>
        <section className="statistics">
    <Link to="/Add">
     <button className="stat-card" style={{width:"300px",color:"black"}}>Add Jobs</button> </Link>
          <div className="stat-card">Jobs Added</div>
          <div className="stat-card">Delete Jobs</div>
        </section>

      </main>
    </div>
  );
};

export default AdminHomePage;
