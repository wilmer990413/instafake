import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Modal from './Modal';
import './menu.scss';
// Aqui mismo pueden implementar un modal de agregar publicacion

const Menu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className='menu'>
      <button onClick={openModal} className='menu_button'><span>+</span></button>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
      <Outlet />
    </div>
  )
}

export default Menu