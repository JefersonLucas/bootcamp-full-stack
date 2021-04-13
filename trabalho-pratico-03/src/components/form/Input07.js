import React, { Component } from 'react';

export default class Input07 extends Component {
  /** Atividade 07:
   * recebe o um `text` como parâmetro e retorna um texto com formato de variável camelCase, com as seguintes regras.
    - a. Texto com remoção de acentos (opcional).
    - b. Primeira palavra totalmente em minúsculas.
    - c. Demais palavras em minúsculas com o primeiro caractere maiúsculo.
   */
  Activity07(text) {
    return text
      .split(' ')
      .map((word, index) => {
        return index === 0
          ? word.toLowerCase()
          : word
              .toLowerCase()
              .split('')
              .map((char, index) => {
                return index === 0 ? char.toUpperCase() : char;
              })
              .join('');
      })
      .join('');
  }
  render() {
    return (
      <div className="row">
        <div className="col s12">
          <span>Variável:</span>
        </div>
        <div className="input-field col s11">
          <input
            className="validate"
            disabled
            type="text"
            id="input07"
            // Aqui o `value` do `input` está recebendo um método, passando uma `props` como parâmetro.
            value={this.Activity07(this.props.onValue07)}
          />
        </div>
        <div className="input-field col s1">
          <i className="material-icons prefix">content_copy</i>
        </div>
      </div>
    );
  }
}
