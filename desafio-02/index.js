// Importações
import express from "express";
import gradesRouter from "./routers/grade.js";
import { promises as fileSystem } from "fs";

// Instanciação do Express
const app = express();

// Desestruturações
const { writeFile, readFile } = fileSystem;
const { log, clear } = console;

// Variáveis globais
global.pathAPI = "./api/grades.json";

// Usando o JSON com o Express
app.use(express.json());

// Utilizando o Roteador na rota `/grade`.
app.use("/grade", gradesRouter);

// Criação da API
app.listen(3001, async () => {
  try {
    // Fazendo a leitura da API
    await readFile(global.pathAPI);
    // Debugging
    clear();
    log("\u001b[34mgrades-control-api started with success! ＼(^o^)／");
  } catch (error) {
    log("\u001b[31m\nThere was a problem starting grades-control-api! ╮(╯_╰)╭");
    log(error);
  }
});
