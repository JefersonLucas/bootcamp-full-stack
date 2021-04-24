// Importação de bibliotecas
import mongoose from "mongoose";

// Importando configurações
import { settings } from "../config/accountConfig.js";

// Desestruturando as configurações e logs
const { user, password, cluster, database, filter } = settings;
const { log } = console;

// Montando string de conexão
const URI = `mongodb+srv://${user}:${password}@${cluster}.earhx.mongodb.net/${database}?${filter}`;

// Conectando ao MongoDB pelo Mongoose
const connectMongoDB = async () => {
  try {
    const connection = await mongoose.connect(
      // Passando a string de conexão
      URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    );
    // Log de sucesso
    log(`\u001b[0m[2/2] \x1b[32mDatabase connection started successfully\n`);
    log(`\u001b[0mType \x1b[34mCtrl + C\u001b[0m to end the session...`);
    // Retornando a conexão
    return connection;
  } catch (error) {
    // Log de erro
    log(`\u001b[31mError connecting to the database`);
    log(`\n\x1b[0m${error}\n`);
    log(`\u001b[0mType \x1b[34mCtrl + C\u001b[0m to end the session...`);
  }
};

// Exportação da Conexão
export { connectMongoDB };
