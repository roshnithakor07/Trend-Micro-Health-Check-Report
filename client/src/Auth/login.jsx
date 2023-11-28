import React, { useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Button from "@mui/material/Button";
import { green } from "@mui/material/colors";
const save = green[900]

function Login() {
   
    // React States
    const [errorMessages, setErrorMessages] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [authenticated, setAuthenticated] = useState(false);
    const navigate = useNavigate();



    const errors = {
        email: "Invalid email",
        password: "Invalid password"
    };

    useEffect(() => {
        checkAuthenticationStatus();
    }, []);

    

    const token = localStorage.getItem('token');
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `JWT ${token}`,
    };

    

    const checkAuthenticationStatus = async () => {
        try {
            const response = await axios.post('http://localhost:5000/auth/loginRequired', {}, { headers });
            if (response.status === 200) {
                setAuthenticated(true);
                navigate('/login');
            }
        } catch (error) {
            setAuthenticated(false);
            localStorage.removeItem('token'); 
            navigate('/login');         }
    };


    // Successful login
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/auth/login', { email, password });
            if (response.status === 200) {
                const token = response.data.token;
                console.log(token)
                localStorage.setItem('token', token);
                navigate('/');
            } else {
                setErrorMessages({ name: "email", message: errors.email });
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                setErrorMessages({ name: "password", message: "Login failed. Please check your credentials." });
            } else {
                console.error('Error: ', error);
                setErrorMessages({ name: "password", message: 'An error occurred. Please try again later.' });
            }
        }
    };

    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    // JSX code for login form
    const renderForm = (
        <div className="form">
            {renderErrorMessage("password")}

            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Email</label>
                    <input type="email" name="email" onChange={(e) => { setEmail(e.target.value) }} required />
                </div>
                <div className="input-container">
                    <label>Password</label>
                    <input type="password" name="password" onChange={(e) => { setPassword(e.target.value) }} required />
                </div>
                <div className="button-container">
                    <input type="submit" value="Login" />
                </div>
            </form>
        </div>
    );

    const handleLogout = async () => {
        localStorage.removeItem('token');
        window.location.reload();
        
    }

    if (authenticated) {
        return <div className="authenticated">Authenticated! You are already logged in.
           
            <Button
              variant="contained"
              style={{ backgroundColor: save }}
              onClick={() => handleLogout()}>
             logout
            </Button>
        </div>;
    }

    return (
        <div className="app">
            <div className="login-form">
                <div className="title">Sign In</div>
                {renderForm}
            </div>
        </div>
    );
}

export default Login;
