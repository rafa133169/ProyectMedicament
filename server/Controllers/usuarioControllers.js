const { json } = require("express");
const connection = require("../database");
// const bcrypt = require("bcrypt");

async function agregarUsuario(request, response) {
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

  // Validación de datos
  for (let key in usuario) {
    if (!usuario[key]) {
      response.status(400).json({ error: `Falta el campo ${key} del usuario` });
      return;
    }
  }

  try {
    // Hash de la contraseña
    // const hashedPassword = await bcrypt.hash(usuario.contrasena, 10);

    // Inserción en la base de datos
    connection.query(
      `INSERT INTO usuario (nombre, correo, contrasena) VALUES (?, ?, ?)`,
      [usuario.nombre_usuario, usuario.correo_electronico, usuario.contrasena],
      (error, result) => {
        if (error) {
          console.error("Error al agregar usuario:", error);
          response.status(500).json({ error: "Error interno del servidor" });
        } else {
          response.status(200).json({ mensaje: "Usuario agregado correctamente" });
        }
      }
    );
  } catch (error) {
    console.error("Error al agregar usuario:", error);
    response.status(500).json({ error: "Error interno del servidor" });
  }
}

module.exports = {
  agregarUsuario,
};
