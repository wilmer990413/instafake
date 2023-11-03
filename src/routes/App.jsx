import {React, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Menu from "../components/Menu"
import Feed from "../pages/Feed"
import Profile from "../pages/profile/Profile"
import PostDetail from "../pages/PostDetail"
import Login from "../pages/login/Login"
import Register from "../pages/register/Register"
import { useAuth } from '../data/userContext';

function App() {
  const { autenticado } = useAuth();
  const rutaActual = window.location.pathname;
  useEffect(()=>{
    if(rutaActual==='/' && autenticado===false){
      window.location.href = "/login";
    }
  },[]);
  return (
    <BrowserRouter>
        <Routes element={<Menu/>}>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            {
              autenticado === true?
              <>
                <Route  path="/" element={<Feed />}></Route >
                <Route  path="/post/:id" element={<PostDetail />}></Route >
                <Route  path="/profile" element={<Profile />}></Route >
              </>
              : 
              <>
              </>
            }
        </Routes>
    </BrowserRouter>
  )
}

export default App
