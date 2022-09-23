import axios from 'axios';

export  function getPokes() {
        return async (dispatch) => {
      const result = await axios.get(`http://localhost:3001/pokemons`)
      
return dispatch({ type: 'GET_POKES', payload: result.data })  
         
    }
  } 