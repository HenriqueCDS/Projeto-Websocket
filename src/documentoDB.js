import { documentosColecao } from "./dbConnect.js";

function encontrarDocumento(nome) {
    
    const documento = documentosColecao.findOne({nome})
    return documento;

  }

// ...

function atualizaDocumento(nome, texto) {

    const atualizacao = documentosColecao.updateOne(
      {
        nome,
      },
      {
        $set: {texto,},
      }
    );
  
    return atualizacao;
  }


  function obterDocumentos() {
    const documentos = documentosColecao.find().toArray();
      return documentos;
  }
  function inserirDocumento(nome) {
    const documentoNovo = documentosColecao.insertOne({
        nome,
        texto:" "
    });
    return documentoNovo;
  }


  function excluirDocumento(nome) {
    const documentoExcluido = documentosColecao.deleteOne({nome});
    return documentoExcluido;
  }
  export { encontrarDocumento, atualizaDocumento,obterDocumentos,inserirDocumento,excluirDocumento };

