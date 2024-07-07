import React, { useState } from "react";
import "./Contact.css"; // Your existing CSS file
import Button from "../Button/Button";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css"; // Import default style for react-phone-number-input
import { parsePhoneNumberFromString } from "libphonenumber-js";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import {
  validateEmail,
  validatePhone,
  validateName,
  validateMessage,
} from "../../utils/validationUtils";
import blueEmail from "../../assets/images/blueemail.png";
import bluePhone from "../../assets/images/bluephone.png";
import blueLocation from "../../assets/images/bluelocation.png";
import contactLogo from "../../assets/images/companyLogo.png";

const Contact = () => {
  const [result, setResult] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    phone: "",
    name: "",
    message: "",
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    let formValid = true;
    let errors = { email: "", phone: "", name: "", message: "" };

    if (!validateEmail(email)) {
      formValid = false;
      errors.email = "Please enter a valid email address.";
    }

    if (!validatePhone(phone)) {
      formValid = false;
      errors.phone = "Please enter a valid phone number.";
    }

    if (!validateName(name)) {
      formValid = false;
      errors.name = "Please enter a valid name.";
    }

    if (!validateMessage(message)) {
      formValid = false;
      errors.message = "Message must be at least 5 characters long.";
    }

    setErrors(errors);

    if (!formValid) {
      return;
    }

    setResult("Sending....");

    // Format the phone number
    const phoneNumber = parsePhoneNumberFromString(phone);
    const formattedPhone = phoneNumber
      ? phoneNumber.formatInternational()
      : phone;

    // Manually construct the form data
    const formData = new FormData();
    formData.append("access_key", "b8275140-ae77-4bbf-86f1-d93b237ec340");
    formData.append("name", name);
    formData.append("company", company);
    formData.append("email", email);
    formData.append("phone", formattedPhone); // Append the formatted phone number here
    formData.append("message", message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        setPhone(""); // Reset phone state
        setEmail(""); // Reset email state
        setCompany("");
        setName(""); // Reset name state
        setMessage(""); // Reset message state
      } else {
        console.error("Submission Error:", data);
        setResult("Failed to submit form. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("Failed to submit form. Please try again later.");
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Let's get in touch</h3>
        <p>
          Feel free to reach out through the contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          community.
        </p>
        <ul>
          <li>
            <img src={blueEmail} className="png-icon" alt="contact" />{" "}
            contact@herocompliance.com
          </li>
          <li>
            <img src={bluePhone} alt="phone" />
            +1 555-555-1212
          </li>
          <li>
            <img src={blueLocation} alt="location" />
            77 Madison Ave
            <br />
            Covington, KY 45202
          </li>
        </ul>
        <div className="logo-container">
          <img src={contactLogo} alt="Company Logo" className="contact-logo" />
        </div>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          {errors.name && <div className="error">{errors.name}</div>}
          <label>Company:</label>
          <input
            type="text"
            name="company"
            placeholder="Enter your company name..."
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />{" "}
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errors.email && <div className="error">{errors.email}</div>}
          <label>Phone:</label>
          <PhoneInput
            placeholder="Enter your phone number..."
            value={phone}
            onChange={setPhone}
            required
            defaultCountry="US"
          />
          {errors.phone && <div className="error">{errors.phone}</div>}
          <label>Message:</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          {errors.message && <div className="error">{errors.message}</div>}
          <Button type="submit">Send</Button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
