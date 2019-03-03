/* eslint react/no-did-mount-set-state: 0 */
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import movieList from './moviesList';

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Switch>
        <Route path="/test" component={Test} />
        {this.state.movies.map(movie => <Movie key={movie.id} movie={movie} />)}
      </Switch>
    </div>
  </Router>
);
export default App;

const Test = () => (
  <h1>TEST</h1>
);
