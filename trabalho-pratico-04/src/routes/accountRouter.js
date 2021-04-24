// Importação de bibliotecas
import express from "express";

// Importação de modelos
import { accountModel } from "../models/accountModel.js";

// Intanciação do roteador do Express
const app = express.Router();

/** Atividade 04:
 * 1. Crie um endpoint para registrar um depósito em uma conta.
 * 2. Esse endpoint deverá receber como parâmetros a “agencia”, o número da conta e o valor do depósito.
 * 3. Ele deverá atualizar o “balance” da conta, incrementando-o com o valor recebido como parâmetro.
 * 4. O endpoint deverá validar se a conta informada existe, caso não exista deverá retornar um erro, caso exista retornar o saldo atual da conta.
 */
app.post("/account", async (require, response) => {
  // Desestruturação
  const { body } = require;
  const { send, status } = response;

  try {
    // Obtendo a informação do Request
    const account = new accountModel(require.body);

    // Persistência
    await account.save();

    // Retorno de sucesso!
    response.send(account);
  } catch (error) {
    // Retorno de erro!
    response.status(500).send({ error: error.message });
  }
});

/** Atividade 06:
 * Crie um endpoint para consultar o saldo da conta.
 * Esse endpoint deverá receber como parâmetro a “agência” e o número da conta, e deverá retornar seu “balance”.
 * Caso a conta informada não exista, retornar um erro.
 */
app.get("/account", async (_, response) => {
  try {
    // Obtendo a informação do Request
    const account = await accountModel.find({});

    // Retorno de sucesso!
    response.send(account);

    // Finalizando a seção
    response.end();
  } catch (error) {
    // Retorno de erro!
    response.status(500).send({ error: error.message });
  }
});

// Exportando a Rota
export { app as accountRouter };
