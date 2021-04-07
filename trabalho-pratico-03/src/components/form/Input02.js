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
    // Faz uma verificação pelo tamanho do texto
    for (let i = 0; i <= text.length; i++) {
      return text
        .toUpperCase() // Texto convertido para maiúsculas.
        .normalize('NFD')
        .replace(/[^a-zA-Zs]/g, '') // Texto com remoção de acentos (opcional).
        .replace('O', '0') // Troca de O por 0 (zero).
        .replace('L', '1') // Troca de L por 1.
        .replace('E', '3') // Troca de E por 3.
        .replace('A', '4') // Troca de A por 4.
        .replace('S', '5') // Troca de S por 5.
        .replace('T', '7'); // Troca de T por 7.
    }
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
