import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Tabs.css'; // Import your custom CSS

const Tabs = ({ tabs, defaultActiveIndex = 0 }) => {
  const [activeTab, setActiveTab] = useState(defaultActiveIndex);
  const location = useLocation(); // Get the current location object from React Router

  // Sync activeTab with current route path on mount
  useEffect(() => {
    const currentPath = location.pathname;
    const matchingTabIndex = tabs.findIndex(tab => tab.path === currentPath);
    setActiveTab(matchingTabIndex !== -1 ? matchingTabIndex : defaultActiveIndex);
  }, [location]);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs-container">
      <ul className="tabs-list">
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={`tab-item ${index === activeTab ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </li>
        ))}
      </ul>
      <div className="tab-content">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Tabs;
