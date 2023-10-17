

import { encontrarDocumento,inserirDocumento,atualizaDocumento,obterDocumentos,excluirDocumento } from "./documentoDB.js";
import io from "./sevidor.js";


io.on("connection", (socket) => {
    console.log("Um cliente se conectou id:",socket.id  );

    socket.on("inserir-documento", async (nomeDocumento) => {
        const DocumentoExist = (await encontrarDocumento (nomeDocumento)) !== null;
        if(DocumentoExist){ return socket.emit("documento-existente",nomeDocumento) }

        const resultado = await inserirDocumento(nomeDocumento);
        
        if(resultado.acknowledged){
           io.emit("inserir-documento-interface",nomeDocumento)
        }
      });

    socket.on("excluir-documento", async (nomeDocumento) => {
        const resultadoDaExclusao = await excluirDocumento(nomeDocumento);
        if(resultadoDaExclusao.deletedCount){
            io.emit("excluir-documento-sucesso",nomeDocumento);
        }
    });

    socket.on("obter_documentos", async (devolverDocumentos) => {
        const documentos =  await obterDocumentos();
        devolverDocumentos(documentos);
      });

    socket.on("selecionar_documento", async (nomeDocumento, devolverTexto) => {
        socket.join(nomeDocumento)
        const documento =  await encontrarDocumento (nomeDocumento);
        if (documento) {
            devolverTexto(documento.Texto)
          }
       
      });

    socket.on("text_editor", async ({texto, nomeDocumento}) => {
        const atualizacao = await atualizaDocumento(nomeDocumento, texto);    
        
        if (atualizacao.modifiedCount) {
            socket.to(nomeDocumento).emit("texto_editor_clientes",texto);
          }
       
    });

    // socket.on("disconnect", (motivo) => {
    //     console.log(`Cliente "${socket.id}" desconectado!
    //     Motivo: ${motivo}`);
    //   });
     
})


