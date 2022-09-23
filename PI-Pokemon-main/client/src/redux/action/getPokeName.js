import axios from 'axios';

export default function getPokeName(name) {
    return async function (dispatch){
            var result = await axios.get(`http://localhost:3001/pokemons?name=${name}`); 
            return dispatch({ 
                type: 'GET_POKE_NAME', 
                 payload: result.data
            })                                                                                
    }
}