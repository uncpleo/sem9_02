import React, { useState } from 'react';
import Componente2 from './Componente2';
import './css/Componente1.css';

const Componente1 = () => {
  const [objAlum, setObjAlum] = useState({ nombre: "Belito", dirección: "Av. Alameda Forestal", ciudad: "El Tambo" });
  const actualizarAlumno = () => {
    setObjAlum({ nombre: "Rosario", dirección: "Av. 28 de Julio", ciudad: "Chupaca" });
  };
  return (
    <div className='componente1'>
      <div className='componente1-sobrante'>
      <h2>Componente1</h2>
      <h2>Información del Alumno</h2>
      <p><strong>Nombre:</strong> {objAlum.nombre}</p>
      <p><strong>Dirección:</strong> {objAlum.dirección}</p>
      <p><strong>Ciudad:</strong> {objAlum.ciudad}</p>
      </div>
      <Componente2 objAlum={objAlum} actualizarAlumno={actualizarAlumno} />
    </div>
  );
}

export default Componente1;
