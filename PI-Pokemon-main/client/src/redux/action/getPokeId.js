import axios from 'axios';

export default function getPokeId(id) {
    return async function (dispatch){
            var result = await axios.get(`http://localhost:3001/pokemons/${id}`); 
            return dispatch({ 
                 type: 'GET_POKE_ID', 
                 payload: result.data
            }) 

    }
}