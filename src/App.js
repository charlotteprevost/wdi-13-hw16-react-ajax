import React, { Component } from 'react';
import './App.css';
import Login from './Login'
import PokeList from './Pokemon'

class App extends Component {

  constructor(){
    super();
    this.state = {
      logged: false,
      username: '',
      pokemon: []
    }
  }

  handleLogin = (username, isLoggedIn) => {
      console.log(`username: `, username);
      console.log(`isLoggedIn: `, isLoggedIn);

      this.setState({
        username: username,
        logged: isLoggedIn
      });
      console.log(`this.state.pokemon: `, this.state.pokemon);
  }

  getPokemon = async (index) => {
    try {
      const pokemon = await fetch('https://pokeapi.co/api/v2/pokemon/'+index+'/');
      const pokemonJson = await pokemon.json();
      return pokemonJson;

    } catch(err){
      console.log(`Error in getPokemon catch(err){}\n`, err);
      return err;
    }
  }

  componentDidMount(){
    let pokeArray = [];

    console.log(`Original 151: `, pokeArray);

    for (let index = 1; index < 152; index++){
      this.getPokemon(index).then( async (data) => {
      
        try {
          await this.state.pokemon.push(data);
          this.setState({
            logged: this.state.logged,
            username: this.state.username,
            pokemon: this.state.pokemon
          });
        } catch(err){
        console.log(`Error in componentDidMount .catch(err){}\n`, err);
        }
      })
    }
  }

  render(){
    return (
      <div className="App">
        <img alt="Pokémon" width="500px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2000px-International_Pok%C3%A9mon_logo.svg.png"/>
        {this.state.logged ? <div><h1>PokeList</h1><ul><PokeList allPokemon={this.state.pokemon}/></ul></div> : <Login handleLogin={this.handleLogin} />}
      </div>
    );
  }
}

export default App;
