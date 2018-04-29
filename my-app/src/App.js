import React, { Component } from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
            <header className="App-header">
            <h1 className="App-title"></h1>
        </header>
        <p className="App-intro">
           <code>src/App.js</code> and save to reload.
        </p>
        <p className="Card">
        <Link to="/Blog/1">Ako pomaly zošalieť?</Link>
          </p>
          </div>
    );
    }
}

export default App;
