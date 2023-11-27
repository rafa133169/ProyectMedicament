const { json } = require("express");
const connection = require("../database");

function verMedida(request, response) {
    connection.query(`SELECT * FROM unidadMedida`, (error, results) => {
      if (error) {
        response.status(500).json({ error: "Error al obtener medicamentos" });
      } else {
        response.status(200).json(results);
      }
    });
  }

  module.exports = {
    verMedida,
    
  };
  