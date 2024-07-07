// Title.jsx
import React from "react";
import "./Title.css";

const Title = ({ subTitle, title, backgroundColor = "#f5f5f5" }) => { // Default value
  return (
    <div className="title" style={{ "--title-bg-color": backgroundColor }}> 
      <p>{subTitle}</p>
      <h2>{title}</h2>
    </div>
  );
};

export default Title;
