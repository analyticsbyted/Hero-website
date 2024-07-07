import React from "react";

const TeamMember = ({ name, title, image, bio }) => (
  <div className="team-member">
    <img src={image} alt={name} />
    <div className="content"> {/* Added a content div to wrap name and title */}
      <h3 style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#212ea0", marginBottom: "0.25rem" }}
      >
        {name}
      </h3> 
      <p className="jobTitle">{title}</p> {/* Removed margin from the title */}
      <p>{bio}</p>
    </div>
  </div>
);

export default TeamMember;
