import { emitirTextoEditor, selecionarDocumento,emitirExcluirDocumento } from "./socket-front-documento.js";

const parametros = new URLSearchParams(window.location.search);
const nomeDocumento = parametros.get("nome");

const textEditor = document.getElementById("editor-texto");
const tituloDocumento = document.getElementById("titulo-documento");
const botaoExcluir = document.getElementById("excluir-documento");
tituloDocumento.textContent = nomeDocumento || "Documento sem titulo";

selecionarDocumento(nomeDocumento);

textEditor.addEventListener("keyup", () => {
    emitirTextoEditor({
        texto: textEditor.value, nomeDocumento
    });
});

botaoExcluir.addEventListener("click", ()=>{
    emitirExcluirDocumento(nomeDocumento);
})

function atualizarTextoEditor(texto) {
    textEditor.value = texto;
}
function alertarRedirecionar(nome) {
   if(nome === nomeDocumento){
    alert(`Documento ${nome} excluido`);
    window.location.href = "/";
   }
}
export { alertarRedirecionar,atualizarTextoEditor };
