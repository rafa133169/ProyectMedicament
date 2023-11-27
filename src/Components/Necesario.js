import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import "./celdas.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCapsules } from "@fortawesome/free-solid-svg-icons";
import Axios from "axios";
import Button from "react-bootstrap/Button";

function Necesario() {
  const id_usuario = window.location.href.split("/")[4];
  const [necesarioMedicamento, setNecesarioMedicamento] = useState([]);

  useEffect(() => {
    async function fetchMorning() {
      try {
        const response = await Axios.get(
          `http://localhost:4001/verNecesario/${id_usuario}`
        );
        if (Array.isArray(response.data)) {
          setNecesarioMedicamento(response.data);
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

  const handleClickTomarCualquiera = async (elemento) => {
    try {
      await Axios.put(`http://localhost:4001/verNecesario/${id_usuario}`, {
        id_usuario: id_usuario,
        id_receta: elemento.id_recta,
      });

      alert("Medicamento ingerido correctamente");
      window.location.href = `/tabla/${id_usuario}`;
    } catch (error) {
      console.error("Error al ingerir el medicamento:", error);
      // Manejar el error según tus necesidades
    }
  };

  return (
    <div>
      <Table borderless key={1} className="table-spacing table-spacing-nec">
        <thead>
          <tr>
            <th></th>
            <th>Medicamentos</th>
            <th>Dosis</th>

            <th>Comentarios</th>

            <th>Seleccionar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowSpan={100}>
              Solo cuando <br></br>
              sea necesario
              <br />
              <FontAwesomeIcon icon={faCapsules} size="2x" color="grey" />
            </td>
          </tr>
          {necesarioMedicamento.map((medic) => (
            <tr>
              <td style={{ borderRadius: "0%", margin: "0 0.2rem" }}>
                {medic.nombre_medicamento}
              </td>
              <td>{medic.dosis}</td>

              <td>{medic.comentarios}</td>
              <td>
                <Button
                  variant="outline-secondary"
                  onClick={() => handleClickTomarCualquiera(medic)}
                >
                  Tomar
                </Button>{""}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Necesario;
