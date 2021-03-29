/** Importação da biblioteca `fs`:
 * Importamos as `promises` e criamos um alias chamado `fileSystem`.
 */
import { promises as fileSystem } from "fs";

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
  // Chamada da função `ativity01()`
  await activity01();
  // Chamada da função `ativity02()`
  // console.log(await activity02("AC"));
  // Chamada da função `activity03()`
  await activity03();
  // Chamada da função `activity04()`
  await activity04();
  // Chamada da função `activity05()`
  await activity05();
  // Chamada da função `activity06()`
  await activity06();
  // Chamada da função `activity07()`
  await activity07();
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
      write(`./states/${UF}.json`, stringify(content, null, 2));
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
    const state = JSON.parse(await read(`./states/${UF}.json`));
    // Retorno
    return state.length;
  } catch (erro) {
    console.log(erro);
  }
}

/** Atividade 03:
 * 1. Criar um **método** que imprima no `console` um `Array` com o **UF** dos **cinco estados que mais possuem cidades**.
 * 2. Seguidos de: **quantidade**, em **ordem decrescente**.
 * Você pode usar a função criada no tópico 2. Exemplo de impressão:
 * ["UF - 93", "UF - 82", "UF - 74", "UF - 72", "UF - 65"];
 */
async function activity03() {
  try {
    /** Constante `states`:
     * recebe todos os estados em formato JSON.
     */
    const states = parse(await read("./database/Estados.json"));

    /** Constante `list`:
     * nela que faremos as manipulações das informações `UF` e `cities`.
     */
    const list = [];

    // Mapeamento na constante `states`.
    states.map(async ({ Sigla: UF }) => {
      /** Constante `cities`:
       * puxamos as informações da quantidade de cidades da função `activity02()`.
       */
      const cities = await activity02(UF);

      // Incluindo na constante `list` um Objeto com os campos chave/valor: `UF` e `cities`.
      list.push({ UF: UF, cities });

      // Quando a constante `list` obtiver o tamanho de 27 itens (Que correspondem ao tamanho dos estados).
      if (list.length === 27) {
        // Ordena os estados pela quatidade de cidades
        list.sort((a, b) => {
          if (a.cities < b.cities) return 1;
          else if (a.cities > b.cities) return -1;
          else return 0;
        });
        // Imprime os cinco primeiros estados
        console.log(list.slice(0, 5));
      }
    });
  } catch (error) {
    console.log(error);
  }
}

/** Atividade 04:
 * 1. Criar um **método** que imprima no `console` um `Array` com o **UF** dos **cinco estados** que **menos possuem cidades**.
 * 2. Seguidos de: **quantidade**, em **ordem decrescente**.
 * Você pode usar a função criada no tópico 2. Exemplo de impressão:
 * ["UF - 30", "UF - 27", "UF - 25", "UF - 23", "UF - 21"];
 */
async function activity04() {
  try {
    /** Constante `states`:
     * recebe todos os estados em formato JSON.
     */
    const states = parse(await read("./database/Estados.json"));

    /** Constante `list`:
     * nela que faremos as manipulações das informações `UF` e `cities`.
     */
    const list = [];

    // Mapeamento na constante `states`.
    states.map(async ({ Sigla: UF }) => {
      /** Constante `cities`:
       * puxamos as informações da quantidade de cidades da função `activity02()`.
       */
      const cities = await activity02(UF);

      // Incluindo na constante `list` um Objeto com os campos chave/valor: `UF` e `cities`.
      list.push({ UF: UF, cities });

      // Quando a constante `list` obtiver o tamanho de 27 itens (Que correspondem ao tamanho dos estados).
      if (list.length === 27) {
        // Ordena os estados pela quatidade de cidades
        list.sort((a, b) => {
          if (a.cities > b.cities) return 1;
          else if (a.cities < b.cities) return -1;
          else return 0;
        });
        // Imprime os cinco primeiros estados
        console.log(list.slice(0, 5));
      }
    });
  } catch (error) {
    console.log(error);
  }
}

/** Atividade 05:
 * Criar um **método** que imprima no `console` um `Array` com a **cidade de maior nome** de cada **estado**, seguida de seu **UF**. Por exemplo:
 * ["Nome da Cidade – UF", "Nome da Cidade – UF", ...];
 */
