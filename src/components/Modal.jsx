import React from 'react'
import './menu.scss';


const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="modal">
      <div className="modal_content">
        <button onClick={onClose} className="modal_content-close">X</button>
        <form action="" className="modal_content-form">
          <div className="modal_content-form_container">
        <h2>Crear una publicación</h2>
        <button>Compartir</button>
        </div>
        <div className="modal_content-form_archivo">
          <label className="modal_content-form_archivo-file">
          Selecciona una imagen o video<input type="file" className='inputFile'/>
          </label>
          <input type="text" placeholder='Escribe pie de foto-video'className='inputText' />
        </div>
          <button>Agregar ubicación</button>
          <button>Etiquetar personas</button>
          <button>Agregar música</button>
          
        </form>
      </div>
    </div>
  )
}

export default Modal