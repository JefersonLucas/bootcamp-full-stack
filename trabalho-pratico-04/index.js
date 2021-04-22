// Importação de bibliotecas
import express from "express";

// Instanciação do Express
const app = express();

// Utilizando o formato JSON
app.use(express.json());

// Abrindo um servidor Express
app.listen(3000, () =>
  console.log("my-bank-api started! \\(^_^)/\nOn port http://localhost:3000/"),
);
