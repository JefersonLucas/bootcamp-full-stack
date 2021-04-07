import React, { Component } from 'react';

export default class Input06 extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s12">
          <span>Somente consoantes:</span>
        </div>
        <div className="input-field col s11">
          <input type="text" disabled id="disabled06" />
        </div>
        <div className="input-field col s1">
          <i className="material-icons prefix">content_copy</i>
        </div>
      </div>
    );
  }
}
