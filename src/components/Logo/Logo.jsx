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
          <div class="svg-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="26"
              viewBox="0 0 30 26"
              fill="none"
            >
              <path
                d="M2.65002 13.2665C-0.283353 9.35532 0.69444 3.48856 5.5834 1.53298C10.4724 -0.422605 13.4057 3.48856 14.3835 5.44415C15.3613 3.48856 19.2725 -0.422605 24.1615 1.53298C29.0504 3.48856 29.0504 9.35532 26.117 13.2665C23.1837 17.1777 14.3835 25 14.3835 25C14.3835 25 5.5834 17.1777 2.65002 13.2665Z"
                stroke="#2F2F2F"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <img src={comentarios} alt="" className="right-comentarios" />
        </div>
      </div>
    </>
  );
}

export default Logo;
