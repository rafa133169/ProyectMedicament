import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import "./celdas.css";
import { WiDaySunny } from "react-icons/wi";
import Axios from "axios";
import Button from "react-bootstrap/Button";

function Manana() {
  const id_usuario = window.location.href.split("/")[4];
  const [morningMedicamento, setMorningMedicamento] = useState([]);

  useEffect(() => {
    async function fetchMorning() {
      try {
        const response = await Axios.get(
          `http://localhost:4001/verMorning/${id_usuario}`
        );
        if (Array.isArray(response.data)) {
          setMorningMedicamento(response.data);
        } else {
          console.error(
            "La respuesta de la API no es un array:",
            response.data
          );
        }
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    }
    fetchMorning();
  }, []);

  const handleClickTomar = async (elemento) => {
    
      const horaIncremento = parseInt(elemento.frecuencia_administracion, 10);
      const horaActual = new Date().getHours();
      let proximaToma = horaActual + horaIncremento;
      if (proximaToma >= 24) {
        proximaToma -= 24;
      }
      const horaProximaToma = new Date();
      horaProximaToma.setHours(proximaToma);
    
      // Formatea la hora para MySQL (HH:mm:ss)
      const horaFormateada = horaProximaToma.toISOString().slice(11, 19);
      await Axios.put(`http://localhost:4001/verMorning/${id_usuario}`, {
        nuevaHora: horaFormateada,  
      id_usuario: id_usuario,
        id_receta: elemento.id_recta,
        
      });

      alert("Medicamento ingerido correctamente");
      window.location.href = `/tabla/${id_usuario}`;
    
  };

  return (
    <div>
      <Table borderless key={1} className="table-spacing table-spacing-manana">
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
            <td rowSpan={60}>
              Mañana
              <br />
              <WiDaySunny size={40} color="blue" />
            </td>
          </tr>

          {morningMedicamento.map((medic) => {
            // Convierte la hora programada a un objeto Date

            // Verifica si la hora actual es mayor que la hora programada
            const horaActual = new Date();
            const horas = horaActual.getHours().toString().padStart(2, "0"); // Asegura que siempre tenga dos dígitos
            const minutos = horaActual.getMinutes().toString().padStart(2, "0");
            const segundos = horaActual
              .getSeconds()
              .toString()
              .padStart(2, "0");

            const horaFormateada = `${horas}:${minutos}:${segundos}`;

            const mostrarBoton = horaFormateada > medic.proximaHora;

            return (
              <tr key={medic.id}>
                <td style={{ borderRadius: "0%", margin: "0 0.2rem" }}>
                  {medic.nombre_medicamento}
                </td>
                <td>{medic.dosis}</td>
                <td>cada {medic.frecuencia_administracion} horas</td>
                <td>Durante {medic.dias}</td>
                <td>{medic.comentarios}</td>
                <td>{medic.proximaHora}</td>
                <td>

                  {mostrarBoton && (
                    <Button
                      variant="outline-primary"
                      onClick={() => handleClickTomar(medic)}
                    >
                      Tomar
                    </Button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Manana;
