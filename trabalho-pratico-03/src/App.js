import React, { Component } from 'react';
import Header from './components/header/Header';
import Title from './components/header/Title';

export default class App extends Component {
  render() {
    return (
      <div className="container grey lighten-5">
        <Title />
        <Header />
      </div>
    );
  }
}
