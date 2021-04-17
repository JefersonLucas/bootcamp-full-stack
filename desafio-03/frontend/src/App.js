import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      allTodos: [],
      todoYear: 2019,
      todoMonth: 1,
    };
  }

  async componentDidMount() {
    const res = await fetch('http://localhost:3001/todos');
    const json = await res.json();
    /** Constante `allTodos`:
     * 1. recebe a API levantada no backend.
     * 2. Faz um mapeamento dos seus elementos.
     * 3. Faz uma filtragem de ano e mês.
     */
    const allTodos = json.map(({ id, description, day, month, year, done }) => {
      return {
        id,
        description,
        day,
        month,
        year,
        done,
      };
    });
    // Setando o valor de allTodos
    this.setState({
      allTodos: allTodos,
    });
  }
  handleMonth = (event) => {
    const { allTodos, todoYear } = this.state;
    const newMonth = parseInt(event.target.value);
    const newAllTodos = allTodos.filter(({ month }) => month === newMonth);
    this.setState({
      allTodos: newAllTodos,
      todoMonth: newMonth,
      todoYear,
    });
  };

  handleYear = (event) => {
    const { allTodos, todoMonth } = this.state;
    const newYear = parseInt(event.target.value);
    const newAllTodos = allTodos.filter(({ year }) => year === newYear);
    this.setState({
      allTodos: newAllTodos,
      todoMonth,
      todoYear: newYear,
    });
  };
  render() {
    const { allTodos } = this.state;

    return (
      <div className="container grey lighten-5">
        {/* Title */}
        <h1 className="center">React TODO</h1>

        {/* Selects */}
        <div className="row">
          <div className="col s12">
            <label>Selecione o ano</label>
            <select className="browser-default" onChange={this.handleYear}>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <label>Selecione o mês</label>
            <select className="browser-default" onChange={this.handleMonth}>
              <option value="1">Janeiro</option>
              <option value="2">Fevereiro</option>
              <option value="3">Março</option>
              <option value="4">Abril</option>
              <option value="5">Maio</option>
              <option value="6">Junho</option>
              <option value="7">Julho</option>
              <option value="8">Agosto</option>
              <option value="9">Setembro</option>
              <option value="10">Outubro</option>
              <option value="11">Novembro</option>
              <option value="12">Dezembro</option>
            </select>
          </div>
        </div>

        {/* Statistics */}
        <div className="row">
          <div className="col s12">
            <div className="collection">
              <a href="!#" className="collection-item black-text">
                Tarefas
                <span className="badge white-text blue">
                  &nbsp;{allTodos.length}&nbsp;
                </span>{' '}
              </a>
              <a href="!#" className="collection-item black-text">
                Cumpridas
                <span className="badge white-text green">
                  &nbsp;
                  {allTodos.filter(({ done }) => done === true).length}
                  &nbsp;
                </span>{' '}
              </a>
              <a href="!#" className="collection-item black-text">
                Não cumpridas
                <span className="badge white-text red">
                  &nbsp;
                  {allTodos.filter(({ done }) => done === false).length}
                  &nbsp;
                </span>{' '}
              </a>
            </div>
          </div>
        </div>

        {/* TODO's list */}
        <div className="row">
          <div className="col s12">
            <ul className="collection with-header">
              <li className="collection-header center">
                <h4>Lista de TODO's</h4>
              </li>

              {allTodos.map(({ day, month, year, description, id, done }) => {
                return (
                  <li
                    key={id}
                    className={
                      (done === true &&
                        'collection-item black-text green lighten-5') ||
                      'collection-item black-text red lighten-4'
                    }
                  >
                    <span className="black-text badge">
                      {`${day}/${month}/${year}`}
                    </span>
                    {description}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
