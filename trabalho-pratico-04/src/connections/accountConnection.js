// Importação de bibliotecas
import mongoose from "mongoose";

// Importando configurações
import { dbConfig } from "../config/accountConfig.js";

// Conectando ao MongoDB pelo Mongoose
async function connectionToMongoDB() {
  // Desestruturando as configurações
  const { user, password, cluster, database, filter } = dbConfig;
  try {
    const connection = await mongoose.connect(
      `mongodb+srv://${user}:${password}@${cluster}.earhx.mongodb.net/${database}?${filter}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    );
    console.log(
      `\u001b[34mConnected to MongoDB\n\nType Ctrl + C to end the session...`,
    );
    return connection;
  } catch (error) {
    console.log(
      `\u001b[31mError connecting to MongoDB...\n\n${error}\n\nType Ctrl + C to end the session...`,
    );
  }
}

// Exportação da Conexão
export { connectionToMongoDB };
