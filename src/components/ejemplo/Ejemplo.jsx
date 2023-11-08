import React from "react";

import { useData } from "../../data/context"; // Importa useData desde tu DataContext

const Ejemplo = () => {
  const data = useData(); // Obtén los datos del contexto

  // Aquí puedes acceder a los datos que necesitas
  const id_user = data.publicaciones[0].id_user;

  const descripcion = data.publicaciones[0].descripcion;

  return (
    <>
      <div className="profile-card">
        {/* ... Tu código existente ... */}
        <div className="profile-description">
          <strong className="description-name">{id_user}</strong>
          <h1>{id_user}</h1>
          {descripcion}
        </div>
      </div>
    </>
  );
};

export default Ejemplo;
