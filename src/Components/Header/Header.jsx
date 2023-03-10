import React, { useRef } from 'react';
import './Header.css'
import headerImg from '../../Img/Header.png'
import logo from '../../Img/Logo.png'
import Information from '../Information/Information';
import Timeline from '../Tiemline/Timeline';


function Header() {
  const refElemento = useRef(null);

  const manejarClick = () => {
    refElemento.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
    <div className="containerHeader" >
      <div className="text-containerHeader">
        <div className="logo-containerHeader">
          <img src={logo} id='123' alt="Logo" />
        </div>
        <h1>Semilleros de Investigación Radiodiagnostíco y Radioterapia</h1>
        <p>El encuentro de semilleros permite indagar y fortalecer la cultura investigativa; el evento permite profundizar temas relacionados a imágenes diagnósticas y Radioterapia, contribuyendo al progreso continuo de la medicina junto con sus ramas.</p>
        <button onClick={manejarClick}>Mas Información</button>
      </div>
      <div className="image-containerHeader">
        <img src={headerImg} alt="Img rigth"/>
      </div>
    </div>
        <Timeline/>
        <Information refElemento={refElemento}/>
    </>
  );
};

export default Header