import React from 'react'
import './menu.scss';
import { fileUpLoad } from '../servicios/cloudinary';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const validationSchema = yup.object({

comentario: yup.string().required('El comentario es requerido'),
});

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

const onSubtmit = async (data) => {
  const fotoUrl = await fileUpLoad(data.image[0])
  const publicacion = {
    comentario: data.comentario,
    image: fotoUrl
  }
  console.log(publicacion)
}
  return (
    <div className="modal">
      <div className="modal_content">
        <button onClick={onClose} className="modal_content-close">X</button>
        <form onSubmit={handleSubmit(onSubtmit)} className="modal_content-form">
          <div className="modal_content-form_container">
        <h2>Crear una publicación</h2>
        <button type='submit'>Compartir</button>
        </div>
        <div className="modal_content-form_archivo">
          <label className="modal_content-form_archivo-file">
          Selecciona una imagen o video<input type="file" className='inputFile'{...register("image")}/>
          </label>
          <input type="text" placeholder='Escribe pie de foto-video'className='inputText' {...register("comentario")}/>
        </div>
          {/* <button>Agregar ubicación</button>
          <button>Etiquetar personas</button>
          <button>Agregar música</button> */}
          
        </form>
      </div>
    </div>
  )
}

export default Modal