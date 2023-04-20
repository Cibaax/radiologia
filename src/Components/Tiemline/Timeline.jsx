import React, { useState, useEffect } from 'react';
import './Timeline.css'
import axios from 'axios';
import calendar from '../../Img/Calendar.png'

function Timeline() {
  const [data, setData] = useState([]);  
  const [showAllEvents, setShowAllEvents] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get('https://semillero-timeline-default-rtdb.firebaseio.com/events.json');
      const datosArray = Object.values(response.data);
      setData(datosArray);      
    };
    getData();
  }, []);
  const onlyThree = data.slice(0, 3);

  const handleShowAllEvents = () => {
    setShowAllEvents(true); // actualiza el estado para mostrar todos los eventos
  }

  const handleCloseAllEvents = () => {
    setShowAllEvents(false); // actualiza el estado para ocultar todos los eventos
  }
  
  const getFontSize = (text) => {
    const titleLength = text.length;
    if (titleLength > 20) {
      return "14px"; // ajusta el tamaño de letra a 18px para títulos con más de 20 caracteres
    } else {
      return "21px"; // ajusta el tamaño de letra a 24px para títulos con menos de 20 caracteres
    }
  }
   const getFontSize2 = (text) => {
    const titleLength = text.length;
    if (titleLength > 20) {
      return "18px"; // ajusta el tamaño de letra a 18px para títulos con más de 20 caracteres
    } else {
      return "21px"; // ajusta el tamaño de letra a 24px para títulos con menos de 20 caracteres
    }
  }

  return (
    <div className="containerTimeline">
      <div className="box-arrow" onClick={handleShowAllEvents}>
        <img src={calendar} alt="imgCalendar" />
        <h2>Proximós Eventos</h2>
        <div className="arrow"></div>
      </div>
      {showAllEvents && (
        <div className="all-events-container">
          <h1>Proximós Eventos</h1>
          <button className="close-button"onClick={handleCloseAllEvents}>&times;</button>
          {data.map((event) => (
            <div className='boxesTimeline2' key={event.title}>
              <h2 style={{ fontSize: getFontSize2(event.title) }}>{event.title}</h2>
              <div className='containerInfo2'>
                <div className='containerDate'>
                  <h3>{event.day}</h3>
                  <h3>{event.month}</h3>
                </div>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      {onlyThree.map((data, index) => (
        <div className='containerBoxTimeline' key={data.title}>
          <div className='boxTimeline' id={`box${index+1}`}>
            <div className='boxesTimeline'>
              <h2 style={{ fontSize: getFontSize(data.title) }}>{data.title}</h2>
              <div className='containerInfo'>
                <div className='containerDate'>
                  <h3>{data.day}</h3>
                  <h3>{data.month}</h3>
                </div>
                <p>{data.description}</p>
              </div>
            </div>
          </div>
          <div className='lineTimeline'></div>
        </div>
      ))}      
    </div> 
  )
}
    

export default Timeline
