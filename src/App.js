import React, { Component } from 'react';
import CanvasContainer from './CanvasContainer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Area similarity
        </header>
        <section>
          <CanvasContainer />
        </section>
      </div>
    );
  }
}

export default App;
