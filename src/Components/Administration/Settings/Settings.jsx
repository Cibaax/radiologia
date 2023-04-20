import { useState, useEffect } from 'react';
import './Settings.css'
import Files from '../Files/Files';
function Settings() {
  const [data, setData] = useState([]);
  const [updateSuccess, setUpdateSuccess] = useState(false);

  useEffect(() => {
    fetch("https://semillero-timeline-default-rtdb.firebaseio.com/data.json")
      .then((response) => response.json())
      .then((data) => {
        const parsedData = Object.entries(data || {}).map(([id, values]) => ({ ...values, id }));
        setData(parsedData);
      })
      .catch((error) => console.log(error));
  }, []);

  function handleUpdate(event, item) {
    event.preventDefault();
    fetch(`https://semillero-timeline-default-rtdb.firebaseio.com/data/${item.id}.json`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        number: event.target.number.value,
        facebook: event.target.facebook.value,
        numberLink: event.target.numberLink.value,
        facebookLink: event.target.facebookLink.value,
        email: event.target.email.value,
        textSemillero: event.target.textSemillero.value,
        textEvento: event.target.textEvento.value,
        textEvaluadores: event.target.textEvaluadores.value,
        textAsistentes: event.target.textAsistentes.value,
        textPonentes: event.target.textPonentes.value,
        textConferencistas: event.target.textConferencistas.value,
        imageSemillero: event.target.imageSemillero.value,
        imageEvento: event.target.imageEvento.value,
        imageEvaluadores: event.target.imageEvaluadores.value,
        imageAsistentes: event.target.imageAsistentes.value,
        imagePonentes: event.target.imagePonentes.value,
        imageConferencistas: event.target.imageConferencistas.value,
        textRequerimientos: event.target.textRequerimientos.value,
        urlForm: event.target.urlForm.value,
        urlForm2: event.target.urlForm2.value,
      }),
    })
    .then((response) => {
      if (response.ok) {
        setUpdateSuccess(true);
      } else {
        setUpdateSuccess(false);
      }
    })
      .catch((error) => console.log(error));
  }

  return (
    <div className="my-component">
      <h1>Datos</h1>
      {data.map((item) => (
        <form key={item.id} className="item" onSubmit={(event) => handleUpdate(event, item)}>
          <label htmlFor="number">Number:</label>
          <input type="text" id="number" name="number" defaultValue={item.number} />
          <br />
          <label htmlFor="numberLink">Number Link:</label>
          <input type="text" id="numberLink" name="numberLink" defaultValue={item.numberLink} />
          <br />
          <label htmlFor="facebook">Facebook:</label>
          <input type="text" id="facebook" name="facebook" defaultValue={item.facebook} />
          <br />
          <label htmlFor="facebookLink">Facebook Link:</label>
          <input type="text" id="facebookLink" name="facebookLink" defaultValue={item.facebookLink} />
          <br />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" defaultValue={item.email} />
          <br />
          <label htmlFor="textSemillero">Descripción Semillero:</label>
          <textarea type="textSemillero" id='textSemillero' name='textSemillero' defaultValue={item.textSemillero}/>
          <br />
          <label htmlFor="imageSemillero">Url Imagen Semillero:</label>
          <input type="imageSemillero" id="imageSemillero" name="imageSemillero" defaultValue={item.imageSemillero} />
          <br />
          <label htmlFor="textEvento">Descripción Evento:</label>
          <textarea type="textEvento" id='textEvento' name='textEvento' defaultValue={item.textEvento}/>
          <br />
          <label htmlFor="imageEvento">Url Imagen Evento:</label>
          <input type="imageEvento" id="imageEvento" name="imageEvento" defaultValue={item.imageEvento} />
          <br />
          <label htmlFor="textEvaluadores">Descripción Evaluadores:</label>
          <textarea type="textEvaluadores" id='textEvaluadores' name='textEvaluadores' defaultValue={item.textEvaluadores}/>
          <br />
          <label htmlFor="imageEvaluadores">Url Imagen Evaluadores:</label>
          <input type="imageEvaluadores" id="imageEvaluadores" name="imageEvaluadores" defaultValue={item.imageEvaluadores} />
          <br />
          <label htmlFor="textAsistentes">Descripción Asistentes:</label>
          <textarea type="textAsistentes" id='textAsistentes' name='textAsistentes' defaultValue={item.textAsistentes}/>
          <br />
          <label htmlFor="imageAsistentes">Url Imagen Asistentes:</label>
          <input type="imageAsistentes" id="imageAsistentes" name="imageAsistentes" defaultValue={item.imageAsistentes} />
          <br />
          <label htmlFor="textPonentes">Descripción Ponentes:</label>
          <textarea type="textPonentes" id='textPonentes' name='textPonentes' defaultValue={item.textPonentes}/>
          <br />
          <label htmlFor="imagePonentes">Url Imagen Ponentes:</label>
          <input type="imagePonentes" id="imagePonentes" name="imagePonentes" defaultValue={item.imagePonentes} />
          <br />
          <label htmlFor="textConferencistas">Descripción Conferencistas:</label>
          <textarea type="textConferencistas" id='textConferencistas' name='textConferencistas' defaultValue={item.textConferencistas}/>
          <br />
          <label htmlFor="imageConferencistas">Url Imagen Conferencistas:</label>
          <input type="imageConferencistas" id="imageConferencistas" name="imageConferencistas" defaultValue={item.imageConferencistas} />
          <br />
          <label htmlFor="textRequerimientos">Requerimientos:</label>
          <textarea type="textRequerimientos" id="textRequerimientos" name="textRequerimientos" defaultValue={item.textRequerimientos} />
          <br />
          <label htmlFor="urlForm">Url Formulario Evaluadores:</label>
          <textarea type="urlForm" id="urlForm" name="urlForm" defaultValue={item.urlForm} />
          <br />
          <label htmlFor="urlForm2">Url Formulario Ponentes:</label>
          <textarea type="urlForm2" id="urlForm2" name="urlForm2" defaultValue={item.urlForm2} />
          <br />
          <button type="submit">Actualizar</button>
          {updateSuccess && <p className='true'>Los datos se actualizaron correctamente.</p>}
          {!updateSuccess && updateSuccess !== null && <p> </p>}
        </form>
      ))}
      <Files/>
      
    </div>
  );
}
export default Settings;
