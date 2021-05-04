# Desafio do Módulo 05

## Objetivos

Exercitar os seguintes conceitos trabalhados nos Módulos 01 a 04:

- [x] Implementação de algoritmos com **JavaScript**.
- [x] Criação de APIs com **Node.js** e **Express**.
- [x] Criação de componentes com **React** com _Class Components_ e/ou _Functional Components_.
- [x] Persistência de dados com **MongoDB** e **Mongoose**.
- [x] Implantação de aplicações web com **Heroku**.

## Enunciado

Criar uma aplicação web para **Controle Financeiro Pessoal** com **MongoDB** + **Node.js** + **React** e implantação no **Heroku**.

## Atividades

Os alunos deverão desempenhar as seguintes atividades:

### Etapa 01 – Criação de Database e Collection no MongoDB e importação dos dados originais

1. **Pré-requisitos**: o aluno já deve ter instalado o **Node.js** (recomenda-se a versão [12.9.1](https://nodejs.org/download/release/v12.19.1/) ou superior) e o **Yarn** (recomenda-se a versão [1.22.4](https://github.com/yarnpkg/yarn/releases/tag/v1.22.4) ou superior, desde que se mantenha a versão 1.x) em seu computador. Além disso, o aluno já deve possuir sua conta devidamente criada no serviço [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) e já ter criado o seu Cluster gratuito. Para não ter problemas com conexões, configure o cluster para aceitar conexões de 0.0.0.0. Isso pode ser feito através da tela "Network Access".

![Example 01](./images/example-01.jpg)

2. Acesse o Cluster já criado no MongoDB Atlas. Em seguida, acesse a tela de **Collections** e crie um novo **Database**, conforme imagem abaixo. **Sugere-se que o aluno utilize os** <u>**mesmos nomes que utilizei**</u>, **pois eles serão utilizados durante todo este tutorial**. Nomes diferentes podem o confundir durante o desenvolvimento do desafio, tornando mais difícil o suporte nos fóruns.

![Example 02](./images/example-02.jpg)

- **Database Name** – `DesafioFinalBootcampFullStack`
- **Collection Name** – `transactions`

3. Certifique-se de que tanto o **Database** quanto a **Collection** foram devidamente criados.

![Example 03](./images/example-03.jpg)

4. Acesse a aplicação Node.js fornecida pelo professor no "**Fórum de Avisos**" do Módulo (projeto "**mongodb-import**") e execute o comando **yarn** para instalar todas as dependências já definidas em `package.json`. Crie o arquivo "`.env`" na raiz do projeto e preencha "`DB_CONNECTION`" com os dados pertinentes ao <u>**seu**</u> **Banco de Dados**. As dicas de como preencher o arquivo "`.env`" estão no arquivo "`.env.example`". Há um comentário iniciado por `#` na linha 1 com um exemplo de preenchimento e um template para ser copiado/colado no arquivo "`.env`". Muito cuidado com o preenchimento dos valores. **Caracteres maiúsculos e minúsculos** <u>**são**</u> **considerados!**

```makefile
# Exemplo: DB_CONNECTION="mongodb+srv://root:123456@rusha458tpl.mongodb.net/DesafioFinalBootcampFullStack?retryWrites=true&w=majority"
DB_CONNECTION="mongodb+srv://<usuario>:<senha>@<host_com_final_.mongodb.net>/<cluster>?retryWrites=true&w=majority"
```

5. Acesse a pasta do projeto "`mongodb-import/`" no seu terminal de comandos e execute o seguinte comando: "`yarn db`". Caso ocorra algum problema, verifique novamente os passos acima. Se tudo correr bem, a seguinte saída aparecerá no terminal e os dados originais do projeto serão copiados para o seu Banco de Dados.

```
yarn db
yarn run v1.22.10
$ node populateMongoDb.js
Iniciando conexão ao MongoDB...
Conectado ao MongoDB
Eliminando as collections...
Recriando as collections...
Preenchendo os documentos das collections...
Processamento finalizado!
Done in 7.01s.
```

6. Confirme se os dados apareceram em sua conta no **MongoDB Atlas**. Recarregue a tela se necessário.

![Example 04](./images/example-04.jpg)

7. **<u>Observação muito importante</u>**: a execução deste script de importação deve ser feita novamente antes do aluno preencher o **Questionário sobre o Desafio Final**, pois serão considerados os **dados originais**. Não modifique os arquivos do projeto "`mongodb-import/`", principalmente os de extensão `.json`, senão isso pode te prejudicar na resolução das questões. O arquivo que é utilizado na importação é o "`./official-db/transactionsArray.json`". Caso esse arquivo seja modificado, você pode obter novamente o projeto no "**Fórum de Avisos**" ou então acessar a pasta "`./backup`". Há uma cópia desse arquivo por lá.

8. Os registros importados foram gerados aleatoriamente através de combinações de descrições, categorias e valores. Além disso, ficou definido o período como: todos os meses do ano anterior, ano atual e ano posterior, totalizando ao todo 36 períodos (atualmente: de **jan/2019** até **dez/2021**, inclusive). Devo disponibilizar o código-fonte deste script para vocês no fórum durante o andamento do Módulo.

9. **<u>Observação importante</u>**: na geração do arquivo original, houve uma pequena falha e alguns registros com a descrição **“Receita** xyz...” foram criados como **despesa**. Vocês devem considerar que as **receitas** são os registros com **type === '+'** e as **despesas** são os registros com o **type === '-'**. Desconsiderem a descrição. Na aula interativa demonstrarei o bug. Preferi manter o arquivo original mesmo assim para evitar algum tipo de conflito no Desafio Final.

10. Fim da etapa 01!

### Etapa 02 – Implementação do Back End:

1. Recomendo utilizar como base o projeto `app-vazio/`, que será disponibilizado no **Fórum de Avisos**. Nos itens a seguir, falarei mais sobre esse projeto.

2. Acesse a pasta `app-vazio/` após a extração em alguma pasta no seu computador. Renomeie a pasta para `app/`.

3. Acesse a pasta `app/` através de um terminal de comandos e digite o comando `yarn` para instalar as dependências.

4. Verifique, estude e entenda as pastas e arquivos já contidos neste projeto:

```
app/
├── client/
├── models/
│   └── TransactionModel.js
├── routes/
│   └── routes.js
├── services/
│   └── transactionService.js
├── .env
├── .gitignore
├── .npmrc
├── index.js
├── package.json
└── yarn.lock
```

- Pasta `client/`: contém o projeto React (Front End). É o mesmo "`react-projetobase`", disponibilizado durante o Módulo 03 do Bootcamp. Mais detalhes sobre a implementação com React serão vistos na **Etapa 3**.
- Pasta `models/`: contém o arquivo `TransactionModel.js`, referente ao **Schema Mongoose** para a Collection **transaction**. <u>**Este arquivo já foi implementado pelo professor**</u>. Entretanto, nada impede o aluno de modificá-lo e adaptá-lo às suas necessidades.
- Pasta `routes/`: contém o arquivo `routes.js` e deve conter as rotas, que deverão ser implementadas pelo aluno.
- Pasta `services/`: contém o arquivo `transactionService.js` e deve conter a persistência de dados com o **MongoDB**, a ser também implementado pelo aluno.
- Arquivo `.env`: deverá ser criado pelo aluno e conter a String de conexão ao MongoDB `DB_CONNECTION`, assim como foi feito na etapa anterior.
- Arquivo `.npmrc`: foi **criado pelo professor** e contém uma configuração do NPM, que faz com que as dependências sejam instaladas em sua versão **exata** (_saveexact_). Isso garante, em regra, mais estabilidade de apps em produção.
- Arquivo `index.js`: é onde tudo começa. Já há uma implementação de **configurações** do `express` e da conexão com o **MongoDB**. Basta garantir que a String `DB_CONNECTION` esteja devidamente preenchida no arquivo `.env`.

5. Verifique, estude e entenda mais alguns detalhes importantes sobre o arquivo `index.js`:

```js
/**
 * Vinculando o React ao app
 */
app.use(express.static(path.join(__dirname, "client/build")));
```

<p align="center">
  Este trecho de código faz com que o express hospede o React de produção (após o build).
</p>

```js
/**
 * Rota raiz
 */
app.get("/api/", (_, response) => {
  response.send({
    message:
      "Bem-vindo à API de lançamentos. Acesse /transaction e siga as orientações",
  });
});

/**
 * Rota principais do app
 */
app.user("/api/transactioin", routes);
```

<p align="center">
  Este trecho de código faz com que a API principal do Back End (`transaction`) fique hospedada em <a href='http://"meu_site_no_heroku".herokuapp.com/api/transaction'>http://"meu_site_no_heroku".herokuapp.com/api/transaction</a>
</p>

```js
/**
 * Definição de porta e inicialização do app
 */
const APP_PORT = process.env.PORT || 3001;

app.listen(APP_PORT, () => {
  console.log(`Servidor iniciado na porta ${APP_PORT}`);
});
```

<p align="center">
  Neste trecho de código perceba que foi priorizado o valor de <code>process.env.PORT</code> para ser utilizado como porta do servidor de Back End. Isso será utilizado pelo <b>Heroku</b> em <b>produção</b>. Em <b>desenvolvimento</b>, será adotada a porta <code>3001</code>, pois não há a variável <code>PORT</code> no arquivo <code>.env</code> local.
</p>

6. Verifique, estude e entenda alguns detalhes importantes sobre o arquivo `package.json`:

```json
"scripts": {
  "server": "nodemon index.js",
  "start": "node index.js",
  "heroku-postbuild": "cd client && npm install && npm run build"
}
```

<p align="center">
  Para executar o servidor local, digite <code>yarn server</code>, que irá utilizar o Nodemon para tal.
</p>

O script `heroku-postbuild` será utilizado pelo **Heroku CLI** para realizar o **build** da aplicação **React**. Mais detalhes serão vistos na documentação da **Etapa 4**.

```json
"nodemonConfig": {
  "ignore": [
    "client/"
  ]
}
```

Configuração importante do **Nodemon** para que ele não "escute" a pasta do React, pois ela já tem um servidor próprio de desenvolvimento. Sem isso, qualquer alteração no projeto React acarreta no reinício do servidor de Back End durante o desenvolvimento, o que não é desejável.

```json
"engines": {
  "node": "12.9.1"
}
```

Configuração importante do **Heroku** para que ele utilize a mesma versão do Node.js de desenvolvimento em produção. Se a sua versão do Node.js for **diferente** de [12.9.1](https://nodejs.org/download/release/v12.19.1/), faça a devida alteração nesse objeto de package.json e informe a versão que você está utilizando. Recomenda-se, entretanto, utilizar a versão [12.9.1](https://nodejs.org/download/release/v12.19.1/). Ela foi homologada por
mim durante o desenvolvimento deste projeto.

7. Ainda na pasta raiz do projeto, execute `yarn server` para inicializar o Back End de desenvolvimento. Caso ocorra algum problema, verifique novamente os passos acima. Se tudo correr bem, serão exibidas as seguintes mensagens no console:

```bash
yarn server
yarn run v1.22.10
$ nodemon index.js
[nodemon] 2.0.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node index.js`
Iniciando conexão ao MongoDB...
Conectado ao MongoDB
Servidor iniciado na porta 3001
```

8. **<u>Observação muito importante</u>**: o **GET** de **transaction** deve considerar **obrigatoriamente** o **período** (**ano-mês**) com base no campo **yearMonth**. Ou seja, o **período deve ser obrigatoriamente informado** nesse tipo de **rota**. Isso deve ser implementado pelo aluno no arquivo `routes.js`.

![Example 05](./images/example-05.jpg)

<p align="center">
  Requisição <b>incorreta</b>, pois não foi informado o parâmetro <code>period</code>.
</p>

![Example 06](./images/example-06.jpg)

<p align="center">
  Requisição <b>correta</b>, pois foi informado o parâmetro <code>period</code>.
</p>

9. Agora é com você, aluno(a)! Faça as implementações pendentes em **routes.js** e `transactionService.js` com base no conteúdo visto nos Módulos 02 e 04 do Bootcamp. Sugiro também testar as **rotas** com o **Insomnia** e verificar se todo o **CRUD** está sendo de fato refletido no **MongoDB**. Fique à vontade para implementar o código da maneira que preferir. <u>**Observação importante: considere que todos os campos de "transaction" são obrigatórios!**</u>

10. Fim da Etapa 02!

### Etapa 03 – Implementação do Front End com React:

1. O Front End deve ser implementado a partir da pasta "`client/`". Lá se encontram os mesmos arquivos do "`_react-projeto-base/`", que disponibilizei durante o Módulo 03.

2. Fica a critério do aluno a definição da **interface**. As telas a seguir são somente uma sugestão de interface que foi implementada pelo professor.

3. Acesse a pasta `client/` e digite `yarn` para instalar as dependências do projeto que são, além dos pacotes relacionados ao `create-react-app`:

- Pacote **materialize-css**.
- Pacote **axios**.
- Pacote **react-modal**.

O arquivo `package.json` também foi modificado pelo professor, conforme imagem abaixo. Isso é importante para os casos onde tanto o Back End quanto o Front End estão hospedados no mesmo servidor, que é o caso deste projeto. Mais informações podem ser encontradas [aqui](https://create-react-app.dev/docs/proxying-api-requests-in-development/).

```json
{
  "name": "react-client",
  "version": "1.0.0",
  "private": true,
  "proxy": "http://localhost:3001",
  "dependencies": {
    "@testing-library/jest-dom": "4.2.4",
    "@testing-library/react": "9.3.2",
    "@testing-library/user-event": "7.1.2",
    "axios": "0.19.2",
    "materialize-css": "1.0.0",
    "react": "16.13.1",
    "react-dom": "16.13.1",
    "react-modal": "3.11.2",
    "react-scripts": "3.4.1"
  },
```

5. A implementação é <u>**obrigatória**</u> para as seguintes **funcionalidades** no Front End, pois elas serão testadas no questionário de entrega do projeto do Desafio Final.

- **Navegação** de transações **agrupadas por mês/ano** (semelhante às rotas do Back End).
- **Filtro simples** a partir da **descrição da transação**. <u>**Acentos e caracteres especiais devem ser considerados no filtro**</u>.
- Resumo com a **quantidade de lançamentos, somatório** de valores de **receita**, **despesa** e **saldo agrupados** por **mês/ano**.

6. Algumas telas **sugeridas** para a aplicação Front End:

![Example 07](./images/example-07.jpg)

<p align="center">
  Estado inicial da tela (mês corrente).
</p>

![Example 08](./images/example-08.jpg)

<p align="center">
  Seleção de períodos através de <code>select</code>.
</p>

![Example 09](./images/example-09.jpg)

<p align="center">
  Edição de lançamentos, que <b>não</b> permite a troca do tipo (receita/despesa).
</p>

![Example 10](./images/example-10.jpg)

<p align="center">
  Inclusão de lançamentos.
</p>

![Example 11](./images/example-11.jpg)

<p align="center">
  Filtro de lançamentos a partir da descrição.
</p>

7. A exclusão de lançamentos pode ser implementada através do simples clique no ícone que representa a "Lixeira", conforme imagem acima.

8. **Dica**: na minha implementação utilizei a tag `<select>` nos períodos, que no React tem o funcionamento um pouco **diferente do HTML padrão**. Mais detalhes podem ser vistos [aqui](https://reactjs.org/docs/forms.html#the-select-tag). Persistindo dúvidas, não deixem de perguntar no fórum. Demonstrarei, na aula interativa, como ativar o JavaScript do Materialize. Isso pode ser necessário caso o aluno queira o comportamento padrão da tag `<select>`. Como contorno, basta acrescentar a classe **browser-default** que o Materialize irá ignorar a tag.

9. Fim da Etapa 03!

### Etapa 04 – Inclusão do código-fonte no GitHub e implantação no Heroku:

1. Crie um repositório no GitHub e hospede o app por lá. Siga as instruções vistas durante o Módulo 04.

2. Quanto à implantação, certifique-se de que você já possui uma conta no Heroku e que a ferramenta Heroku CLI esteja devidamente instalada em seu computador.

- Teste com o seguinte comando: `heroku -v`:

```bash
heroku -v
heroku/7.52.0 win32-x64 node-v14.16.0
```

3. Acesse a pasta **app** e faça o login no **Heroku** com o comando `heroku login`. **Atenção**: por algum motivo que desconheço, a tela de login do **Heroku** não ficou bem visível no **Cmder** do **meu computador com Windows 10**. Se acontecer com você, faça o login no prompt de comando padrão do Windows.

```bash
heroku login
Enter your Heroku credentials:
Email: example@email.com
Password: #examplepassword12345
Logged in as example@email.com
```

4. Crie um projeto no Heroku com o comando `heroku create nome_do_projeto`. Sugiro **"identificador-pessoal"-desafio-final**. O nome do projeto deve ser **único** e possuir, no máximo, 30 caracteres. Caso não se importe com o nome, digite apenas `heroku create` que o próprio **Heroku** define um nome único para você.

```bash
heroku create rush-desafio-final
Creating rush-desafio-final... done
https://rush-desafio-final.herokuapp.com/ | https://git.hekoku.com/rush-desafio-final.git/
```

5. Acesse o site do Heroku e inclua a variável de ambiente `DB_CONNECTION`, que foi definida no arquivo `.env`, seguindo as imagens abaixo em sequência:

![Example 12](./images/example-12.jpg)

<p align="center">
  Acesse o seu projeto recém-criado.
</p>

![Example 13](./images/example-13.jpg)

<p align="center">
  Acesse "Settings".
</p>

![Example 14](./images/example-14.jpg)

<p align="center">
  Acesse "Reveal Config Vars".
</p>

![Example 15](./images/example-15.jpg)

<p align="center">
  Preencha <code>DB_CONNECTION</code> e a String de conexão (sem aspas duplas) e clique em "Add".
</p>

6. Volte ao terminal e digite os seguintes comandos, conforme a ordem abaixo. Verifique a imagem abaixo com a saída de cada comando (alguns deles estão resumidos). Esses comandos se referem à implantação no **Heroku**, que pode ser feita via **git**.

- `git init`
- `heroku git:remote -a "nome-do-seu-projeto"`
- `git add`
- `git commit -m "heroku"`
- `git push heroku master`

```bash
git init
Initialized empty Git repository in C:/User/you-repository/
```

```bash
heroku git:remote -a rush-desafio-final
set git remote heroku to https://git.heroku.com/rush-desafio-final.git
```

```bash
git add .
```

```bash
git commit -m "heroku"
[master (root-commit) f7a2228] heroku
22 files change, 12492 insertions(+)
create mode 10064 .gitignore
create mode 10064 .npmrc
create mode 10064 client/.gitignore
create mode 10064 client/.npmrc
create mode 10064 client/README.md
create mode 10064 client/package.json
create mode 10064 client/public/favicon.ico
create mode 10064 client/public/index.html
...
```

```bash
git push heroku master
Counting objects: 29, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (26/26), done.
Wrinting objects: 100% (29/29), 221 KiB | 8.19 MiB/s, done.
Total 29 (delta 1), reused 0 (delta 0)
remote: Compressing source files... done.
remote: Bulding source:
remote:
remote: --------> Node.js app detected
remote:
remote: --------> Creating runtime enviroment
...
```

```bash
remote:           Released v4
remote:           https://rush-desafio-final.herokuapp.com/ deployed to Heroku
remote:
remote: Verifying deploy... done.
To https://git.heroku.com/rush-desafio-final.git
 * [new branch]         master -> master
```

7. Se tudo deu certo, o app estará disponível conforme imagem abaixo.

![Example 16](./images/example-16.jpg)

<p align="center">
  Neste exemplo, o app ainda está "vazio". 
</p>

A API pode ser acesada em: [http://nome-do-projeto.herokuapp.com/api/](http://nome-do-projeto.herokuapp.com/api/).

8. Caso ocorra algum erro, verifique os passos anteriores. Caso persista o erro, volte ao terminal e digite `heroku logs --tail`. Digite `Ctrl + C` para cancelar a visualização do log. Esse log é muito importante para vocês postarem no fórum caso precisem de nosso apoio, por exemplo.

9. Caso efetuem alguma modificação no código-fonte, façam tanto o `push` no **Github** quanto o `push` no **Heroku**. Para o `push` no **Heroku** digite, após o commit, `git push heroku master`.

10. O intuito deste extenso tutorial foi de evitar todos os problemas que enfrentei ao configurar o **MongoDB** e também ao publicar o app no **Heroku**. Tentei deixar o mais detalhado possível para que vocês, alunos, foquem mais na implementação deste desafio.

11. Fim da Etapa 04!

### Considerações importantes

- Desta vez, o material mais importante é a documentação. Leia-a com bastante atenção.
- Há um pequeno problema nos dados de lançamentos - há diversos lançamentos cuja descrição e categoria são "**Receita XXXX**" mas que na verdade são **despesas**. Sim, foi falha no meu programa de geração dos dados aleaórios. Já peço desculpas de antemão. Entretanto, isso **não vai prejudicar as questões do Desafio Final**. É perfeitamente possível, na vida real, cadastrar uma receita com a descrição "Almoço" e uma despesa com a descrição "Salário", por exemplo. O que vale aqui, no fim das contas, é o atributo type, que pode ser '-' (despesa) ou '+' (receita). Esse é o atributo que deve servir de referência nos cálculos de total de despesas e receita por mês, combinado?
- Boa parte do backend já está pronta, como vocês podem ver no material de apoio.
- Implementem primeiramente o backend e testem as rotas com o Insomnia. Boa parte do backend já está feita.
- Em seguida, implementem o Front End sem se preocupar tanto com a interface no primeiro momento. Foquem nos dados corretos e filtrados por período, CRUD e totalizadores.
- Fazendo as duas etapas acima, vocês já estão aptos a responderem o questionário final.
- Após responderem o Questionário, façam com mais calma as melhorias de interface e implantação no Heroku. Aproveitem para adicionar o projeto ao portfólio pessoal de vocês.
- Caso algum problema surja durante o perído do Desafio Final, aviso por aqui. Bons estudos!

## Repositórios e Deploy

Por conta dos repositórios ter que serem separados, os repositórios e deploys estão separados da seguinte forma:

- **Backend**
  - Repositório remoto: [GitHub](https://github.com/JefersonLucas/desafio-05-app);
  - Deploy: [Heroku]().
- **Frontend**
  - Repositório remoto: [GitHub]();
  - Deploy: [Heroku]().
