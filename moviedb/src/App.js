// Bring in React, then in brackets you bring in component
import React, { Component } from 'react';
// Next were importing logo... import logo from... the svg. 
import logo from './logo.svg';
// importing the logo 
import './App.css';

const welcome = "Welcome to React";
// Defining a class named app... it will extend component
class App extends Component {
  //Render method required for every component. Simply just whats output. 

  constructor(props){
    super(props);
    console.log('constructor')
  }
  componentWillMount(){
    console.log('will Mount')
  }
  
  state = {
    toggle: true
  }
  toggle = () =>{
    //is A method on a react component that updates state.
    this.setState({
      //this changes the state of toggle to the opposite state of the set toggle
      toggle: !this.state.toggle
    })
  }
  
  render() {
    return (
      //This is our actual JSX CODE classname instead of class because Class is reserved in js.
      <div className="App">
        <header className="App-header">
        {/* you can use this js variables */}
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {welcome}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {this.state.toggle && 
          <p>This should show and hide</p>
          }
          <button onClick={this.toggle}>This Should show/hide</button>
        </header>
      </div>
    );
  }
}

class Welcome extends Component{
  render(){
    const {text, toggle} = this.props;
    console.log(toggle);
    return(
      <h1 className = "app title">{text}</h1>
    )
  }
}

export default App;
