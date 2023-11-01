
import { emitirCadastrarUsuario } from "./socket-front-cadastro.js";

const form = document.getElementById("form-cadastro");

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const nome = form["input-usuario"].value;
    const senha = form["input-senha"].value;

    if(nome == null && senha == null){
        alert('falto cadastrar algum campo')
    }

    emitirCadastrarUsuario({ nome, senha })

})
