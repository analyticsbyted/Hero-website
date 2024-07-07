import React from "react";
import "./Testimonial.css";

const Testimonial = ({ name, company, quote, image }) => (
  <div className="slide">
    <div className="user-info">
      {image ? ( // Conditionally render image or "No Image" message
        <img src={image} alt={name} />
      ) : (
        <div className="no-image-placeholder">No Image</div> // Add a placeholder div
      )}
      <div>
        <h3>{name}</h3>
        <span>{company}</span>
      </div>
    </div>
    <p>{quote}</p>
  </div>
);

export default Testimonial;
