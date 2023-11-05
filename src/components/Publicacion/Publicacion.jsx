import React from "react";
import "./Publicacion.css";
import Like from "../../img/Like.PNG";
import comentarios from "../../img/comentarios.PNG";
import Compartir from "../../img/Compartir.PNG";
import Guardar from "../../img/Guardar.PNG";

const Publicacion = () => {
  return (
    <>
      <div className="profile-card">
        <div className="profile-header">
          <img
            src="https://img.freepik.com/foto-gratis/mujer-joven-paseando-barrio_23-2149410284.jpg?w=360&t=st=1698879825~exp=1698880425~hmac=dba69df5e649146b290d9f79e05979b637973212cdb6e5d0e867a3ee8fcfc02a"
            alt="Profile"
            className="profile-image"
          />
          <div className="profile-info">
            <div className="profile-name">John Doe</div>
            <div className="profile-username">{"@johndoe"}</div>
          </div>
        </div>
        <div>
          <img
            src="https://img.freepik.com/foto-gratis/mujer-joven-paseando-barrio_23-2149410284.jpg?w=360&t=st=1698879825~exp=1698880425~hmac=dba69df5e649146b290d9f79e05979b637973212cdb6e5d0e867a3ee8fcfc02a"
            alt=""
            className="profile-img"
          />
        </div>

        <div className="profile-actions">
          <div className="profile-icons">
            <div className="icon">
              <img src={Like} alt="" />
              <h1>300K</h1>
            </div>
            <div className="icon">
              <img src={comentarios} alt="" />
              <h1>87K</h1>
            </div>
            <div className="icon">
              <img src={Compartir} alt="" />
              <h1>10K</h1>
            </div>
          </div>
          <div className="profile-icons">
            <div className="">
              <img src={Guardar} alt="" className="icon-Guardar" />
            </div>
          </div>
        </div>
        <div className="profile-description">
          <strong className="description-name">John Doe</strong>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          pellentesque id erat at blandit. Donec ullamcorper turpis vitae dolor
          lacinia mollis. Donec at augue eget ipsum porttitor interdum.
        </div>
      </div>
    </>
  );
};

export default Publicacion;
