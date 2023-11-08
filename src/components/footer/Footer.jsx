import React from "react";
import "./footer.css";
import footer from "../../img/footer.PNG";
import Add from "../../img/Add.PNG";
import Perfil from "../../img/Perfil.PNG";
import { Link } from "react-router-dom";
import Icon from "../icons/Icon";

function Footer() {
  return (
    <>
      <div class="center">
        <div class="circle">
          <Link>
            <img src={Add} alt="" />
          </Link>
        </div>
      </div>

      <img src={footer} alt="" className="img" height="" />

      <div className="iconos">
        <div className="iconos-left">
          <div>
            <Icon name="home" />
          </div>
          <div>
            <Icon name="search" />
          </div>
        </div>
        <div className="iconos-right">
          <div>
            <Icon name="notification" />
          </div>
          <div>
            <img src={Perfil} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
