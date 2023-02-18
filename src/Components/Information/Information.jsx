import React from 'react'
import './Information.css'
import InformationImg from '../../Img/Information.png'

function Information() {
  const handleButtonClick = () => {
    // Aquí puedes agregar la lógica para redirigir a otra página
    console.log("Botón presionado");
  }
  return (
    <div className="containerInformation">
      <div className="image-containerInformation">
        <img src={InformationImg} alt="Img Left"/>
      </div>
      <div className="text-containerInformation">
        <h1>Acerca del Evento</h1>
        <p>Nos complace en el presente año convocar a la realización del 4° simposio con el propósito de recoger la cosecha, evaluar lo que se tiene y perseverar en los logros, a fin de allanar la vía para enfrentar los retos que demanda la educación en estos tiempos de zozobra y de revisionismo histórico a cargo de fuerzas antidemocráticas y nacionalistas. De nuevo hay que reiterar la idea de la acogida como principio constitutivo de toda acción educativa, valga decir, de una “ética de la bienvenida”, que presidió en su momento las deliberaciones del simposio anterior.</p>
        <button onClick={handleButtonClick}>Inscripción al evento</button>
      </div>
    </div>
  );
};

export default Information