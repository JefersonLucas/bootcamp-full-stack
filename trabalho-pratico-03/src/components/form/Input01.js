import React, { Component } from 'react';

export default class Input01 extends Component {
  /** Atividade 01:
   * recebe o um `text` como parâmetro e retorna o texto invertido.
   */
  Activity01(text) {
    let newText = text.split('');
    return newText.reverse().join('');
  }

  render() {
    return (
      <div className="row">
        <div className="col s12">
          <span>Texto invertido:</span>
        </div>
        <div className="input-field col s11">
          <input
            className="validate"
            disabled
            type="text"
            id="input01"
            // Aqui o `value` do `input` está recebendo um método, passando uma `props` como parâmetro.
            value={this.Activity01(this.props.onValue01)}
          />
        </div>
        <div className="input-field col s1">
          <i className="material-icons prefix">content_copy</i>
        </div>
      </div>
    );
  }
}
