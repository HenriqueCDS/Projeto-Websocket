import { MongoClient  } from "mongodb";
const cliente = new MongoClient("mongodb+srv://webSocketAlura:alura123@cluster0.xppvnkr.mongodb.net/?retryWrites=true&w=majority")

let documentosColecao;
try {
    await cliente.connect();  
    const db = cliente.db("Alura-websocket");
    documentosColecao = db.collection('documentos');
    console.log("Conectados com sucesso");
  
} catch (error) {   
    console.log(errr)
    
}

export { documentosColecao };