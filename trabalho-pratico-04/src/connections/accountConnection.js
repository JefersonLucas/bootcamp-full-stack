// Importação de bibliotecas
import mongoose from "mongoose";

// Importando configurações
import { settings } from "../config/accountConfig.js";

// Desestruturando as configurações e logs
const { user, password, cluster, database, filter } = settings;
const { log } = console;

// Montando string de conexão
const URI = `mongodb+srv://${user}:${password}@${cluster}.earhx.mongodb.net/${database}?${filter}`;

// Cores do console
let white = "\u001b[0m";
let red = "\u001b[31m";
let green = "\x1b[32m";
let blue = "\x1b[34m";

// Conectando ao MongoDB pelo Mongoose
const connectMongoDB = async () => {
  try {
    const connection = await mongoose.connect(
      // Passando a string de conexão com o MongoDB Atlas
      URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    );

    // Log de sucesso
    log(`${white}[2/2] ${green}Database connection started successfully\n`);
    log(`${white}Type ${blue}Ctrl + C${white} to end the session...\n`);
    // Retornando a conexão
    return connection;
  } catch (error) {
    // Log de erro
    log(`${red}Error connecting to the database`);
    log(`\n${white}${error}\n`);
    log(`${white}Type ${blue}Ctrl + C${white} to end the session...\n`);
  }
};

// Exportação da Conexão
export { connectMongoDB };
