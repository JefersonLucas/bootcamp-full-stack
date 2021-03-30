// Importações
import express from "express";
import gradesRouter from "./routers/grades.js";
import { promises as fileSystem } from "fs";

// Instanciação do Express
const app = express();

// Desestruturações
const { writeFile, readFile } = fileSystem;

// Usando o JSON com o Express
app.use(express.json());

// Utilizando o Roteador na rota `/grade`.
app.use("/grade", gradesRouter);

// Criação da API
app.listen(3001, () => {
  console.log("grades-control-api created with sucess! ＼(^o^)／");
});
