"use strict";

// Objeto de estado global da aplicação
const globalState = {
	users: [],
	filteredUsers: [],
}

// Variáveis de estado global da aplicação
const api = "http://localhost:3001/users";
const loader = document.querySelector("#loader");
const usersForm = document.querySelector("#users-form");
const usersSearch = document.querySelector("#users-search");
const submitButton = document.querySelector("#submit-button");
const filteredUsers = document.querySelector("#filtered-users");
const statisticsUsers = document.querySelector("#statistics-users");

// Tudo começa por aqui, a invocação desta função é feita na última linha de código deste arquivo
function start() {
	usersForm.addEventListener("submit", handleSubmit);
}

// Função que atua sobre o clique no submit
function handleSubmit(event) {

	// Previne o evento padrão do formulário
	event.preventDefault();
 
	// Verifica se há algum valor no input.
	if(event.target[0].value) {
		// Se houver, inclui uma nova classe que ativa a barra de progresso.
		loader.classList.add("active-progress");		
		// Chamada da função que faz a requisição da API
		fetchUsers(api);
		// Chamada das funções que montam a lista de usuários e estatísticas 
		filteredUsers.appendChild(returnFilteredUsers());
		statisticsUsers.appendChild(returnStatisticsUsers());
	}
	else {
		// Se não, remove a barra de progresso.
		loader.classList.remove("active-progress");
	}
}

// Fazendo um async/await na API levantada em http://localhost:3001/users
async function fetchUsers(url) {

	const response = await fetch(url);
	const json = await response.json()

	// Fazendo um mapeamento em da API 
	const fetchUsers = json.map((user) => {
		
		// Obterndo: name, picture, dob e gender da API
		const { name, picture, dob, gender } = user;
		// Retornando os valores
		return { name, picture, dob, gender }
	});

	// Inserindo valores mapeados no Objeto de estado global
	globalState.users = [...fetchUsers];

}

// Retorna as listas de Usuários Filtrados
function returnFilteredUsers() {
	// Criação dos elementos
	const ul = document.createElement("ul");
	const li = document.createElement("li")
	const h4 = document.createElement("h4");
	// Atribuição de classes e elementos internos
	ul.className = "collection with-header";
	li.className = "collection-header";
	h4.innerText = "Usuário(s) filtrado(s)";
	// Inserção dos elementos filhos
	li.appendChild(h4);
	ul.appendChild(li);
	// Retorno do elemento pai com os elementos filhos dentro do elemento pai
	return ul;

	/*
	Usuários filtrados
	
	<ul class="collection with-header">
		<li class="collection-header">
			<h4>Usuário(s) filtrado(s)</h4>
		</li>

		<li class="collection-item avatar">
			<img src="https://randomuser.me/api/portraits/thumb/women/78.jpg" alt="" class="circle">
			<span class="title">
				Nome 01
			</span>
			<p>
				01 anos
			</p>
			<p>
				Cidade 01
			</p>
			<a href="#!" class="secondary-content"><i class="material-icons">person</i></a>
		</li>
		<li class="collection-item avatar">
			<img src="https://randomuser.me/api/portraits/thumb/women/79.jpg" alt="" class="circle">
			<span class="title">
				Nome 02
			</span>
			<p>02 anos</p>
			<p>Cidade 02</p>
			<a href="#!" class="secondary-content"><i class="material-icons">person</i></a>
		</li>
	</ul> 
*/
}

// Retorna as lista de Estatísticas do Usuário

function returnStatisticsUsers() {
	// Criação dos elementos
	const ul = document.createElement("ul");
	const li = document.createElement("li")
	const h4 = document.createElement("h4");
	// Atribuição de classes e elementos internos
	ul.className = "collection with-header";
	li.className = "collection-header";
	h4.innerText = "Usuário(s) filtrado(s)";
	// Inserção dos elementos filhos
	li.appendChild(h4);
	ul.appendChild(li);
	// Retorno do elemento pai com os elementos filhos dentro do elemento pai
	return ul;

	/*
	Estatísticas

	<ul class="collection with-header">

	<li class="collection-header ">
		<h4>Estatística(s)</h4>
	</li>

	<li class="collection-item">
		<div>Sexo masculino: 0<a href="#!" class="secondary-content"><i class="material-icons">wc</i></a></div>
	</li>
	<li class="collection-item">
		<div>Sexo feminino: 0<a href="#!" class="secondary-content"><i class="material-icons">wc</i></a></div>
	</li>
	<li class="collection-item">
		<div>Soma das idades: 0<a href="#!" class="secondary-content"><i class="material-icons">plus_one</i></a></div>
	</li>
	<li class="collection-item">
		<div>Média das idades: 0<a href="#!" class="secondary-content"><i class="material-icons">trending_up</i></a></div>
	</li>

	</ul> 
*/
}

// Iniciando o app
start();