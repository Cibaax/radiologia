import React, { useState } from 'react';

function Cuadro() {
  const [posicion, setPosicion] = useState({ x: 0, y: 0 });

  const handleDragStart = (e) => {
    // Guardamos la posición inicial del cursor
    const { clientX, clientY } = e;
    setPosicion({ x: clientX, y: clientY });
  };

  const handleDrag = (e) => {
    // Calculamos la nueva posición del elemento en función de la diferencia de posición del cursor
    const { clientX, clientY } = e;
    const deltaX = clientX - posicion.x;
    const deltaY = clientY - posicion.y;
    setPosicion({ x: posicion.x + deltaX, y: posicion.y + deltaY });
  };

  const handleDragEnd = (e) => {
    // Actualizamos la posición final del elemento
    const { clientX, clientY } = e;
    setPosicion({ x: clientX, y: clientY });
  };

  return (
    <div
      style={{ position: 'absolute', left: posicion.x, top: posicion.y }}
      draggable={true}  // Configuramos la propiedad draggable en true
      onDragStart={handleDragStart} // Manejamos el evento onDragStart
      onDrag={handleDrag} // Manejamos el evento onDrag
      onDragEnd={handleDragEnd} // Manejamos el evento onDragEnd
    >
      <h2>Arrastra este cuadro</h2>
    </div>
  );
}

export default Cuadro;
