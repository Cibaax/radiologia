import React, { useState } from 'react';
import axios from 'axios';
import './Form.css'
const Form = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    university: '',
    role: '',
  });

  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!formData.email || !formData.name || !formData.university || !formData.role) {
    setError('Todos los campos son requeridos');
    return;
    }
  
    axios.get('https://semillero-timeline-default-rtdb.firebaseio.com/registred.json')
      .then((res) => {
        if (!res.data) {
          setError('Error al obtener los datos');
          return;
        }
  
        const emails = Object.values(res.data).map((data) => data.email);
        if (emails.includes(formData.email)) {
          setError('Este correo ya está registrado');
          return;
        }
  
        axios.post('https://semillero-timeline-default-rtdb.firebaseio.com/registred.json', formData)
          .then((res) => {
            setFormData({ email: '', name: '', university: '', role: '' });
            setError('Registrado correctamente');
          })
          .catch((err) => {
            setError('Error al registrar');
          });
      });
  };
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="form-input"
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        className="form-input"
        type="text"
        name="name"
        placeholder="Nombre"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        className="form-input"
        type="text"
        name="university"
        placeholder="Universidad"
        value={formData.university}
        onChange={handleChange}
        required
      />
      <select
        className="form-select"
        name="role"
        value={formData.role}
        onChange={handleChange}
        required
      >
        <option value="">Selecciona un cargo</option>
        <option value="jurados">Jurados</option>
        <option value="asistentes">Asistentes</option>
        <option value="ponentes">Ponentes</option>
        <option value="conferencistas">Conferencistas</option>
      </select>
      <button className="form-button" type="submit">
        Registrarse
      </button>
      {error && <p className={`form-message ${error === 'Registrado correctamente' ? 'form-message-success' : 'form-message-error'}`}>{error}</p>}
    </form>
  );
};

export default Form;
