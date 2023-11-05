import React from "react";

import Hora from "../../img/Hora.PNG";
import Battery from "../../img/Battery.PNG";
import Connection from "../../img/Connection.PNG";
import Signal from "../../img/Signal.PNG";

import "./header.css";

function Header() {
  return (
    <>
      <div className="header">
        <div className="left">
          <img src={Hora} alt="" />
        </div>
        <div className="right">
          <img src={Signal} alt="" />
          <img src={Connection} alt="" />
          <img src={Battery} alt="" />
        </div>
      </div>
    </>
  );
}

export default Header;
