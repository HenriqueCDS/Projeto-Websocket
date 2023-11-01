
import "dotenv/config";

import registrarEventosCadastro from "./registrarEventos/Cadastro.js";
import registrarEventosDocumentos from "./registrarEventos/Documentos.js";
import registrarEventosLogin from "./registrarEventos/Login.js";
import registrarEventosInicio from "./registrarEventos/Inicio.js";

 
import io from "./servidor.js";
import autorizarUsuario from "./middlewares/autorizarUsuario.js";

const nspUsuarios = io.of("/usuarios")

nspUsuarios.use(autorizarUsuario)

nspUsuarios.on("connection", (socket) => {
  registrarEventosInicio(socket,nspUsuarios);
  registrarEventosDocumentos(socket,nspUsuarios);

});

io.of("/").on("connection", (socket) => {
  registrarEventosCadastro(socket,io); 
  registrarEventosLogin(socket,io);
});
