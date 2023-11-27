const express = require("express");
const cors = require("cors");


const agregarUsuario = require('./router/usuarioRouter')
const login = require('./router/loginRouter')
const verMedicamentos = require('./router/medicamentosRouter')
const crearMedicamentos = require('./router/medicamentosRouter')
const verReceta = require('./router/recetaRouter')
const crearReceta = require('./router/recetaRouter')
const verVias = require('./router/viasRouter');
const verMedida = require('./router/unidadMedidaRouter');
const verNoche = require('./router/nocheRouter');
const verMorning = require('./router/morningRouter');
const verTarde = require('./router/tardeRouter');
const verMediodia = require('./router/mediodiaRouter');
const verNecesario = require('./router/necesarioRouter');



const app = express();
app.use(express.json());
app.use(cors());

app.use("/agregarUsuario", agregarUsuario);
app.use("/login", login);
app.use("/verMedicamentos", verMedicamentos);
app.use("/crearMedicamentos", crearMedicamentos);
app.use("/verReceta", verReceta);
app.use("/crearReceta", crearReceta);
app.use("/verVias", verVias);
app.use("/verMedida", verMedida);
app.use("/verNoche", verNoche);
app.use("/verMorning", verMorning);
app.use("/verMediodia", verMediodia);
app.use("/verTarde", verTarde);
app.use("/verNecesario",verNecesario)


app.listen(4001, () => {
  console.log("Escuchando en el puerto 4001...");
});
