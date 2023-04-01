import React from 'react';
import './NavBar.css';
import logo from '../../../Img/minilogo.png'
import calendar from '../../../Img/Calendar.png'
import registred from '../../../Img/registred.png'
import settings from '../../../Img/settings.png'
import exit from '../../../Img/exit.png'

function NavBar() {
  return (
    <div className="vertical-nav-bar">
      <img className='imageStart' src={logo} alt="Imagen 1" />
      <div className="center-images">
        <div className='center'>            
        <a href="/administration/events">
          <img className='imageCenter'  src={calendar} alt="Imagen 3" />
        </a>
        <a href="/administration/registred">
          <img className='imageCenter' src={registred} alt="Imagen 4" />
        </a>
        <a href="/administration/settings">
          <img className='imageCenter' src={settings} alt="Imagen 5" />
        </a>
        </div>
      </div>
      <img className='imageEnd' src={exit} alt="Imagen 2" />
    </div>
  );
}

export default NavBar;
