import React, { Component } from 'react';
import { List, Segment } from 'semantic-ui-react';

class PokeList extends Component {

	compare(a, b) {
	  if (a.id < b.id)
	    return -1;
	  if (a.id > b.id)
	    return 1;
	  return 0;
	}
	// const pokeAbilities = pokemon.map((ability, j) => {

	// })
	render(){

		let sortedPokemon = this.props.allPokemon.sort(this.compare);
		console.log(`sortedPokemon sorted list: `, sortedPokemon);
		const pokeList = sortedPokemon.map((pokemon, i) => {
			return(
				<Segment key={i}>
					<List.Item >
						<img alt={pokemon.name} src={pokemon.sprites.front_default}/><br/>
						#{pokemon.id}: {pokemon.name}<br/>
						Abilities:<br/>
					</List.Item>
				</Segment>
			)	
		})
		return(
			<div>
				<ul>Pokémon List:
					{pokeList}
				</ul>
			</div>
		)

	}
};

export default PokeList;