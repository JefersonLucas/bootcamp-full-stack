# Trabalho prático do Módulo 01

## Objetivos

Exercitar os seguintes conceitos trabalhados no Módulo:

- [x] Criação de um projeto Node.js.
- [x] Manipulação de arquivos.
- [x] Manipulação de objetos JSON.

## Enunciado

O aluno deverá criar um projeto Node.js para realizar a criação de alguns métodos e processamento de arquivos JSON.

## Atividades

O aluno deverá baixar os arquivos Cidades.json e Estados.json do seguinte link
[github.com/felipefdl](https://github.com/felipefdl/cidades-estados-brasil-json) e colocá-los dentro do seu projeto. O arquivo `Estados.json` possui uma listagem com todos os estados do Brasil, cada um representado por um **ID**. No arquivo `Cidades.json` estão listadas todas as cidades do Brasil, com seu respectivo estado representando pelo **ID** fazendo referência ao arquivo `Estados.json`.

Os alunos deverão desempenhar as seguintes atividades:

1. Criar uma **função** que irá criar um arquivo JSON para **cada estado** representado no arquivo `Estados.json`, e o seu conteúdo será um Array das cidades **pertencentes a aquele estado**, de acordo com o arquivo `Cidades.json`. O nome do arquivo deve ser o **UF** do estado, por exemplo: `MG.json`.

2. Criar uma **função** que recebe como parâmetro o **UF** do estado, que realize a leitura do arquivo JSON correspondente e que retorne a **quantidade de cidades** daquele estado.

3. Criar um **método** que imprima no `console` um `Array` com o **UF** dos **cinco estados que mais possuem cidades**, seguidos da **quantidade**, em **ordem decrescente**. Você pode usar a função criada no tópico 2. Exemplo de impressão:

```javascript
["UF - 93", "UF - 82", "UF - 74", "UF - 72", "UF - 65"];
```

4. Criar um **método** que imprima no `console` um `Array` com o **UF** dos **cinco estados** que **menos possuem cidades**, seguidos da **quantidade**, em **ordem decrescente**. Você pode usar a função criada no tópico 2. Exemplo de impressão:

```javascript
["UF - 30", "UF - 27", "UF - 25", "UF - 23", "UF - 21"];
```

5. . Criar um **método** que imprima no `console` um `Array` com a **cidade de maior nome** de cada **estado**, seguida de seu **UF**. Por exemplo:

```javascript
["Nome da Cidade – UF", "Nome da Cidade – UF", ...];
```

6. Criar um **método** que imprima no `console` um `Array` com a **cidade de menor nome** de cada **estado**, seguida de seu **UF**. Por exemplo:

```javascript
["Nome da Cidade – UF", "Nome da Cidade – UF", ...];
```

7. Criar **método** que imprima no `console` a **cidade de maior nome** entre **todos os estados**, seguido do seu **UF**. Exemplo:

```javascript
"Nome da Cidade – UF";

```

8. Criar **método** que imprima no `console` a **cidade de menor nome** entre **todos os estados**, seguido do seu **UF**. Exemplo:

```javascript
"Nome da Cidade – UF";

```

**Observações**:

- Nos itens que tratam a respeito do tamanho do **nome da cidade**, em caso de **empate** no **tamanho entre várias cidades**, você deve considerar a **ordem alfabética** para ordenar as cidades pelo seu **nome**, e então **retornar a primeira cidade**.
- Você deve **considerar os nomes das cidades da forma que estão no arquivo**, mesmo que tenha **observações no nome entre parênteses**. Exemplo: _Cidade X (antiga Cidade Y)_.
- Ao rodar o projeto, ele **deve executar os métodos em sequência** e depois **finalizar a execução**.
