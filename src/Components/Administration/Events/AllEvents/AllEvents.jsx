import React, { useState, useEffect } from "react";
import axios from "axios";
import './AllEvents.css'

function AllEvents() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      axios.get("https://semillero-timeline-default-rtdb.firebaseio.com/allEvents.json")
        .then((response) => setEvents(Object.values(response.data)))
        .catch((error) => console.log(error));
    }, []);
  


    const handleDelete = (index) => {
      const newEvents = [...events];
      const deletedEvent = newEvents.splice(index, 1)[0]; // Elimina y guarda el evento eliminado
      setLoading(true);
      
      axios.post("https://semillero-timeline-default-rtdb.firebaseio.com/events.json", deletedEvent)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
      
      fetch("https://semillero-timeline-default-rtdb.firebaseio.com/allEvents.json", {
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
    const handleSuprDelete = (index) => {
        const newEvents = [...events];
        const deletedEvent = newEvents.splice(index, 1)[0]; // Elimina y guarda el evento eliminado
        setLoading(true);
        
        axios.post("https://semillero-timeline-default-rtdb.firebaseio.com/TrashBin.json", deletedEvent)
          .then((response) => console.log(response))
          .catch((error) => console.log(error));
        
        fetch("https://semillero-timeline-default-rtdb.firebaseio.com/allEvents.json", {
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
              <button onClick={() => handleDelete(index)}>►</button>
              <button onClick={() => handleSuprDelete(index)}>delete</button>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
export default AllEvents