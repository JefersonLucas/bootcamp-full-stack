// Importação de bibliotecas
import express from "express";

// Importanto Rotas
import { accountRouter } from "./src/routes/accountRouter.js";

// Importando Conexão com o MongoDB
import { connectionToMongoDB } from "./src/connections/accountConnection.js";

// Conexão com o MongoDB
connectionToMongoDB();

// Instanciação do Express
const app = express();

// Utilizando o formato JSON
app.use(express.json());

// Utilizando Rotas
app.use(accountRouter);

// Escultando uma porta com Express
app.listen(3000, () => console.log(`\u001b[34mServer my-bank-api started!\n`));
