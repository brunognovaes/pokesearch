import React from 'react';
import PokemonCard from './PokemonCard';
import './pokemonList.css';

class PokemonList extends React.Component {
  render() {
    const fakePokemon = {
      name: 'bulbasaur',
      sprites: {
        other: {
          'official-artwork': {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
          },
        },
      },
      order: 1,
    };

    const officialArtwork = "official-artwork";
    const {
      sprites: {
        other: {
          [officialArtwork]: {
            front_default
          },
        },
      }, name
    } = fakePokemon;
    return (
      <section className="pokemon-list">
        { Array.from({ length: 9 }).map(() => {
          return <PokemonCard src={ front_default } name={ name } />
        })}
      </section>
    );
  }
};

export default PokemonList;