import React from 'react';
import Header from './components/Header';
import PokemonList from './components/PokemonList';
import { fetchPokemonList } from './services/fetchApi';
import './App.css';

// const pokeList = fetchPokemonList().then((pokemon) => console.log(pokemon[0]));
class App extends React.Component {
  render() {
    return (
      <main className="App">
        <Header />
        <PokemonList />
      </main>
    );
  }
}

export default App;
