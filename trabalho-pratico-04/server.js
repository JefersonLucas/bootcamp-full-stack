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

// Cores do console
let white = "\u001b[0m";
let red = "\u001b[31m";
let green = "\x1b[32m";
let blue = "\x1b[34m";

// Escultando uma porta com Express
app.listen(3000, () => {
  try {
    // Log de sucesso
    log(`Welcome to ${blue}my-bank-api${white}! \\(^_^)/\n`);
    log(`[1/2] ${green}Server started successfully`);
  } catch (error) {
    // Log de erro
    log(`${red}Error starting the server`);
    log(`\n${white}${error}\n`);
    log(`${white}Type ${blue}Ctrl + C${white} to end the session...`);
  }
});
