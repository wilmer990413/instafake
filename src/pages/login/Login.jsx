import React from 'react';
import logo from '../../../assets/logo.png';
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
        ¿No tienes cuenta? <u>Únete</u>
      </div>
      </div>
      
    </div>
  );
};

export default Login;
