const express = require("express");
const cors = require("cors");


const agregarUsuario = require('./router/usuarioRouter')
const login = require('./router/loginRouter')


const app = express();
app.use(express.json());
app.use(cors());

app.use("/agregarUsuario", agregarUsuario);
app.use("/login", login);


app.listen(4001, () => {
  console.log("servidor iniciando...");
});
