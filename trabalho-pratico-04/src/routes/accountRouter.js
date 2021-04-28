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

// Atividade 07: endpoint para excluir uma conta.
app.delete("/account/activity07", controller.activity07);

// Atividade 08: endpoint para realizar transferências entre contas.
app.patch("/account/activity08", controller.activity08);

// Atividade 09: endpoint para consultar a média do saldo dos clientes de determinada agência.
app.get("/account/activity09/:agencia", controller.activity09);

// Atividade 10: endpoint para consultar os clientes com o menor saldo em conta.
app.get("/account/activity10/:limit", controller.activity10);

// Atividade 11: endpoint para consultar os clientes mais ricos do banco.
app.get("/account/activity11/:limit", controller.activity11);

// Exportando a Rota
export { app as accountRouter };
