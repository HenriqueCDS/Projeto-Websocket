import { inserirLinkDocumento,removerLinkDocumento } from "./index.js";

const socket = io();

socket.emit("obter_documentos",(documentos) =>{
        documentos.forEach(documento => {
            inserirLinkDocumento(documento.nome)
        });
})

function AdicionarDocumento(nome) {
    socket.emit("inserir-documento",nome)
}

socket.on("inserir-documento-interface",(nome) =>{
    inserirLinkDocumento(nome);
})

socket.on("documento-existente",(nomeDocumento)=>{
    alert(`O Documento ${nomeDocumento} ja existe!`);
})
socket.on("excluir-documento-sucesso",(nome) =>{
    removerLinkDocumento(nome);
})

export { AdicionarDocumento }
