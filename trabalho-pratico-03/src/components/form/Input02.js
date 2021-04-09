import React, { Component } from 'react';

export default class Input02 extends Component {
  /** Atividade 02:
   * recebe o um `text` como parâmetro e retorna um texto numérico, com as seguintes regras:
    - a. Texto convertido para maiúsculas.
    - b. Texto com remoção de acentos (opcional).
    - c. Troca de O por 0 (zero).
    - d. Troca de L por 1.
    - e. Troca de E por 3.
    - f. Troca de A por 4.
    - g. Troca de S por 5.
    - h. Troca de T por 7.
   */
  Activity02(text) {
    return text
      .toUpperCase() // Texto convertido para maiúsculas.
      .split('') // Tranforma o texto em Array.
      .map((char) => {
        if (char === 'O') return '0'; // Troca de O por 0 (zero).
        if (char === 'L') return '1'; // Troca de L por 1.
        if (char === 'E') return '3'; // Troca de E por 3.
        if (char === 'A') return '4'; // Troca de A por 4.
        if (char === 'S') return '5'; // Troca de S por 5.
        if (char === 'T') return '7'; // Troca de T por 7.
        return char;
      })
      .join(''); // Tranforma o texto em string.
  }

  render() {
    return (
      <div className="row">
        <div className="col s12">
          <span>Texto numérico:</span>
        </div>
        <div className="input-field col s11">
          <input
            className="validate"
            disabled
            type="text"
            id="input02"
            // Aqui o `value` do `input` está recebendo um método, passando uma `props` como parâmetro.
            value={this.Activity02(this.props.onValue02)}
          />
        </div>
        <div className="input-field col s1">
          <i className="material-icons prefix">content_copy</i>
        </div>
      </div>
    );
  }
}
