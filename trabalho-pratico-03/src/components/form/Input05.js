import React, { Component } from 'react';
import { isVowel } from '../helpers/Helpers';

export default class Input05 extends Component {
  /** Atividade 05:
   * recebe o um `text` como parâmetro e retorna um texto com somente vogais, preservando os espaços em branco.
   */
  Activity05(text) {
    return text
      .split('') // Transforma o texto em Array.
      .filter((char) => char === ' ' || isVowel(char)) // Verifica cada palavra e verifica se há alguma vogal.
      .join(''); // Transforma o texto em string.
  }
  render() {
    return (
      <div className="row">
        <div className="col s12">
          <span>Somente vogais:</span>
        </div>
        <div className="input-field col s11">
          <input
            className="validate"
            disabled
            type="text"
            id="input05"
            // Aqui o `value` do `input` está recebendo um método, passando uma `props` como parâmetro.
            value={this.Activity05(this.props.onValue05)}
          />
        </div>
        <div className="input-field col s1">
          <i className="material-icons prefix">content_copy</i>
        </div>
      </div>
    );
  }
}
