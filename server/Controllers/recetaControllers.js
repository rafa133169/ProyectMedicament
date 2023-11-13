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

  connection.query(
    `INSERT INTO Receta (usuario_id,medicamento_id,via_id,medida_id,dosis,dias,frecuencia_administracion) VALUES (?,?,?,?,?,?,?)`,
    [usuario,medicamento,via,unidad,cantidad,dias,intervalo],
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
    `SELECT 
    usuario.*,
    medicamentos.*,
    viasAdministracion.*,
    unidadMedida.*,
    Receta.dosis,
    Receta.dias,
    Receta.frecuencia_administracion,
    Receta.comentarios
FROM 
    Receta
JOIN 
    usuario ON Receta.usuario_id = usuario.id_usuario
JOIN 
    medicamentos ON Receta.medicamento_id = medicamentos.id_medicamento
JOIN 
    viasAdministracion ON Receta.via_id = viasAdministracion.id_via
JOIN 
    unidadMedida ON Receta.medida_id = unidadMedida.id_medida
WHERE Receta.id_recta = ?;`,
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
