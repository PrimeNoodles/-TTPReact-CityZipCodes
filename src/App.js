import React, { Component } from 'react';
import './App.css';
import ZipCodes from './ZipCodes.js';

class App extends Component {
  render() {
    return (
      <div>
        <div className ="container-fluid bg-dark p-4">
      </div>
           <div className ="container">
           <ZipCodes />
      </div>  
      </div>  
    );
  }
}

export default App;
