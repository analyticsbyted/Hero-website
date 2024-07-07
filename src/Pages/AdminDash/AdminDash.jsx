import React from "react";
import Tabs from "../../Components/Tabs/Tabs"; // Import your Tabs component
import Dashboard from "./Dashboard";
import UserManagement from "./UserManagement";
import Contacts from "./Contacts";
import Analytics from "./Analytics";
import "./AdminDash.css"; // Your existing CSS (You may need to adjust it)
import ReactGA4 from 'react-ga4';

const AdminDash = () => {
    const tabs = [
        { label: "Admin Dashboard", content: <Dashboard /> },
        { label: "User Management", content: <UserManagement /> },
        { label: "Contacts", content: <Contacts /> },
        { label: "Analytics", content: <Analytics /> },
    ];

    return (
        <div className="admin-panel"> {/* Remove the 'container' class here */}
            <Tabs tabs={tabs} /> 
        </div>
    );
};

export default AdminDash;
