import './App.css';
import freeCodeCampLogo from './imagenes/FreeCodeCamp_logo.png';

function App() {
  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img src={freeCodeCampLogo} //vinculado con import. Las llaves repiten el nombre que está en import
        className="freecodecamp-logo"
        alt="Logo de freeCodeCamp" />
      </div>
    </div>
  );
}

export default App;
