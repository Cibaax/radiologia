import React from 'react'
import './Footer.css'
import facebook from '../../Img/Facebook.png'
import whatsapp from '../../Img/Whatsapp.png'
import logo from '../../Img/Logo.png'
import email from '../../Img/Email.png'
import logoUniversidad from '../../Img/LogoUniversidad.png'


function Footer() {
  return (
    <div className="containerFooter">
      <div className="element1">
        <img src={logoUniversidad} alt="Imagen 1" />
        <p>Universidad Cesmag</p>
      </div>
      <div className="element2">
        <img src={facebook} alt="Imagen 2" />
        <p>@semillero</p>
      </div>
      <div className="element3">
        <img src={whatsapp} alt="Imagen 3" />
        <p>+57 325 568 7514</p>
      </div>
      <div className="element4">
        <img src={email} alt="Imagen 4" />
         <p>semillero@email.com</p>
      </div>
      <div className="element5">
        <img src={logo} alt="Imagen 5" />
        <p>Radiodiagnostíco y Radioterapia</p>
      </div>
    </div>
  );
}

export default Footer