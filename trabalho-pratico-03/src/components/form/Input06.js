import React, { Component } from 'react';
import { isConsonant } from '../helpers/Helpers';

export default class Input06 extends Component {
  /** Atividade 06:
   * recebe o um `text` como parâmetro e retorna um texto com somente cosoantes, preservando os espaços em branco.
   */
  Activity06(text) {
    return text
      .split('') // Transforma o texto em Array.
      .filter((char) => char === ' ' || isConsonant(char)) // Verifica cada palavra e verifica se há alguma cosoante.
      .join(''); // Separa por hífen.
  }
  render() {
    return (
      <div className="row">
        <div className="col s12">
          <span>Somente consoantes:</span>
        </div>
        <div className="input-field col s11">
          <input
            className="validate"
            disabled
            type="text"
            id="input05"
            // Aqui o `value` do `input` está recebendo um método, passando uma `props` como parâmetro.
            value={this.Activity06(this.props.onValue06)}
          />
        </div>
        <div className="input-field col s1">
          <i className="material-icons prefix">content_copy</i>
        </div>
      </div>
    );
  }
}
