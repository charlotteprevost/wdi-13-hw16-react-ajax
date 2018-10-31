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

		// console.log(`sortedPokemon sorted list: `, sortedPokemon);
		// let pokeAbilities = [];

		// for (let i = 0; i < sortedPokemon.length; i++){
		// 	for (let j = 0; j < sortedPokemon[i].abilities.length; j++){
		// 		pokeAbilities.push(sortedPokemon[i].abilities);
		// 	}
		// }
		// let tempArray = [];

		// 	{pokemon.abilities.forEach(ability => {
		// 		return (<p>{pokemon.abilities[0].name}<br/></p>)
		// 	})}

		const pokeList = sortedPokemon.map((pokemon, i) => {
			return(
				<Segment key={i}>
					<List.Item >
						<img alt={pokemon.name} src={pokemon.sprites.front_default}/><br/>
						#{pokemon.id}: {pokemon.name}<br/>
						Base Exp: {pokemon.base_experience}<br/>
					</List.Item>
				</Segment>
			)
		})


		// const pokeList = sortedPokemon.map((pokemon, i) => {
		// 	return(
		// 		<Segment key={i}>
		// 			<List.Item >
		// 				<img alt={pokemon.name} src={pokemon.sprites.front_default}/><br/>
		// 				#{pokemon.id}: {pokemon.name}<br/>
		// 				Abilities: {pokemon.abilities[0].name}<br/>
		// 			</List.Item>
		// 		</Segment>
		// 	)	
		// })

		return(
			<div>
				<ul>
					{pokeList}
				</ul>
			</div>
		)

	}
};

export default PokeList;