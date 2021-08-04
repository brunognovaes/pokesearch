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
      pokemonList: [],
      loading: true,
    }
    this.handleChange = this.handleChange.bind(this);
    this.renderList = this.renderList.bind(this);
    this.handlePage = this.handlePage.bind(this);
    this.fetchApi = this.fetchApi.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
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

  renderList() {
    const { state: { input, select, pokemonList } } = this;

    return (
      <main className="App">
        <PokemonList pokemonList={ pokemonList } filters={{ search: input, category: select }}/>
      </main> 
    );
  }
  render() {
    const {
      renderLoading,
      renderList,
      handleChange,
      handleSearch,
      handlePage,
    } = this;

    const { loading, input } = this.state;
    
    return (
      <main className="App">
        <Header handleSearch={ handleSearch } handleInput={ handleChange } inputValue={ input } />
        {
          loading 
          ? renderLoading()
          : renderList()
        }
        <Footer handlePage={ handlePage } />
      </main>
    );
  }
}

export default App;
