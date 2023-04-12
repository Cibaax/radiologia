import React,  {useEffect, useState} from 'react'
import './Footer.css'
import facebook from '../../Img/Facebook.png'
import whatsapp from '../../Img/Whatsapp.png'
import logoFooter from '../../Img/LogoFooter.png'
import email from '../../Img/Email.png'
import logoUniversidad from '../../Img/LogoUniversidadMariana.png'
import { Link } from 'react-router-dom'


function Footer() {
  const [datos, setDatos] = useState({});
  

  useEffect(() => {
    fetch('https://semillero-timeline-default-rtdb.firebaseio.com/data/0.json')
      .then(response => response.json())
      .then(data => setDatos(data))
      .catch(error => console.error(error));
  }, []);
  return (
    <div className="containerFooter">
      <a href='https://www.umariana.edu.co/index.html' className="element1">
        <img src={logoUniversidad} alt="Imagen 1" />
        
      </a>
      <Link to={datos.facebookLink} className="element2">
        <img src={facebook} alt="Imagen 2" />
        <p>{datos.facebook}</p>
      </Link>
      <a href={datos.numberLink} className="element3">
        <img src={whatsapp} alt="Imagen 3" />
        <p>{datos.number}</p>
      </a>
      <div className="element4">
        <img src={email} alt="Imagen 4" />
         <p>{datos.email}</p>
      </div>
      <a href='/' className="element5">
        <img src={logoFooter} alt="Imagen 5" />
      </a>
    </div>
  );
}

export default Footer