const { json } = require("express");
const connection = require("../database");

function crearReceta(request, response) {
  const usuario = request.body.usuario
  const medicamento = request.body.medicamento
  const via = request.body.via
  const unidad = request.body.unidad
  const cantidad = request.body.cantidad
  const dias = request.body.dias
  const intervalo = request.body.intervalo
  const comentarios = request.body.comentarios
  const estatus = request.body.estatus
  const proxima = request.body.proximaToma


  connection.query(
    `INSERT INTO Receta (usuario_id,medicamento_id,via_id,medida_id,dosis,dias,frecuencia_administracion,comentarios,estatus,proximaHora) VALUES (?,?,?,?,?,?,?,?,?,?)`,
    [usuario,medicamento,via,unidad,cantidad,dias,intervalo,comentarios,estatus,proxima],
    (error, results) => {
      if (error) {
        console.error("Error al ejecutar el procedimiento almacenado:", error);
        response.status(500).json({ error: "Error al crear receta" });
      } else {
        response.status(200).json(results);
      }
    }
  );
}

function verRecetas(request, response) {
  const usuario = request.params.id_usuario;
  connection.query(
    `SELECT * FROM Receta WHERE Receta.usuario_id = ?;`,
    [usuario],
    (error, results) => {
      if (error) {
        console.error("Error al obtener los datos:", error);
        response.status(500).json({ error: "Error" });
      } else {
        const flatResults = results[0];

        response.status(200).json(flatResults);
      }
    }
  );
}

module.exports = {
  crearReceta,
  verRecetas,
};
