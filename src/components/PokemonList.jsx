import React from 'react';
import PokemonCard from './PokemonCard';
import PropTypes from 'prop-types';
import './pokemonList.css';

class PokemonList extends React.Component {
  render() {
    const { pokemonList } = this.props;
    return (
      <section className="pokemon-list">
        { pokemonList.map((pokemon) => {
          return <PokemonCard key={ pokemon.id } pokemon={ pokemon } />
        })}
      </section>
    );
  }
};

PokemonList.propTypes = {
  pokemon: PropTypes.shape({
    abilities: PropTypes.arrayOf(PropTypes.object),
    base_experience: PropTypes.number,
    forms: PropTypes.arrayOf(PropTypes.object),
    game_indices: PropTypes.arrayOf(PropTypes.object),
    height: PropTypes.number,
    held_items: PropTypes.arrayOf(PropTypes.any),
    id: PropTypes.number,
    is_default: PropTypes.bool,
    location_area_encounters: PropTypes.string,
    moves: PropTypes.arrayOf(PropTypes.object),
    name: PropTypes.string,
    order: PropTypes.number,
    past_types: PropTypes.arrayOf(PropTypes.any),
    species: PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string,
    }),
    sprites: PropTypes.objectOf(PropTypes.any),
    stats: PropTypes.arrayOf(PropTypes.object),
    types: PropTypes.arrayOf(PropTypes.object),
    weight: PropTypes.number,
  }),
}

export default PokemonList;
