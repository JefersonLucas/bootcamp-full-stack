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
router.post("/create-grade", async (req, res) => {
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
      student: grade.student,
      subject: grade.subject,
      type: grade.type,
      value: grade.value,
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
    res.status(400).send({ error: error.message });
    log("\u001b[31m\nThere was a problem adding a new grade! ╮(╯_╰)╭");
  }
});

/** Atividade 02:
 * 1. Crie um **endpoint** para **atualizar uma grade**.
 * 2. Este endpoint deverá receber como parâmetros o `"id"` da grade a ser alterada e os campos `"student"`, `"subject"`, `"type"` e `"value"`.
 * 3. O endpoint deverá **validar** se a grade informada **existe** e, caso **não exista**, deverá retornar um **erro**.
 * 4. Caso exista, o endpoint deverá **atualizar as informações recebidas** por **parâmetros no registro** e realizar sua atualização com os **novos dados** alterados no arquivo `grades.json`.
 */
router.put("/update-grade", async (req, res) => {
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

    if (parseInt(index) === -1) {
      throw new Error("Grade informada não existe");
    }
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
    res.status(400).send({ error: error.message });
    log("\u001b[31m\nThere was a problem adding a new grade! ╮(╯_╰)╭");
  }
});

/** Atividade 03:
 * 1. Crie um **endpoint** para **excluir uma grade**. Este endpoint deverá receber como parâmetro o `"id"` da grade e **realizar sua exclusão** do arquivo `grades.json`.
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
    res.status(400).send({ error: error.message });
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

    // Debugging
    log("\u001b[34m\nGrade consulted successfully! (^_^)/");

    // Finaliza a requisição
    res.end();
  } catch (error) {
    // Informando o erro, caso ocorra
    res.status(400).send({ error: error.message });
    log("\u001b[31m\nThere was a problem adding a new grade! ╮(╯_╰)╭");
  }
});

/** Atividade 05:
 * 1. Crie um **endpoint** para **consultar a nota total de um aluno** em uma **disciplina**.
 * 2. O endpoint deverá receber como parâmetro o `"student"` e o `"subject"`, e realizar a **soma de todas as notas de atividades correspondentes** a aquele `"subject"` para aquele `"student"`.
 * 3. O endpoint deverá **retornar a soma da propriedade** `"value"` dos **registros encontrados**.
 */
router.post("/total-value", async (req, res) => {
  try {
    /** Variável `grades`:
     * recebe o resultado da requisição feita no endpoint.
     */
    let grade = req.body;

    /** Constante `data`:
     * essa constante rebece a leitura assíncrona do arquivo `accounts.json` e também analizada em formato JSON.
     */
    const data = parse(await readFile(global.pathAPI));

    /** Variável `grades`:
     * está obtendo o filtro da API.
     */
    grade = data.grades.filter(
      ({ student, subject }) =>
        student === grade.student && subject === grade.subject,
    );

    /** Constante `result`:
     * Obtém o resultado da soma de todos os valores somados.
     */
    const result = grade.reduce(
      (accumulator, { value }) => accumulator + value,
      0,
    );

    // Devolvendo o resultado para o usuário
    res.send({ value: result });

    // Debugging
    log("\u001b[34m\nGrade consulted the total value successfully! (^_^)/");

    // Finaliza a requisição
    res.end();
  } catch (error) {
    // Informando o erro, caso ocorra
    res.status(400).send({ error: error.message });
    log("\u001b[31m\nThere was a problem adding a new grade! ╮(╯_╰)╭");
  }
});

/** Atividade 06:
 * 1. Crie um **endpoint** para **consultar a média das grades de determinado** `"subject"` **e** `"type"`.
 * 2. O endpoint deverá receber como parâmetro um `"subject"` e um `"type"` e **retornar a média**.
 * 3. A média é calculada **somando o registro** `"value"` de todos os registros que possuem o `"subject"` **e** `"type"` informados e dividindo pelo total de registros que possuem este mesmo `"subject"` e `"type"`.
 */
router.post("/average-grid", async (req, res) => {
  try {
    /** Variável `grades`:
     * recebe o resultado da requisição feita no endpoint.
     */
    let grade = req.body;

    /** Constante `data`:
     * essa constante rebece a leitura assíncrona do arquivo `accounts.json` e também analizada em formato JSON.
     */
    const data = parse(await readFile(global.pathAPI));

    /** Variável `grades`:
     * está obtendo o filtro da API.
     */
    grade = data.grades.filter(
      ({ subject, type }) => subject === grade.subject && type === grade.type,
    );

    /** Constante `result`:
     * Obtém o resultado da soma de todos os valores somados.
     */
    let result = grade.reduce(
      (accumulator, { value }) => accumulator + value,
      0,
    );

    // Devolvendo o resultado para o usuário
    res.send({ value: result / grade.length });

    // Debugging
    log("\u001b[34m\nGrade average consulted successfully! (^_^)/");

    // Finaliza a requisição
    res.end();
  } catch (error) {
    // Informando o erro, caso ocorra
    res.status(400).send({ error: error.message });
    log("\u001b[31m\nThere was a problem adding a new grade! ╮(╯_╰)╭");
  }
});

/** Atividade 07:
 * 1. Crie um **endpoint** para **retornar as três melhores grades de acordo com determinado** `"subject"` **e** `"type"`.
 * 2. O endpoint deve receber como parâmetro um `"subject"` e um `"type"` retornar um **Array** com os **três registros** de **maior** `"value"` daquele `"subject"` **e** `"type"`.
 * 3. A ordem deve ser do **maior para o menor**.
 */
router.post("/best-grade", async (req, res) => {
  try {
    /** Variável `grades`:
     * recebe o resultado da requisição feita no endpoint.
     */
    let grade = req.body;

    /** Constante `data`:
     * essa constante rebece a leitura assíncrona do arquivo `accounts.json` e também analizada em formato JSON.
     */
    const data = parse(await readFile(global.pathAPI));

    /** Variável `grades`:
     * está obtendo o filtro da API.
     */
    grade = data.grades.filter(
      ({ subject, type }) => subject === grade.subject && type === grade.type,
    );

    /** Constante `result`:
     * Obtém o resultado ordenado de `grades`.
     */
    let result = grade
      .sort((a, b) => {
        if (a.value > b.value) return -1;
        else if (a.value < b.value) return 1;
        else return 0;
      })
      .slice(0, 3);

    // Devolvendo o resultado para o usuário
    res.send(result);

    // Debugging
    log("\u001b[34m\nThree best grades successfully returned! (^_^)/");

    // Finaliza a requisição
    res.end();
  } catch (error) {
    // Informando o erro, caso ocorra
    res.status(400).send({ error: error.message });
    log("\u001b[31m\nThere was a problem adding a new grade! ╮(╯_╰)╭");
  }
});

// Exportação
export default router;
