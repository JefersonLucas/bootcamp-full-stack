// Importação de bibliotecas
import express from "express";

// Importanto Rotas
import { accountRouter } from "./src/routes/accountRouter.js";

// Importando Conexão com o MongoDB
import { connectMongoDB } from "./src/connections/accountConnection.js";

// Conexão com o MongoDB
connectMongoDB();

// Instanciação do Express
const app = express();

// Utilizando o formato JSON
app.use(express.json());

// Utilizando Rotas
app.use(accountRouter);

// Desestruturando o log
const { log } = console;

// Escultando uma porta com Express
app.listen(3000, () => {
  try {
    // Log de sucesso
    log(`Welcome to \x1b[34mmy-bank-api\u001b[0m! \\(^_^)/\n`);
    log(`[1/2] \x1b[32mServer started successfully`);
  } catch (error) {
    // Log de erro
    log(`\u001b[31mError starting the server`);
    log(`\n\x1b[0m${error}\n`);
    log(`\u001b[0mType \x1b[34mCtrl + C\u001b[0m to end the session...`);
  }
});
