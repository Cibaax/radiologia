import React, {useEffect, useState} from 'react'
import './Roles.css'
import { Link } from 'react-router-dom';


function Roles() {
  const [datos, setDatos] = useState({});

  useEffect(() => {
    fetch('https://semillero-timeline-default-rtdb.firebaseio.com/data/0.json')
      .then(response => response.json())
      .then(data => setDatos(data))
      .catch(error => console.error(error));
  }, []);
  return (
    <div className='containerRoles'>
      <div className='boxRoles'>
        <img src={datos.imageEvaluadores} alt="" />
        <h2>Evaluadores</h2>
        <p>{datos.textEvaluadores}</p>
        <Link className='Link' to={datos.urlForm}><button className='buttonRoles ev'>Formato de Evaluación</button></Link>
      </div>
      <div className='boxRoles'>
        <img src={datos.imageAsistentes} alt="" />
        <h2>Asistentes</h2>
        <p>{datos.textAsistentes}</p>
      </div>
      <div className='boxRoles'>
        <img src={datos.imagePonentes} alt="" />
        <h2>Ponentes</h2>
        <p>{datos.textPonentes}</p>
        <Link className='Link' to={datos.urlForm2}><button className='buttonRoles pon'>Subir Resumen</button></Link>
      </div>
      <div className='boxRoles'>
        <img src={datos.imageConferencistas} alt="" />
        <h2>Conferencistas</h2>
        <p>{datos.textConferencistas}</p>
      </div>
    </div>
  )
}

export default Roles