import React from "react";
import { Table} from "react-bootstrap";
import './celdas.css'

const Manana = () => {
  const data = [
    {
      medication: "Paracetamol",
      dosage: "1000 mg",
      hour: "12:00",
    },
    {
      medication: "Ibuprofeno",
      dosage: "600 mg",
      hour: "14:00",
    },
    {
      medication: "Aspirina",
      dosage: "500 mg",
      hour: "16:00",
    },
  ];

  return (
    <div className="fila-con-cuadrados">
    <Table borderless>
      <thead>
        <tr className="cuadrados">
          <th>Medicamentos</th>
          <th>Dosis</th>
          <th>Hora</th>
        </tr>
      </thead>
      <tbody>
        
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.medication}</td>
            <td>{row.dosage}</td>
            <td>{row.hour}</td> 
            
           

          </tr>
        ))}
        
      </tbody>
    </Table>
    </div>
  );
};

export default Manana;