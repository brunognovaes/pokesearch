import React from 'react';
import Header from './components/Header';
import { fetchPokemonList } from './services/fetchApi';

class App extends React.Component {
  render() {
    // const pokeList = fetchPokemonList();
    return (
      <main>
        <Header />
      </main>
    );
  }
}

export default App;