async function activity05() {
  try {
    /** Constante `cities`:
     * recebe todos as cidades em formato JSON.
     */
    const cities = parse(await read("./database/Cidades.json"));

    /** Constante `list`:
     * nela que faremos as manipulações das informações `name` e `UF`.
     */
    const list = [];

    // Mapeamento na constante `cities`.
    cities.map(async ({ Nome: name, Estado: UF }) => {
      // Incluindo na constante `list` um Objeto com os campos chave/valor: `name` e `UF`.
      list.push({ name, UF });
      // Quando a constante `list` obtiver o tamanho de 5563 itens (Que correspondem a quantidade de cidades).
      if (list.length === 5563) {
        // Ordena as cidades pelo tamanho do nome
        list.sort((a, b) => {
          if (a.name.length < b.name.length) return 1;
          else if (a.name.length > b.name.length) return -1;
          else return 0;
        });
        // Imprime a cidade com o maior nome
        console.log(list.slice(0, 5));
      }
    });
  } catch (error) {
    console.log(error);
  }
}
/** Atividade 06:
 * Criar um **método** que imprima no `console` um `Array`com a **cidade de menor nome** de cada **estado**, seguida de seu **UF**. Por exemplo:
 * ["Nome da Cidade – UF", "Nome da Cidade – UF", ...];
 */
async function activity06() {
  try {
    /** Constante `cities`:
     * recebe todos as cidades em formato JSON.
     */
    const cities = parse(await read("./database/Cidades.json"));

    /** Constante `list`:
     * nela que faremos as manipulações das informações `name` e `UF`.
     */
    const list = [];

    // Mapeamento na constante `cities`.
    cities.map(async ({ Nome: name, Estado: UF }) => {
      // Incluindo na constante `list` um Objeto com os campos chave/valor: `name` e `UF`.
      list.push({ name, UF });
      // Quando a constante `list` obtiver o tamanho de 5563 itens (Que correspondem a quantidade de cidades).
      if (list.length === 5563) {
        // Ordena as cidades pelo tamanho do nome
        list.sort((a, b) => {
          if (a.name.length > b.name.length) return 1;
          else if (a.name.length < b.name.length) return -1;
          else return 0;
        });
        // Imprime as cidades com o menor nome
        console.log(list.slice(0, 5));
      }
    });
  } catch (error) {
    console.log(error);
  }
}

/** Atividade 07:
 * Criar **método** que imprima no `console` a **cidade de maior nome** entre **todos os estados**, seguido do seu **UF**. Exemplo:
 * "Nome da Cidade – UF";
 */
async function activity07() {
  try {
    /** Constante `cities`:
     * recebe todos as cidades em formato JSON.
     */
    const cities = parse(await read("./database/Cidades.json"));

    /** Constante `list`:
     * nela que faremos as manipulações das informações `name` e `UF`.
     */
    const list = [];

    // Mapeamento na constante `cities`.
    cities.map(async ({ Nome: name, Estado: UF }) => {
      // Incluindo na constante `list` um Objeto com os campos chave/valor: `name` e `UF`.
      list.push({ name, UF });
      // Quando a constante `list` obtiver o tamanho de 5563 itens (Que correspondem a quantidade de cidades).
      if (list.length === 5563) {
        // Ordena as cidades pelo tamanho do nome
        list.sort((a, b) => {
          if (a.name.length < b.name.length) return 1;
          else if (a.name.length > b.name.length) return -1;
          else return 0;
        });

        /** Constante `result`:
         *  recebe inicialmente um `Array`.
         * Para receber o resultado dos métodos `slice`e `forEach` da constante `list`.
         */
        const result = [];

        /** Métodos em `list`:
         * aqui aplicamos dois métodos no Array `list` para enviar os resultados no Array `result`.
         */
        list
          .slice(0, 1)
          .forEach((item) => result.push(`${item.name} - ${item.UF}`));

        // Aqui imprimimos o `result` no console: *a cidades com o maior nome*.
        console.log(result);
      }
    });
  } catch (error) {
    console.log(error);
  }
}

// Chamanda da função `start()`
start();
