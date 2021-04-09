import React, { Component } from 'react';
import Title from './components/header/Title';
import Subtitle from './components/form/Subtitle';
import Input01 from './components/form/Input01';
import Input02 from './components/form/Input02';
import Input03 from './components/form/Input03';
import Input04 from './components/form/Input04';
import Input05 from './components/form/Input05';
import Input06 from './components/form/Input06';
import Input07 from './components/form/Input07';

export default class App extends Component {
  // Criação do `constructor()` de Class Component
  constructor() {
    super();
    // Definindo o `state`
    this.state = {
      // Valor `text` recebendo uma `string` vazia
      text: '',
    };
  }
  // Captura o input
  handleChange = (event) => {
    this.setState({
      // Setando em `state.text` o valor capturado do input
      text: event.target.value,
    });
  };
  render() {
    // Desestruturação do `this.state`
    const { text } = this.state;
    return (
      <div className="container grey lighten-5">
        <Title />
        <div className="row">
          <div className="col s12">
            <label htmlFor="input01">Digite um texto qualquer:</label>
            <input
              className="validate"
              id="input01"
              type="text"
              // Evento `onChange` para capturar o input
              onChange={this.handleChange}
            />
          </div>
        </div>
        <Subtitle />
        {/* Passando o valor `text` via `props` para os componentes */}
        <Input01 onValue01={text} />
        <Input02 onValue02={text} />
        <Input03 onValue03={text} />
        <Input04 />
        <Input05 />
        <Input06 />
        <Input07 />
      </div>
    );
  }
}
