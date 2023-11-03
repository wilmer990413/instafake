
import React from 'react';
import logo from '../../../public/logo.png';
import { Link, useNavigate } from "react-router-dom";
import './Login.scss'; 

const Login = () => {
  return (
    <div className="login-container background-image">
      <img src={logo} alt="Findy" className="logo"/>
      <div className="login-box">
        <label>Email:</label>
        <input type="text" />
        <label>Password:</label>
        <input type="password" />
        <button>Login</button>
        <div className="unete-text">
        ¿No tienes cuenta? <Link to="/register"><u>Únete</u></Link>
      </div>
      </div>
      
    </div>
  );
};

export default Login;
