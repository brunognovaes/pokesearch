const API_URL = 'https://pokeapi.co/api/v2/';

export const fetchApi = async (URL) => {
  const result = await fetch(URL);
  const data = await result.json();
  return data;
};

export const fetchPokemonList = async (page) => {
  const pageLimit = 21;
  const pokemonsPageIndex = (page * pageLimit);
  const NEXT_POKEMON_LIST = API_URL + `pokemon?limit=${pageLimit}&offset=${pokemonsPageIndex}`;
  const response = await fetchApi(NEXT_POKEMON_LIST);
  const list = response.results;
  const pokemonList = await Promise.all(list.map(async (pokemon) => {
      const data = fetchApi(pokemon.url);
      return data;
    }));
  return pokemonList;
};