import React from 'react';
import '../hojas-de-estilo/Boton.css';

function Boton(props) {

//definimos la función esOperador

const esOperador = valor => {
  return isNaN(valor) && (valor !== '.') && (valor !== '='); 
//si la const valor no es un número y si no es un punto y si tampoco es signo igual, entonces retornamos un valor
};

  return (
    <div
    // las comillas invertidas permiten crear Template Literals
    //si la función esOperador con el valor de props.children es true, operador. Si no, null.
    //trimEnd() al final de la línea de abajo elimina los espacios vacíos
    className={`boton-contenedor ${esOperador(props.children) ? 'operador' : null}`.trimEnd()} 
      onClick={() => props.manejarClic(props.children)}>
      {props.children}
    </div>
  );
}

export default Boton;