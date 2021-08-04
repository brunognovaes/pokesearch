import React from 'react';
import Header from './components/Header';
import PokemonList from './components/PokemonList';
import Footer from './components/Footer';
import { fetchPokemonList, fetchPokemonName } from './services/fetchApi';
import './App.css';
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      input: '',
      select: 'All',
      pokemonList: [],
      loading: true,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.renderSite = this.renderSite.bind(this);
    this.handlePage = this.handlePage.bind(this);
    this.fetchApi = this.fetchApi.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleSelect(value) {
    this.setState({ select: value });
  }

  handlePage(page) {
    this.fetchApi(fetchPokemonList, page);
  }

  handleSearch() {
    const { input } = this.state;
    this.setState({ input: '' });
    this.fetchApi(fetchPokemonName, input);
  }

  fetchApi(callback, page) {
    this.setState({ loading: true }, async () => {
      try {
        const data = await callback(page);
        this.setState({ pokemonList: data, loading: false });
      } catch(error) {
        console.log(error);
      }
    });
  }

  async componentDidMount() {
    this.fetchApi(fetchPokemonList, 0);
  }

  renderLoading() {
    return (
      <div>Loading...</div>
    );
  }

  renderSite() {
    const { handleChange, handleSearch, handleSelect, handlePage, state: { input, select, pokemonList } } = this;

    return (
      <main className="App">
        <Header handleSearch={ handleSearch } handleInput={ handleChange } handleSelect={ handleSelect } inputValue={ input } selectValue={ select } />
        <PokemonList pokemonList={ pokemonList } filters={{ search: input, category: select }}/>
        <Footer handlePage={ handlePage } />
      </main> 
    );
  }
  render() {
    const { renderLoading, renderSite } = this;
    const { loading } = this.state;

    return (
      loading 
      ? renderLoading()
      : renderSite()
     );
  }
}

export default App;
