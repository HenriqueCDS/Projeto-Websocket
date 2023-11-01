
import { BuscarUsuario } from "../db/usuarioDb.js";
import AutenticarUsuario from "../utils/AutenticarUsuario.js";
import gerarJWT from "../utils/gerarJWT.js";


function registrarEventosLogin(socket,io) {
    socket.on("autenticar_usuario", async ({nome, senha}) =>{
       
        const usuario = await BuscarUsuario(nome);
       
        if(usuario){
            const autenticado = AutenticarUsuario(senha,usuario)
            if(autenticado){
                const tokenJwt = gerarJWT({nomeUsuario:nome});
               
                socket.emit('autenticacao_sucesso',tokenJwt);
            }else{
                socket.emit('autenticacao_erro');
            }
        }else {
            socket.emit('usuario_nao_encontrado');
        }

       
    });
}
export default registrarEventosLogin;