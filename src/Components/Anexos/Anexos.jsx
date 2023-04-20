import React from 'react'
import PDFViewer from '../PDFViewer/PDFViewer';
import './Anexos.css'
function Anexos() {
    const pdfUrls = [
        'https://firebasestorage.googleapis.com/v0/b/semillero-timeline.appspot.com/o/Anexo%201.pdf?alt=media&token=06bd7006-0fd2-466a-a82e-484b7b33a4a7',
        'https://firebasestorage.googleapis.com/v0/b/semillero-timeline.appspot.com/o/Anexo%202.pdf?alt=media&token=66c579af-93b3-427a-bb50-1d2520623f15',
        'https://firebasestorage.googleapis.com/v0/b/semillero-timeline.appspot.com/o/Anexo%203.pdf?alt=media&token=66c579af-93b3-427a-bb50-1d2520623f15',
        'https://firebasestorage.googleapis.com/v0/b/semillero-timeline.appspot.com/o/Evaluaci%C3%B3n%20Modalidad%20P%C3%B3ster.pdf?alt=media&token=29e79ba3-3eda-43fe-8fac-4d042c5c3ff0',
        'https://firebasestorage.googleapis.com/v0/b/semillero-timeline.appspot.com/o/Evaluaci%C3%B3n%20Proyecto%20Terminado.pdf?alt=media&token=47075e9f-6586-4315-adf1-f2d813dc5171',
        'https://firebasestorage.googleapis.com/v0/b/semillero-timeline.appspot.com/o/Evaluaci%C3%B3n%20Proyecto%20en%20Curso.pdf?alt=media&token=143d3eca-dcd8-47d5-a8e4-4a336a86c5ea',
        'https://firebasestorage.googleapis.com/v0/b/semillero-timeline.appspot.com/o/T%C3%A9rminos%20de%20Referencia%20III%20EISITEC.pdf?alt=media&token=a394d5eb-4a9c-44e3-8be6-b4d1c502e471',


      ];
  return (
    <div className='anexosContainer'>
        <PDFViewer pdfUrls={pdfUrls}/>
    </div>
  )
}

export default Anexos

