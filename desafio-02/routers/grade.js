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
 * 1. [x] Crie um **endpoint** para **criar uma grade**.
 * 2. [x] Este endpoint deverá receber como parâmetros os campos: `"student"`, `"subject"`, `"type"` e `"value"`.
 * 3. [x] Esta grade deverá ser salva no arquivo JSON `grades.json`, e deverá ter um `"id"`único associado.
 * 4. [x] No campo `"timestamp"`, deverá ser salvo a **data** e **hora** do momento da inserção.
 * 5. [x] O endpoint deverá retornar o **Objeto da grade que foi criada**.
 * 6. [x] A API deverá garantir o **incremento automático** deste **identificador**, de forma que ele **não se repita entre os registros**.
 * 7. [x] Dentro do arquivo `grades.json`, o campo `"nextId"` já está com um **valor definido**.
 * 8. [x] Após a inserção, é preciso que esse `"nextId"` seja **incrementado** e **salvo no próprio arquivo**, de forma que na próxima inserção ele possa ser utilizado.
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

    // Debugging
    log("\u001b[34m\nNew grade successfully added! (^_^)/");
  } catch (error) {
    // Informando o erro, caso ocorra
    res.status(400).send({ error: error.menssage });
    log("\u001b[31m\nThere was a problem adding a new grade! ╮(╯_╰)╭");
  }
});

/** Atividade 02:
 * 1. [x] Crie um **endpoint** para **atualizar uma grade**.
 * 2. [x] Este endpoint deverá receber como parâmetros o `"id"` da grade a ser alterada e os campos `"student"`, `"subject"`, `"type"` e `"value"`.
 * 3. [ ] O endpoint deverá **validar** se a grade informada **existe** e, caso **não exista**, deverá retornar um **erro**.
 * 4. [x] Caso exista, o endpoint deverá **atualizar as informações recebidas** por **parâmetros no registro** e realizar sua atualização com os **novos dados** alterados no arquivo `grades.json`.
 */
router.put("/", async (req, res) => {
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

    // Buscando pelo `index` o resgistro desejado
    const index = data.grades.findIndex(
      (index) => index.id === parseInt(grade.id),
    );

    // Inserindo no index os dados em `data.grades[index]`
    data.grades[index] = grade;

    // Escrevendo no aquivo `grades.json` os novos dados
    await writeFile(global.pathAPI, stringify(data, null, 2));

    // Devolvendo a requisição para o usuário
    res.send(grade);

    // Debugging
    log("\u001b[34m\nGrade updated successfully! (^_^)/");

    // Finaliza a requisição
    res.end();
  } catch (error) {
    // Informando o erro, caso ocorra
    res.status(400).send({ error: error.menssage });
    log("\u001b[31m\nThere was a problem adding a new grade! ╮(╯_╰)╭");
  }
});

/** Atividade 03:
 * 1. [x] Crie um **endpoint** para **excluir uma grade**. Este endpoint deverá receber como parâmetro o `"id"` da grade e **realizar sua exclusão** do arquivo `grades.json`.
 */
router.delete("/:id", async (req, res) => {
  try {
    /** Constante `id`:
     * Essa constante recebe o `id` passado por por parâmetro na requisição.
     */
    const id = req.params.id;

    /** Constante `data`:
     * essa constante rebece a leitura assíncrona do arquivo `accounts.json` e também analizada em formato JSON.
     */
    const data = parse(await readFile(global.pathAPI));

    /** Filtrando o `id`:
     * Ao filtrar o `id`, estamos fazendo uma filtragem de todos os itens excluindo o intem que passamos por parâmetro.
     * Assim temos todos os itens, menos o que foi passado por parâmetro.
     */
    data.grades = data.grades.filter((grade) => grade.id !== parseInt(id));

    // Escrevendo no aquivo `grades.json` os novos dados
    await writeFile(global.pathAPI, stringify(data, null, 2));

    // Debugging
    log("\u001b[34m\nGrade deleted successfully! (^_^)/");

    // Finaliza a requisição
    res.end();
  } catch (error) {
    // Informando o erro, caso ocorra
    res.status(400).send({ error: error.menssage });
    log("\u001b[31m\nThere was a problem adding a new grade! ╮(╯_╰)╭");
  }
});

/** Atividade 04:
 * 1. Crie um **endpoint** para **consultar uma grade em específico**.
 * 2. Este endpoint deverá receber como parâmetro o `"id"` da grade e **retornar suas informações**.
 */
router.get("/:id", async (req, res) => {
  try {
    /** Constante `id`:
     * Essa constante recebe o `id` passado por por parâmetro na requisição.
     */
    const id = req.params.id;

    /** Constante `data`:
     * essa constante rebece a leitura assíncrona do arquivo `accounts.json` e também analizada em formato JSON.
     */
    const data = parse(await readFile(global.pathAPI));

    /** Constante `grade`:
     * recebe o resultado do método `find` com o `id` passado por parâmetro.
     */
    const grade = data.grades.find((grade) => grade.id === parseInt(id));

    // Devolvendo o resultado para o usuário
    res.send(grade);

    // Finaliza a requisição
    res.end();
  } catch (error) {
    // Informando o erro, caso ocorra
    res.status(400).send({ error: error.menssage });
    log("\u001b[31m\nThere was a problem adding a new grade! ╮(╯_╰)╭");
  }
});

// Exportação
export default router;
