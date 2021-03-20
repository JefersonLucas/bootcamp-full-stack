"use strict";

// Variáveis de estado global da aplicação
let allUsers = [];
let filteredUsers = [];
const api = "http://localhost:3001/users";

// Variáveis que buscam os elementos HTML
const loader = document.querySelector("#loader");
const usersForm = document.querySelector("#users-form");
const usersSearch = document.querySelector("#users-search");
const submitButton = document.querySelector("#submit-button");
const globalFilteredUsers = document.querySelector("#filtered-users");
const globalStatisticsUsers = document.querySelector("#statistics-users");

// Fazendo uma busca dos usuários na API
async function fetchUsersFromBackend() {
	// Obtendo a API no endereço http://localhost:3001/users
	const response = await fetch(api);
	// Obtendo a API em formato JSON
	const json = await response.json()
	// Fazendo um mapeamento em da API 
	allUsers = json.map(({name, dob, gender, picture}) => {
		// Variáveis auxiliares
		const fullName = `${name.first} ${name.last}`
		const searchName = fullName.toLocaleLowerCase();
		// Retornando os valores
			return {
				name: fullName,
				picture: picture.thumbnail,
				dob: dob.age,
				searchName,
				gender
			};
		});
	filteredUsers = [...allUsers]
}

// A invocação desta função é feita na última linha de código deste arquivo
async function start() {
	// Habilita o input e o botão
	enableControls();
	enableEvents();
	// Chamando a função que faz o fetch da API que contém os usuários
	await fetchUsersFromBackend();
}

// Habilita o input
function enableControls() {
	usersSearch.disabled = false;
	usersSearch.focus();
}

// Função que ativa e desativa a barra de loading
function loading(value) {
	value 
	? loader.classList.add("active-progress")
	: loader.classList.remove("active-progress")
}

// Habilita eventos do input e o do botão do submit
function enableEvents() {
	// Monitora se o input tem algum valor
	usersSearch.addEventListener("keyup", ({currentTarget}) => {
		// Variável que recebe o tamanho do valor do input
		const enabled = currentTarget.value.length >= 1;
		// Se o valor for maior que 1 habilita o botão
		submitButton.disabled = !enabled;
		// Verifica se está habilitado para adicionar efeitos de classes
		if(enabled) {
			loading(true);
			submitButton.classList.remove("disabled");
		} else {
			loading(false);
			submitButton.classList.add("disabled");		
		}
	});
	// Monitora se existe algum evento submit no formulário
	usersForm.addEventListener("submit", event => {
		// Previne o evento padrão do formulário
		event.preventDefault();
		// Passa o valor do input para uma variável
		const filterUsers = usersSearch.value;
		// Passa o valor da variável para a função de filtrar os usuários
		doFilterUsers(filterUsers);
	});
}
// Função para filtrar os usuários
function doFilterUsers(filter) {
	// Transforma o filtro em caracteres minúsculos
	const filterToLowerCase = filter.toLocaleLowerCase();
	// Variável global recebe variável que contém todos os usuários
	filteredUsers = allUsers
	// Filtro nos nomes
	.filter( user => user.searchName.includes(filterToLowerCase))
	// Ordenação alfabética por nome
	.sort((a,b) => a.name.localeCompare(b.name))
	// Renderiza todos os usuários
	renderAllUser();
}

// Função que retorna todos os usuários
function renderAllUser() {
	renderStatisticsUsers();
	renderFilteredUsers();
}

// Retorna as lista de Estatísticas do Usuário
function renderStatisticsUsers() {
	// Verifica se existe valor aceitável nos usuários filtrados
	if (filteredUsers.length === 0) {
		globalStatisticsUsers.innerHTML = (
			`
			<ul class="collection with-header">
				<li class="collection-header">
					<h4 class="center">Nada a ser exibido</h4>
				</li>
				<li class="collection-item">
					${getPreloader()}
				</li>
			</ul>
			`
		)
		// Esse retorno vazio evita o else
		return;
	}	
	// Variáveis auxiliares para as estastísticas
	// Obtento usuários do sexo masculino
	const male = filteredUsers.filter(({gender}) => gender === "male").length;
	// Obtento usuários do sexo feminio
	const female = filteredUsers.filter(({gender}) => gender === "female").length;
	// Obtento a soma das idades
	const ageSum = filteredUsers.reduce((accumulator, {dob}) => accumulator + dob, 0);
	// Obtento a média das idades
	const averageAges = 
	Math.floor(ageSum / filteredUsers.length)
	.toFixed(2)
	.replace(".",",");
	
	// Retorno das estastísticas dos usuários
	globalStatisticsUsers.innerHTML = (
		`
		<ul class="collection with-header">
			<li class="collection-header">
				<h4 class="center">Estatística(s)</h4>
			</li>
			<li class="collection-item">
				<div>Sexo masculino: ${male}
					<span class="secondary-content"><i class="material-icons">wc</i></span>
				</div>
			</li>
			<li class="collection-item">
				<div>Sexo feminino: ${female}
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
		</ul>
	`);
}

// Retorna as listas de Usuários Filtrados
function renderFilteredUsers() {
	// Verifica se existe valor aceitável nos usuários filtrados
	if (filteredUsers.length === 0) {
		globalFilteredUsers.innerHTML = (
			`
			<ul class="collection with-header">
				<li class="collection-header">
					<h4 class="center">Nenhum usuário filtrado</h4>
				</li>
				<li class="collection-item">
					${getPreloader()}
				</li>
			</ul>
			`
		)
		// Esse retorno vazio evita o else
		return;
	}

	// Retorno dos usuários filtrados
	globalFilteredUsers.innerHTML = (
			`
			<ul class="collection with-header">
				<li class="collection-header">
					<h4 class="center">${filteredUsers.length} Usuário(s) filtrado(s)</h4>
				</li>
				${filteredUsers.map(user => {
					return `
					<li class="collection-item avatar">
					<img src="${user.picture}" alt="${user.name}" class="circle">
					<span class="title">
						${user.name}
					</span>
					<p> 
						${user.dob} anos
					</p>
					<span class="secondary-content"><i class="material-icons">person</i></span>
				</li>
					`
				}).join("")}
			</ul>
	`);
}

function getPreloader() {
	return (
		`
		<div class='flex-preloader'>
			<div class="preloader-wrapper small active">
				<div class="spinner-layer">
					<div class="circle-clipper left">
						<div class="circle"></div>
					</div>
					<div class="gap-patch">
						<div class="circle"></div>
					</div>
					<div class="circle-clipper right">
						<div class="circle"></div>
					</div>
				</div>
			</div>
		</div>
		`
	);
}

// Iniciando o app
start();