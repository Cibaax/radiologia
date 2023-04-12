import React from 'react';
import * as XLSX from 'xlsx';
import './apiData.css';

function ApiData() {
  const [data, setData] = React.useState([]);
  
  const [filter, setFilter] = React.useState('');

  React.useEffect(() => {
    fetch('https://semillero-timeline-default-rtdb.firebaseio.com/registred.json')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  const downloadExcel = () => {
    const workbook = XLSX.utils.book_new();
    const sheet = XLSX.utils.json_to_sheet(Object.values(data));
    XLSX.utils.book_append_sheet(workbook, sheet, "Datos de la API");
    XLSX.writeFile(workbook, "datos.xlsx");
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  }
  return (
    <div>
      <div className="filter-section">
        <span>Filtrar por cargo:</span>
        <select value={filter} onChange={handleFilterChange}>
          <option value="">Mostrar todos</option>
          <option value="ponentes">Ponentes</option>
          <option value="asistentes">Asistentes</option>
          <option value="conferencistas">Conferencistas</option>
          <option value="jurados">Jurados</option>
        </select>
      </div>
      <table className="data-table">
        <thead>
          <tr>
            <th>Nombre</th>            
            <th>Correo electrónico</th>
            <th>Universidad</th>
            <th>Cargo</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(data).map(([key, value]) => (
            (filter === '' || value.role === filter) && (
              <tr key={key}>
                <td>{value.name}</td>              
                <td>{value.email}</td>
                <td>{value.university}</td>
                <td>{value.role}</td>
              </tr>
            )
          ))}
        </tbody>
      </table>
      <button className="download-button" onClick={downloadExcel}>Descargar datos en Excel</button>
    </div>
  );
}

export default ApiData;