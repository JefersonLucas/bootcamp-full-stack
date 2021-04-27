import { db } from "../models/index.js";
import { logger } from "../config/logger.js";

/** Atividade 04:
 * 2. Implementando a lógica no controller, utilizando o schema criado.
 *
 * **Obs**.: Tudo o que precisa manipular na coleção de "grade", vamos usar essa constante.
 */
const Grade = db.grade;

const create = async (req, res) => {
  const { name, subject, type, value } = req.body;
  const grade = new Grade({
    name: name,
    subject: subject,
    type: type,
    value: value,
  });

  try {
    // Fazendo a persistência dos dados
    await grade.save(grade);
    // Enviando a resposta
    res.send({ message: "Grade inserido com sucesso" });

    logger.info(`POST /grade - ${JSON.stringify()}`);
  } catch (error) {
    res
      .status(500)
      .send({ message: error.message || "Algum erro ocorreu ao salvar" });
    logger.error(`POST /grade - ${JSON.stringify(error.message)}`);
  }
};

const findAll = async (req, res) => {
  const name = req.query.name;

  //condicao para o filtro no findAll
  var condition = name
    ? { name: { $regex: new RegExp(name), $options: "i" } }
    : {};

  try {
    // Passando a `condition` no `find`
    const grade = await Grade.find(condition);
    // Retorno
    res.send(grade);
    logger.info(`GET /grade`);
  } catch (error) {
    res
      .status(500)
      .send({ message: error.message || "Erro ao listar todos os documentos" });
    logger.error(`GET /grade - ${JSON.stringify(error.message)}`);
  }
};

const findOne = async (req, res) => {
  const id = req.params.id;

  try {
    // Fazendo a busca por id
    const grade = await Grade.findById(id);
    // Validação
    if (grade.length < 1) {
      res.statu(404).send({ message: `Grade do id ${id} não encontrado` });
    } else {
      // Retorno
      res.send(grade);
    }

    logger.info(`GET /grade - ${id}`);
  } catch (error) {
    res.status(500).send({ message: "Erro ao buscar o Grade id: " + id });
    logger.error(`GET /grade - ${JSON.stringify(error.message)}`);
  }
};

const update = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Dados para atualizacao vazio",
    });
  }

  const id = req.params.id;

  try {
    // Fazendo a busca pelo o id e retornando o documento atualizando
    const grade = await Grade.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    // Validação
    if (grade.length < 1) {
      res
        .statu(404)
        .send({ message: `Grade do id ${id} não encontrado para atualização` });
    } else {
      // Retorno
      res.send(grade);
    }

    logger.info(`PUT /grade - ${id} - ${JSON.stringify(req.body)}`);
  } catch (error) {
    res.status(500).send({ message: "Erro ao atualizar a Grade id: " + id });
    logger.error(`PUT /grade - ${JSON.stringify(error.message)}`);
  }
};

const remove = async (req, res) => {
  const id = req.params.id;

  try {
    // Buncando pelo o id e removendo
    const grade = await Grade.findByIdAndRemove(id);

    // Validação
    if (grade.length < 1) {
      res
        .statu(404)
        .send({ message: `Grade do id ${id} não encontrado para exclusão` });
    } else {
      // Retorno
      res.send({ message: "Grade excluido com sucesso" });
    }

    logger.info(`DELETE /grade - ${id}`);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Nao foi possivel deletar o Grade id: " + id });
    logger.error(`DELETE /grade - ${JSON.stringify(error.message)}`);
  }
};

const removeAll = async (req, res) => {
  try {
    // Excluindo todas as Grades
    const grade = await Grade.deleteMany({});
    // Validação
    if (grade.length < 1) {
      res.statu(404).send({ message: `Não existe grades para exclusão` });
    } else {
      // Retorno
      res.send({ message: "Grades excluido com sucesso" });
    }
    logger.info(`DELETE /grade`);
  } catch (error) {
    res.status(500).send({ message: "Erro ao excluir todos as Grades" });
    logger.error(`DELETE /grade - ${JSON.stringify(error.message)}`);
  }
};

export default { create, findAll, findOne, update, remove, removeAll };
