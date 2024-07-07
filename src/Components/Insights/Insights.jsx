import React from "react";
import { Link } from "react-router-dom";
import "./Insights.css";

// Import images
import regulatoryChangesImage from "../../assets/images/optimized/pic2.webp";
import cybersecurityImage from "../../assets/images/insights-2.jpg";
import amlComplianceImage from "../../assets/images/insights-4.jpg";
import operationalEfficiencyImage from "../../assets/images/insights-5.jpg";
import cyberSecurityWebinarImage from "../../assets/images/insights-6.jpg";
import digitalBankingWebinarImage from "../../assets/images/insights-7.jpg";

const Insights = () => {
  return (
    <div className="insights-container">
      <section className="latest-updates">
        <h2>Latest Updates</h2>
        <div className="card-container">  
          <div className="update-item">
            <img src={regulatoryChangesImage} loading="lazy" alt="Regulatory Changes" className="card-image" /> 
            <div className="card-content">
              <div className="title-wrapper">
                <h4>Banking As A Service:<br />The Risks And Who Owns The Customer</h4>
                <div className="author-date">
                  <p>Ron Shevlin, March 6, 2023</p>
                </div>
              </div>
              <p>
                Embedded finance—where non-chartered companies like fintechs and consumer brands provide financial services from chartered financial institutions—is projected to reach $7 trillion in transaction value by 2026.
              </p>
              <a href="https://www.forbes.com/sites/ronshevlin/2023/03/06/banking-as-a-service-what-are-the-risks-and-who-owns-the-customer/" className="read-more-button" target="_blank" rel="noopener noreferrer">Read More</a>
            </div>
          </div>

          <div className="update-item">
            <img src={cybersecurityImage} loading="lazy" alt="Cybersecurity Threats" className="card-image" /> 
            <div className="card-content">
              <div className="title-wrapper">
                <h4>Cybersecurity Threats in the Digital Age</h4>
                <div className="author-date">
                  <p>Jane Smith, July 4, 2023</p>
                </div>
              </div>
              <p>
                As financial institutions increasingly rely on digital platforms, cybersecurity threats are on the rise. Learn about the latest trends and best practices for protecting your assets.
              </p>
              <Link to="/insights/article2" className="read-more-button">Read More</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-articles">
        <h2>Featured Articles</h2>
        <div className="card-container">
          <div className="article-card">
            <img src={amlComplianceImage} loading="lazy" alt="AML Compliance" className="card-image" /> 
            <div className="card-content">
              <div className="title-wrapper">
                <h4>Navigating the Complexities of AML Compliance</h4>
                <div className="author-date">
                  <p>John Doe, July 3, 2023</p>
                </div>
              </div>
              <p>
                In the ever-evolving financial landscape, Anti-Money Laundering (AML) compliance remains a critical concern. This article explores the challenges and solutions for effective AML programs.
              </p>
              <Link to="/insights/article3" className="read-more-button">Read More</Link>
            </div>
          </div>

          <div className="article-card">
            <img src={operationalEfficiencyImage} loading="lazy" alt="Operational Efficiency" className="card-image" />
            <div className="card-content">
              <div className="title-wrapper">
                <h4>Optimizing Operational Efficiency in Financial Institutions</h4>
                <div className="author-date">
                  <p>Jane Smith, July 4, 2023</p>
                </div>
              </div>
              <p>
                Discover strategies for streamlining operations, reducing costs, and improving overall efficiency in your financial institution.
              </p>
              <Link to="/insights/article4" className="read-more-button">Read More</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="upcoming-webinars">
        <h2>Upcoming Webinars</h2>
        <div className="card-container">
          <div className="webinar-item">
            <img src={cyberSecurityWebinarImage} loading="lazy" alt="Cybersecurity Webinar" className="card-image webinar-image" />
            <div className="card-content">
              <div className="title-wrapper">
                <h4>Best Practices for Cyber Security in Financial Institutions</h4>
                
              </div>
              <p>Presented By: Dr. Aileen Henson</p>
              <p>Join us for a discussion on cybersecurity best practices for financial institutions.</p>
              <p>Date: July 15, 2024 | Time: 2:00 PM EST</p>
              <button className="register-button">Register Now</button>
            </div>
          </div>
          <div className="webinar-item">
            <img src={digitalBankingWebinarImage} loading="lazy" alt="Digital Banking Webinar" className="card-image webinar-image" />
            <div className="card-content">
              <div className="title-wrapper">
                <h4>The Future of Digital Banking: Trends and Opportunities</h4>
                <p>Presented by Third & Sixth Bank</p>
              </div>
              <p>Join us for an evening of in-depth digital banking</p>
              <p>Date: August 10, 2024 | Time: 11:00 AM EST</p>
              <button className="register-button">Register Now</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insights;
