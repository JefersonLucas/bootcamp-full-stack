import React, { Component } from 'react';

export default class Input04 extends Component {
  /** Atividade 04:
   * recebe o um `text` como parâmetro e retorna um texto no formato Slug, com as seguintes regras:
    - a. Texto em minúsculas.
    - b. Texto com remoção de acentos (opcional).
    - c. Cada palavra deve ser separada por hífen.
   */
  Activity04(text) {
    return text
      .toLowerCase() // Tranforma o texto em minúsculas
      .split(' ') // Envolve em aspas duplas.
      .join('-'); // Separa por hífen.
  }
  render() {
    return (
      <div className="row">
        <div className="col s12">
          <span>Slug:</span>
        </div>
        <div className="input-field col s11">
          <input
            className="validate"
            disabled
            type="text"
            id="input04"
            // Aqui o `value` do `input` está recebendo um método, passando uma `props` como parâmetro.
            value={this.Activity04(this.props.onValue04)}
          />
        </div>
        <div className="input-field col s1">
          <i className="material-icons prefix">content_copy</i>
        </div>
      </div>
    );
  }
}
