
import {React, useState, useEffect} from 'react';
import logo from '../../../public/logo.png';
import Swal from 'sweetalert2';
import { Link, useNavigate } from "react-router-dom";
import './Login.scss'; 
import { FindUserByEmail } from '../../servicios/api.js';
import { useAuth } from '../../data/userContext.jsx';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { autenticado, login } = useAuth();
  const navigate = useNavigate();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log('Email:', email);
      console.log('Password:', password);
      let user  = await FindUserByEmail(email);
      console.log(user);
      if(user.length === 0){
        throw new Error('El email ingresado no existe!');
      }else if (user[0].password !== password){
        throw new Error('La contraseña ingresada es incorrecta!');
      }
      navigate('/');
      login();
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.message,
      });
    }
  };
  useEffect(()=>{
    if(autenticado===true){
      navigate('/');
    }
  },[]);
  return (
    <div className="login-container background-image">
      <img src={logo} alt="Findy" className="logo"/>
      <form className="login-box" onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} />
        <label>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} />
        <button type="submit">Login</button>
        <div className="unete-text">
          ¿No tienes cuenta? <Link to="/register"><u>Únete</u></Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
