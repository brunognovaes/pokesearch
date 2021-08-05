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
      page: 0,
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
    this.setState({ page });
  }

  handleSearch() {
    const { input } = this.state;
    if (input !== '') {
      this.fetchApi(fetchPokemonName, input);
      this.setState({ input: '' });
    };
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
    const { state: { input, select, pokemonList, page }, handlePage } = this;

    return (
      <main className="App">
        <PokemonList pokemonList={ pokemonList } filters={{ search: input, category: select }}/>
        <Footer handlePage={ handlePage } currentPage={ page } />
      </main> 
    );
  }
  render() {
    const {
      renderLoading,
      renderList,
      handleChange,
      handleSearch,
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
      </main>
    );
  }
}

export default App;
