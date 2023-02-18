import React from 'react'
import './Roles.css'
import assistants from '../../Img/Assistants.png'
import jurors from '../../Img/Jurors.png'
import orators from '../../Img/Orators.png'
import speakers from '../../Img/Speakers.png'


function Roles() {
  return (
    <div className='containerRoles'>
      <div className='boxRoles'>
        <img src={jurors} alt="" />
        <h2>Evaluadores</h2>
        <p>Son profesores seleccionados mediante invitación directa de los coordinadores de semilleros de la universidad para participar, quienes serán escogidos por su cualificación y experiencia profesional.</p>
      </div>
      <div className='boxRoles'>
        <img src={assistants} alt="" />
        <h2>Asistentes</h2>
        <p>Son los estudiantes, profesionales o visitantes que tienen el objetivo de ser partícipes del evento, siendo certificados por ello.</p>
      </div>
      <div className='boxRoles'>
        <img src={orators} alt="" />
        <h2>Ponentes</h2>
        <p>Son los estudiantes de Radiología los cuales expondrán los temas de investigación que están llevando a cabo.</p>          
      </div>
      <div className='boxRoles'>
        <img src={speakers} alt="" />
        <h2>Conferencistas</h2>
        <n></n>
        <p>Son profesores e investigadores invitados destacados a nivel latinoamericano por sus contribuciones a la educación, investigación, innovación y organización de eventos académicos con impacto internacional</p>
      </div>
    </div>
  )
}

export default Roles