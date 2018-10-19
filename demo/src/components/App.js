import React, { Component } from 'react';
import AnnotatedEtextContainer from '../lib/AnnotatedEtextContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AnnotatedEtextContainer chunks={[{"value":"༄༅། །འདུལ་བ་ཀ་བཞུགས་སོ། །"}]} />
      </div>
    );
  }
}

export default App;
