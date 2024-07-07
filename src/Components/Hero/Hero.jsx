import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button"
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/services");
  };

  return (
    <div className="hero">
      <div className="hero-text">
        <h1>
          NO CAPES <br></br>JUST SOLUTIONS
        </h1>
        <h2>HERO COMPLIANCE DESIGN</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
          laborum accusamus autem reiciendis delectus quibusdam pariatur est
          quisquam a quae.
        </p>
        <Button onClick={handleClick} className="hero-btn-padding">
          Learn more
        </Button>
      </div>
    </div>
  );
};

export default Hero;
