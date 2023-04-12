import React from 'react';
import './NavBar.css';
import logo from '../../../Img/minilogo.png'
import calendar from '../../../Img/Calendar.png'
import registred from '../../../Img/registred.png'
import settings from '../../../Img/settings.png'
import exit from '../../../Img/exit.png'
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="vertical-nav-bar">
      <Link to="/administration">
        <img className='imageStart' src={logo} alt="Imagen 1" />
      </Link>
      <div className="center-images">
        <div className='center'>            
        <Link to="/administration/events">
          <img className='imageCenter'  src={calendar} alt="Imagen 3" />
        </Link>
        <Link to="/administration/registred">
          <img className='imageCenter' src={registred} alt="Imagen 4" />
        </Link>
        <Link to="/administration/settings">
          <img className='imageCenter' src={settings} alt="Imagen 5" />
        </Link>
        </div>
      </div>
      <Link to="/">
        <img className='imageEnd' src={exit} alt="Imagen 2" />
      </Link>
    </div>
  );
}

export default NavBar;
