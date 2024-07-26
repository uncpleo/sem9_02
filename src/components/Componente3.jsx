import React from 'react';
import Componente4 from './Componente4';

const Componente3 = ({ objAlum, actualizarAlumno }) => {
  return (
    <div className='componente3'>
        <h2>Componente3</h2>
        <Componente4 objAlum={objAlum} actualizarAlumno={actualizarAlumno} />
    </div>
  )
}

export default Componente3;
