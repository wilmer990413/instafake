import React from "react";
import Header from "../../components/header/Header";
import Logo from "../../components/Logo/Logo";
import Historia from "../../components/Historias/Historia";
import Publicacion from "../../components/Publicacion/Publicacion";
import Footer from "../../components/footer/Footer";
import "./postDetail.css";

const PostDetail = () => {
  return (
    <div className="contenedor">
      <Header />
      <Logo />
      <Historia />
      <Publicacion />
      <Footer />
    </div>
  );
};

export default PostDetail;
