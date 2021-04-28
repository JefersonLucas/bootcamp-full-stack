/** Atividade 04:
 * 1. Criar um novo branch denominado ‘`feature/modeloMongoose`’ e implementar neste novo branch um modelo de dados, utilizando o mongoose para a sua API.
 */

// Exportando essa função como default
export default (mongoose) => {
  const schema = mongoose.Schema({
    name: String,
    subject: String,
    type: String,
    value: {
      type: Number,
      min: 0,
    },
    lastModified: {
      type: Date,
      default: Date.now,
    },
  });

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();

    object.id = _id;

    return object;
  });

  // Criação do modelo com o mongoose
  const Grade = mongoose.model(
    "grade", // Qual coleção o mongoose vai estar vinculando
    schema, // Qual schema o mongoose está anexando
    "grade", // Evitanto que o MongoDB coloque a coleção em plural
  );
  // Retornando a Grade
  return Grade;
};
