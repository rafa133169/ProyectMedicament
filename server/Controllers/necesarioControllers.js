const { json } = require("express");
const connection = require("../database");

function verNecesario(request, response) {
  const usuario = request.params.id_usuario;
  connection.query(
    `SELECT 
      usuario.*,
      medicamentos.*,
      viasAdministracion.*,
      unidadMedida.*,
      Receta.id_recta,
      Receta.dosis,
      Receta.dias,
      Receta.frecuencia_administracion,
      Receta.comentarios,
      Receta.proximaHora

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
  WHERE Receta.usuario_id = ? AND Receta.estatus=1;`,
    [usuario],
    (error, results) => {
      if (error) {
        console.error("Error al obtener los datos:", error);
        response.status(500).json({ error: "Error" });
      } else {
        const flatResults = results;

        response.status(200).json(flatResults);
      }
    }
  );
}

function cambiarEstatus(request, response) {
  class Usuario {
    constructor(id_usuario,id_receta) {
      this.id_usuario = id_usuario;
      this.id_receta = id_receta;
    }
  }

  const usuario = new Usuario(request.body.id_usuario,request.body.id_receta);
 
  // Validación de datos

  connection.query(
    `UPDATE Receta
        SET estatus = 0
        WHERE usuario_id = ? AND id_recta = ?;`,
    [usuario.id_usuario,usuario.id_receta],
    (error, result) => {
      if (error) {
        console.error("Error al Actualizar estatus:", error);
        response.status(500).json({ error: "Error interno del servidor" });
      } else {
        response
          .status(200)
          .json({ mensaje: "Estatus actualizado correctamente" });
      }
    }
  );
}

module.exports = {
  verNecesario,
  cambiarEstatus,
};
