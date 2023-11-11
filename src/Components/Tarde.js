import Table from 'react-bootstrap/Table';
import './manana.css';

function Tarde() {
  return (
    <Table borderless className="fila-con-cuadrados" key={1}>
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
        <tr className='fila-con-cuadrados'>
          <td>Tarde</td>
          <td>Paracetamol</td>
          <td>1 pastilla</td>
          <td>cada 8 horas</td>
          <td>2 dias</td>
          <td>no apto para embarazadas</td>
          <td>2:00 pm</td>
          <td>listo</td>
        </tr>
        
      </tbody>
      <tbody>
        <tr className='fila-con-cuadrados'>
          <td>Tardesdsrdtfwretrdhtfwretytfh</td>
          <td>Paracetamowefgwdfgdfwefgwel</td>
          <td>1 paweesfgdfwdfesgrdwrefwdesfdgrfstilla</td>
          <td>cada 8 horas</td>
          <td>2 dias</td>
          <td>no apto para embarazadas</td>
          <td>2:00 pm</td>
          <td>listo</td>
        </tr>
        
      </tbody>
    </Table>
  );
}

export default Tarde;
