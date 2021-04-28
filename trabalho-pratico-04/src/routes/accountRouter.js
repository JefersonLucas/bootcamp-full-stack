// Importação de bibliotecas
import express from "express";

import controller from "../controllers/accountController.js";

// Intanciação do roteador do Express
const app = express.Router();

// Rota inicial
app.get("/account", controller.activity00);

// Atividade 04: endpoint para registrar um depósito em uma conta.
app.patch("/account/activity04", controller.activity04);

// Atividade 05: endpoint para registrar um saque em uma conta.
app.patch("/account/activity05", controller.activity05);

// Atividade 06: endpoint para consultar o saldo da conta.
app.get("/account/activity06/:agencia/:conta", controller.activity06);

// Atividade 07: endpoint para consultar o saldo da conta.
app.delete("/account/activity07/", controller.activity07);

// Exportando a Rota
export { app as accountRouter };
