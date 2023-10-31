const socket = io();
function emitirCadastrarUsuario(dados) {
    socket.emit("cadastrar_usuario",dados);
}
socket.on("cadastro_sucesso", () => alert("Cadastro realizado com sucesso!!"));
socket.on("cadastro_erro", () => alert("Erro no Cadastro"));
socket.on("usuario_ja_existe", () => alert("Usuario ja existe!!"));

export { emitirCadastrarUsuario }