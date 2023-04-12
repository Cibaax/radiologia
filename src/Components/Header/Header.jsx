import React, { useRef, useState, useEffect } from 'react';
import './Header.css'
import logo from '../../Img/Logo.png'
import Information from '../Information/Information';
import Timeline from '../Tiemline/Timeline';


function Header() {
  const [datos, setDatos] = useState({});

  useEffect(() => {
    fetch('https://semillero-timeline-default-rtdb.firebaseio.com/data/0.json')
      .then(response => response.json())
      .then(data => setDatos(data))
      .catch(error => console.error(error));
  }, []);
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
        <p>{datos.textSemillero}</p>
        <button onClick={manejarClick}>Mas Información</button>
      </div>
      <div className="image-containerHeader">
        <img src={datos.imageSemillero} alt="Img rigth"/>
      </div>
    </div>
        <Timeline/>
        <Information refElemento={refElemento}/>
    </>
  );
};

export default Header