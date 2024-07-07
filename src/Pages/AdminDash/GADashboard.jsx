import { useContext, useEffect } from "react";
import {useNavigate } from "react-router-dom";
import "./GADashboard.css";
import ReactGA4 from "react-ga4";

function DAshboard() {
  const navigate = useNavigate();
  const [isGADashboard, setIsGADashboard] = useState(false);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  })

  const handleButtonClick = () => {
    ReactGA4.event({
      category: "GADashboard",
      action: "Click on the button",
    });
    navigate("/ga-form");
  };

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <button onClick={handleButtonClick}>Create a new form</button>
    </div>
  );
}
export default DAshboard