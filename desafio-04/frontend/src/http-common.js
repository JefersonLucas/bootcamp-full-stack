import axios from "axios";

//Define a URL base da origem para consumo do servico
export default axios.create({
  baseURL: "https://desafio-04-backend.herokuapp.com/", // Link de origem do backend
  headers: {
    "Content-type": "application/json",
  },
});
