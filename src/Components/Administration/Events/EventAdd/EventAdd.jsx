import React, { useState } from 'react';
import axios from 'axios';
import './EventAdd.css'; // Importamos los estilos

function EventAdd() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [message, setMessage] = useState('');

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dic",];
  const days = [...Array(new Date(2023, month, 0).getDate()).keys()].map(day => day + 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newData = {
      title: title,
      description: description,
      day: day,
      month: `${months[month - 1]}`,
    }
    await axios.post(
      "https://semillero-timeline-default-rtdb.firebaseio.com/allEvents.json",
      newData
    );
      setMessage('Evento agregado Correctamente');
      setTitle('');
      setDescription('');
      setDay('');
      setMonth('');
    }

  return (
    <div className="events-container">
      <form onSubmit={handleSubmit}> 
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className="formulario-input"
          required
        />
        <textarea
          placeholder="Descripción"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          className="formulario-textarea"
          required
        />  
        <div className='date'>
          <select value={month} onChange={(event) => setMonth(event.target.value)} className="formulario-select" required>
            <option value="">Mes</option>{months.map((mes, index) => (<option key={index} value={index + 1}>{mes}</option>))}
          </select>
          <select value={day} onChange={(event) => setDay(event.target.value)} className="formulario-select" required>
            <option value="">Día</option>{days.map((day, index) => (<option key={index} value={day}>{day}</option>))}
          </select>
        </div>
        <button type="submit">Crear Evento</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default EventAdd;
