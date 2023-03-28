import React, { useState } from 'react';
import './Events.css';
import EventAdd from './EventAdd/EventAdd';
import EventShowed from './EventsShowed/EventsShowed';
import AllEvents from './AllEvents/AllEvents';

function Events() {
    const [showEvents, setShowEvents] = useState(false);

    const handleButtonClick = () => {
      setShowEvents(!showEvents);
    };

  return (
    <div className='Events'>
      
      <div>
        <h1>Manejo de Eventos</h1>
        <button className='add' onClick={handleButtonClick}> + </button>
      {showEvents && <EventAdd />} 
    </div>
    <AllEvents/>
    <EventShowed/>
      
    </div>
  );
}

export default Events;
