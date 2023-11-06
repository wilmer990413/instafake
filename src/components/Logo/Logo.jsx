import React from "react";
import logo from "../../img/LOGO.PNG";
import Like from "../../img/Like.PNG";
import comentarios from "../../img/comentarios.PNG";
import "./logo.css";

function Logo() {
  return (
    <>
      <div className="headerLogo">
        <div className="leftLogo">
          <img src={logo} alt="" className="logoImg" />
        </div>
        <div className="rightLogo">
          <img src={Like} alt="" className="right-like" />

          <img src={comentarios} alt="" className="right-comentarios" />
        </div>
      </div>
    </>
  );
}

export default Logo;
