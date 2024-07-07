import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';
import { NavLink } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const registerUrl = import.meta.env.VITE_REGISTER_URL;
const apiKey = import.meta.env.VITE_API_KEY;

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState(null);

    const submitHandler = event => {
        event.preventDefault();

        if (username.trim() === '' || email.trim() === '' || name.trim() === '' || password.trim() === '') {
            setMessage('All fields are required');
            return;
        }

        const requestConfig = {
            headers: {
                'x-api-key': apiKey,
                'Content-Type': 'application/json'
            }
        };

        const requestBody = {
            username: username,
            email: email,
            name: name,
            password: password
        };

        axios.post(registerUrl, requestBody, requestConfig)
            .then(response => {
                setMessage('Registration Successful');
            })
            .catch(error => {
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    setMessage(error.response.data.message);
                } else {
                    setMessage('Sorry... the backend server is down!! Please try again later');
                }
            });
    };

    return (
        <div className="register-container">
            <div className="registration-box">
                <form onSubmit={submitHandler}>
                    <h5>Register</h5>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={event => setName(event.target.value)} />
                    <label>Email:</label>
                    <input type="text" value={email} onChange={event => setEmail(event.target.value)} />
                    <label>Username:</label>
                    <input type="text" value={username} onChange={event => setUsername(event.target.value)} />
                    <label>Password:</label>
                    <div className="password-container">
                        <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                        />
                        <span onClick={() => setShowPassword(!showPassword)} className="password-toggle-icon">
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                    <div className="terms">
                        <input type="checkbox" required />
                        <span>
                            I agree to the <NavLink to="/terms-of-service">Terms of Service</NavLink> and <NavLink to="/privacy-policy">Privacy Policy</NavLink>
                        </span>
                    </div>
                    <input type="submit" value="Register" />
                </form>
                {message && <p className="message">{message}</p>}
                <p>Already have an account? <NavLink to="/login">Login</NavLink></p>
            </div>
            <div className="right-column">
                <h2>Placeholder Title</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum recusandae quae dicta accusantium asperiores, impedit cupiditate expedita quam blanditiis fugit similique provident rem hic incidunt illum. Pariatur odio repudiandae et dolorem atque sequi nisi officiis repellendus saepe, exercitationem, temporibus, iusto tempore labore blanditiis laudantium? Amet unde aspernatur cupiditate perferendis veritatis!</p>
            </div>
        </div>
    );
};

export default Register;
