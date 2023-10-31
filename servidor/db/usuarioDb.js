import criaHashESalSenha from "../utils/criaHashSenha.js";
import {  usuariosColecao } from "./dbConnect.js";
function cadastrarUsuario({nome,senha}) {
    const { hashSenha, salSenha } = criaHashESalSenha(senha);

  return usuariosColecao.insertOne({ nome, hashSenha, salSenha });
}
function BuscarUsuario(nome) {
    return usuariosColecao.findOne({nome})
}
export {
    cadastrarUsuario,
    BuscarUsuario
  };