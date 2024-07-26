import React from 'react';
import './css/Componente4.css';

const Componente4 = ({ objAlum, actualizarAlumno }) => {
  return (
    <div className='componente4'>
        <h2>Componente4</h2>
        <div className="card">
      <h2>Información del Alumno</h2>
      <p><strong>Nombre:</strong> {objAlum.nombre}</p>
      <p><strong>Dirección:</strong> {objAlum.dirección}</p>
      <p><strong>Ciudad:</strong> {objAlum.ciudad}</p>
      <button onClick={actualizarAlumno}>Actualizar Información</button>
    </div>
    </div>
  );
};

export default Componente4;
