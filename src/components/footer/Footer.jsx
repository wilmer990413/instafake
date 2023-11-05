import React from "react";
import "./footer.css";
import footer from "../../img/footer.PNG";
import Add from "../../img/Add.PNG";
import { Link } from "react-router-dom";

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
    </>
  );
}

export default Footer;
