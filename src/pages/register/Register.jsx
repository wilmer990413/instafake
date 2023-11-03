import React from 'react';
import './Register.scss'; 
import logo from '../../../public/logo.png';
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  return (
    <div className="login-container background-image">
      <img src={logo} alt="Findy" className="logo"/>
      <div className="login-box">
        <label>Nombre:</label>
        <input type="text" />
        <label>Correo:</label>
        <input type="text" />
        <label>Contraseña:</label>
        <input type="password" />
        <label>Avatar:</label>
        <input type="text" />
        <label>Descripción:</label>
        <textarea></textarea>
        <button className="git a">Crear Cuenta</button>
        <div className="unete-text">
          ¿Ya tienes cuenta?<Link to="/login"><u>Inicia sesión</u></Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
