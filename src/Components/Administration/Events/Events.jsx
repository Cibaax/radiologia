import React, { useState } from 'react';
import './Events.css';
import EventAdd from './EventAdd/EventAdd';
import EventShowed from './EventsShowed/EventsShowed';
import AllEvents from './AllEvents/AllEvents';
import NavBar from '../NavBar/NavBar'

function Events() {
    const [showEvents, setShowEvents] = useState(false);

    const handleButtonClick = () => {
      setShowEvents(!showEvents);
    };

  return (
    <div className='Events'>
      <NavBar/>
      <div className='tituloEvents'>
        <h1>Manejo de Eventos</h1>
        <h2>Agregar Evento  <button className='add' onClick={handleButtonClick}> + </button></h2>
      {showEvents && <EventAdd />} 
    </div>
    <div className='eventos2'>
    <AllEvents/>
    <EventShowed/>
    </div>      
    </div>
  );
}

export default Events;
