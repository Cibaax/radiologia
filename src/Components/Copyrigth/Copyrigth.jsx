import React from 'react'
import './Copyrigth.css'
import { Link } from 'react-router-dom'

function Copyrigth() {
  return (
    <div className="containerCopyrigth">
      <Link to='/administration' className='point'>.</Link>
      <div className="lineCopyrigth"></div>
      <div className="textCopyrigth">© 2023 Copyrigth</div>
    </div>
  )
}

export default Copyrigth