import React from 'react';
import PokemonCard from './PokemonCard';
import { fetchPokemonList } from '../services/fetchApi';
import './pokemonList.css';

class PokemonList extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemonList: [],
    };

    this.setPokemonList = this.setPokemonList.bind(this);
  }

  async componentDidMount() {
    const data = await fetchPokemonList();
    this.setPokemonList(data);
  }

  setPokemonList(pokemonList) {
    this.setState({ pokemonList });
  }

  render() {
    const { pokemonList } = this.state;
    return (
      <section className="pokemon-list">
        { pokemonList.map((pokemon) => {
          return <PokemonCard key={ pokemon.id } pokemon={ pokemon } />
        })}
      </section>
    );
  }
};

export default PokemonList;
