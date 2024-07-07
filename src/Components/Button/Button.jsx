import React from "react";
import "./Button.css";
import ButtonSvg from "../../assets/svg/ButtonSvg";

const Button = ({ children, onClick, href, className, white }) => {
  const isLink = !!href;

  const handleClick = (event) => {
    if (onClick) {
      event.preventDefault();
      onClick(event);
    }
  };

  return (
    <div className={`btn-gradient-wrapper relative group ${className || ""}`}>
      <ButtonSvg white={white} />
      {isLink ? (
        <a
          href={href}
          className={`custom-btn ${white ? "btn-white" : "btn-primary"}`}
          onClick={handleClick}
        >
          {children}
        </a>
      ) : (
        <button
          className={`custom-btn ${white ? "btn-white" : "btn-primary"}`}
          onClick={handleClick}
        >
          {children}
        </button>
      )}
    </div>
  );
};

export default Button;
