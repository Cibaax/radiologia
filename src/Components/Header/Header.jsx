import React from 'react'
import './Header.css'
import headerImg from '../../Img/Header.png'
import logo from '../../Img/Logo.png'
const handleButtonClick = () => {
  // Aquí puedes agregar la lógica para redirigir a otra página
  console.log("Botón presionado");
}
function Header() {
  return (
    <div className="containerHeader">
      <div className="text-containerHeader">
        <div className="logo-containerHeader">
          <img src={logo} alt="Logo" />
        </div>
        <h1>Semilleros de Investigación Radiodiagnostíco y Radioterapia</h1>
        <p>El encuentro de semilleros permite indagar y fortalecer la cultura investigativa; el evento permite profundizar temas relacionados a imágenes diagnósticas y Radioterapia, contribuyendo al progreso continuo de la medicina junto con sus ramas.</p>
      <button onClick={handleButtonClick}>Mas Información</button>
      </div>
      <div className="image-containerHeader">
        <img src={headerImg} alt="Img rigth"/>
      </div>
    </div>
  );
};

export default Header