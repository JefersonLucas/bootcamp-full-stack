/*
 * Variáveis globais
 */

const loader = document.querySelector("#loader");
const usersForm = document.querySelector("#users-form");
const usersSearch = document.querySelector("#users-search");
const submitButton = document.querySelector("#submit-button");
const filteredUsers = document.querySelector("#filtered-users");
const statisticsUsers = document.querySelector("#statistics-users");

/*
 * Tudo começa por aqui, a invocação desta função 
 * é feita na última linha de código deste arquivo
 */

function start() {
  usersForm.addEventListener("submit", handleSubmit);
}

function handleSubmit(event) {

  // Previne o evento padrão do formulário
  event.preventDefault();
  
  /*
  * Verifica se há algum valor no input.
  * Se houver, inclui uma nova classe que ativa a barra de progresso.
  * Se não, remove a barra de progresso.
  */
 
  if(event.target[0].value) {
    loader.classList.add("active-progress");
  }
  else {
    loader.classList.remove("active-progress");
  }

}

/*
 * Iniciando o app
 */

start();