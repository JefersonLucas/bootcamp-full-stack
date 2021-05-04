const express = require("express");
const transactionRouter = express.Router();
/** Importanto o `controller`:
 * é aonde está todas as regras de negócio da aplicação
 */
const controller = require("../services/transactionService");

/** Rota findAll:
 * Essa rota faz as busca de todos os documentos.
 * Ex.: http://localhost:3001/api/transaction/
 */
transactionRouter.get("/", controller.findAll);

/** Rota findOne:
 * Essa rota faz a busca de um único documento pelo o seu `id`.
 * Ex.: http://localhost:3001/api/transaction/6090067f49cc092d94aca769
 */
transactionRouter.get("/:id", controller.findOne);

/** Rota findPeriod:
 * Essa rota faz a busca um documento pelo o seu período.
 * Ex.: http://localhost:3001/api/transaction/period/2019-01
 */
transactionRouter.get("/period/:yearMonth", controller.findPeriod);

/** Rota create:
 * Essa rota faz a criação de documentos.
 * Ex.: 
 * http://localhost:3001/api/transaction/
 * {
    "description": "Compras em hortifruti",
    "value": 30,
    "category": "Mercado",
    "year": 2019,
    "month": 1,
    "day": 4,
    "yearMonth": "2019-01",
    "yearMonthDay": "2019-01-05",
    "type": "-"
  }
 */
transactionRouter.post("/", controller.create);

/** Rota update:
 * Essa rota faz a atualização de documentos.
 * Ex.: 
 * http://localhost:3001/api/transaction/6091a6c9cd937d185461f035
 * {
    "description": "Compras em hortifruti",
    "value": 10,
    "category": "Mercado",
    "year": 2019,
    "month": 1,
    "day": 4,
    "yearMonth": "2019-01",
    "yearMonthDay": "2019-01-05",
    "type": "-"
  }
 */
transactionRouter.put("/:id", controller.update);

/** Rota remove:
 * Essa rota faz a remoção de documentos.
 * Ex.: http://localhost:3001/api/transaction/6091a6c9cd937d185461f035
 */
transactionRouter.delete("/:id", controller.remove);

// Exportando as rotas
module.exports = transactionRouter;
