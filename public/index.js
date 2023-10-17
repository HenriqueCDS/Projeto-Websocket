

import { AdicionarDocumento } from './socket-front-index.js';

const listaDocumentos = document.getElementById("lista-documentos");
const formDocumento = document.getElementById("form-adiciona-documento");
const inputDocumento = document.getElementById("input-documento");

function inserirLinkDocumento(nomeDocumento) {
    listaDocumentos.innerHTML += `
    <a
      href="documento.html?nome=${nomeDocumento}"
      class="list-group-item list-group-item-action"
      id="documento-${nomeDocumento}"
    >
      ${nomeDocumento}
    </a>
  `;
   
}
formDocumento.addEventListener("submit", (evento) => {
    evento.preventDefault();
    AdicionarDocumento(inputDocumento.value);
})

function  removerLinkDocumento (nome) {
    const documento = document.getElementById(`documento-${nome}`);
    
    listaDocumentos.removeChild(documento);
}

export { inserirLinkDocumento, removerLinkDocumento }