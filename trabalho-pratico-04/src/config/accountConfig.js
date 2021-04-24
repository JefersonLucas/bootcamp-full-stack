// Importação de bibliotecas
import dotenv from "dotenv";

// Configuração do dotenv
dotenv.config();

// Desestruturando `process.env` que possui as variáveis de ambiente
const {
  DB_USER: USER,
  DB_PASSWORD: PASSWORD,
  DB_CLUSTER: CLUSTER,
  DB_DATABASE: DATABASE,
  DB_FILTER: FILTER,
} = process.env;

// Variáveis de ambientes passadas para o Objeto
const settings = {};

settings.user = USER;
settings.password = PASSWORD;
settings.cluster = CLUSTER;
settings.database = DATABASE;
settings.filter = FILTER;

// Exportação das configurações
export { settings };
