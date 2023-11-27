const { json } = require("express");
const connection = require("../database");

function verRecetasTarde(request, response) {
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
  WHERE Receta.usuario_id = ? AND Receta.estatus=4;`,
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

  module.exports = {
    verRecetasTarde,
    
  };