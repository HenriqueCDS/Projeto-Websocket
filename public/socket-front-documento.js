import { atualizarTextoEditor } from "./documento.js";

const socket = io();

function emitirTextoEditor(dados) {
    socket.emit("text_editor",dados) 
}
function selecionarDocumento (nome) {
    socket.emit("selecionar_documento",nome, (texto)=>{
        atualizarTextoEditor(texto);
    });
}
socket.on("texto_documento",(texto) =>{
    atualizarTextoEditor(texto);
})



export { emitirTextoEditor,selecionarDocumento }