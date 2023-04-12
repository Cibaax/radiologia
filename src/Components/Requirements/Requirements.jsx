import React, {useState,useEffect} from 'react'
import './Requirements.css'
import Form from '../Form/Form'

function Requirements() {
  const [datos, setDatos] = useState({});

  useEffect(() => {
    fetch('https://semillero-timeline-default-rtdb.firebaseio.com/data/0.json')
      .then(response => response.json())
      .then(data => setDatos(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <>
    <div className='containerRequirements'>
      <div className='requirements'>
        <div className='text-Requirements'>
          <h1>Requerimientos:</h1>
          {datos.textRequerimientos && datos.textRequerimientos.split('/').map((req)=>(
            <li>{req}</li>
          ))}
        </div>
      </div>
      <div className='containerForm'>
        <Form/>
      </div>
    </div>       
    </>
  )
}

export default Requirements