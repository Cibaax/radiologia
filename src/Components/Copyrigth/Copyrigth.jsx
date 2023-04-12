import React from 'react'
import './Copyrigth.css'
import { Link } from 'react-router-dom'

function Copyrigth() {
  return (
    <div className="containerCopyrigth">
      <div className="lineCopyrigth"></div>
      <div className="textCopyrigth">© 2023 Copyrigth</div>
      <Link to='/administration' className='point'><p>.</p></Link>
    </div>
  )
}

export default Copyrigth