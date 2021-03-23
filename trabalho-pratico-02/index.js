/** Importação da biblioteca `fs`
 * Importamos as `promises` e criamos um alias chamado `fileSystem`,
 * vamos utilizar bastante ao longo desse arquivo.
 */ 
import { promises as fileSystem } from "fs"

/** Função `start()`
 * Sua função é chamar todas as outras funções nesse arquivo.
 * A sua chamada estará no final do arquivo. 
*/
function start() {
  activity01();
}

/** Atividade 01 
 * Criar uma função que irá criar um arquivo JSON para cada estado representado no arquivo `Estados.json`.
 * Seu conteúdo será um Array das cidades pertencentes a aquele estado, de acordo com o arquivo `Cidades.json`.
 * O nome do arquivo deve ser o UF do estado, por exemplo: `MG.json`. 
*/

async function activity01() {
  /** `try`
   * Ao ler essa função, o código dentro desse bloco vai "tentar" ser executado, 
   * caso ocorra algum erro, ele será repassado ao bloco comando `catch()`.
   */ 
  try {
    /** Constante `data`
     *  Recebe em formato JSON todos os dados de `Estados.json`.
     */ 
    const data = JSON.parse(await fileSystem.readFile("./database/Estados.json"));
    
    /** Criando arquivos com `for`
      for(let i = 0; i < data.length; i++) {
        const conteudo = [{
          ID,
        }];
        await fileSystem.writeFile(`./estados/${data[i].Sigla}.json`, JSON.stringify(conteudo));
      }
    */

   /** Criando arquivos com `map`
    * Começo desestruturando os itens `Sigla` e `ID`.
    * Depois eu crio uma constante que rebebe um Array de Objetos.
    * Dentro desse Array de Objetos eu incluo dinâmicamento cada estado com seu respectivo `ID`.
    * Finalizando eu crio um arquivo para cada estado,
    * extraindo a `Sigla` e contatenando para formar o nome arquivo.
    * Logo depois eu coloco o Array de Objetos que contém o `ID` de cada estado dentro de um `JSON.stringify`
    */ 
   data.map(({Sigla, ID}) => {

    /** Constante `conteudo`
     * Recebe um Array de Objetos
     * Cria um item chave/valor `ID` que corresponde ao estado pertecente
     */  
      const conteudo = [{
        ID,
      }];

      /** Criando o arquivo para cada estado 
       * No primeiro parâmetro é criado dinâmicamente um estado com a extenção `.json`.
       * No segundo parâmetro é inserido a constante `conteudo` que contém o Array de Objetos,
       * que contém o `ID` de cada estado pertecente.  
      */
      fileSystem.writeFile(`./estados/${Sigla}.json`, JSON.stringify(conteudo));
    });

    /** Debugging com o `console.log()` 
     * Apenas uma mensagem informando que a criação foi bem sucedida.
     */
    console.log(`${data.length} arquivos criados com sucesso`);
  }
  /** `Catch()`
   * Caso ocorra algum erro, ele é repassado para o `catch`,
   * que se responsabiliza por exibir no `console` o erro ocorrido.
   */ 
  catch(erro) {
    /** `console.error()`
     * Decidi utilizar o `console.error()` por questões de prática de debugging,
     * Não há diferencas em utilizar por `console.log()`.
     * Para saber mais:
     * https://javascript.plainenglish.io/stop-using-console-log-in-javascript-d29d6c24dc26
     */ 
    console.error(erro);
  }
}

// Chamando a função `start()`
start();