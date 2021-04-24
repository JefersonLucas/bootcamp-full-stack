// Importação de bibliotecas
import mongoose from "mongoose";

// Criação do modelo
const accountSchema = mongoose.Schema({
  agencia: {
    type: Number,
    require: true,
  },
  conta: {
    type: Number,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  balance: {
    type: Number,
    require: true,
    // Função de validação
    validate(balance) {
      if (balance < 0) {
        throw new Error("Valor negativo para o saldo não é permitido!");
      }
    },
    // Definindo o valor mínimo
    min: 0,
  },
});

// Definindo o modelo da coleção
const accountModel = mongoose.model("account", accountSchema, "account");

// Exportando o modelo
export { accountModel };
