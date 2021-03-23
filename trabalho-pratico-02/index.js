/** Importação da biblioteca `fs`:
 * Importamos as `promises` e criamos um alias chamado `fileSystem`.
 */
import { promises as fileSystem } from "fs";

/** Função `start()`:
 * 1. Sua principal função é chamar todas as demais funções,
 * sua chamada estará no final do arquivo.
 */
function start() {
  // Chamada da atividade 01
  activity01();
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
    /** Constante `states`.
     *  Recebe todos os dados em formato JSON do arquivo `Estados.json`.
     */
    const states = JSON.parse(
      await fileSystem.readFile("./database/Estados.json"),
    );
    /** Constante `cities`.
     *  Recebe todos os dados em formato JSON do arquivo `Cidades.json`.
     */
    const cities = JSON.parse(
      await fileSystem.readFile("./database/Cidades.json"),
    );

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
            name: nameCity,
          };
          return content.push(city);
        }
      });

      /** Criando um arquivo para cada estado:
       * 1. No primeiro parâmetro é criado dinâmicamente um estado com a extenção `.json`.
       * 2. No segundo parâmetro é inserido a constante `content`,
       * que contém um Array de Objetos com todas as cidades de cada estado.
       */
      fileSystem.writeFile(`./estados/${UF}.json`, JSON.stringify(content));

      // Chamada da atividade 02
      activity02(UF);
    });

    /** Debugging com o `console.table()`
     * Este método gera uma tabela dentro de um console, para melhor legibilidade.
     * Uma tabela será gerada automaticamente para uma matriz ou um objeto.
     * Para saber mais:
     * https://javascript.plainenglish.io/stop-using-console-log-in-javascript-d29d6c24dc26
     */
    console.table({
      estados: states.length,
      cidades: cities.length,
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
 * A sua chamada está dentro da função `activity01`, no final de `state.map()`.
 */
async function activity02(UF) {
  const state = JSON.parse(await fileSystem.readFile(`./estados/${UF}.json`));
}
// Chamanda da função `start()`
start();
