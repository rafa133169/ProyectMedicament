const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const connection = mysql.createConnection({
  host: "mysql-ricoline2.alwaysdata.net",
  user: "ricoline2",
  password: "1234561331",
  database: "ricoline2_medicamentproject",
});

connection.connect(function (error) {
  if (error) {
    console.log("Error al conectar la bd");
  } else {
    console.log("conexion realizada exitosamente");
  }
});

module.exports = connection;
