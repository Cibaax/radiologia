import React from 'react';
import * as XLSX from 'xlsx';

function ApiData() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch('https://semillero-radiologia-default-rtdb.firebaseio.com/registered.json')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  const downloadExcel = () => {
    const workbook = XLSX.utils.book_new();
    const sheet = XLSX.utils.json_to_sheet(Object.values(data));
    XLSX.utils.book_append_sheet(workbook, sheet, "Datos de la API");
    XLSX.writeFile(workbook, "datos.xlsx");
  }

  return (
    <div>
      <table>
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
            <tr key={key}>
              <td>{value.name}</td>              
              <td>{value.email}</td>
              <td>{value.university}</td>
              <td>{value.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={downloadExcel}>Descargar datos en Excel</button>
    </div>
  );
}

export default ApiData;
