import axios from 'axios';

export function postPoke(payload) {
    return async function (dispatch) {
        const pokemonCreated = await axios.post("http://localhost:3001/pokemons", payload)
        return pokemonCreated
    }
}