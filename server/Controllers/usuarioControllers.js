const { json } = require("express");
const connection = require("../database");

function agregarUsuario(request, response) {
  class Usuario {
    constructor(
      nombre_usuario,
      correo_electronico,
      contrasena
    ) {
      this.nombre_usuario = nombre_usuario;
      this.correo_electronico = correo_electronico;
      this.contrasena = contrasena;
      
    }
  }

  const usuario = new Usuario(
    request.body.nombre_usuario,
    request.body.correo_electronico,
    request.body.contrasena
   
  );

  for (let key in usuario) {
    if (usuario[key] === null || usuario[key] === undefined) {
      response.status(400).json({ error: "Faltan datos del usuario" });
      return;
    }
  }

  connection.query(
    `INSERT INTO usuario (nombre,correo,contrasena) VALUES(?,?,?)`,
    [
      usuario.nombre_usuario,
      usuario.correo_electronico,
      usuario.contrasena,
    ],
    (error, result) => {
      if (error) {
        response.status(500).json({ error: "Error al agregar usuario" });
      } else {
        response.status(200).json({ mensaje: "Usuario agregado correctamente" });
      }
    }
  );
}

module.exports = {
    agregarUsuario,
  };
