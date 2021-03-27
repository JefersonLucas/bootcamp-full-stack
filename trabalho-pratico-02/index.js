/** Importação da biblioteca `fs`:
 * Importamos as `promises` e criamos um alias chamado `fileSystem`.
 */
import { promises as fileSystem, stat } from "fs";

/** Desestruturando:
 * Desestruturamos os métodos de `fileSytem`:
 * 1. `readFile`: que faz a leitura de arquivos.
 * 2. `writeFile`: que faz a **escrita** de arquivos.
 *
 * E os método de `JSON`:
 * 1. `parse`: analisa uma string JSON, construindo o valor ou um objeto JavaScript descrito pela string.
 * 2. `stringfy`: converte valores em javascript para uma String  JSON.
 *
 * **Obs**.: Estou apelidando somente para facilitar a minha leitura.
 *
 * **Documentações**:
 * `readFile`: https://nodejs.org/api/fs.html#fs_filehandle_readfile_options
 * `writeFile`: https://nodejs.org/api/fs.html#fs_filehandle_writefile_data_options
 * `stringfy`: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
 * `parse`: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
 */
const { readFile: read, writeFile: write } = fileSystem;
const { parse, stringify } = JSON;

/** Função `start()`:
 * A principal função é chamar todas as demais funções,
 * sua chamada estará no final do arquivo.
 */
async function start() {
  // Chamada da atividade 01
  await activity01();
  // Chamada da atividade 02
  console.log(await activity02("AC"));
}

/** Atividade 01:
 * 1. Criar uma **função** que irá criar um arquivo JSON para **cada estado** representado no arquivo `Estados.json`.
 * 2. Seu conteúdo será um Array das cidades **pertencentes a aquele estado**, de acordo com o arquivo `Cidades.json`.
 * 3. O nome do arquivo deve ser o **UF** do estado, por exemplo: `MG.json`.
 *
 * A sua chamada está dentro de `start()`.
 */

async function activity01() {
  /** `try`:
   * 1. Ao ler essa função, o código dentro desse bloco vai "tentar" ser executado.
   * 2. caso ocorra algum erro, ele será repassado ao bloco comando `catch()`.
   */
  try {
    /** Constante `states`:
     * Recebe todos os dados em formato JSON do arquivo `Estados.json`.
     */
    const states = parse(await read("./database/Estados.json"));
    /** Constante `cities`:
     * Recebe todos os dados em formato JSON do arquivo `Cidades.json`.
     */
    const cities = parse(await read("./database/Cidades.json"));

    /** Criando arquivos com `map()`:
     * Começo desestruturando os Objetos pertecentes ao arquivo `Estados.json`.
     * Dentro crio uma constante `content` que rebebe um Array de Objetos.
     * Nessa constante será incluído dinâmicamente, cada cidade para cada estado.
     * Finalizando eu crio um arquivo para cada estado,
     * depois insiro a constante `content` que contém o Array de Objetos de `cities` dentro de `JSON.stringify`.
     */
    states.map(({ Sigla: UF, ID }) => {
      /** Constante `content`:
       * Ela recebe um Array de Objetos,
       * dentro irá receber um método `push()`,
       * que vai conter Objetos de cada cidade para cada estado.
       */
      const content = [];

      /** Criando um arquivo para cada estado:
       * 1. No primeiro parâmetro é criado dinâmicamente um estado com a extenção `.json`.
       * 2. No segundo parâmetro é inserido a constante `content`,
       * que contém um Array de Objetos com todas as cidades de cada estado.
       */
      cities.map(({ Estado: idState, ID: idCity, Nome: nameCity }) => {
        if (ID == idState) {
          let city = {
            id: idCity,
            UF: UF,
            name: nameCity,
          };
          return content.push(city);
        }
      });
      /** Criando um arquivo para cada estado:
       * 1. No primeiro parâmetro é criado dinâmicamente um estado com a extenção `.json`;
       * 2. No segundo parâmetro é inserido a constante `content` dentro do método `JSON.stringfy()`.
       * 3: Esse método possui os seguintes parâmetros:
       * 3.1 *valor*: uma constante que contém o Array de Objetos, ela possui todas as cidades de cada estado;
       * 3.2 *replacer* (opicional): o valor nulo todas as propriedades do objeto são incluídas na string JSON;
       * 3.3 *espaço* (opicional): é usado para inserir espaço na string JSON para propósito de legibilidade.
       */
      write(`./estados/${UF}.json`, stringify(content, null, 2));
    });
  } catch (erro) {
    /** `catch()`:
     * 1. Caso ocorra algum erro, ele será repassado para o `catch`,
     * que se responsabiliza por exibir no `console` o erro ocorrido.
     */
    console.log(erro);
  }
}

/** Atividade 02:
 * 1. Criar uma **função** que recebe como parâmetro o **UF** do estado,
 * que realize a leitura do arquivo JSON correspondente e que retorne a **quantidade de cidades** daquele estado.
 *
 */
async function activity02(UF) {
  try {
    /** Constante `state`:
     * Recebe um estado passado por parâmetro e retorna o tamanho de cidades que esse estado possui.
     */
    const state = JSON.parse(await read(`./estados/${UF}.json`));
    // Retorno
    return state.length;
  } catch (erro) {
    console.log(erro);
  }
}
// Chamanda da função `start()`
start();
