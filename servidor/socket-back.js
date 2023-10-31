
import "dotenv/config";

import registrarEventosCadastro from "./registrarEventos/Cadastro.js";
import registrarEventosDocumentos from "./registrarEventos/Documentos.js";
import registrarEventosLogin from "./registrarEventos/Login.js";
import registrarEventosInicio from "./registrarEventos/Inicio.js";

 
import io from "./servidor.js";
 
io.use((socket,next) => {
  next();

})

io.on("connection", (socket) => {
  registrarEventosCadastro(socket,io); 
  registrarEventosLogin(socket,io);
  registrarEventosInicio(socket,io);
  registrarEventosDocumentos(socket,io);

});
