import React from 'react';
import Header from './components/Header';
import PokemonList from './components/PokemonList';
import Footer from './components/Footer';
import './App.css';
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      input: '',
      select: 'All',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleSelect(value) {
    this.setState({ select: value });
  }

  render() {
    const { handleChange, handleSelect, state: { input, select } } = this;

    return (
      <main className="App">
        <Header handleInput={ handleChange } handleSelect={ handleSelect } inputValue={ input } selectValue={ select } />
        <PokemonList filters={{ search: input, category: select }}/>
        <Footer />
      </main>
    );
  }
}

export default App;
