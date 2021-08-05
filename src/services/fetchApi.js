const API_URL = 'https://pokeapi.co/api/v2/';

export const fetchApi = async (URL) => {
  const result = await fetch(URL);
  const data = await result.json();
  return data;
};

export const fetchPokemonList = async (offset = 0) => {
  const limit = (offset >= 7 ? 11 : 20);
  const NEXT_POKEMON_LIST = API_URL + `pokemon?limit=${limit}&offset=${offset * 20}`;
  const response = await fetchApi(NEXT_POKEMON_LIST);
  const list = response.results;
  const pokemonList = await Promise.all(list.map(async (pokemon) => {
      const data = fetchApi(pokemon.url);
      return data;
    }));
  return pokemonList;
};

export const fetchPokemonName = async (name) => {
  console.log(name)
  const SEARCH_POKEMON = API_URL + `pokemon/${name}`;
  const response = await fetchApi(SEARCH_POKEMON);
  return [response];
};