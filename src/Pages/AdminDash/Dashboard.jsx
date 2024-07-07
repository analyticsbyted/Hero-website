import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Admin Dashboard</h1>
      <div className="metrics">
        <div className="metric">
          <h2>Users</h2>
          <p>150</p>
        </div>
        <div className="metric">
          <h2>Active Sessions</h2>
          <p>45</p>
        </div>
        <div className="metric">
          <h2>New Registrations</h2>
          <p>30</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
