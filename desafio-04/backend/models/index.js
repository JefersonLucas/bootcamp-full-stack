/** Atividade 04:
 * 2. Nessa mesma instalação deverá ser implementada a lógica no controller, utilizando o schema criado.
 */
import mongoose from "mongoose";
import gradeModel from "./gradeModel.js";

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGODB;
db.grade = gradeModel(mongoose); // Implementando a função de modelo de Grade

export { db };
