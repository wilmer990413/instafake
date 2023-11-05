import React from "react";
import Header from "../../components/header/Header";
import Logo from "../../components/Logo/Logo";
import Historia from "../../components/Historias/Historia";
import Publicacion from "../../components/Publicacion/Publicacion";
import Footer from "../../components/footer/Footer";
import './AppPost.css';

function PostDetail() {
  return (
    <div className="App">
      <div className="post">
        <div className="image">
          <img src="../../../src/assets/post1.png" alt="Publicación" />
        </div>
        <div className="icons">
          <img className="fasfa-arrow-left" src='../../../src/assets/atras.png'/>
          <img className="fasfa-ellipsis-h" src='../../../src/assets/3puntos.png'/>
        </div>
        <div className="rectangle">
          <img src="../../../src/assets/Rectangle.png" alt="Publicación" />
          <div className="content">
            <img src="../../../src/assets/perfil3.png" alt="Perfil" className='perfil3' />
            <span className='nomperfil'>Jennie Ken</span>
            <div className="likes">
              <img src="../../../src/assets/corazon.png" alt="Corazón" />
              <span className='span1'>108K</span>
            </div>
            <div className="comments">
              <img src="../../../src/assets/comentario.png" alt="Comentario" />
              <span className='span1'>54K</span>
            </div>
            <div className="share">
              <img src="../../../src/assets/compartir.png" alt="Compartir" />
              <span className='span1'>2K</span>
            </div>
          </div>
        </div>

        <div className="caption">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Imperdiet gravida tortor in habitant pellentesque a quisque. 
            Nisl diam, amet eu est libero dignissim donec nec. 
            Fames bibendum porta phasellus neque. Integer et lectus amet, 
            vitae facilisis laoreet feugiat pellentesque accumsan. 
            Turpis eget laoreet turpis urna tincidunt nisl, integer nisl. 
            Id nec tortor vel, dui, lectus. Donec consequat dolor cursus 
            sed pellentesque etiam ipsum, id quam. Tincidunt eu duis 
            ullamcorper posuere augue. Arcu senectus elit, semper diam porta. 
            Platea tempus augue ante pellentesque dictum sed vitae. 
            Auctor dui ac bibendum lacus.</p>
        </div>
        <div className="comentario">
          <img src="../../../src/assets/profile2.png" alt="Comentario" className='img'/>
          <div className="content1">
            <input placeholder="Write comment as username...." />
            <img src="../S../../src/assets/flechacom.png" alt="Comentario" className='imgflecha'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetail;
