// Bring in React, then in brackets you bring in component
import React, { Component } from 'react';
// Next were importing logo... import logo from... the svg. 
import logo from './logo.svg';
// importing the logo 
import './App.css';

const movies = [
  {
    id: 1,
    title: "Star Wars"
  },
  {
    id: 2,
    title: "Mean Girls"
  },
  {
    id: 3,
    title: "Jennifers Body"
  }
];






// Defining a class named app... it will extend component
class App extends Component {
  //Render method required for every component. Simply just whats output.
  render() {
    return (
      //This is our actual JSX CODE classname instead of class because Class is reserved in js.
      <div className="App">
        <header className="App-header">
          {/* you can use this js variables */}
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {movies.map(movies=>(
            <div key={movies.id}>
            {movies.title}

          </div>
          )
        )}
      </div>
    );
  }
}




export default App;
