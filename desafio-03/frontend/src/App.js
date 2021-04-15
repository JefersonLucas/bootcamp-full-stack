import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      allTodos: [],
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
    const allTodos = json
      .map((todo) => {
        return {
          id: todo.id,
          description: todo.description,
          day: todo.day,
          month: todo.month,
          year: todo.year,
          period: todo.period,
          done: todo.done,
        };
      })
      .filter((todo) => todo.year === 2019 && todo.month === 1);
    // Setando o valor de allTodos
    this.setState({
      allTodos: allTodos,
    });
  }
  render() {
    const { allTodos } = this.state;

    return (
      <div className="container grey lighten-5">
        {/* Title */}
        <h1 className="center">React TODO</h1>

        {/* Labels */}
        <div className="row">
          <div className="col s12">
            <label>Selecione o ano</label>
            <select className="browser-default">
              <option value="" disabled defaultValue selected>
                Selecione o ano
              </option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <label>Selecione o mês</label>
            <select className="browser-default">
              <option value="" disabled selected>
                Selecione o mês
              </option>
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
              <a className="collection-item black-text">
                Tarefas
                <span className="badge white-text blue">
                  &nbsp;{allTodos.length}&nbsp;
                </span>{' '}
              </a>
              <a className="collection-item black-text">
                Cumpridas
                <span className="badge white-text green">
                  &nbsp;
                  {allTodos.filter((todo) => todo.done === true).length}
                  &nbsp;
                </span>{' '}
              </a>
              <a className="collection-item black-text">
                Não cumpridas
                <span className="badge white-text red">
                  &nbsp;
                  {allTodos.filter((todo) => todo.done === false).length}
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
              {allTodos.map((todo) => {
                return (
                  <li
                    key={todo.id}
                    className={
                      (todo.done === true &&
                        'collection-item black-text green lighten-5') ||
                      'collection-item black-text red lighten-4'
                    }
                  >
                    <span className="black-text badge">
                      {`${todo.day}/${todo.month}/${todo.year}`}
                    </span>
                    {todo.description}
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
