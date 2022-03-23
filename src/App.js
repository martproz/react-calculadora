import './App.css';
import freeCodeCampLogo from './imagenes/FreeCodeCamp_logo.png';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react'; //hook
import { evaluate } from 'mathjs'; //esto es p/q signo igual pueda hacer la operación

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  };

  //función p/q signo igual no muestre el signo igual en pantalla
  const calcularResultado = () => {

    //agregamos un condicional p/q si hace click en igual no aparezca undefined
    if(input) {
      setInput(evaluate(input)); //usa el import de arriba, mathjs
    } else {
      alert("Por favor ingrese valores para realizar los cálculos.")
    }
  };

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img src={freeCodeCampLogo} //vinculado con import. Las llaves repiten el nombre que está en import
        className='freecodecamp-logo'
        alt='Logo de freeCodeCamp' />\
      </div>
        <div className='contenedor-calculadora'>
          {/* El prop input igual a estado/valor input. Se vincula con el componente Pantalla.js, input */}
          <Pantalla input={input}/>
          <div className='fila'>
            <Boton manejarClic={agregarInput}>1</Boton>
            <Boton manejarClic={agregarInput}>2</Boton>
            <Boton manejarClic={agregarInput}>3</Boton>
            <Boton manejarClic={agregarInput}>+</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClic={agregarInput}>4</Boton>
            <Boton manejarClic={agregarInput}>5</Boton>
            <Boton manejarClic={agregarInput}>6</Boton>
            <Boton manejarClic={agregarInput}>-</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClic={agregarInput}>7</Boton>
            <Boton manejarClic={agregarInput}>8</Boton>
            <Boton manejarClic={agregarInput}>9</Boton>
            <Boton manejarClic={agregarInput}>*</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClic={calcularResultado}>=</Boton>
            <Boton manejarClic={agregarInput}>0</Boton>
            <Boton manejarClic={agregarInput}>.</Boton>
            <Boton manejarClic={agregarInput}>/</Boton>
          </div>
          <div className='fila'>
            <BotonClear manejarClear={() => setInput('')}>
              Clear
            </BotonClear>
          </div>
      </div>
    </div>
  );
}

export default App;
