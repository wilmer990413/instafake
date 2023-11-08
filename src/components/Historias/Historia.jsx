import React from "react";
import "./Hisoria.css";
import Add from "../../img/Add.PNG";

function Historia() {
  return (
    <>
      <div className="history">
        <div className="Profile-history">
          <div>
            <img
              src="https://img.freepik.com/foto-gratis/encantadora-joven-morena-expresando-emociones-positivas-sesion-fotos-terraplen_197531-6218.jpg?w=740&t=st=1698895938~exp=1698896538~hmac=d868c20006509ffb3533fabb7ab28f8cb5cf671d4b5dd9bf850fb7890a55a9d9"
              alt="Profile"
              className="image"
            ></img>
            <button>
              <img src={Add} alt="" className="buttonImg" />
            </button>
          </div>

          <div className="info-name">
            <div className="profile-name">John Doe</div>
          </div>
        </div>
        <div className="Profile-history">
          <img
            src="https://img.freepik.com/foto-gratis/hora-hacerse-selfie_1098-19366.jpg?w=740&t=st=1698895070~exp=1698895670~hmac=23dd5b00b026c50805dec6963d79f6dd0c0b2c6b5522a04c78b73d8f1a45e744"
            alt="Profile"
            className="image"
          />
          <div className="info-name">
            <div className="profile-name">Valentina</div>
          </div>
        </div>
        <div className="Profile-history">
          <img
            src="https://img.freepik.com/foto-gratis/fotografo-exitoso-positivo-disfrutando-sesion-fotos_1262-19012.jpg?w=740&t=st=1698895099~exp=1698895699~hmac=eb952cd25c65ddf194e1971b25ea4f17ed003ce4837a8e0808c4b23db96c6349"
            alt="Profile"
            className="image"
          />
          <div className="info-name">
            <div className="profile-name">Rosa</div>
          </div>
        </div>
        <div className="Profile-history">
          <img
            src="https://img.freepik.com/foto-gratis/chica-alegre-sueter-cachemira-rie-telon-fondo-sakura-floreciente-retrato-mujer-capucha-amarilla-ciudad-primavera_197531-17886.jpg?t=st=1698895067~exp=1698895667~hmac=f6012c739b389223834cb55b680527166cb23b7ea02ec45dbb800335b29f7ce1"
            alt="Profile"
            className="image"
          />
          <div className="info-name">
            <div className="profile-name">JMartina.</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Historia;
