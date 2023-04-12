import React, {useEffect, useState} from 'react'
import './Roles.css'


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