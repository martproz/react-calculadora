import React from 'react';
import '../hojas-de-estilo/BotonClear.css';

const BotonClear = (props) => (
  <div className='boton-clear' 
  onClick={props.manejarClear}>
    {/* Si el componente es fijo, podriamos escribir abajo Clear sólo, que está en Apps.js */}
    {props.children} 
  </div>
);

export default BotonClear;