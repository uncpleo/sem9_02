import React from 'react'
import Componente3 from './Componente3';

const Componente2 = ({ objAlum, actualizarAlumno }) => {
  return (
    <div className='componente2'>
        <h2>Componente2</h2>
        <Componente3 objAlum={objAlum} actualizarAlumno={actualizarAlumno} />
    </div>
  )
}

export default Componente2;
