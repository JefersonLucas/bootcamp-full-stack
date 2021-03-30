// Importacões
import express from "express";
import { promises as fileSystem } from "fs";

// Intanciação do roteador
const router = express.Router();

// Desestruturações
const { writeFile, readFile } = fileSystem;
const { parse, stringify } = JSON;
const { log } = console;

// Criação dos endpoints

/** Atividade 01:
 * 1. Crie um **endpoint** para **criar uma grade**.
 * 2. Este endpoint deverá receber como parâmetros os campos: `"student"`, `"subject"`, `"type"` e `"value"`.
 * 3. Esta grade deverá ser salva no arquivo JSON `grades.json`, e deverá ter um `"id"`único associado.
 * 4. No campo `"timestamp"`, deverá ser salvo a **data** e **hora** do momento da inserção.
 * 5. O endpoint deverá retornar o **Objeto da grade que foi criada**.
 * 6. A API deverá garantir o **incremento automático** deste **identificador**, de forma que ele **não se repita entre os registros**.
 * 7. Dentro do arquivo `grades.json`, o campo `"nextId"` já está com um **valor definido**.
 * 8. Após a inserção, é preciso que esse `"nextId"` seja **incrementado** e **salvo no próprio arquivo**, de forma que na próxima inserção ele possa ser utilizado.
 */
router.post("/", async (req, res) => {
  try {
    /** Variável `grade`:
     * recebe do corpo da requisição, as informações em formato JSON.
     *
     * **Obs**.: criamos como variável porque vamos trasformá-la em um Objeto.
     */
    let grade = req.body;

    /** Constante `data`:
     * essa constante rebece a leitura assíncrona do arquivo `accounts.json` e também analizada em formato JSON.
     */
    const data = parse(await readFile(global.pathAPI));

    // Variável `grade` recebendo um Objeto de novos itens
    grade = {
      id: data.nextId++, // Incremento de um novo ID
      ...grade, // Recebendo os itens de `grade` com o `spread`
      timestamp: new Date(), // Recebendo a data e a hora do registro
    };

    // Injetando novos dados em `data.grades`
    data.grades.push(grade);

    // Escrevendo no aquivo `grades.json` os novos dados
    await writeFile(global.pathAPI, stringify(data, null, 2));

    // Enviando para o usuário o corpo do texto final
    res.send(grade);

    log("\u001b[34m\nNew grade successfully added! (^_^)/");
  } catch (error) {
    // Informando o erro, caso ocorra
    res.status(400).send({ error: error.menssage });
    log("\u001b[31m\nThere was a problem adding a new grade! ╮(╯_╰)╭");
  }
});

// Exportação
export default router;
