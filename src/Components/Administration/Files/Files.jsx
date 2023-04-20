import React, { useState, useRef } from 'react'
import { uploadFile } from '../../../firebase'

function Files() {
  const [file, setFile] = useState(null)
  const [uploadMessage, setUploadMessage] = useState('')
  const fileInputRef = useRef(null)

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      await uploadFile(file, file.name)
      setUploadMessage('Archivos cargados exitosamente.')
      setFile(null)
      fileInputRef.current.value = null // Actualizar el valor de la etiqueta input
    } catch (error) {
      setUploadMessage('Seleccione un archivo')
    }
  }

  const messageStyle = {
    color: uploadMessage === 'Seleccione un archivo' ? 'red' : 'green',
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
        <label htmlFor="file" style={{ marginRight: '1rem' }}>Seleccionar archivo:</label>
        <input type="file" name="file" id="file" onChange={(e) => setFile(e.target.files[0])} style={{ marginRight: '1rem' }} ref={fileInputRef} />
        <button type="submit">Cargar</button>
      </form>
      {uploadMessage && <p style={messageStyle}>{uploadMessage}</p>}
    </div>
  )
}

export default Files
