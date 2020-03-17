import React, { Component } from 'react';
import ResultComponent from './component/ResultComponent';
import KeypadComponent from './component/Keypad';
import './App.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      result:""
    }
  }

  render() {
    return (
        <div className="app">
                <div className="calculator-body">
                    <ResultComponent result={this.state.result}/>
                    <KeypadComponent onClick={this.onClick}/>
                </div>
            </div>
    
    )
  }
}

