import Table from 'react-bootstrap/Table';
import './manana.css';

function Tarde() {
  return (
    <div>
    <Table borderless key={1} >
      <thead>
        <tr>
          <th></th>
          <th>Medicamentos</th>
          <th>Dosis</th>
          <th>Frecuencia</th>
          <th>Duracion</th>
          <th>Comentarios</th>
          <th>Siguiente Dosis</th>
          <th>Seleccionar</th>
        
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{backgroundColor: "rgb(137, 94, 201)"}}>Tarde</td>
          <td style={{backgroundColor: "red",borderRadius: '10%',margin: "0 0.2rem"}}>Paracetamol</td>
          <td>1 pastilla</td>
          <td>cada 8 horas</td>
          <td>2 dias</td>
          <td>no apto para embarazadas</td>
          <td>2:00 pm</td>
          <td>listo</td>
        </tr>
        
      </tbody>
      <tbody>
        <tr>
          <td>Tard efffr erfs r</td>
          <td>Paracetamowefgwdfgdfwefgwel</td>
          <td>1 pawees gdgrg rgfvgdt erg </td>
          <td>cada 8 horas</td>
          <td>2 dias</td>
          <td>no apto para embarazadas</td>
          <td>2:00 pm</td>
          <td>listo</td>
        </tr>
        
      </tbody>
    </Table>
    <h1>holaaaa</h1>
    </div>
  );
}

export default Tarde;
