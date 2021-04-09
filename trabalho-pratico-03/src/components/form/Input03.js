import React, { Component } from 'react';

export default class Input03 extends Component {
  /** Atividade 03:
   * recebe o um `text` como parâmetro e retorna um texto no formato CSV, com as seguintes regras:
    - a. Cada palavra deve ser envolvida por aspas duplas.
    - b. As palavras devem ser separadas por ponto-e-vírgula.
   */
  Activity03(text) {
    if (text.trim() === '') return ''; // Remove as aspas caso não haja um valor de texto
    return text
      .split(' ') // Tranforma o texto em Array e põe espaço
      .map((char) => `"${char}"`) // Envolve em aspas duplas.
      .join(';'); // Separa por ponto-e-vírgula.
  }

  render() {
    return (
      <div className="row">
        <div className="col s12">
          <span>CSV:</span>
        </div>
        <div className="input-field col s11">
          <input
            className="validate"
            disabled
            type="text"
            id="input03"
            // Aqui o `value` do `input` está recebendo um método, passando uma `props` como parâmetro.
            value={this.Activity03(this.props.onValue03)}
          />
        </div>
        <div className="input-field col s1">
          <i className="material-icons prefix">content_copy</i>
        </div>
      </div>
    );
  }
}
