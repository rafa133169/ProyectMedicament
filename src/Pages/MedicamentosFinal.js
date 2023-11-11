import Table from 'react-bootstrap/Table';
import '../Components/manana.css'

function Final() {
  return (
    <>
    <div>
    <Table borderless>
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
          <td className='cuadrado'>Tarde</td>
          <td className='cuadrado'>Paracetamol</td>
          <td className='cuadrado'>1 pastilla</td>
          <td className='cuadrado'>cada 8 horas</td>
          <td className='cuadrado'>2 dias</td>
          <td className='cuadrado'>no apto para embarazadas</td>
          <td className='cuadrado'>2:00 pm</td>
          <td className='cuadrado'>listo</td>
        </tr>
        
      </tbody>
      <tbody>
        <tr className='fila-con-cuadrados'>
          <td className='cuadrado'>Tardesdsrdtfwretrdhtfwretytfh</td>
          <td className='cuadrado'>Paracetamowefgwdfgdfwefgwel</td>
          <td className='cuadrado'>1 paweesfgdfwdfesgrdwrefwdesfdgrfstilla</td>
          <td className='cuadrado'>cada 8 horas</td>
          <td className='cuadrado'>2 dias</td>
          <td className='cuadrado'>no apto para embarazadas</td>
          <td className='cuadrado'>2:00 pm</td>
          <td className='cuadrado'>listo</td>
        </tr>
        
      </tbody>
    </Table>
    </div>
    </>
  );
}

export default Final; 