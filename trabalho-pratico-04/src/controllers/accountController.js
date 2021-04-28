// Importação de modelos
import { accountModel as Account } from "../models/accountModel.js";

/** Rota inicial:
 * essa rota irá buscar todos os dados da coleção do MongoDB.
 */
const activity00 = async (_, response) => {
  try {
    // Obtendo a informação do Request
    const account = await Account.find({});

    // Retorno de sucesso!
    response.send(account);

    // Finalizando a seção
    response.end();
  } catch (error) {
    // Retorno de erro
    response.status(500).send({ error: error.message });
  }
};

/** Atividade 04:
 * 1. Crie um endpoint para registrar um depósito em uma conta.
 * 2. Esse endpoint deverá receber como parâmetros a "agencia", o "número da conta" e o "valor do depósito".
 * 3. Ele deverá atualizar o "balance" da conta, incrementando-o com o valor recebido como parâmetro.
 * 4. O endpoint deverá validar se a conta informada existe, caso não exista deverá retornar um erro, caso exista retornar o saldo atual da conta.
 */

const activity04 = async (request, response) => {
  // Pegando o objeto da requisição
  const account = request.body;

  try {
    // Validação da requisição
    let newAccount = await validate(account);
    // Incrementadno o novo valor de `balance`
    newAccount.balance += account.balance;
    // Instanciando um novo modelo Account
    newAccount = new Account(newAccount);
    // Salvando o novo modelo account com a operação realizada
    await newAccount.save();
    // Retornando o `balance` da conta
    response.send({ balance: newAccount.balance });
    // Finalizando a seção
    response.end();
  } catch (error) {
    // Retorno de erro
    response.status(500).send({ "Erro ao efetuar o deposito": error.message });
  }
};

/** Atividade 05.
 * 1. Crie um endpoint para registrar um saque em uma conta.
 * 2. Esse endpoint deverá receber como parâmetros a "agência", o número da "conta" e o valor do "saque".
 * 3. Ele deverá atualizar o “balance” da conta, decrementando-o com o valor recebido com parâmetro e cobrando uma tarifa de saque de (1).
 * 4. O endpoint deverá validar se a conta informada existe, caso não exista deverá retornar um erro, caso exista retornar o saldo atual da conta.
 * 5. Também deverá validar se a conta possui saldo suficiente para aquele saque, se não tiver deverá retornar um erro, não permitindo assim que o saque fique negativo.
 */

const activity05 = async (request, response) => {
  // Pegando o objeto da requisição
  const account = request.body;
  try {
    // Validação da requisição
    let newAccount = await validate(account);
    // Atualizando o "balance" da conta, decrementando-o com o valor recebido com parâmetro e cobrando uma tarifa de saque de (1).
    newAccount.balance -= account.balance + 1;
    // Validando o "balance" da conta, se a conta possui saldo suficiente para aquele saque, se não tiver deverá retornar um erro, não permitindo assim que o saque fique negativo.
    if (newAccount.balance < 0) {
      throw new Error("Saldo insuficiente");
    }
    // Instanciando um novo modelo Account
    newAccount = new Account(newAccount);
    // Salvando esse novo modelo account com a operação realizada
    await newAccount.save();
    // Retornando o `balance` da conta
    response.send({ balance: newAccount.balance });
    // Finalizando a seção
    response.end();
  } catch (error) {
    // Retorno de erro
    response.status(500).send({ "Erro ao efetuar o saque": error.message });
  }
};

/** Atividade 06:
 * 1. Crie um endpoint para consultar o saldo da conta.
 * 2. Esse endpoint deverá receber como parâmetro a "agência" e o número da "conta", e deverá retornar seu "balance".
 * 3. Caso a conta informada não exista, retornar um erro.
 */

const activity06 = async (request, response) => {
  // Pegando os parâmetros da requisição
  const agencia = request.params.agencia;
  const conta = request.params.conta;
  try {
    // Validação da requisição
    const account = await validate({ agencia, conta });
    // Retornando o `balance` da conta
    response.send({ balance: account.balance });
    // Finalizando a seção
    response.end();
  } catch (error) {
    // Retorno de erro
    response.status(500).send({ "Erro ao consultar o saldo": error.message });
  }
};

/** Atividade 07:
 * 1. Crie um endpoint para excluir uma conta.
 * 2. Esse endpoint deverá receber como parâmetro a “agência” e o número da conta e retornar o número de contas ativas para esta agência.
 */

/** Atividade 08:
 * 1. Crie um endpoint para realizar transferências entre contas.
 * 2. Esse endpoint deverá receber como parâmetro o número da “conta” origem, o número da “conta” destino e o valor de transferência.
 * 3. Esse endpoint deve validar se as contas são da mesma agência para realizar a transferência, caso seja de agências distintas o valor de tarifa de transferência (8) deve ser debitado na conta origem.
 * 4. O endpoint deverá retornar o saldo da conta origem.
 */

/** Atividade 09:
 * 1. Crie um endpoint para consultar a média do saldo dos clientes de determinada agência.
 * 2. O endpoint deverá receber como parâmetro a “agência” e deverá retornar o balance médio da conta.
 */

/** Atividade 10:
 * 1. Crie um endpoint para consultar os clientes com o menor saldo em conta.
 * 2. O endpoint deverá receber como parâmetro um valor numérico para determinar a quantidade de clientes a serem listados, e o endpoint deverá retornar em ordem crescente pelo saldo a lista dos clientes (agência, conta, saldo).
 */

/** Atividade 11:
 * 1. Crie um endpoint para consultar os clientes mais ricos do banco.
 * 2. O endpoint deverá receber como parâmetro um valor numérico para determinar a quantidade de clientes a serem listados, e o endpoint deverá retornar em ordem decrescente pelo saldo, crescente pelo nome, a lista dos clientes (agência, conta, nome e saldo).
 */

/** Atividade 12:
 * 1. Crie um endpoint que irá transferir o cliente com maior saldo em conta de cada agência para a agência private agencia=99.
 * 2. O endpoint deverá retornar a lista dos clientes da agencia private.
 */

/** Validador:
 * valida se existe agencia e conta.
 */

const validate = async (account) => {
  // Desestruturando a agencia e a conta
  const { agencia, conta } = account;
  // Montando um objeto account
  account = { agencia, conta };
  try {
    // Validação
    if (typeof account.agencia !== "undefined") {
      account = await Account.findOne(account);
    } else {
      account = await Account.findOne({ conta: account.conta });
    }
    if (!account) {
      throw new Error(`(${agencia}/${conta}) agencia/conta inválida!`);
    }
    // Retorno da conta
    return account;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Exportação
export default {
  activity00,
  activity04,
  activity05,
  activity06,
};
