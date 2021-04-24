// Importação de bibliotecas
import express from "express";

import controller from "../controllers/accountController.js";

// Intanciação do roteador do Express
const app = express.Router();

// Rota inicial
app.get("/account", controller.activity00);

// Atividade 04

// Exportando a Rota
export { app as accountRouter };
