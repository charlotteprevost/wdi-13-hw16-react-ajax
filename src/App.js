import React, { Component } from 'react';
import './App.css';
import Login from './Login'

class App extends Component {

  constructor(){
    super();
    this.state = {
      logged: false,
      username: ''
    }
  }

  render() {
    return (
      <div className="App">
        <img alt="Pokémon" width="500px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2000px-International_Pok%C3%A9mon_logo.svg.png"/>
        <Login />
      </div>
    );
  }
}

export default App;
