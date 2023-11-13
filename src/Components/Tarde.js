import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import './celdas.css';
import { WiSunset } from 'react-icons/wi';

function Tarde() {
  return (
    <div>
      <Table borderless key={1} className='table-spacing table-spacing-tarde'>
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
            <td rowSpan={4}>
              Tarde
              <br />
              <WiSunset size={40} color="red" />
            </td>
            <td style={{ borderRadius: '0%', margin: "0 0.2rem" }}>Paracetamol</td>
            <td>1 pastilla</td>
            <td>cada 8 horas</td>
            <td>2 dias</td>
            <td>no apto para embarazadas</td>
            <td>2:00 pm</td>
            <td>listo</td>
          </tr>
          <tr>
            <td>Mew</td>
            <td>1 pawees gdgrg rgfvgdt erg </td>
            <td>cada 8 horas</td>
            <td>2 dias</td>
            <td>no apto para embarazadas</td>
            <td>2:00 pm</td>
            <td>listo</td>
          </tr>
          <tr>
            <td>Lackadaisy</td>
            <td>1 pawees gdgrg rgfvgdt erg </td>
            <td>cada 8 horas</td>
            <td>2 dias</td>
            <td>no apto para embarazadas</td>
            <td>2:00 pm</td>
            <td>listo</td>
          </tr>
          <tr>
            <td>Lackadaisy</td>
            <td>1 pawees gdgrg rgfvgdt erg </td>
            <td>cada 8 horas</td>
            <td>2 dias</td>
            <td></td>
            <td>2:00 pm</td>
            <td>listo</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Tarde;
