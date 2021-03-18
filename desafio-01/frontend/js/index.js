"use strict";

// Objeto de estado global da aplicação
const globalState = {
	filteredUsers: [],
	statisticsUsers: [],
	filter: "",
}

// Variáveis de estado global da aplicação
const api = "http://localhost:3001/users";
const loader = document.querySelector("#loader");
const usersForm = document.querySelector("#users-form");
const usersSearch = document.querySelector("#users-search");
const submitButton = document.querySelector("#submit-button");
const globalFilteredUsers = document.querySelector("#filtered-users");
const globalStatisticsUsers = document.querySelector("#statistics-users");

// Tudo começa por aqui, a invocação desta função é feita na última linha de código deste arquivo
async function start() {
	// Monitora se o input tem algum valor
	usersSearch.addEventListener("keyup", function(event){
		globalState.filter = event.target.value;
		returnAllUsers();
	});
	// Monitora se existe algum evento submit no formulário
	usersForm.addEventListener("submit", function(event) {
		event.preventDefault();
		globalState.filter = event.target[0].value;
		returnAllUsers();
	});
	// Chamando a função que faz o fetch da API que contém os usuários
	await fetchUsers();
	// Retornando os usuários
	returnAllUsers()
}

// Fazendo um async/await na API levantada em http://localhost:3001/users
async function fetchUsers() {
	// Obtendo a API em formato JSON
	const response = await fetch(api);
	const json = await response.json()
	// Fazendo um mapeamento em da API 
	const fetchUsers = json.map(user => {
	// Obterndo: name, picture, dob e gender da API
	const { name, picture, dob, gender } = user;
	// Retornando os valores
		return { name, picture, dob, gender }
	});
	// Inserindo valores mapeados no Objeto de estado global
	globalState.filteredUsers = [...fetchUsers];
	globalState.statisticsUsers = [...fetchUsers];
}

// Função que retorna todos os usuários
function returnAllUsers() {
	returnFilteredUsers();
	returnStatisticsUsers();
}

// Função auxiliar de `returnFilteredUsers()` que filtra os usuários
function renderUserFilter(user) {
	const { picture, name, dob } = user;

	return `
		<li class="collection-item avatar">
			<img src="${picture.thumbnail}" alt="" class="circle">
			<span class="title">
				${name.first} ${name.last}
			</span>
			<p> 
				${dob.age} anos
			</p>
			<span class="secondary-content"><i class="material-icons">person</i></span>
		</li>
	`
}

// Retorna as listas de Usuários Filtrados
function returnFilteredUsers() {
	// Extraindo todos os usuários do objeto global
	const { filteredUsers, filter } = globalState;
	// Fazendo o filtro dos usuários pelo nome
	const userFiltered = filteredUsers.filter(user => user.name.first === filter || user.name.last === filter);
	// Fazendo um mapeamento dos usuários filtrados
	const nameFilter = userFiltered
		.map((user) => {
			return renderUserFilter(user);
	})
	// Renderização dos usuários
	const filtering = (
		`
			<ul class="collection with-header">
				<li class="collection-header">
					<h4 class="center">${nameFilter.length} Usuário(s) filtrado(s)</h4>
				</li>
				${nameFilter}
		</ul> 
	`);
	// Retorno dos usuários filtrados
	return globalFilteredUsers.innerHTML = filtering;
}

// Função auxiliar de `returnStatisticsUsers()` que faz as estastísticas os usuários
function renderUserStatistics(female, male, ageSum, averageAges) {

	return `
		<li class="collection-item">
			<div>Sexo masculino: ${male.length}
				<span class="secondary-content"><i class="material-icons">wc</i></span>
			</div>
		</li>
		<li class="collection-item">
			<div>Sexo feminino: ${female.length}
				<span class="secondary-content"><i class="material-icons">wc</i></span>
			</div>
		</li>
		<li class="collection-item">
			<div>Soma das idades: ${ageSum}
				<span class="secondary-content"><i class="material-icons">plus_one</i></span>
			</div>
		</li>
		<li class="collection-item">
			<div>Média das idades: ${averageAges}
				<span class="secondary-content"><i class="material-icons">trending_up</i></span>
			</div>
		</li>
	`
}

// Retorna as lista de Estatísticas do Usuário
function returnStatisticsUsers() {	
	// Extraindo todos os usuários do objeto global
	const { statisticsUsers, filter } = globalState;
	// Fazendo o filtro dos usuários pelo nome
	const userFiltered = statisticsUsers.filter(user => user.name.first === filter || user.name.last === filter);
	// Variáveis auxiliares para as estastísticas
	const female = userFiltered.filter(user => user.gender === "female");
	const male = userFiltered.filter(user => user.gender === "male");
	const ageSum = userFiltered.reduce((accumulator, current) => {
		return accumulator + current.dob.age;
	}, 0);
	const averageAges = Math.floor(ageSum / userFiltered.length);
	let render = ""
	// Verifica se existe algum filtro
	if(userFiltered.length > 0) {
		render = renderUserStatistics(female, male, ageSum, averageAges);
	}

	// Renderização dos usuários
	const statistics = (
		`
		<ul class="collection with-header">
			<li class="collection-header ">
				<h4 class="center">Estatística(s)</h4>
			</li>
			${render}
		</ul> 
	`);
	// Retorno das estastísticas dos usuários
	return globalStatisticsUsers.innerHTML = statistics;
}

// Iniciando o app
start();