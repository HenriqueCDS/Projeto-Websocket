import { atualizarTextoEditor,alertarRedirecionar } from "./documento.js";

const socket = io();

function emitirTextoEditor(dados) {
    socket.emit("text_editor",dados) 
}
function selecionarDocumento (nome) {
    socket.emit("selecionar_documento",nome, (texto)=>{
        atualizarTextoEditor(texto);
    });
}
function emitirExcluirDocumento(nome) {
    socket.emit("excluir-documento",nome);
}

socket.on("texto_documento",(texto) =>{
    atualizarTextoEditor(texto);
})

socket.on("excluir-documento-sucesso",(nome) =>{
    alertarRedirecionar(nome);
})

export { emitirTextoEditor,selecionarDocumento,emitirExcluirDocumento }