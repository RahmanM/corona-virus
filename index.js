import React, { Component } from 'react';
import { render } from 'react-dom';
import Countries from './countries';
import './style.css';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Countries />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
