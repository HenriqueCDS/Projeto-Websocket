import { BuscarUsuario, cadastrarUsuario } from "../db/usuarioDb.js";

function registrarEventosCadastro(socket,io) {
    socket.on("cadastrar_usuario", async(dados) =>{
       
        const usuario = await BuscarUsuario(dados.nome);
       
        if(usuario === null){
            const resultado = await cadastrarUsuario(dados);
            
            if(resultado.acknowledged){
                socket.emit("cadastro_sucesso");
            }else{
                socket.emit("cadastro_erro");
            }
        }else{
            socket.emit("usuario_ja_existe");
            console.log("Usuario ja existe");
        }
      

    });
    
}
export default registrarEventosCadastro;