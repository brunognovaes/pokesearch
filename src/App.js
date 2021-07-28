import React from 'react';
import { fetchPokemonList } from './services/fetchApi';

class App extends React.Component {
  render() {
    const pokeList = fetchPokemonList(0);
    pokeList.then((poke) => console.log(poke))
    return (
      <div />
    );
  }
}

export default App;
