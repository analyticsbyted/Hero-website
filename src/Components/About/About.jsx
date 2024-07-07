import React from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";
import Button from "../Button/Button";
import TeamMember from "../TeamMembers/TeamMember";
import member1 from "../../assets/images/user-1.png";
import member2 from "../../assets/images/user-3.png";

const teamMembers = [
  {
    name: "Eunice Dawson",
    title: "Senior Consultant",
    image: member1,
    bio: "Eunice is a highly skilled and really knows her stuff. Her honor and integrity is unequaled on the planet. When it comes to crunching numbers, she is second to none.",
  },
  {
    name: "Pat Davis",
    title: "Project Manager",
    image: member2,
    bio: "Pat is an experienced...",
  },
  // Add more team members here as needed
];

const About = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/contact");
  };

  return (
    <div className="about-us">
      <div className="about-container">
        <div className="about-intro">
          <h1>Why Hero?</h1>
          <h2>We're Glad You Asked!</h2>
          <p className="about-content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
            totam veritatis laudantium a aperiam. Alias tenetur consectetur
            harum mollitia velit delectus exercitationem voluptatibus, earum
            sint libero inventore dolorum nam a iure pariatur vel doloremque.
            Odio similique autem rerum tempora, consectetur odit officia dolor
            sunt labore error! Dolor, eveniet sed. Laborum.
          </p>
        </div>

        <section className="team">
          <h2>Meet the Team</h2>
          <div className="team-members">
            {teamMembers.slice(0, 2).map((member) => (
              <TeamMember key={member.name} {...member} />
            ))}
          </div>
        </section>

        <section className="cta">
          <h2>Ready to Transform Your Business?</h2>
          <p>
            Contact us today to discuss how we can help you achieve your goals.
          </p>
          <Button onClick={handleButtonClick}>Get in Touch</Button>
        </section>
      </div>
    </div>
  );
};

export default About;
