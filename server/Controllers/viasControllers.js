const { json } = require("express");
const connection = require("../database");

function verVias(request, response) {
    connection.query(`SELECT * FROM viasAdministracion`, (error, results) => {
      if (error) {
        response.status(500).json({ error: "Error al obtener medicamentos" });
      } else {
        response.status(200).json(results);
      }
    });
  }

  module.exports = {
    verVias,
    
  };
  