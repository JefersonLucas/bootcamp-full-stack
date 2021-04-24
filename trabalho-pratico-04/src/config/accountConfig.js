// Importação de bibliotecas
import dotenv from "dotenv";

// Configuração do dotenv
dotenv.config();

// Definição de um Objeto `config`
const dbConfig = {};

// Variáveis de ambientes passadas para o Objeto
dbConfig.user = process.env.DB_USER;
dbConfig.password = process.env.DB_PASSWORD;
dbConfig.cluster = process.env.DB_CLUSTER;
dbConfig.database = process.env.DB_DATABASE;
dbConfig.filter = process.env.DB_FILTER;

// Exportação das configurações
export { dbConfig };
