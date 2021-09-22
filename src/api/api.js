// Pokemon API
// https://pokeapi.co/docs/v2

const API_URL = 'https://pokeapi.co/api/v2/pokemon'

export const fetchPokemonData = name => {
  return fetch(`${API_URL}/${name}`, { method: 'GET' })
    .then(res => res.json())
    .then(res => res)
}
