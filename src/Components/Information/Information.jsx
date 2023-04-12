import React, {useState, useEffect} from 'react'
import './Information.css'
import { Link } from 'react-router-dom';

function Information(props) {
  const [datos, setDatos] = useState({});

  useEffect(() => {
    fetch('https://semillero-timeline-default-rtdb.firebaseio.com/data/0.json')
      .then(response => response.json())
      .then(data => setDatos(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="containerInformation" ref={props.refElemento}>
      <div className="image-containerInformation">
        <img src={datos.imageEvento} alt="Img Left"/>
      </div>
      <div className="text-containerInformation">
        <h1 >Acerca del Evento</h1>
        <p>{datos.textEvento}</p>
        <Link to='/requirements'><button >Inscripción al evento</button></Link>
      </div>
    </div>
  );
};

export default Information