import React, { Component } from 'react';
import Form from './components/form/Form';
import Header from './components/header/Header';

export default class App extends Component {
  render() {
    return (
      <div className="container grey lighten-5">
        <Header />
        <Form />
      </div>
    );
  }
}
