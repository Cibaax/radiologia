import React, { useState, useEffect } from "react";
import axios from "axios";
import './EventsShowed.css'

const EventsShowed = () => {
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get("https://semillero-timeline-default-rtdb.firebaseio.com/events.json")
      .then((response) => setEvents(Object.values(response.data)))
      .catch((error) => console.log(error));
  }, []);

  const handleMove = (index, offset) => {
    const newIndex = index + offset;
    if (newIndex < 0 || newIndex >= events.length) return;
    const newEvents = [...events];
    [newEvents[index], newEvents[newIndex]] = [newEvents[newIndex], newEvents[index]];
    setLoading(true);
    fetch("https://semillero-timeline-default-rtdb.firebaseio.com/events.json", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEvents),
    })
    .then((response) => response.json())
    .then(() => setLoading(false));
    setEvents(newEvents);
  };

  const handleMoveUp = (index) => handleMove(index, -1);
  
  const handleMoveDown = (index) => handleMove(index, 1);

  const handleDelete = (index) => {
    const newEvents = [...events];
    const deletedEvent = newEvents.splice(index, 1)[0]; // Elimina y guarda el evento eliminado
    setLoading(true);
    
    axios.post("https://semillero-timeline-default-rtdb.firebaseio.com/allEvents.json", deletedEvent)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    
    fetch("https://semillero-timeline-default-rtdb.firebaseio.com/events.json", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEvents),
    })
      .then((response) => response.json())
      .then(() => setLoading(false));
      
     setEvents(newEvents);
  };

  return (
    <div className="eventsShowed">
      {loading && <div>Cargando...</div>}

      {events.map((event, index) => (
        <div className=" individualEventsShowed" key={Math.random()}>
          <div>
            <h2>{event.title}<span>{event.day} <span>{event.month}</span></span></h2>
            <p>{event.description}</p>  
          </div>        
          <div className="buttonsMoveEvents">
            <button onClick={() => handleMoveUp(index)} disabled={index === 0}> ↑ </button>
            <button onClick={() => handleDelete(index)}>◄</button>
            <button onClick={() => handleMoveDown(index)} disabled={index === events.length - 1}> ↓ </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventsShowed