import { emitirTextoEditor, selecionarDocumento } from "./socket-front-documento.js";

const parametros = new URLSearchParams(window.location.search);
const nomeDocumento = parametros.get("nome");

const textEditor = document.getElementById("editor-texto");

const tituloDocumento = document.getElementById("titulo-documento");
tituloDocumento.textContent = nomeDocumento || "Documento sem titulo";

selecionarDocumento(nomeDocumento);

textEditor.addEventListener("keyup", () => {
    emitirTextoEditor({
        texto: textEditor.value, nomeDocumento
    });
});
function atualizarTextoEditor(texto) {
    textEditor.value = texto;
}
export { atualizarTextoEditor };
