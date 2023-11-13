const { json } = require("express");
const connection = require("../database");

function verMedicamentos(request, response) {
  connection.query(`SELECT * FROM medicamentos`, (error, results) => {
    if (error) {
      response.status(500).json({ error: "Error al obtener medicamentos" });
    } else {
      response.status(200).json(results);
    }
  });
}

function crearMedicamento(request, response) {
  // const medicamento = request.body.medicamento;
  const medicamento = request.body.nombre_medicamento;


  connection.query(
    `INSERT INTO medicamentos(nombre_medicamento) VALUES
    (?)`,
    [medicamento],
    (error, results) => {
      if (error) {
        console.error("Error al insertar el medicamento:", error);
        response.status(500).json({ error: "Error al crear el medicamento" });
      } else {
        response.status(200).json(results);
      }
    }
  );
}

module.exports = {
  verMedicamentos,
  crearMedicamento,
};
