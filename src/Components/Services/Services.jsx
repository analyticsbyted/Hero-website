import React from 'react';
import './Services.css';
import Button from '../Button/Button';

import { FaClipboardList } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { FaChartLine } from "react-icons/fa6";
import { FaChartBar } from "react-icons/fa";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { FaBinoculars } from "react-icons/fa";
import { useNavigate, NavLink } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate(); //Initialize navigation hook
  const handleButtonClick = () => {
    navigate("../contact");
  }

  return (
    <div className='services-container'>
        <div className='services'>
        
            <div className="row">
                <div className="box">
                    <i><FaClipboardList /></i>
                    <h3>Assessments</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, fuga molestiae repudiandae mollitia ipsa esse sed quaerat dolorem aspernatur cum.</p>
                </div>

                <div className="box">
                    <i><FaBriefcase /></i>
                    <h3>Risk Solutions</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, fuga molestiae repudiandae mollitia ipsa esse sed quaerat dolorem aspernatur cum.</p>
                </div>

                <div className="box">
                    <i><FaGraduationCap /></i>
                    <h3>Training</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, fuga molestiae repudiandae mollitia ipsa esse sed quaerat dolorem aspernatur cum.</p>
                </div>

                <div className="box">
                    <i><FaChartLine /></i>
                    <h3>Profit Generation</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, fuga molestiae repudiandae mollitia ipsa esse sed quaerat dolorem aspernatur cum.</p>
                </div>

                <div className="box">
                    <i><FaChartBar /></i>
                    <h3>Auditing</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, fuga molestiae repudiandae mollitia ipsa esse sed quaerat dolorem aspernatur cum.</p>
                </div>

                <div className="box">
                    <i><FaBinoculars /></i>
                    <h3>And more</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, fuga molestiae repudiandae mollitia ipsa esse sed quaerat dolorem aspernatur cum.</p>
                </div>
            </div>
            <Button onClick={handleButtonClick}>
                Book Appointment
            </Button>
        </div>
    </div>
  );
}


export default Services;
